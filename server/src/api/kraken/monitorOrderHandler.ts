import { Response } from "express";
// import { monitorOrders } from "kraken/core/orders/monitorOrder";
// import { monitorOrders } from "kraken/core/orders/monitorOrders";

export async function monitorOrderHandler(_: unknown, res: Response) {
  // const result = await monitorOrders();
  res.send("OK");
}
