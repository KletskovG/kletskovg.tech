// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import {Spot} from "@binance/connector";
import type { IExchangeInfoResponse } from "types/binance/IExchangeInfoResponse";
import type { IBinanceTickerModel } from "types/binance/IBinanceTickerModel";
import { BinanceTicker } from "db/models/binanceTicker";
import { getSecondsTimestamp } from "utils/getSecondsTimestamp";
import { getEnvVariable } from "utils/getEnvVariable";
import { log } from "logger/logger";

export async function scanTickers() {
  const apiKey = getEnvVariable("BINANCE_API_KEY");
  const apiSecret = getEnvVariable("BINANCE_SECRET");

  if (!apiKey || !apiSecret) {
    log("Error", "BINANCE TICKERS EXPORT EMPTY ENV VARIABLE");
    return;
  }

  const client = new Spot(apiKey, apiSecret);
  console.log("Start tickers export");
  client.exchangeInfo().then((response: IExchangeInfoResponse) => {
    const {symbols: tickers} = response.data;

    tickers.forEach(ticker => {
      const timestamp = getSecondsTimestamp();
      const binanceTicker: IBinanceTickerModel = {
        ticker: ticker.symbol,
        timestamp,
        createdTimestamp: timestamp,
      };

      BinanceTicker.create(binanceTicker)
        .then(() => {
          console.log(`Ticker ${ticker.symbol} created`);
        })
        .catch(err => {
          console.log("CREATE BINANCE TICKER ERROR");
          console.log(err);
        });
    });
  });
  // client.avgPrice("BTCUSDT").then((response: any) => client.logger.log(response));
}
