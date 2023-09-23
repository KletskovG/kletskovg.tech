import { getEnvVariable } from "utils/getEnvVariable";
import { TinkoffInvestApi } from "tinkoff-invest-api";
import { log } from "logger/logger";

const token = getEnvVariable("TINKOFF_API_KEY");

export function createTinkoffClient(): TinkoffInvestApi | undefined {
  if (!token) {
    log("Error", "Not enough data to create tinkoff api client");
    return;
  }

  try {
    const client = new TinkoffInvestApi({ token });
    return client;
  } catch (error) {
    log("Error", `Cant create tinkoff client ${JSON.stringify(error)}`);
    return;
  }
}
