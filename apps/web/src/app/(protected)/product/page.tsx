import type { JSX } from 'react'

import ListProducts from './components/list-products'

export default async function ProductPage(): Promise<JSX.Element> {
  return <ListProducts />
}
