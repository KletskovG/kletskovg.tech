import TelegrafContext from "telegraf/typings/context";

export function getMessageWithText(
  ctx: TelegrafContext
): TelegrafContext & { message:{ text: string }} {
  // Telegraf Typings dont support text field
  return ctx as TelegrafContext & { message:{ text: string }};
}
