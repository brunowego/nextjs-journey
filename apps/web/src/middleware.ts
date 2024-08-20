import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  isAuthenticatedNextjs,
  nextjsMiddlewareRedirect,
} from '@acme/auth'

const isSignInPage = createRouteMatcher(['/sign-in'])
const isProtectedRoute = createRouteMatcher(['/product(.*)'])

export default convexAuthNextjsMiddleware((request) => {
  if (isSignInPage(request) && isAuthenticatedNextjs()) {
    return nextjsMiddlewareRedirect(request, '/product')
  }

  if (isProtectedRoute(request) && !isAuthenticatedNextjs()) {
    return nextjsMiddlewareRedirect(request, '/sign-in')
  }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
