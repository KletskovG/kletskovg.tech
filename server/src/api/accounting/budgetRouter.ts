import { Router } from "express";
import { registerHandler } from "api/registerHandler";
import {
  currencyHandler,
  getMIRCurrencyHandler,
  budgetHandler,
  budgetDatesHandler,
} from "api";

const budgetRouter = Router();

registerHandler(
  budgetRouter,
  "/budget/currency/:currency/:month/:year",
  "get",
  currencyHandler
);
registerHandler(
  budgetRouter,
  "/budget/mir/currency",
  "get",
  getMIRCurrencyHandler
);
registerHandler(
  budgetRouter,
  "/budget/:category/:column/:start/:end/:course/:ruble",
  "get",
  budgetHandler,
);
registerHandler(
  budgetRouter,
  "/budget/dates/:month/:year",
  "get",
  budgetDatesHandler,
);

export default budgetRouter;
