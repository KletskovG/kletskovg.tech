import mongoose  from "mongoose";
import { getEnvVariable } from "utils/getEnvVariable";

export const connectDB = () => {
  const DB_CONNECTION = getEnvVariable("KRAKEN_DB_CONNECT");

  return new Promise((res, reject) => {
    if (!DB_CONNECTION) {
      reject(new Error("DB CONNECTION STRING WAS NOT FOUND"));
    }

    mongoose.connection
      .on("error", err => reject(err))
      .on("close", () => console.log("Database connection closed"))
      .once("open", () => res(mongoose.connections[0]));

    mongoose.connect(DB_CONNECTION)
    .catch(reject);
  });
};
