import { Price } from "kraken/db/models/price";

export async function migrate() {
  await Price.deleteMany({});
  console.log("DELETED");
}
