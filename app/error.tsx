'use client'

import { useEffect } from 'react'
import { ErrorActionButton, ErrorActionLink, ErrorRoom } from '@/components/home/error-room'

export default function Error({
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
    <ErrorRoom
      title="Something spilled"
      actions={
        <>
          <ErrorActionButton label="Try again" onClick={reset} />
          <ErrorActionLink href="/" label="Go home" />
        </>
      }
    >
      <p>Something unexpected happened in the apothecary. It is not your fault.</p>
      {error.digest ? <p className="font-gallery text-sm text-black/60">Error ID: {error.digest}</p> : null}
    </ErrorRoom>
  )
}
