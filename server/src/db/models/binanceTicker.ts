import {Schema, model} from "mongoose";
import {IBinanceTickerModel} from "types/binance/IBinanceTickerModel";


export const schema = new Schema<IBinanceTickerModel>({
  ticker: String,
  timestamp: Number,
  isNew: {
    type: Boolean,
    required: false,
  },
  createdTimestamp: {
    type: Number,
    required: false,
  }
});

export const BinanceTicker = model("binance_price", schema);
