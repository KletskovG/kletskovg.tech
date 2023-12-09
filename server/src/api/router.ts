import { Router } from "express";
import { registerHandler } from "./registerHandler";
import {
  homeHandler,
  doneHandler,
  doneMessageHandler,
  flushLogsHandler,
  readLogsHandler,
} from "api";

import budgetRouter from "src/api/accounting/budgetRouter";
import academyRouter from "api/academy/academyRouter";

export function buildRouter(): Router {
  const router = Router();

  router.use(budgetRouter);
  router.use(academyRouter);

  registerHandler(
    router,
    "/",
    "get",
    homeHandler
  );
  registerHandler(
    router,
    "/done",
    "get",
    doneHandler
  );
  registerHandler(
    router,
    "/done/:text",
    "get",
    doneMessageHandler
  );
  registerHandler(
    router,
    "/logs/flush",
    "get",
    flushLogsHandler,
  );
  registerHandler(
    router,
    "/logs",
    "get",
    readLogsHandler,
  );

  return router;
}
