import { sendNotification } from "telegram";

export function withRetries<Cb extends CallableFunction>(cb: Cb, numberOfRetries = 5) {
    let retriesRemaining = numberOfRetries;

    const executor = async (...args: unknown[]) => {
        console.log("RUN WRAPPED FUNC", retriesRemaining);
        try {
            return await cb(...args);
        } catch (err) {
            retriesRemaining -= 1;

            if (retriesRemaining <= 0) {
                throw new Error(err);
            }

            executor(...args);
            sendNotification(`Retry, ${err}`);
        }
    };

    return executor;
}
