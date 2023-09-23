const baseAppUrl = "https://pro.kraken.com/app/trade";

export function buildAppUrl(ticker: string): string {
  const tickerLowerCase = ticker.toLowerCase();
  const fiatCurrencyIdx = tickerLowerCase.indexOf("usd") === -1 ?
    tickerLowerCase.indexOf("eur") :
    tickerLowerCase.indexOf("usd");

  if (fiatCurrencyIdx !== -1) {
    return `${baseAppUrl}/${tickerLowerCase.slice(0, fiatCurrencyIdx)}-${tickerLowerCase.slice(fiatCurrencyIdx)}`;
  }

  return "";
}
