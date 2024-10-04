import type { JSX } from 'react'

import Page from '@/components/page'
import { toCurrency, toDollarAmount, toFloat } from '@/utils/data-formatters'

export default function HomePage(): JSX.Element {
  return (
    <Page>
      <Page.Header>
        <Page.Title>Number Format</Page.Title>
      </Page.Header>

      <Page.Content>
        <div>
          <div className='px-4 sm:px-0'>
            <h3 className='font-semibold leading-7'>Using numbro.js</h3>
            <p className='mt-1 max-w-2xl text-muted-foreground text-sm leading-6'>
              A javascript library for formatting and manipulating numbers.
            </p>
          </div>

          <div className='mt-6 border-t'>
            <dl className='divide-y'>
              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='font-medium text-muted-foreground text-sm leading-6'>
                  Currency
                </dt>
                <dd className='mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0'>
                  {toCurrency(1000)}
                </dd>
              </div>

              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='font-medium text-muted-foreground text-sm leading-6'>
                  Currency{' '}
                  <span className='text-muted-foreground text-xs'>
                    (No decimals)
                  </span>
                </dt>
                <dd className='mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0'>
                  {toCurrency(1000, { noDecimals: true })}
                </dd>
              </div>

              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='font-medium text-muted-foreground text-sm leading-6'>
                  Currency{' '}
                  <span className='text-muted-foreground text-xs'>
                    (Brazilian Real)
                  </span>
                </dt>
                <dd className='mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0'>
                  {toCurrency(1000, {
                    currencySymbol: 'R$ ',
                  })}
                </dd>
              </div>

              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='font-medium text-muted-foreground text-sm leading-6'>
                  Dollar Amount
                </dt>
                <dd className='mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0'>
                  {toDollarAmount(1000000)}
                </dd>
              </div>

              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='font-medium text-muted-foreground text-sm leading-6'>
                  Float
                </dt>
                <dd className='mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0'>
                  {toFloat(1000000)}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Page.Content>
    </Page>
  )
}
