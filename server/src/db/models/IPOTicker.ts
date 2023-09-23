import {Schema, model} from "mongoose";
import type { IIPOTickerModel } from "types/shared/IPOTickerModel";

const schema = new Schema<IIPOTickerModel>({
  provider: String,
  ticker: String,
});

export const IPOTickerConfigModel = model("ipoticker", schema);
