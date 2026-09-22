import { NextRequest } from 'next/server'
import { SESSION_COOKIE, clearAuthCookies, isSecureRequest, readSessionFromValue } from '@/utils/customer-session'
import { buildCustomerLogoutUrl } from '@/utils/shopify-customer-auth'

export const GET = async (request: NextRequest) => {
  const session = await readSessionFromValue({ value: request.cookies.get(SESSION_COOKIE)?.value })
  const isSecure = isSecureRequest({ request })

  try {
    const logoutUrl = session
      ? await buildCustomerLogoutUrl({ idToken: session.idToken })
      : '/library'
    const destination = logoutUrl.startsWith('http')
      ? logoutUrl
      : new URL('/library', request.url).toString()
    const response = Response.redirect(destination)
    clearAuthCookies({ response, isSecure })
    return response
  } catch (error) {
    void error
    const response = Response.redirect(new URL('/library', request.url))
    clearAuthCookies({ response, isSecure })
    return response
  }
}
