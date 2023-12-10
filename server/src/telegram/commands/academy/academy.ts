import TelegrafContext from "telegraf/typings/context";
import { scrapeProjectInfo } from "scrapper/academy";
import { log } from "logger/logger";

export function academy() {
  return async (ctx: TelegrafContext) => {
    try {
      scrapeProjectInfo(true)
        .then(result => {
          if (!result) {
            ctx.reply("No projects for now");
            return;
          }

          const notification = result ? `Scrape result \n ${result}` : "Empty Result";
          ctx.reply(notification);
        })
        .catch((err = '') => {
          const errorMessage = `WHILE SCRAPE ${JSON.stringify(err)}`;
          log('Error', errorMessage);
        });
    } catch (error) {
      ctx.reply(error);
    }
  };
}
