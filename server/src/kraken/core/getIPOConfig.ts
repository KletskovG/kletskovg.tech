import { IPOTickerConfigModel } from "db/models/IPOTicker";
import { log } from "logger/logger";

export async function getIPOConfig(provider: "binance" | "kraken") {
  const ipoconfig = await IPOTickerConfigModel.find({provider})
    .then(data => data)
    .catch(() => {
      log("Error", "Error while retrieving IPOConfig");
      return [];
    });

  return ipoconfig;
}
