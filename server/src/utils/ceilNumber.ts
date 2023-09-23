export function ceilNumber(value: number, digits: number) {
  const strValue = String(value);
  const dotIndex = strValue.indexOf(".");

  if (dotIndex === -1 || digits <= 0) {
    return value;
  }

  return Number(strValue.slice(0, dotIndex + 1 + digits));
}
