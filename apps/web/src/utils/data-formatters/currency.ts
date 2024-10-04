import numbro from 'numbro'

export type toCurrencyOptions = {
  currencySymbol?: string
  noDecimals?: boolean
}

export function toCurrency(
  value: string | number,
  options?: toCurrencyOptions,
): string {
  const { currencySymbol = '$', noDecimals } = options || {}

  const numericValue =
    typeof value === 'string' ? Number.parseFloat(value) : value

  if (!Number.isFinite(numericValue)) {
    throw new Error('Invalid value for currency formatting')
  }

  return numbro(numericValue).formatCurrency({
    currencySymbol,
    mantissa: noDecimals ? 0 : 2,
  })
}

export type toDollarAmountOptions = {
  currencySymbol?: string
  digits?: number
  round?: boolean
}

export function toDollarAmount(
  num: number | undefined,
  options?: toDollarAmountOptions,
): string {
  const { currencySymbol = '$', digits = 2, round = true } = options ?? {}

  if (num === 0) {
    return '0'
  }

  if (!num) {
    return '-'
  }

  if (num < 0.001 && digits <= 3) {
    return '<0.001'
  }

  return numbro(num)
    .formatCurrency({
      currencySymbol,
      average: round,
      mantissa: num > 1000 ? 2 : digits,
      abbreviations: {
        million: 'M',
        billion: 'B',
      },
    })
    .toUpperCase()
}
