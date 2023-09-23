import { Response, Request } from "express";
import { Price } from "db/models/price";
import { log } from "logger/logger";

type PrepareTickerQuery = {
  clear?: string;
}

type PrepareTickersRequest = Request<unknown, unknown, unknown, PrepareTickerQuery>;

export async function flushTickersHandler(req: PrepareTickersRequest, res: Response) {
  const tickers = await Price.find({}, { ticker: true });
  const {clear} = req.query;

  if (!tickers) {
    res.send("OK");
    log("Important", "flushTickersHandler: Prices collection empty");
    return;
  }

  tickers.forEach(ticker => {
    Price.findOne({ ticker: ticker.ticker })
      .then(result => {
        result.updateOne({ prices: clear ?  [] : result.prices.slice(-8) })
          .then(result => result)
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  });
  log("Notify", "Ticker prices flushed");
  res.send("OK");

}
