// import TelegrafContext from "telegraf/typings/context";
import { stopScan } from "kraken/core/prepareTickersData";

export function stop() {
  stopScan();
}
