export interface IBinanceTickerModel {
  ticker: string;
  timestamp: number;
  isNew?: boolean;
  createdTimestamp?: number;
}
