import { KrakenClient } from "kraken/marketapi/Kraken";
import { KrakenError } from "kraken/KrakenError";
import { log } from "logger/logger";
import { inferErrorType } from "utils/inferErrorType";
import { IKrakenAddOrderResponse } from "types/kraken/IKrakenResponse";
import { IAddOrderRequestParams } from "types/kraken/IKrakenRequestParams";

export async function addOrder(
  orderOptions: IAddOrderRequestParams,
): Promise<IKrakenAddOrderResponse["result"] | null> {
  const kraken = new KrakenClient();

  try {
    const { result } = await kraken.addOrder(orderOptions);
    log("Info", `addOrder: ${result.descr.order} TXID: ${result.txid}`);
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
