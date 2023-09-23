import { Response, Request } from "express";
// import { monitorBinanceTickers } from "binance/core/monitorBinanceTickers";
import { log } from "logger/logger";

export async function monitorBinanceTickersHandler(_: Request, res: Response) {
  // monitorBinanceTickers();
  res.status(200).send("OK");
  log("Notify", "Scan Binance tickers");
}
