export function getDigit(number, n, fromLeft) {
  const location = fromLeft ? getDigitCount(number) + 1 - n : n;
  return Math.floor((number / Math.pow(10, location - 1)) % 10);
}
export function getDigitCount(number) {
  return Math.max(Math.floor(Math.log10(Math.abs(number))), 0) + 1;
}
