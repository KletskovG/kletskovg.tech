import { Router } from "express";
import { registerHandler } from "api/registerHandler";
import { tinkoffSacnTickersHandler } from "./tinkoffScanTickersHandler";

const tinkoffRouter = Router();

registerHandler(
  tinkoffRouter,
  "/tinkoff/tickers/prepare",
  "get",
  tinkoffSacnTickersHandler,
);

export default tinkoffRouter;
