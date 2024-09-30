import type { JSX } from 'react'
import { createSearchParamsCache, parseAsString } from 'nuqs/server'

import getAllProducts from '@/app/actions'
import Page from '@/components/page'
import SearchBar from '@/components/search-bar'
import ProductCard from '@/components/product-card'

const searchParamsCache = createSearchParamsCache({
  q: parseAsString.withDefault(''),
})

type HomePageProps = {
  searchParams: Record<string, string>
}

export default async function HomePage({
  searchParams,
}: HomePageProps): Promise<JSX.Element> {
  const parsedParams = searchParamsCache.parse(searchParams)

  const products = await getAllProducts(parsedParams.q)

  return (
    <Page>
      <Page.Header>
        <Page.Title>Products</Page.Title>
      </Page.Header>

      <Page.Content className='space-y-4'>
        <SearchBar />

        <div className='grid grid-cols-4 gap-2'>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Page.Content>
    </Page>
  )
}
