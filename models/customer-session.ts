export interface CustomerSession {
  accessToken: string
  refreshToken?: string
  idToken?: string
  expiresAt: number
  email?: string
}

export interface PkceState {
  state: string
  verifier: string
  returnTo: string
}
