import { convexAuth } from '@convex-dev/auth/server'
import GitHub from '@auth/core/providers/github'
import Resend from '@auth/core/providers/resend'

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [GitHub, Resend],
})
