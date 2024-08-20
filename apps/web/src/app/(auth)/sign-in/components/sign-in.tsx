'use client'

import type { JSX } from 'react'
import Link from 'next/link'

import { typographyVariants } from '@acme/ui/components/typography'
import { GitHub } from '@acme/ui/components/logo'

import OAuthButton from './oauth-button'

export default function SignIn(): JSX.Element {
  return (
    <>
      <div className='flex flex-col space-y-4'>
        <h1
          className={typographyVariants({
            className:
              'dark:bg-gradient-to-r dark:from-primary dark:via-lime-300 dark:to-lime-400 dark:bg-clip-text dark:text-transparent',
            variant: 'h1',
          })}
        >
          Login to Acme.
        </h1>

        <p className={typographyVariants({ size: 'xl', variant: 'muted' })}>
          Automate your tasks, stay organized, and make informed decisions
          effortlessly.
        </p>
      </div>

      <OAuthButton provider='github' size='lg'>
        <GitHub className='size-6' />

        <span>Continue with GitHub</span>
      </OAuthButton>

      <p className={typographyVariants({ size: 'sm', variant: 'muted' })}>
        By clicking continue, you acknowledge that you have read and agree to
        Acme's{' '}
        <Link className='underline underline-offset-4' href='/terms'>
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link className='underline underline-offset-4' href='/privacy'>
          Privacy Policy
        </Link>
        .
      </p>
    </>
  )
}
