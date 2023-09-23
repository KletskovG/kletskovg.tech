import { scrapeProjectInfo } from "scrapper/academy";
import { Response, Request } from "express";
import { sendNotification } from "telegram/bot";
import {getImgSrc} from "utils/getImgSrc";
import { getEnvVariable } from "utils/getEnvVariable";

type AcademyHandlerRequest = Request<unknown, unknown, unknown, {checkOptional?: string}>;

export function academyHandler(req: AcademyHandlerRequest, res: Response) {
  const academyChatId = getEnvVariable("ACADEMY_CHAT");
  const { query } = req;
  try {
    scrapeProjectInfo(Boolean(query.checkOptional))
      .then(result => {
        sendNotification('Finished with optional courses', academyChatId);
        if (result) {
          sendNotification(result, academyChatId);
          res.status(200).send(result);
        } else {
          res.status(200).send("No Projects");
        }
      })
      .catch(() => {
        const src = getImgSrc("auth-error.png");
        res.status(500).send(src);
        sendNotification("ERROR WHILE SCRAPE", academyChatId);
        console.error("ERROR WHILE SCRAPE");
        console.error(src);
      });
  } catch (error) {
    sendNotification(error, academyChatId);
    res.status(500).send(error);
  }
}
