import type { ReactNode, JSX } from 'react'

import ConvexAuthServerProvider from './convex-auth-server'

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps): JSX.Element {
  return <ConvexAuthServerProvider>{children}</ConvexAuthServerProvider>
}
