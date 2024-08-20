'use client'

import type { JSX } from 'react'

import { useQuery } from '@acme/db'

import api from '@/lib/api'

import Page from '@acme/ui/components/page'

export default function ListProducts(): JSX.Element {
  const products = useQuery(api.products.getAll)

  return (
    <Page>
      <Page.Header>
        <Page.Title>Products</Page.Title>
      </Page.Header>

      <Page.Content>{JSON.stringify(products)}</Page.Content>
    </Page>
  )
}
