import { isCurrentUserRoot } from "utils/isCurrentUserRoot";
import puppeteer from "puppeteer";

export async function createPuppeteerInstance() {
  console.info("LAUNCHING PUPETEER");
  const browser = await puppeteer.launch({
    headless: true,
    args: isCurrentUserRoot() ? ["--no-sandbox"] : undefined
  });
  console.info("LAUNCHED PUPETEER");

  return browser;
}
