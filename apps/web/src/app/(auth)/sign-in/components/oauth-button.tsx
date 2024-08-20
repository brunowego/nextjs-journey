'use client'

import { type JSX, useState } from 'react'
import { useAuthActions } from '@convex-dev/auth/react'

import Button, { type ButtonProps } from '@acme/ui/components/button'
import { Loader2 } from '@acme/ui/components/icon'

type OAuthButtonProps = ButtonProps & {
  provider: 'github'
}

export default function OAuthButton({
  provider,
  children,
  ...props
}: OAuthButtonProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false)
  const { signIn } = useAuthActions()

  return (
    <Button
      className='grid grid-cols-[24px_1fr_24px] gap-3'
      onClick={() => {
        setIsLoading(true)
        void signIn(provider, { redirectTo: '/' })
      }}
      {...props}
    >
      {children}

      {isLoading ? <Loader2 className='size-5 animate-spin' /> : null}
    </Button>
  )
}
