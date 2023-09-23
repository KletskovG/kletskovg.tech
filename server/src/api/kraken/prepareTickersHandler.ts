import { Response, Request } from "express";
import { prepareTickersData } from "kraken/core/prepareTickersData";
import { log } from "logger/logger";

type PrepareTickerQuery = {
  scan?: string;
}

type PrepareTickersRequest = Request<unknown, unknown, unknown, PrepareTickerQuery>;

export function prepareTickersHandler(
  req: PrepareTickersRequest,
  res: Response
) {
  const {scan} = req.query;

  if (Number(scan) === 1) {
    res.send("SCAN");
    prepareTickersData(true);
    return;
  }

  res.send("PREPARE");
  prepareTickersData(false);
  log("Info", "Prepare hike data");
}
