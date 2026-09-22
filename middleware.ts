import { NextRequest, NextResponse } from 'next/server'
import { SESSION_COOKIE, readSessionFromValue } from '@/utils/customer-session'

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl

  if (pathname === '/library' || !pathname.startsWith('/library/')) {
    return NextResponse.next()
  }

  const session = await readSessionFromValue({
    value: request.cookies.get(SESSION_COOKIE)?.value,
  })

  if (session) {
    return NextResponse.next()
  }

  const loginUrl = new URL('/api/auth/shopify/login', request.url)
  loginUrl.searchParams.set('returnTo', pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/library/:path*'],
}
