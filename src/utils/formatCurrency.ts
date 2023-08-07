const CURRENCY_FORMATTER = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'BDT',
});

export const formatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};
