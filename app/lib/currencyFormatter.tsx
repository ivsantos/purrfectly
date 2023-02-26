export default function currencyFormatter(
  value: number,
  currency: string = 'EUR',
  locale?: string,
) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
}
