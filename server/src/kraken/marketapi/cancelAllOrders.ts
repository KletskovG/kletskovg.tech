import { KrakenClient } from "kraken/marketapi/Kraken";
import { KrakenError } from "kraken/KrakenError";
import { log } from "logger/logger";
import { inferErrorType } from "utils/inferErrorType";
import { IKrakenCancelAllResponse } from "types/kraken/IKrakenResponse";

export async function cancelAllOrders(): Promise<IKrakenCancelAllResponse["result"] | null> {
  const kraken = new KrakenClient();

  try {
    const { result } = await kraken.cancelOrders();
    log("Info", `cancelOrders: ${JSON.stringify(result)}`);
    return result;
  } catch (error) {
    if (!inferErrorType<KrakenError>(error)) {
      log("Error", `addOrder: Cant handle error ${error.error.message}`);
      return null;
    }
    log("Error", `addOrder: ${error.error.message}`);
    return null;
  }
}
