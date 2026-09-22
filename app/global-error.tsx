'use client'

import { Caveat, Cormorant_Garamond, Fraunces, Inter } from 'next/font/google'
import { useEffect } from 'react'
import { ErrorActionButton, ErrorActionLink, ErrorRoom } from '@/components/home/error-room'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body className={`${inter.className} ${fraunces.variable} ${caveat.variable} ${cormorant.variable}`}>
        <ErrorRoom
          title="Something spilled"
          actions={
            <>
              <ErrorActionButton label="Refresh the page" onClick={reset} />
              <ErrorActionLink href="/" label="Go home" />
            </>
          }
        >
          <p>A critical error occurred. Please refresh the page or return home.</p>
        </ErrorRoom>
      </body>
    </html>
  )
}
