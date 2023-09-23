import { Response } from "express";
import { flushLogs } from "logger/logger";

export function flushLogsHandler(_: unknown, res: Response) {
  flushLogs();
  res.end("OK, flushing logs");
}
