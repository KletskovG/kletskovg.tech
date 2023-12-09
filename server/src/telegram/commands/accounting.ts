import TelegrafContext from "telegraf/typings/context";
export function accounting() {
    return async (ctx: TelegrafContext) => {
        ctx.reply("Accounting command should work")
    }
}