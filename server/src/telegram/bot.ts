import { Telegraf } from "telegraf";
import { getEnvVariable } from "utils/getEnvVariable";
import {
  EBotCommands,
} from "types";
import TelegrafContext from "telegraf/typings/context";
import {
  chatid,
  academy,
  accounting,
} from "telegram/commands";
import { log } from "src/logger/logger";

const BOT_TOKEN = getEnvVariable("BOT_TOKEN") || "";
const CHAT_NUMBER = getEnvVariable("CHAT_NUMBER") || 1;

const bot = new Telegraf(BOT_TOKEN);
bot.launch()
  .catch((err) => log("Error", `Cant launch bot: ${err}`));

export function registerCommandHanlder(
  command: EBotCommands,
  handler: (ctx: TelegrafContext) => void,
  isProtected = false,
) {
  const commandRegexp = "/" + command;
  bot.hears(new RegExp(commandRegexp), (ctx: TelegrafContext) => {
    if (isProtected && ctx.chat.id !== Number(CHAT_NUMBER)) {
      ctx.reply("PERMISSION DENIED");
      return;
    }

    handler(ctx);
  });
}

registerCommandHanlder("chatid", chatid);
registerCommandHanlder("academy", academy(), true);
registerCommandHanlder("acc", accounting, true);

export function sendNotification(message: string, chaitId = CHAT_NUMBER) {
  bot.telegram.sendMessage(chaitId, message);
}

export default bot;
