'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { User } from 'lucide-react'

export const AccountButton = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    const loadSession = async () => {
      try {
        const response = await fetch('/api/auth/session')
        const payload = (await response.json()) as { isSignedIn?: boolean }
        setIsSignedIn(Boolean(payload.isSignedIn))
      } catch (error) {
        void error
      }
    }

    void loadSession()
  }, [])

  const href = isSignedIn ? '/profile' : '/api/auth/shopify/login?returnTo=/profile'
  const label = isSignedIn ? 'Your profile' : 'Log in'

  return (
    <div className="absolute right-3 top-3 z-20 sm:right-6 sm:top-4">
      <Link
        href={href}
        aria-label={label}
        title={label}
        className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-room-gold bg-room-teal text-room-gold shadow-md transition hover:-translate-y-0.5 hover:bg-[#0f5c53] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-room-gold sm:h-12 sm:w-12 ${
          isSignedIn ? 'ring-2 ring-room-gold' : ''
        }`}
      >
        <User size={22} aria-hidden="true" />
      </Link>
    </div>
  )
}
