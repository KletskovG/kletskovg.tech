import {Schema, model} from "mongoose";
import type { IBalanceModel } from "types/kraken/IBalanceModel";


export const schema = new Schema<IBalanceModel>({
  currency: [{
    name: String,
    value: Number,
  }],
  topups: Number,
});

export const Balance = model("balance", schema);
