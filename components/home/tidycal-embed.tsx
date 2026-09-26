'use client'

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    TidyCal?: {
      init: () => void
    }
  }
}

const SCRIPT_SRC = 'https://tidycal.com/js/embed.js'
const DEFAULT_PATH = 'neuroqueerapothecary'

export const TidyCalEmbed = () => {
  const path = process.env.NEXT_PUBLIC_TIDYCAL_PATH || DEFAULT_PATH

  const initialize = () => {
    window.TidyCal?.init()
  }

  useEffect(() => {
    initialize()
  }, [path])

  if (!path) {
    return (
      <p className="rounded-md border border-room-gold bg-room-teal/10 px-4 py-3 text-center">
        Booking is open by email for now.{' '}
        <a
          href="mailto:quinndelafleur@gmail.com?subject=Coaching"
          className="font-display text-room-teal underline decoration-room-gold underline-offset-4"
        >
          Email Quinn to book a session
        </a>
        .
      </p>
    )
  }

  return (
    <div className="overflow-hidden rounded-md bg-[#f7f0e6] ring-1 ring-room-brown/20">
      <div className="tidycal-embed min-h-[36rem]" data-path={path} />
      <Script src={SCRIPT_SRC} strategy="afterInteractive" onLoad={initialize} />
      <p className="px-4 pb-4 text-center font-gallery text-sm text-black/70">
        If the calendar doesn&apos;t load,{' '}
        <a
          href={`https://tidycal.com/${path}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-room-teal underline decoration-room-gold underline-offset-4"
        >
          open the TidyCal booking page
        </a>
        .
      </p>
    </div>
  )
}
