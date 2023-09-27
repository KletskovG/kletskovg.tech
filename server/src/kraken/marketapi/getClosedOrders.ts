import { KrakenClient } from "./Kraken.ts";
import { KrakenError } from "kraken/KrakenError";
import { inferErrorType } from "utils/inferErrorType";
import { log } from "logger/logger";

// REFACTOR: Think that i can sell manually
export async function getClosedOrders(ofs?: number) {
  const kraken = new KrakenClient();

  try {
    const { result } = await kraken.getClosedOrders(ofs);
    log("Info", `getClosedOrders: ${JSON.stringify(result)}`);
    return result;
  } catch (error) {
    if (!inferErrorType<KrakenError>(error)) {
      log("Error", `getClosedOrders: Cant handle error ${JSON.stringify(error)}`);
      return null;
    }
    log("Error", `getClosedOrders: ${error.error.message}`);
    return null;
  }
}
