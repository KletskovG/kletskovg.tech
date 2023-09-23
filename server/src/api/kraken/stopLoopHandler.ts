import { Response } from "express";
import { stopMainLoop } from "kraken/core/mainLoop";

export function stopLoopHandler(_: unknown, res: Response) {
  res.status(200).send("OK");
  stopMainLoop();
}
