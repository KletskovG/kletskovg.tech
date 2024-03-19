import { getEnvVariable } from "src/utils/getEnvVariable";
import TelegrafContext from "telegraf/typings/context";

export async function uiCommand(ctx: TelegrafContext) {
    const uiUrl = getEnvVariable("ACCOUNTING_UI_URL");
    
    ctx.reply(uiUrl ?? "Cant find url in config");
}