import { Router, RequestHandler } from "express";
import { TRoute, EHTTPMethod } from "types";

export function registerHandler(
  router: Router,
  route: TRoute,
  method: EHTTPMethod,
  handler: RequestHandler,
) {
  router[method](route, handler);
}
