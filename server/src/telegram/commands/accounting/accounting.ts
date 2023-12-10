import TelegrafContext from "telegraf/typings/context";
import { accountingCommands } from "types/accounting/Accounting";
import { log } from "logger/logger";
import { commandUrlBuilders, validationSchema } from "./commandProcessor";
import { getMessageWithText } from "../../lib/getMessageWithText";

export async function accounting(ctx: TelegrafContext) {
    const { message } = getMessageWithText(ctx);
    const messageWords = message.text.split(" ");
    const accountingCommand = messageWords[1];
    const args = messageWords.slice(2);
    
    const command = accountingCommands.find(cm => cm === accountingCommand);

    if (!command) {
        ctx.reply(`Unknown Command, available commands - ${accountingCommands.join(" ")}`);
        return;
    }

    const validationResult = validationSchema[command](args);

    if (!validationResult.isValid) {
        ctx.reply(validationResult.message);
        return;
    }

    fetch(commandUrlBuilders[command](args))
        .then(response => {
            const fallbackResponse = response.clone();
            return response.json()
                .then(data => ({
                    type: "json",
                    data,
                }))
                .catch(() => fallbackResponse.text())
                .then(data => {
                    if (typeof data === "string") {
                        return {
                            type: "text",
                            data,
                        };
                    }

                    return data;
                })
                .catch((err) => log("Error", err));
        })
        .then(response => {
            if (!response) {
                ctx.reply("Cant read data from server");
                return;
            }
 
            let serverData = "";

            switch (response.type) {
                case "json":
                    serverData = JSON.stringify(response.data);
                    break;
                case "text":
                    serverData = response.data;
                    break;
            }
            ctx.reply(serverData);
        })
        .catch(err => log("Error", err));
}