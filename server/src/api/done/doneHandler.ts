import { Response } from "express";
import { IRequest } from "types/api";
import  { sendNotification } from "telegram/bot";

export function doneHandler(_: unknown, res: Response) {
  sendNotification("Command is done");
  res.end();
}

type DoneMessageParams = {
  text: string;
}

export function doneMessageHandler(req: IRequest<DoneMessageParams>, res: Response) {
  const message = req.params.text;
  sendNotification(message);
  res.status(200).send(message);
}
