import { base64UrlToBytes, bytesToBase64Url } from '@/utils/base64url'

const getKey = async () => {
  const secret = process.env.SHOPIFY_SESSION_SECRET ?? 'dev-only-change-this-session-secret'
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(secret))

  return crypto.subtle.importKey('raw', hash, 'AES-GCM', false, ['encrypt', 'decrypt'])
}

export const encryptJson = async ({ value }: { value: unknown }) => {
  const key = await getKey()
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const encoded = new TextEncoder().encode(JSON.stringify(value))
  const cipher = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoded)
  const packed = new Uint8Array(iv.length + cipher.byteLength)

  packed.set(iv)
  packed.set(new Uint8Array(cipher), iv.length)

  return bytesToBase64Url({ bytes: packed })
}

export const decryptJson = async <T>({ value }: { value: string }): Promise<T | null> => {
  try {
    const packed = base64UrlToBytes({ value })
    const iv = packed.slice(0, 12)
    const cipher = packed.slice(12)
    const key = await getKey()
    const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, cipher)

    return JSON.parse(new TextDecoder().decode(plain)) as T
  } catch (error) {
    void error
    return null
  }
}
