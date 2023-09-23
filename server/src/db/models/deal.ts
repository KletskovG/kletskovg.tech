import {Schema, model} from "mongoose";
import type { IDealModel } from "types/kraken/IDealModel";

export const schema = new Schema<IDealModel>({
  triggerPrices: [Number],
  buyPrice: Number,
  ticker: String,
});

export const Deal = model("deal", schema);
