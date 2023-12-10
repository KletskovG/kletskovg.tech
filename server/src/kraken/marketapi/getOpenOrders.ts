import { KrakenClient } from "./Kraken";
import { KrakenError } from "kraken/KrakenError";
import { inferErrorType } from "utils/inferErrorType";
import { log } from "logger/logger";

export async function getOpenOrders() {
  const kraken = new KrakenClient();

  try {
    const { result } = await kraken.getOpenOrders();
    log("Info", `getOpenOrders: ${JSON.stringify(result)}`);
    return result;
  } catch (error) {
    // console.log(error)
    if (!inferErrorType<KrakenError>(error)) {
      log("Error", `getOpenOrders: Cant handle error ${JSON.stringify(error)}`);
      return null;
    }
    log("Error", `getOpenOrders: ${error.error.message}`);
    return null;
  }
}
