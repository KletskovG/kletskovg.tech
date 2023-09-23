import { Response } from "express";
import  { sendNotification } from "telegram/bot";

export function cdHandler(_: unknown, res: Response) {
  sendNotification("Deploy command is done");
  res.end();
}
