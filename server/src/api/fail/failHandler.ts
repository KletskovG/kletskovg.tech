import { Response } from "express";
import  { sendNotification } from "telegram/bot";

export function failHandler(_: unknown, res: Response) {
  const failMessage = "Command is done || Error";
  sendNotification(failMessage);
  res.status(500).send(failMessage);
}
