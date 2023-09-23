import { KrakenClient } from "kraken/marketapi/Kraken";
import { sendNotification } from "telegram";
import { KrakenError } from "kraken/KrakenError";

export const getStakebleList = () => {
  const kraken = new KrakenClient();

  kraken.api("Staking/Assets")
    .then(result => {
      console.log("STAKING LISH");
      console.log(result.result);
    })
    .catch((error: KrakenError) => {
      sendNotification(error.error.message);
    });
};
