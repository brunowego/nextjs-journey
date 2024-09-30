import type { JSX } from 'react'
import Image from 'next/image'

import type { Product } from '@/types'

type CardProductProps = Product

export default function CardProduct({
  title,
  price,
  images,
}: CardProductProps): JSX.Element {
  return (
    <div className='group rounded-lg border'>
      <div className='aspect-square overflow-hidden'>
        <Image
          alt={title}
          className='size-full object-contain transition-all duration-300 group-hover:scale-125'
          src={images[0] as string}
          width={256}
          height={256}
        />
      </div>

      <div className='space-y-4 p-4'>
        <div className='flex justify-between space-x-4 text-sm'>
          <h3 className='truncate'>{title}</h3>

          <span className='font-semibold'>${price}</span>
        </div>

        <button
          className='group flex h-10 w-full items-stretch overflow-hidden rounded-md font-medium text-background'
          type='button'
        >
          <div className='flex w-[inherit] items-center justify-center bg-gray-100 text-xs uppercase transition-colors group-hover:bg-emerald-600 group-hover:text-white'>
            Add
          </div>

          <div className='flex items-center justify-center bg-gray-300 px-4 transition-colors group-hover:bg-emerald-500 group-hover:text-white'>
            +
          </div>
        </button>
      </div>
    </div>
  )
}
