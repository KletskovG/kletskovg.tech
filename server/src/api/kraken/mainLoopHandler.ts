import { Response } from "express";
import { log } from "logger/logger";
import { mainLoop } from "kraken/core/mainLoop";

export function mainLoopHandler(_: unknown, res: Response) {
  res.status(200).send("OK");
  try {
    mainLoop();
  } catch (error) {
    log("Error", `MAIN LOOP HANDLER: ${JSON.stringify(error.message)}`);
  }
}
