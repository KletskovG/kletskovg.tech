import { BinanceTicker } from "db/models/binanceTicker";
import { createBinanceClient } from "../createBinanceClient";
import { log} from "logger/logger";
import type { IBinanceClient } from "types/binance/IBinanceClient";
import type { IExchangeInfoResponse } from "types/binance/IExchangeInfoResponse";
import { getSecondsTimestamp } from "utils/getSecondsTimestamp";
import type { IBinanceTickerModel } from "types/binance/IBinanceTickerModel";

export async function monitorBinanceTickers() {
  const amountOfTickers = await BinanceTicker.countDocuments();
  const binanceClient = createBinanceClient();

  if (!amountOfTickers || !binanceClient) {
    log("Error", "Montior binance tickers, not enough data to start");
    return;
  }

  const exchangeInfo = await collectExchangeInfo(binanceClient);

  if (!exchangeInfo) {
    return;
  }

  for (let i = 0; i < exchangeInfo.data.symbols.length; i++) {
    const tickerName = exchangeInfo.data.symbols[i];
    if (await isTickerExsists(tickerName.symbol)) {
      continue;
    } else if (tickerName.symbol.endsWith("USD") || tickerName.symbol.endsWith("EUR")) {
      log("Important", `BINANCE FOUND NEW CURRENCY ${tickerName.symbol}`);
      const timestamp = getSecondsTimestamp();
      const binanceTicker: IBinanceTickerModel = {
        ticker: tickerName.symbol,
        timestamp,
        createdTimestamp: timestamp,
      };

      BinanceTicker.create(binanceTicker).then(() => {
        log("Info", `Binance ticker created ${JSON.stringify(binanceTicker)}`);
      })
        .catch(err => {
          log("Error", `Binance ticker create ${JSON.stringify(err)}`);
        });
    }
  }

  log("Important", `Binance tickers scanned | ${exchangeInfo.data.symbols.length}`);
  return;
}

async function collectExchangeInfo(
  binanceClient: IBinanceClient
): Promise<IExchangeInfoResponse | undefined> {
  try {
    const exchangeInfo = await binanceClient.exchangeInfo();
    return exchangeInfo;
  } catch (error) {
    log("Error", `Binance collect exchange info, ${JSON.stringify(error)}`);
    return;
  }
}

async function isTickerExsists(tickerName: string): Promise<boolean> {
  const ticker = await BinanceTicker.findOne({ticker: tickerName});
  return Boolean(ticker);
}
