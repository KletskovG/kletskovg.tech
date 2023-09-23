import { Response } from "express";
import { log, readLogs } from "logger/logger";
import { IRequest } from "src/types";

type TReadLogsQuery = {
  since: string;
}

export async function readLogsHandler(req: IRequest<any, TReadLogsQuery>, res: Response) {
  const sinceMinutes = Number(req.query.since) || 0;
  try {
    const logs = await readLogs(sinceMinutes ? sinceMinutes : undefined);
    res
      .status(200)
      .send(JSON.stringify(logs.join("/n")));
  } catch (error) {
    log("Error", error);
    res.send(error);
  }
}
