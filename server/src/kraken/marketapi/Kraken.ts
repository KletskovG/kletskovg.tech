import got from "got";
import { createHash, createHmac } from "crypto";
import qs from "qs";
import { getEnvVariable } from "utils/getEnvVariable";
import { KRAKEN_API_BASE_URL, KRAKEN_API_VERSION, KRAKEN_AUTH_HEADERS } from "const";
import { KrakenError } from "kraken/KrakenError";
import type {
  IKrakenAddOrderResponse,
  IKrakenBalanceResponse,
  IKrakenClosedOrdersResponse,
  IKrakenOpenOrdersResponse,
  IKrakenPairInfoResponse,
  IKrakenResponse,
  IKrakenCancelAllResponse,
} from "types/kraken/IKrakenResponse";
import type {
  IAddOrderRequestParams,
} from "types/kraken/IKrakenRequestParams";

const PUBLIC_METHODS = ["Time", "Assets", "AssetPairs", "Ticker", "Depth", "Trades", "Spread", "OHLC" ] as const;
type TPublicMethod = typeof PUBLIC_METHODS[number];

const PRIVATE_METHOD = [
  "Balance",
  "TradeBalance",
  "OpenOrders",
  "ClosedOrders",
  "QueryOrders",
  "TradesHistory",
  "QueryTrades",
  "OpenPositions",
  "Ledgers",
  "QueryLedgers",
  "TradeVolume",
  "AddOrder",
  "CancelOrder",
  "CancelAll",
  "DepositMethods",
  "DepositAddresses",
  "DepositStatus",
  "WithdrawInfo",
  "Withdraw",
  "WithdrawStatus",
  "WithdrawCancel",
  "GetWebSocketsToken",
  "Stake",
  "Staking/Assets"
] as const;
type TPrivateMethod = typeof PRIVATE_METHOD[number];

const getMessageSignature = (
  path: string,
  params: Record<string, string | number | boolean>,
  secret: string,
  nonce: number,
) => {
  const message = qs.stringify(params);
  const secret_buffer = Buffer.from(secret, "base64");
  const hash = createHash("sha256");
  const hmac = createHmac("sha512", secret_buffer);
  const hash_digest = hash.update(nonce + message).digest("binary");
  const hmac_digest = hmac.update(path + hash_digest, "binary").digest("base64");

  return hmac_digest;
};

const rawRequest = async <TResult extends IKrakenResponse>(
  url: string,
  headers: Record<string, string>,
  params: Record<string, string | number | boolean>,
  timeout = 10_000
) => {
  headers["User-Agent"] = "Kraken Javascript API Client";

  const options = { headers, timeout };

  Object.assign(options, {
    method: "POST",
    body: qs.stringify(params),
  });

  const { body } = await got(url, options);
  const response: TResult = JSON.parse(body);
  if(response.error?.length) {
    const error = response.error
      .filter((e: string) => e.startsWith("E"))
      .map((e: string) => e.substr(1));

    if(!error.length) {
      throw new KrakenError("Kraken API returned an unknown error");
    }

    throw new KrakenError(error.join(", "));
  }

  return response;
};

export class KrakenClient {

  config: {
    key: string,
    secret: string,
    version: number,
    url: string,
  };

  constructor() {
    // // Allow passing the OTP as the third argument for backwards compatibility
    // if(typeof options === "string") {
    //   options = { otp : options };
    // }

    const key = getEnvVariable("KRAKEN_API_KEY");
    const secret = getEnvVariable("KRAKEN_API_SIGN");
    this.config = Object.assign({ key, secret });
  }

  public getBalance() {
    return this.privateAPIMethod<IKrakenBalanceResponse>("Balance");
  }

  public getPairInfo<TPair extends string | undefined>(pair: TPair) {
    const requestParams: Record<string, string> = {};

    if (pair) {
      requestParams.pair = pair;
    }

    return this.publicAPIMethod<IKrakenPairInfoResponse<TPair>>("Ticker", {...requestParams});
  }

  public getClosedOrders(ofs?: number) {
    const requestParams: Record<string, string | number> = {};

    if (ofs !== undefined && ofs !== null) {
      requestParams.ofs = ofs;
    }

    return this.privateAPIMethod<IKrakenClosedOrdersResponse>("ClosedOrders", {...requestParams});
  }

  public getOpenOrders() {
    return this.privateAPIMethod<IKrakenOpenOrdersResponse>("OpenOrders");
  }

  public addOrder(params: IAddOrderRequestParams) {
    return this.privateAPIMethod<IKrakenAddOrderResponse>("AddOrder", {...params});
  }

  public cancelOrders() {
    return this.privateAPIMethod<IKrakenCancelAllResponse>("CancelAll");
  }

  public getOHLCData<TPair extends string>(pair: string, interval: number) {
    return this.publicAPIMethod<IKrakenPairInfoResponse<TPair>>("OHLC", {pair, interval});
  }

  private publicAPIMethod<TResult extends IKrakenResponse>(
    method: TPublicMethod,
    params = {}
  ) {
    const path = "/" + KRAKEN_API_VERSION + "/public/" + method;
    const url = KRAKEN_API_BASE_URL + path;
    const response = rawRequest<TResult>(url, {}, params, 10_000);

    return response;
  }

  private privateAPIMethod<TResult extends IKrakenResponse>(
    method: TPrivateMethod,
    params: Record<string, string | number | boolean> = {}
  ) {

    const path = "/" + KRAKEN_API_VERSION + "/private/" + method;
    const url = KRAKEN_API_BASE_URL + path;

    // if(this.config.otp !== undefined) {
    //   params.otp = this.config.otp;
    // }

    const nonce = Number(new Date()) * 1000;
    params.nonce = String(nonce);

    if (!this.config.key || !this.config.secret) {
      throw new KrakenError("KRAKEN API CREDS NOT FOUND");
    }

    const signature = getMessageSignature(
      path,
      params,
      this.config.secret,
      nonce,
    );

    const headers = {
      [KRAKEN_AUTH_HEADERS.KEY]: this.config.key,
      [KRAKEN_AUTH_HEADERS.SIGN]: signature,
    };

    const response = rawRequest<TResult>(url, headers, params, 10_000);

    return response;
  }
}
