import { NextRequest } from 'next/server'
import {
  PKCE_COOKIE,
  appendCookie,
  buildSessionCookie,
  isSecureRequest,
  readPkceFromValue,
  serializeCookie,
} from '@/utils/customer-session'
import { getSafeReturnPath } from '@/utils/safe-return-path'
import { exchangeCustomerCode } from '@/utils/shopify-customer-auth'

export const GET = async (request: NextRequest) => {
  const code = request.nextUrl.searchParams.get('code')
  const state = request.nextUrl.searchParams.get('state')
  const isSecure = isSecureRequest({ request })
  const pkce = await readPkceFromValue({ value: request.cookies.get(PKCE_COOKIE)?.value })

  if (!code || !state || !pkce || pkce.state !== state) {
    return Response.redirect(new URL('/library?auth=error', request.url))
  }

  try {
    const tokens = await exchangeCustomerCode({
      request,
      code,
      verifier: pkce.verifier,
    })
    const response = Response.redirect(new URL(getSafeReturnPath({ value: pkce.returnTo }), request.url))
    const session = await buildSessionCookie({
      session: tokens,
      isSecure,
    })

    appendCookie({ response, cookie: session })
    response.headers.append(
      'Set-Cookie',
      serializeCookie({
        name: PKCE_COOKIE,
        value: '',
        options: {
          httpOnly: true,
          sameSite: 'lax',
          path: '/',
          secure: isSecure,
          maxAge: 0,
        },
      }),
    )

    return response
  } catch (error) {
    void error
    return Response.redirect(new URL('/library?auth=error', request.url))
  }
}
