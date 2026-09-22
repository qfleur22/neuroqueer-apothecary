export const bytesToBase64Url = ({ bytes }: { bytes: Uint8Array }) => {
  let binary = ''

  for (const byte of bytes) {
    binary += String.fromCharCode(byte)
  }

  return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '')
}

export const base64UrlToBytes = ({ value }: { value: string }) => {
  const padded = value.replaceAll('-', '+').replaceAll('_', '/')
  const padLength = (4 - (padded.length % 4)) % 4
  const binary = atob(`${padded}${'='.repeat(padLength)}`)
  const bytes = new Uint8Array(binary.length)

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index)
  }

  return bytes
}
