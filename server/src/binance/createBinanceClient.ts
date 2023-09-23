// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import {Spot} from "@binance/connector";
import { getEnvVariable } from "utils/getEnvVariable";
import { log } from "logger/logger";
import type { IBinanceClient } from "types/binance/IBinanceClient";

export function createBinanceClient(): IBinanceClient | undefined {
  const apiKey = getEnvVariable("BINANCE_API_KEY");
  const apiSecret = getEnvVariable("BINANCE_SECRET");

  if (!apiKey || !apiSecret) {
    log("Error", "BINANCE Create client EMPTY ENV VARIABLE");
    return;
  }

  const client = new Spot(apiKey, apiSecret) as IBinanceClient;
  return client;
}
