import numbro from 'numbro'

export type toFloatOptions = {
  digits?: number
}

export function toFloat(
  num: number | undefined,
  options?: toFloatOptions,
): string {
  const { digits = 3 } = options ?? {}

  if (num === 0) {
    return '0'
  }

  if (!num) {
    return '-'
  }

  return numbro(num).format({
    average: true,
    mantissa: num > 1000 ? 2 : digits,
    abbreviations: {
      thousand: 'K',
      million: 'M',
      billion: 'B',
    },
  })
}
