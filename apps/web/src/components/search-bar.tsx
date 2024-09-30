'use client'

import { parseAsString, useQueryState } from 'nuqs'

import Input from '@acme/ui/components/input'
import { Search } from '@acme/ui/components/icon'

export default function SearchBar() {
  const [search, setSearch] = useQueryState(
    'q',
    parseAsString.withOptions({ shallow: false }).withDefault(''),
  )

  return (
    <div className='relative flex items-center'>
      <Search className='absolute inset-x-3 size-5 text-muted-foreground' />

      <Input
        className='max-w-xs pl-10'
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search products...'
        value={search}
      />
    </div>
  )
}
