export interface IBalanceModel {
  currency: {
    name: string;
    value: number;
  }[];
  topups: number;
}