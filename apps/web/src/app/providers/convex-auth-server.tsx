import type { ReactNode, JSX } from 'react'
import { ConvexAuthNextjsServerProvider } from '@convex-dev/auth/nextjs/server'

type ConvexClientProviderProps = {
  children: ReactNode
}

export default function ConvexClientProvider({
  children,
}: ConvexClientProviderProps): JSX.Element {
  return (
    <ConvexAuthNextjsServerProvider>{children}</ConvexAuthNextjsServerProvider>
  )
}
