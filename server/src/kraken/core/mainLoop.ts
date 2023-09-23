import { getInitialInfo } from "kraken/core/getInitialInfo";
import { log } from "logger/logger";

let isBootRun = true;
let isKrakenEnabled = true;

export function stopMainLoop () {
  isKrakenEnabled = false;
  log("Notify", "Kraken bot stopped");
}

export function startMainLoop() {
  isKrakenEnabled = true;
  isBootRun = true;
  log("Notify", "Kraken bot started");
}

export async function mainLoop() {
  if (!isKrakenEnabled) {
    console.log("KRAKEN IS NOT ENABLED");
    return;
  }

  if (isBootRun) {
    getInitialInfo();
    isBootRun = false;
  }

  console.log("BOOT");
  console.log(isBootRun);
  console.log("KRAKEN IS ENABLED");
}
