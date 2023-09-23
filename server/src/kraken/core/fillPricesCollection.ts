import { Price } from "db/models/price";
import { getSecondsTimestamp } from "utils/getSecondsTimestamp";
import { getPairInfo } from "kraken/marketapi/getPairInfo";
import { IPriceModel } from "types/kraken/IPriceModel";

export async function fillPricesCollection() {
  const timestamp = getSecondsTimestamp();
  const marketTickers = await getPairInfo("");

  const entries = Object.entries(marketTickers);

  try {
    for (const [ticker, value] of entries) {
      const tick = {
        price: value.price,
        timestamp,
      };

      const newTicker: IPriceModel = {
        ticker,
        timestamp,
        // isNew: true,
        prices: [tick],
        createdTimestamp: timestamp,
      };

      Price.create(newTicker).then(() => console.log(`${ticker} upserted`));
    }
  } catch (error) {
    // log("Error", `prepareTickersData ${JSON.stringify(error)}`);
  }
}
