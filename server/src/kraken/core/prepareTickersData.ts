import { Price } from "db/models/price";
import { getSecondsTimestamp } from "utils/getSecondsTimestamp";
import { log } from "logger/logger";
import { getPairInfo } from "kraken/marketapi/getPairInfo";
import { scanHikeTickers } from "kraken/core/scanHikeTickers";
import { getIPOConfig } from "kraken/core/getIPOConfig";
import { IPriceModel } from "types/kraken/IPriceModel";
import type { Document } from "mongoose";
import { buildAppUrl } from "lib/kraken/buildAppUrl";
import type { IIPOTickerModel } from "types/shared/IPOTickerModel";

let isScanRequired = true;

export async function prepareTickersData(executeScan: boolean) {
  if (executeScan && isScanRequired) {
    scanHikeTickers();
    return;
  }

  collectTickersInfo();
}

async function collectTickersInfo() {
  const timestamp = getSecondsTimestamp();

  log("Info", "PREPARE TICKER INFO");
  // TODO: Use promise all here
  const marketTickers = await getPairInfo("");

  const ipoconfig = await getIPOConfig("kraken");

  if (!marketTickers) {
    log("Error", "prepareTickersData: Tickers is empty");
    return;
  }

  const entries = Object.entries(marketTickers);
  try {
    for (const [ticker, value] of entries) {
      processTicker(
        ticker,
        value,
        timestamp,
        ipoconfig
      );
    }
  } catch (error) {
    log("Error", `prepareTickersData ${JSON.stringify(error)}`);
  }
}


async function processTicker(
  ticker: string,
  value: { price: number },
  timestamp: number,
  ipoconfig: IIPOTickerModel[]
) {
  const storedTicker = await Price.findOne({ ticker }, { _id: true, ticker: true });

  const tick = {
    price: value.price,
    timestamp,
  };

  if (!storedTicker) {
    const newTicker: IPriceModel = {
      ticker,
      timestamp,
      isNew: true,
      prices: [tick],
      createdTimestamp: timestamp,
    };

    Price.create(newTicker);
    log("Important", `Found new currency: ${ticker}`);
    return;
  }

  Price.updateOne({ _id: storedTicker._id }, {
    $push: {
      prices: tick,
    },
    timestamp,
  })
    .then(() => {
      checkIPOPrice(storedTicker, ipoconfig);
    })
    .catch(err => {
      console.log(err);
    });
}

export function stopScan() {
  isScanRequired = false;
  log("Notify", "Hike scan stopped");
}

export function startScan() {
  isScanRequired = true;
  log("Notify", "Hike scan enabled");
}

async function checkIPOPrice(
  ticker: Document<unknown, unknown, IPriceModel> & IPriceModel,
  ipoconfig: IIPOTickerModel[]
) {
  if (!ipoconfig.find((el) => el.ticker === ticker.ticker)) {
    return false;
  }

  log("Info", `Check IPO price ${ticker.ticker}`);
  const lastTickerPrices = await Price.findById(ticker._id, {prices: true});

  if (!lastTickerPrices?.prices?.length) {
    return false;
  }

  const lastPrice = lastTickerPrices.prices.pop();

  if (Number(lastPrice.price) > 0) {
    log("Important", `Ticker is available to buy: ${ticker.ticker} ${lastPrice.price} ${buildAppUrl(ticker.ticker)}`);
  }
}
