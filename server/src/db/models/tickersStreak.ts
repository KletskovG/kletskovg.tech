import {Schema, model} from "mongoose";
import type { ITickerStreak } from "types/kraken/ITickerStreakModel";


export const schema = new Schema<ITickerStreak>({
  streak: {
    type: Number,
    default: 0,
  },
});

export const TickerStreak = model("tickerstreak", schema);
