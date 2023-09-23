import { KrakenClient } from "kraken/marketapi/Kraken";
import { log } from "logger/logger";
import { inferErrorType } from "utils/inferErrorType";
import { KrakenError } from "kraken/KrakenError";
import { IKrakenPairInfoResponse, TKrakenPairInfoResult, TTickerResult } from "src/types/kraken/IKrakenResponse";

export const getPairInfo = async <TPair extends string | undefined>(
  pair: TPair
): Promise<TKrakenPairInfoResult | null> => {
  const kraken = new KrakenClient();
  try {
    const { result } = await kraken.getPairInfo<TPair>(pair);
    return transformPairResponse(result);
  } catch (error) {
    if (!inferErrorType<KrakenError>(error)) {
      log("Error", `getPairInfor: Cant handle error ${error.error.message}`);
      return null;
    }
    log("Error", `getPairInfo: ${error.error.message}`);
    return null;
  }
};

export function transformPairResponse<TPair extends string | undefined>(
  response: IKrakenPairInfoResponse<TPair>["result"]
): TKrakenPairInfoResult {
  const tickers = Object.entries<TTickerResult>(response);
  const result: TKrakenPairInfoResult = {};

  tickers.forEach(([key, value]) => {
    result[key] = {
      price: Number(value.c[0]),
    };
  });

  log("Info", `getPairInfo: ${JSON.stringify(result)}`);

  return result;
}
