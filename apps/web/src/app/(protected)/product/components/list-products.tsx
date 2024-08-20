import type { JSX } from 'react'

import Page from '@acme/ui/components/page'

export default function ListProducts(): JSX.Element {
  return (
    <Page>
      <Page.Header>
        <Page.Title>Products</Page.Title>
      </Page.Header>

      <Page.Content />
    </Page>
  )
}
