import { getCurrentNounce } from "./getNounce";
import { KRAKEN_AUTH_HEADERS } from "const";
import { getEnvVariable } from "utils/getEnvVariable";
import {createHash, createHmac} from "crypto";
import qs from "qs";

export const prepareKrakenRequest = (
  requestPath: string,
  requestParams: Record<string, string> = {},
) => {
  const API_KEY = getEnvVariable("KRAKEN_API_KEY");
  const sign = getRequestSign(requestPath, requestParams);

  if (!API_KEY || !sign) {
    throw new Error("Not enough creds for create kraken request");
  }

  const headers = new Headers();
  headers.set(KRAKEN_AUTH_HEADERS.KEY, API_KEY);
  headers.set(KRAKEN_AUTH_HEADERS.SIGN, sign);
  headers.set("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");

  const result: Record<string, string> = {};

  for (const [header, value] of headers.entries()) {
    result[header] = value;
  }

  return result;
};

export const getRequestSign = (requestPath: string, requestParams: Record<string, string>) => {
  const nonce = getCurrentNounce();
  const API_SIGN = getEnvVariable("KRAKEN_API_SIGN");

  const message       = qs.stringify(requestParams);
  const secret_buffer = Buffer.from(API_SIGN, "base64");
  const hash          = createHash("sha256");
  const hmac          = createHmac("sha512", secret_buffer);
  const hash_digest   = hash.update(nonce + message).digest("binary");
  const hmac_digest   = hmac.update(requestPath + hash_digest, "binary").digest("base64");

  console.log(hmac_digest);
  return hmac_digest;
};
