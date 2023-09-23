// import { Balance } from "kraken/db/models/balance";
// import {log} from "logger/logger";
// import { IBalanceModel } from "src/types/kraken/IBalanceModel";

// export async function findOne() {
//   try {
//     const currentBalance = await Balance.findOne({});
//     return currentBalance;
//   } catch (error) {
//     log("Error", `BALANCE findOne: ${error.message}`);
//     return null;
//   }
// }

// export async function updateOne(update: Partial<IBalanceModel>) {
//   const currentBalance = await findOne();

//   if (!currentBalance) {
//     return null;
//   }

//   return Balance.updateOne({_id: currentBalance._id}, {
//     ...update,
//   });
// }
