import { Response, Request } from "express";
// import { scanTinkoffMarket } from "tinkoff/scanTinkoffMarket";
// import { log } from "logger/logger";

export async function tinkoffSacnTickersHandler(_: Request, res: Response) {
  res.status(200).send("OK");
  // log("Notify", "Scan Tinkoff Tickers");
  // try {
  //   scanTinkoffMarket();
  // } catch (error) {
  //   log("Error", "Cant scan Tinkoff Market, HANDLER");
  // }
}
