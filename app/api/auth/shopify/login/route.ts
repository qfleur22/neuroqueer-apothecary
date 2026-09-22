import { NextRequest } from 'next/server'
import {
  appendCookie,
  buildPkceCookie,
  isSecureRequest,
} from '@/utils/customer-session'
import { getSafeReturnPath } from '@/utils/safe-return-path'
import { isShopifyCustomerAuthConfigured } from '@/utils/shopify-domain'
import { buildCustomerLoginUrl, createPkcePair } from '@/utils/shopify-customer-auth'

export const GET = async (request: NextRequest) => {
  const returnTo = getSafeReturnPath({ value: request.nextUrl.searchParams.get('returnTo') })

  if (!isShopifyCustomerAuthConfigured()) {
    return Response.redirect(new URL('/library?auth=setup', request.url))
  }

  try {
    const { verifier, state, challenge } = await createPkcePair()
    const loginUrl = await buildCustomerLoginUrl({ request, challenge, state })
    const response = Response.redirect(loginUrl)
    const pkce = await buildPkceCookie({
      pkce: { state, verifier, returnTo },
      isSecure: isSecureRequest({ request }),
    })

    appendCookie({ response, cookie: pkce })
    return response
  } catch (error) {
    void error
    return Response.redirect(new URL('/library?auth=error', request.url))
  }
}
