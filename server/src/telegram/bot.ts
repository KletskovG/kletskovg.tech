import { Telegraf } from "telegraf";
import { getEnvVariable } from "utils/getEnvVariable";
import {
  EBotCommands,
} from "types";
import TelegrafContext from "telegraf/typings/context";
import {
  chatid,
  academy,
  homeworks,
  status,
  start,
  stop,
} from "telegram/commands";

const BOT_TOKEN = getEnvVariable("BOT_TOKEN") || "";
const CHAT_NUMBER = getEnvVariable("CHAT_NUMBER") || 1;

const bot = new Telegraf(BOT_TOKEN);
bot.launch();

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
registerCommandHanlder("academy", academy());
registerCommandHanlder("homeworks", homeworks);

registerCommandHanlder("kraken_stop", stop, true);
registerCommandHanlder("kraken_start", start, true);
registerCommandHanlder("kraken_start", status, true);

export function sendNotification(message: string, chaitId = CHAT_NUMBER) {
  bot.telegram.sendMessage(chaitId, message);
}

export default bot;
