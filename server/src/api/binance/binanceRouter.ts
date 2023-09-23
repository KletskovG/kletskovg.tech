import { Router } from "express";
import { registerHandler } from "api/registerHandler";
import { monitorBinanceTickersHandler } from "./monitorBinanceTickersHandler";

const binanceRouter = Router();

registerHandler(
  binanceRouter,
  "/binance/tickers/prepare",
  "get",
  monitorBinanceTickersHandler,
);

export default binanceRouter;
