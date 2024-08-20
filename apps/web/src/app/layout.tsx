import type { ReactNode, JSX } from 'react'
import type { Metadata } from 'next'

import { fontSans } from '@/lib/fonts'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Next.js with Convex (BaaS)',
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>): JSX.Element {
  return (
    <html lang='en'>
      <body className={fontSans.className}>{children}</body>
    </html>
  )
}