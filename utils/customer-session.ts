import { cookies } from 'next/headers'
import { CustomerSession, PkceState } from '@/models/customer-session'
import { decryptJson, encryptJson } from '@/utils/cookie-crypto'

export const SESSION_COOKIE = 'nqa_customer'
export const PKCE_COOKIE = 'nqa_pkce'

const sessionCookieOptions = ({ isSecure }: { isSecure: boolean }) => {
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    path: '/',
    secure: isSecure,
    maxAge: 60 * 60 * 24 * 30,
  }
}

const pkceCookieOptions = ({ isSecure }: { isSecure: boolean }) => {
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    path: '/',
    secure: isSecure,
    maxAge: 60 * 10,
  }
}

export const isSecureRequest = ({ request }: { request: Request }) => {
  return new URL(request.url).protocol === 'https:'
}

export const readSessionFromValue = async ({ value }: { value?: string }) => {
  if (!value) {
    return null
  }

  const session = await decryptJson<CustomerSession>({ value })

  if (!session?.accessToken) {
    return null
  }

  return session
}

export const readPkceFromValue = async ({ value }: { value?: string }) => {
  if (!value) {
    return null
  }

  return decryptJson<PkceState>({ value })
}

export const readCustomerSession = async () => {
  const store = await cookies()
  return readSessionFromValue({ value: store.get(SESSION_COOKIE)?.value })
}

export const buildSessionCookie = async ({
  session,
  isSecure,
}: {
  session: CustomerSession
  isSecure: boolean
}) => {
  return {
    name: SESSION_COOKIE,
    value: await encryptJson({ value: session }),
    options: sessionCookieOptions({ isSecure }),
  }
}

export const buildPkceCookie = async ({
  pkce,
  isSecure,
}: {
  pkce: PkceState
  isSecure: boolean
}) => {
  return {
    name: PKCE_COOKIE,
    value: await encryptJson({ value: pkce }),
    options: pkceCookieOptions({ isSecure }),
  }
}

export const clearAuthCookies = ({
  response,
  isSecure,
}: {
  response: Response
  isSecure: boolean
}) => {
  response.headers.append(
    'Set-Cookie',
    serializeCookie({
      name: SESSION_COOKIE,
      value: '',
      options: { ...sessionCookieOptions({ isSecure }), maxAge: 0 },
    }),
  )
  response.headers.append(
    'Set-Cookie',
    serializeCookie({
      name: PKCE_COOKIE,
      value: '',
      options: { ...pkceCookieOptions({ isSecure }), maxAge: 0 },
    }),
  )
}

export const serializeCookie = ({
  name,
  value,
  options,
}: {
  name: string
  value: string
  options: {
    httpOnly: boolean
    sameSite: 'lax'
    path: string
    secure: boolean
    maxAge: number
  }
}) => {
  const parts = [
    `${name}=${value}`,
    `Path=${options.path}`,
    `Max-Age=${options.maxAge}`,
    'SameSite=Lax',
  ]

  if (options.httpOnly) {
    parts.push('HttpOnly')
  }

  if (options.secure) {
    parts.push('Secure')
  }

  return parts.join('; ')
}

export const appendCookie = ({
  response,
  cookie,
}: {
  response: Response
  cookie: {
    name: string
    value: string
    options: {
      httpOnly: boolean
      sameSite: 'lax'
      path: string
      secure: boolean
      maxAge: number
    }
  }
}) => {
  response.headers.append('Set-Cookie', serializeCookie(cookie))
}
