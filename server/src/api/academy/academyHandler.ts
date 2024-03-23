import { scrapeProjectInfo } from "scrapper/academy";
import { Response, Request } from "express";
import { sendNotification } from "telegram/bot";
import { getEnvVariable } from "utils/getEnvVariable";
import { log } from "logger/logger";
import { withRetries } from "lib";

type AcademyHandlerRequest = Request<unknown, unknown, unknown, { checkOptional?: string }>;

export function academyHandler(req: AcademyHandlerRequest, res: Response) {
  const academyChatId = getEnvVariable("ACADEMY_CHAT");
  const { query } = req;
  withRetries(scrapeProjectInfo)()
    .then(result => {
      if (query.checkOptional) {
        sendNotification("Finished with optional courses", academyChatId);
      }

      if (result) {
        sendNotification(result, academyChatId);
        res.status(200).send(result);
      } else {
        res.status(200).send("No Projects");
      }
    })
    .catch((err = "") => {
      res.status(500).send(err);
      const errorMessage = `ERROR WHILE SCRAPE ${JSON.stringify(err)}`;
      log("Error", errorMessage);
    });
}
