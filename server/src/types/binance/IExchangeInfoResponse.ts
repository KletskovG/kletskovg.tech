export interface IExchangeInfoResponse {
  data: {
    rateLimits: unknown[],
    symbols: {
      symbol: string;
    }[]
  }
}
