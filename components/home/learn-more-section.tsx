'use client'

import { useEffect, useRef } from 'react'

export const LearnMoreSection = ({
  title,
  children,
  id,
  headingLevel = 2,
}: {
  title: string
  children: React.ReactNode
  id?: string
  headingLevel?: 2 | 3
}) => {
  const detailsRef = useRef<HTMLDetailsElement>(null)
  const Heading = headingLevel === 3 ? 'h3' : 'h2'

  useEffect(() => {
    if (!id) {
      return
    }

    const openIfHashMatches = () => {
      if (window.location.hash === `#${id}` && detailsRef.current) {
        detailsRef.current.open = true
      }
    }

    openIfHashMatches()
    window.addEventListener('hashchange', openIfHashMatches)

    return () => {
      window.removeEventListener('hashchange', openIfHashMatches)
    }
  }, [id])

  return (
    <details ref={detailsRef} id={id} className="guide-expand">
      <summary>
        <Heading className="guide-expand-title">{title}</Heading>
        <span className="guide-expand-arrow" aria-hidden="true" />
      </summary>
      <div className="guide-expand-body">{children}</div>
    </details>
  )
}
