'use client'

import type { ReactNode, JSX } from 'react'
import { ConvexAuthNextjsProvider } from '@convex-dev/auth/nextjs'

import { ConvexReactClient } from '@acme/db'

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string,
  {
    verbose: true,
  },
)

type ConvexClientProviderProps = {
  children: ReactNode
}

export default function ConvexClientProvider({
  children,
}: ConvexClientProviderProps): JSX.Element {
  return (
    <ConvexAuthNextjsProvider client={convex}>
      {children}
    </ConvexAuthNextjsProvider>
  )
}
