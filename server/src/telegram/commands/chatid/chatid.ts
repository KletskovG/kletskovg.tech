import TelegrafContext from "telegraf/typings/context";

export function chatid(ctx: TelegrafContext) {
  ctx.reply(`Chat ID ${ctx.chat.id}`);
}
