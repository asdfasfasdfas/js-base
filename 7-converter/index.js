function convert(amount, currencyFrom, currencyTo) {
  const rubRate = 50;
  const usdRate = 45;

  if (currencyFrom === "руб" && currencyTo === "$") {
    return amount / rubRate;
  } else if (currencyFrom === "$" && currencyTo == "руб") {
    return amount / usdRate;
  }

  return null;
}
