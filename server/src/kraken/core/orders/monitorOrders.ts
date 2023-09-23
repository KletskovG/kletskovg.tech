// import { getOpenOrders } from "kraken/marketapi/getOpenOrders";
// import { getClosedOrders } from "kraken/marketapi/getClosedOrders";
// import { Deal } from "kraken/db/models/deal";
// import { log } from "logger/logger";
// import type { IOrder } from "types/kraken/IKrakenResponse";
// import type { Document } from "mongoose";
// import type { IDealModel } from "types/kraken/ILastDealModel";
// import { getPairInfo } from "kraken/marketapi/getPairInfo";

// export async function monitorOrders() {
//   const tickersToMonitor = await Deal.find({});

//   if (!tickersToMonitor) {
//     return;
//   }

//   const pairStr = tickersToMonitor.map(ticker => ticker.ticker).join(",");
//   // const tickerPrices = await getPairInfo(pairStr);

//   // tickersToMonitor.

//   return;
// }
