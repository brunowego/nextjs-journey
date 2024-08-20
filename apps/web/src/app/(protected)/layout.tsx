import type { ReactNode, JSX } from 'react'

import Layout from '@acme/ui/components/layout'

import LogOut from '@/components/log-out'

interface DashboardLayoutProps {
  children: ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps): Promise<JSX.Element> {
  return (
    <Layout>
      <Layout.Header>
        <LogOut className='mt-auto' />
      </Layout.Header>

      <Layout.Content>{children}</Layout.Content>
    </Layout>
  )
}
