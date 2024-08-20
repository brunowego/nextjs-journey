import { cva } from 'class-variance-authority'

export const typographyVariants = cva('', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm leading-6',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl leading-8',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
    variant: {
      title: 'text-lg leading-8',
      h1: 'text-3xl leading-10',
      p: 'text-base',
      muted: 'text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
  compoundVariants: [
    {
      variant: ['h1'],
      className: 'font-medium tracking-tight',
    },
  ],
})
