import { Router } from "express";
import { registerHandler } from "api/registerHandler";
import {
  mainLoopHandler,
  startLoopHandler,
  stopLoopHandler,
  prepareTickersHandler,
  flushTickersHandler,
} from "api";

const krakenRouter = Router();

registerHandler(
  krakenRouter,
  "/kraken/mainloop",
  "get",
  mainLoopHandler,
);
registerHandler(
  krakenRouter,
  "/kraken/start",
  "get",
  startLoopHandler,
);
registerHandler(
  krakenRouter,
  "/kraken/stop",
  "get",
  stopLoopHandler,
);

registerHandler(
  krakenRouter,
  "/kraken/tickers/prepare",
  "get",
  prepareTickersHandler,
);

registerHandler(
  krakenRouter,
  "/kraken/tickers/flush",
  "get",
  flushTickersHandler,
);


export default krakenRouter;
