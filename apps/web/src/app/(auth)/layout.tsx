import type { Metadata } from 'next'
import type { ReactNode, JSX } from 'react'

import Layout from '@acme/ui/components/layout'

export const metadata: Metadata = {
  title: 'Dashboard',
}

interface DashboardLayoutProps {
  children: ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps): Promise<JSX.Element> {
  return (
    <Layout>
      <Layout.Header />

      <Layout.Content>
        <section className='flex min-h-screen w-full items-center justify-center overflow-hidden p-6 md:p-0'>
          <div className='m-auto flex w-full max-w-lg flex-col space-y-6 p-4 lg:px-5'>
            {children}
          </div>
        </section>
      </Layout.Content>
    </Layout>
  )
}
