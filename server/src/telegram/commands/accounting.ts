import TelegrafContext from "telegraf/typings/context";
import { BUDGET_SERVICE_API_URL } from "const";
import { accountingCommands } from "types/accounting/Accounting";
import { log } from "logger/logger";
import { chunkSubstr } from "lib";
import { TELEGRAM_MESSAGE_SIZE_LIMIT } from "const";
// import { pipeline } from "node:stream/promises"
import { getMessageWithText } from "../lib/getMessageWithText";
import { sendNotification } from "..";
export async function accounting(ctx: TelegrafContext) {
    const { message } = getMessageWithText(ctx)
    const args = message.text.split(" ").slice(1);
    
    const command = accountingCommands.find(cm => cm === args[0])

    if (!command) {
        ctx.reply(`Unknown Command, available commands - ${accountingCommands.join(" ")}`);
    }

    fetch(`${BUDGET_SERVICE_API_URL}/${command}`)
        .then(response => {
            const fallbackResponse = response.clone();
            return response.json()
                .then(data => ({
                    type: 'json',
                    data,
                }))
                .catch(() => fallbackResponse.text())
                .then(data => {
                    if (typeof data === 'string') {
                        return {
                            type: 'text',
                            data,
                        }
                    }

                    return data
                })
                .catch((err) => log("Error", err))
        })
        .then(response => {
            if (!response) {
                ctx.reply("Cant read data from server")
                return;
            }
 
            let serverData = '';

            switch (response.type) {
                case 'json':
                    serverData = JSON.stringify(response.data)
                case 'text':
                    serverData = response.data;
            }

            let result = '';

            for (let i = 0; i < 100; i++) {
                // serverData += serverData
                result += serverData;
            }

            const chunks = chunkSubstr(result, TELEGRAM_MESSAGE_SIZE_LIMIT)

            chunks.forEach((chunk) => {
                sendNotification(chunk)
            })
        })
        .catch(err => log("Error", err))
}