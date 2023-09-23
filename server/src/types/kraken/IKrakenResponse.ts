export interface IKrakenResponse {
  error: string[];
  result: Record<string, unknown>;
}

export interface IKrakenBalanceResponse extends IKrakenResponse {
  result: {
    ZEUR: string;
    "EUR.M": string;
    XLTC: string;
  }
}

export interface IKrakenBalanceResult {
  ZEUR: number;
  "EUM.M": number;
  XLTC: number;
}

export type TTickerResult = {
  a: string[]; // Ask price
  b: string[]; // Bid price
  c: string[]; // Current price
  v: string[]; // Volume
  p: string[]; // Average price
  o: string; // Open price
}

export interface IKrakenPairInfoResponse <
  TName extends string | undefined
> extends IKrakenResponse {
  result: Record<
    TName extends string ? TName : string,
    TTickerResult
  >;
}

type TOHLCTick = [
  number, // timestamp
  string,
  string,
  string,
  string,
  string,
  string,
  string, // Current price
  number,
]

export interface IKrakenOHLCResponse extends IKrakenResponse {
  result: Record<string, [
    TOHLCTick[]
  ]>;
}

export type TickerResult = {
  price: number;
}

export type TKrakenPairInfoResult = Record<string, TickerResult>;

// export interface IKrakenOpenOrdersResponse {
//   open
// }

export interface IOrder {
  refid: string,
  userref: string,
  status: string,
  opentm: number,
  starttm: number,
  expiretm: number,
  descr: {
    pair: string,
    type: "buy" | "sell",
    ordertype: string,
    price: string,
    price2: string,
    leverage: string,
    order: string,
    close: string
  },
  vol: string,
  vol_exec: string,
  cost: string,
  fee: string,
  price: string,
  stopprice: string,
  limitprice: string,
  trigger: string,
  misc: string,
  oflags: string,
  trades: string[],
  closetm: number,
  reason: string
}

export interface IKrakenClosedOrdersResponse extends IKrakenResponse{
  result: {
    closed: Record<string, IOrder>;
    count?: number;
  }
}

export interface IKrakenOpenOrdersResponse extends IKrakenResponse {
  result: {
    open: Record<string, IOrder>;
    count?: number;
  }
}

export interface IKrakenAddOrderResponse extends IKrakenResponse {
  result: {
    descr: {
      order: string;
      close: string;
      };
    txid: string[];
  }
}

export interface IKrakenCancelAllResponse extends IKrakenResponse {
  result: {
    count: number;
  }
}
