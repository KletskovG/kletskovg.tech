import type { IExchangeInfoResponse } from "types/binance/IExchangeInfoResponse";
import type { ICurrentAvgPriceResponse } from "types/binance/ICurrentAvgPriceResponse";

export interface IBinanceClient {
  exchangeInfo(): Promise<IExchangeInfoResponse>;
  avgPrice(ticker: string): Promise<ICurrentAvgPriceResponse>;
}
