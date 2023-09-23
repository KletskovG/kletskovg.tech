import { Price } from "db/models/price";
import { log } from "logger/logger";
import { HIKE_TIME_FRAME } from "const/kraken/core";
// import { monitorOrders } from "kraken/core/orders/monitorOrders";
import { ceilNumber } from "utils/ceilNumber";
import { getSecondsTimestamp } from "utils/getSecondsTimestamp";
import { getPairInfo } from "kraken/marketapi/getPairInfo";
import { TickerResult } from "types/kraken/IKrakenResponse";
import { buildAppUrl } from "lib/kraken/buildAppUrl";


export async function scanHikeTickers() {
  log("Info", "Scan hike tickers");

  const allAvailableTickers = await getPairInfo("");

  if (!allAvailableTickers) {
    log("Important", "No tickers available to scan");
  }

  const tickers = Object.entries(allAvailableTickers);
  tickers.forEach(async ([ticker, value]) => {
    await checkMaxDiff(ticker, value);
    return 1;
  });
  log("Notify", `Ticker scan completed | ${tickers.length}`);
  // monitorOrders();
}

async function checkMaxDiff(tickerName: string, lastState: TickerResult) {
  const isFiatPair = tickerName.toUpperCase().endsWith("EUR") ||
    tickerName.toUpperCase().endsWith("USD");

  if (!isFiatPair) {
    return;
  }

  const ticker = await Price.findOne({ ticker: tickerName });

  if (ticker.prices?.length < HIKE_TIME_FRAME) {
    return;
  }

  const freshChartData = [
    ...ticker.prices.slice(-HIKE_TIME_FRAME),
    { ...lastState, timestamp: getSecondsTimestamp() }
  ];
  const initialPrice = freshChartData[0].price;
  log("Info", `TICKER: ${JSON.stringify({ ticker: ticker.ticker, start: initialPrice })}`);
  let maxPrice = {
    price: 0,
    timestamp: 0,
  };
  let maxPriceIndex = -1;

  for (let i = 0; i < freshChartData.length; i++) {
    if (freshChartData[i].price > maxPrice.price) {
      maxPrice = freshChartData[i];
      maxPriceIndex = i;
    }
  }
  const isHikePerformingNow = maxPriceIndex > 6;
  const priceDiff = ceilNumber(maxPrice.price / initialPrice, 2);
  log("Info", `MAX PRICE: ${tickerName} ${JSON.stringify(maxPrice)} DIFF: ${priceDiff}`);

  if (isHikePerformingNow && priceDiff > 1.09) {
    const maxPriceTime = HIKE_TIME_FRAME - maxPriceIndex;

    log("Important",
      `HIKE: ${ticker.ticker} +${priceDiff}% ` +
      `PICK: ${maxPriceTime * 15}m ago ` +
      `${buildAppUrl(ticker.ticker)}`
    );
    return;
  }
}

