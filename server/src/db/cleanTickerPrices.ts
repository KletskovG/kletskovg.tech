import { Price } from "./models/price";
import { log } from "logger/logger";

export async function cleanTickerPrices() {
  await Price.updateMany({}, { prices: [] });
  log("Notify", "Prices cleared");
}
