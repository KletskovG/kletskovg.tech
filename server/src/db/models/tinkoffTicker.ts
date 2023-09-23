import {Schema, model} from "mongoose";
import {ITinkoffTickerModel} from "types/tinkoff/ITinkoffTickerModel";


export const schema = new Schema<ITinkoffTickerModel>({
  ticker: String,
  timestamp: Number,
  createdTimestamp: {
    type: Number,
    required: false,
  }
});

export const TinkoffTicker = model("tinkoff_price", schema);
