import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./src/components/**/*.{ts,tsx}'],
} satisfies Config

export type { Config }