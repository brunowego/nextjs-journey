'use client'

import { type JSX, useState } from 'react'
import { useAuthActions } from '@convex-dev/auth/react'

import Button, { type ButtonProps } from '@acme/ui/components/button'
import { Loader2, LogOut as Icon } from '@acme/ui/components/icon'

type LogOutProps = ButtonProps

export default function LogOut({ className }: LogOutProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false)
  const { signOut } = useAuthActions()

  return (
    <Button
      className={className}
      onClick={() => {
        setIsLoading(true)
        signOut()
      }}
      variant='link'
    >
      {isLoading ? (
        <Loader2 className='size-5 animate-spin' />
      ) : (
        <Icon className='size-5 shrink-0' />
      )}

      <span className='sr-only'>Log Out</span>
    </Button>
  )
}
