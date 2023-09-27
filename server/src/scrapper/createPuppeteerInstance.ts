import { isCurrentUserRoot } from "utils/isCurrentUserRoot";
import puppeteer from "puppeteer";
import { log } from 'logger/logger';

export async function createPuppeteerInstance() {
  // console.info("LAUNCHING PUPETEER");
  // const browser = await ;
  // console.info("LAUNCHED PUPETEER");

  // return browser;
  return puppeteer.launch({
    headless: true,
    args: isCurrentUserRoot() ? ["--no-sandbox"] : undefined
  })
    .then(browser => {
      log('Info', 'Puppeteer launched');
      return browser;
    })
    .catch((err = '') => {
      log('Error', `While creating puppeteer  ${JSON.stringify(err)}`);
      return;
    })
}
