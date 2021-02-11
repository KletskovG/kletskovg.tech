import { orderType } from './ITradingOrderType';

export type TradingSettings = {
  nextOperation: orderType | string;
  buyoutPrice: number;
  ticker: string;
  thresholdPercent: number;
  accountId: string;
  token: string;
} | null