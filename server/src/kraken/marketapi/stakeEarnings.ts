import { KrakenClient } from "kraken/marketapi/Kraken";
import { sendNotification } from "telegram";

export const stakeEarnings = async (currency: string, amount: number) => {
  const kraken = new KrakenClient();

  kraken.api("Stake", {
    asset: currency,
    amount,
    method: `staked-${currency.toLowerCase()}`,
  })
    .then(result => {
      console.log("STAKE RESULT");
      console.log(result.result);
      sendNotification(`KRAKEN: \n STAKED ${currency} | ${amount}`);
    })
    .catch(error => {
      sendNotification(`KRAKEN ERROR \n ${error} \n /kraken_stop`);
    });
};
