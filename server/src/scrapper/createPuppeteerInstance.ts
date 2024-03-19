import { isCurrentUserRoot } from "utils/isCurrentUserRoot";
import puppeteer from "puppeteer";
import { log } from "logger/logger";

export async function createPuppeteerInstance() {
  return puppeteer.launch({
    headless: true,
    executablePath: "/usr/bin/google-chrome",
    args: isCurrentUserRoot() ? ["--no-sandbox"] : undefined
  })
    .then(browser => {
      log("Info", "Puppeteer launched");
      return browser;
    })
    .catch((err = "") => {
      log("Error", `While creating puppeteer  ${err}`);
      return;
    });
}
