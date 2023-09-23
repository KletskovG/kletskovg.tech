export function getCurrencyValue(serverCtx: string, currencyName: string): string {
  const currencyIndex = serverCtx.indexOf(currencyName);

  if (currencyIndex === -1) {
    return "0";
  }

  const currencyString = serverCtx.slice(currencyIndex);
  const valueStart = currencyString.indexOf("<Value>");
  const valueEnd = currencyString.indexOf("</Value>");

  if (valueStart === -1 || valueEnd === -1) {
    return "0";
  }

  return currencyString.slice(valueStart + 7, valueEnd);
}
