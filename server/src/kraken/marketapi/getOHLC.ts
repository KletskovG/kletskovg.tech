import { KrakenClient } from "kraken/marketapi/Kraken";
import { KrakenError } from "kraken/KrakenError";
import { log } from "logger/logger";
import { inferErrorType } from "utils/inferErrorType";
import { TKrakenPairInfoResult } from "types/kraken/IKrakenResponse";

export async function getOHLC<TPair extends string>(
  pair: string,
  interval = 1,
): Promise<TKrakenPairInfoResult | null> {
  const kraken = new KrakenClient();

  try {
    const { result } = await kraken.getOHLCData<TPair>(pair, interval) as any;
    console.log("______________________________________");
    console.log("GET OHLC RESULT");
    return result as any;
  } catch (error) {
    if (!inferErrorType<KrakenError>(error)) {
      log("Error", `getOHLC: Cant handle error ${JSON.stringify(error)}`);
      return null;
    }
    log("Error", `getOHLC: ${JSON.stringify(error)}`);
    return null;
  }
}

// function transformPairResult<TPair extends string>(
//   response:
// ) {

// }
