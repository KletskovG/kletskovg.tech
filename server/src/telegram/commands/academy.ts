import TelegrafContext from "telegraf/typings/context";
import { scrapeProjectInfo } from "scrapper/academy";

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
        .catch((err) => {
          console.error(err);
          ctx.reply("ERROR WHILE SCRAPE");
        });
    } catch (error) {
      ctx.reply(error);
    }
  };
}
