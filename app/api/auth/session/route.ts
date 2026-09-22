import { NextRequest } from 'next/server'
import { SESSION_COOKIE, readSessionFromValue } from '@/utils/customer-session'

export const GET = async (request: NextRequest) => {
  const session = await readSessionFromValue({ value: request.cookies.get(SESSION_COOKIE)?.value })

  return Response.json({
    isSignedIn: Boolean(session),
    email: session?.email ?? null,
  })
}
