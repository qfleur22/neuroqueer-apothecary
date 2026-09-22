import { bytesToBase64Url } from '@/utils/base64url'
import { getShopifyStoreDomain } from '@/utils/shopify-domain'

interface OpenIdConfig {
  authorization_endpoint: string
  token_endpoint: string
  end_session_endpoint?: string
}

interface CustomerAccountDiscovery {
  graphql_api: string
}

interface TokenResponse {
  access_token: string
  refresh_token?: string
  id_token?: string
  expires_in?: number
}

const getClientId = () => {
  return process.env.SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID ?? ''
}

export const getCustomerCallbackUrl = ({ request }: { request: Request }) => {
  const url = new URL(request.url)
  return `${url.origin}/api/auth/shopify/callback`
}

export const createPkcePair = async () => {
  const verifierBytes = crypto.getRandomValues(new Uint8Array(32))
  const stateBytes = crypto.getRandomValues(new Uint8Array(16))
  const verifier = bytesToBase64Url({ bytes: verifierBytes })
  const state = bytesToBase64Url({ bytes: stateBytes })
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier))
  const challenge = bytesToBase64Url({ bytes: new Uint8Array(digest) })

  return { verifier, state, challenge }
}

const getOpenIdConfig = async () => {
  const storeDomain = getShopifyStoreDomain()
  const response = await fetch(`https://${storeDomain}/.well-known/openid-configuration`)

  if (!response.ok) {
    throw new Error(`OpenID discovery failed (${response.status})`)
  }

  return (await response.json()) as OpenIdConfig
}

const getGraphqlEndpoint = async () => {
  const storeDomain = getShopifyStoreDomain()
  const response = await fetch(`https://${storeDomain}/.well-known/customer-account-api`)

  if (!response.ok) {
    throw new Error(`Customer Account API discovery failed (${response.status})`)
  }

  const discovery = (await response.json()) as CustomerAccountDiscovery
  return discovery.graphql_api
}

export const buildCustomerLoginUrl = async ({
  request,
  challenge,
  state,
}: {
  request: Request
  challenge: string
  state: string
}) => {
  const openId = await getOpenIdConfig()
  const loginUrl = new URL(openId.authorization_endpoint)

  loginUrl.searchParams.set('client_id', getClientId())
  loginUrl.searchParams.set('response_type', 'code')
  loginUrl.searchParams.set('redirect_uri', getCustomerCallbackUrl({ request }))
  loginUrl.searchParams.set('scope', 'openid email customer-account-api:full')
  loginUrl.searchParams.set('state', state)
  loginUrl.searchParams.set('code_challenge', challenge)
  loginUrl.searchParams.set('code_challenge_method', 'S256')

  return loginUrl.toString()
}

export const exchangeCustomerCode = async ({
  request,
  code,
  verifier,
}: {
  request: Request
  code: string
  verifier: string
}) => {
  const openId = await getOpenIdConfig()
  const response = await fetch(openId.token_endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: getClientId(),
      redirect_uri: getCustomerCallbackUrl({ request }),
      code,
      code_verifier: verifier,
    }),
  })

  if (!response.ok) {
    throw new Error(`Token exchange failed (${response.status})`)
  }

  const tokens = (await response.json()) as TokenResponse

  return {
    accessToken: tokens.access_token,
    refreshToken: tokens.refresh_token,
    idToken: tokens.id_token,
    expiresAt: Date.now() + (tokens.expires_in ?? 3600) * 1000,
  }
}

export const refreshCustomerToken = async ({ refreshToken }: { refreshToken: string }) => {
  const openId = await getOpenIdConfig()
  const response = await fetch(openId.token_endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: getClientId(),
      refresh_token: refreshToken,
    }),
  })

  if (!response.ok) {
    throw new Error(`Token refresh failed (${response.status})`)
  }

  const tokens = (await response.json()) as TokenResponse

  return {
    accessToken: tokens.access_token,
    refreshToken: tokens.refresh_token ?? refreshToken,
    idToken: tokens.id_token,
    expiresAt: Date.now() + (tokens.expires_in ?? 3600) * 1000,
  }
}

export const buildCustomerLogoutUrl = async ({ idToken }: { idToken?: string }) => {
  const openId = await getOpenIdConfig()

  if (!openId.end_session_endpoint) {
    return '/library'
  }

  const logoutUrl = new URL(openId.end_session_endpoint)
  logoutUrl.searchParams.set('client_id', getClientId())

  if (idToken) {
    logoutUrl.searchParams.set('id_token_hint', idToken)
  }

  return logoutUrl.toString()
}

export const customerGraphql = async <T>({
  accessToken,
  query,
}: {
  accessToken: string
  query: string
}) => {
  const endpoint = await getGraphqlEndpoint()
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
    body: JSON.stringify({ query }),
  })

  const payload = (await response.json()) as { data?: T; errors?: { message: string }[] }

  if (!response.ok || payload.errors?.length) {
    throw new Error(payload.errors?.map((error) => error.message).join(', ') || `GraphQL ${response.status}`)
  }

  if (!payload.data) {
    throw new Error('Customer Account API returned no data')
  }

  return payload.data
}
