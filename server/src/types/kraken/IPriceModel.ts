export interface IPriceModel {
  ticker: string;
  timestamp: number;
  isNew?: boolean;
  createdTimestamp?: number;
  prices: {
    price: number;
    timestamp: number;
  }[]
}
