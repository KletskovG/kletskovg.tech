import { Response } from "express";
import { startMainLoop } from "kraken/core/mainLoop";

export function startLoopHandler(_: unknown, res: Response) {
  res.status(200).send("OK");
  startMainLoop();
}
