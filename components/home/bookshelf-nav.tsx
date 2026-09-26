'use client'

import { useEffect, useState, type CSSProperties, type MouseEvent } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PothosPlant } from '@/components/home/pothos-plant'
import { BookLink } from '@/models/book-link'

const books: BookLink[] = [
  {
    title: 'About',
    href: '/about',
    tone: 'gold',
    heightClass: 'h-[9rem] sm:h-[11.2rem]',
    widthClass: 'w-7 sm:w-9',
    tilt: 0,
  },
  {
    title: 'Coaching',
    href: '/coaching',
    tone: 'ink',
    heightClass: 'h-[9.2rem] sm:h-[11.4rem]',
    widthClass: 'w-7 sm:w-9',
    tilt: 0,
  },
  {
    title: 'Contact',
    href: '/about#contact',
    tone: 'teal',
    heightClass: 'h-[8.4rem] sm:h-[10.4rem]',
    widthClass: 'w-7 sm:w-9',
    tilt: 0,
  },
  {
    title: 'Drag',
    href: '/drag',
    tone: 'ink',
    heightClass: 'h-[8.8rem] sm:h-[11rem]',
    widthClass: 'w-7 sm:w-9',
    tilt: 0,
  },
  {
    title: 'Portfolio',
    href: '/portfolio',
    tone: 'gold',
    heightClass: 'h-[9.6rem] sm:h-[11.8rem]',
    widthClass: 'w-8 sm:w-10',
    tilt: 0,
  },
  {
    title: 'Resources',
    href: '/resources',
    tone: 'brown',
    heightClass: 'h-[8rem] sm:h-[10rem]',
    widthClass: 'w-7 sm:w-10',
    tilt: 0,
  },
  {
    title: 'EDS',
    href: '/eds',
    tone: 'teal',
    heightClass: 'h-[8.6rem] sm:h-[10.8rem]',
    widthClass: 'w-6 sm:w-8',
    tilt: 0,
  },
  {
    title: 'Store',
    href: '/store',
    tone: 'gold',
    heightClass: 'h-[8.5rem] sm:h-[10.6rem]',
    widthClass: 'w-6 sm:w-8',
    tilt: 0,
  },
  {
    title: 'Blog',
    href: '/blog',
    tone: 'ink',
    heightClass: 'h-[9rem] sm:h-[11.2rem]',
    widthClass: 'w-7 sm:w-9',
    tilt: 0,
  },
]

const toneClasses: Record<BookLink['tone'], { spine: string; text: string; band: string }> = {
  teal: {
    spine: 'bg-gradient-to-r from-[#0c4a43] via-room-teal to-[#0f5c53]',
    text: 'text-room-gold',
    band: 'bg-room-gold',
  },
  gold: {
    spine: 'bg-gradient-to-r from-[#c4922c] via-room-gold to-[#e8b44a]',
    text: 'text-black',
    band: 'bg-[#3b2a22]',
  },
  brown: {
    spine: 'bg-gradient-to-r from-[#6a564a] via-room-brown to-[#7d6558]',
    text: 'text-room-gold',
    band: 'bg-room-gold',
  },
  ink: {
    spine: 'bg-gradient-to-r from-black via-[#161616] to-[#0c0c0c]',
    text: 'text-room-gold',
    band: 'bg-room-gold',
  },
}

const isBookActive = ({
  book,
  pathname,
  hash,
}: {
  book: BookLink
  pathname: string
  hash: string
}) => {
  if (book.href === '/about#contact') {
    return pathname === '/about' && hash === '#contact'
  }

  if (book.href === '/about') {
    return pathname === '/about' && hash !== '#contact'
  }

  if (book.href === '/drag') {
    return pathname === '/drag' || pathname.startsWith('/drag/')
  }

  if (book.href === '/store') {
    return (
      pathname === '/store' ||
      pathname.startsWith('/store/') ||
      pathname === '/transition' ||
      pathname === '/binder' ||
      pathname === '/diy-binder' ||
      pathname === '/custom-binder' ||
      pathname === '/anime' ||
      pathname === '/anime-panel' ||
      pathname === '/care-plan' ||
      pathname === '/care-plan-workshop' ||
      pathname === '/consent' ||
      pathname === '/consent-workshop' ||
      pathname === '/bodily-autonomy' ||
      pathname.startsWith('/love-languages')
    )
  }

  if (book.href === '/resources' && pathname === '/charlotte') {
    return true
  }

  return pathname === book.href
}

export const BookshelfNav = () => {
  const pathname = usePathname()
  const [hash, setHash] = useState('')

  useEffect(() => {
    const syncHash = () => {
      setHash(window.location.hash)
    }

    syncHash()
    window.addEventListener('hashchange', syncHash)

    return () => {
      window.removeEventListener('hashchange', syncHash)
    }
  }, [pathname])

  const handleBookClick = ({
    event,
    book,
  }: {
    event: MouseEvent<HTMLAnchorElement>
    book: BookLink
  }) => {
    if (book.href === '/about' && pathname === '/about') {
      if (window.location.hash) {
        event.preventDefault()
        window.history.pushState(null, '', '/about')
        setHash('')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    if (book.href === '/about#contact' && pathname === '/about') {
      event.preventDefault()
      window.history.pushState(null, '', '/about#contact')
      setHash('#contact')
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        aria-label="Bookshelf"
        className="mx-auto flex max-w-6xl items-end gap-2 px-2 pt-6 sm:gap-4 sm:px-8 sm:pt-8"
      >
        <PothosPlant isActive={pathname === '/'} />

        <ul className="flex min-h-[11.5rem] items-end gap-2 pb-0 sm:min-h-[14rem] sm:gap-3.5">
          {books.map((book) => {
            const isActive = isBookActive({ book, pathname, hash })
            const tone = toneClasses[book.tone]

            return (
              <li
                key={book.href}
                className={`relative list-none ${isActive ? 'z-10' : 'z-0 hover:z-10 focus-within:z-10'}`}
              >
                <Link
                  href={book.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(event) => {
                    handleBookClick({ event, book })
                  }}
                  style={{ '--book-tilt': `${book.tilt}deg` } as CSSProperties}
                  className={`book-spine relative flex ${book.heightClass} ${book.widthClass} ${tone.spine} ${tone.text} flex-col items-center justify-between overflow-hidden rounded-[3px] py-3 shadow-[2px_6px_10px_rgba(0,0,0,0.28)] outline-none focus-visible:ring-2 focus-visible:ring-room-gold`}
                >
                  <span className={`h-1.5 w-full ${tone.band} opacity-90`} />
                  <span className="book-spine-title px-0.5 text-center font-display text-[0.65rem] font-semibold uppercase sm:text-xs">
                    {book.title}
                  </span>
                  <span className={`h-1.5 w-full ${tone.band} opacity-90`} />
                  <span className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-white/20" />
                  <span className="pointer-events-none absolute inset-y-0 right-0 w-[2px] bg-black/25" />
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="relative">
        <div className="wood-shelf h-6 w-full sm:h-8" />
        <div className="h-2 w-full bg-gradient-to-b from-[#5a463d] via-[#3f312b] to-transparent" />
        <div className="pointer-events-none absolute -bottom-1 left-[8%] h-6 w-3 rounded-b-sm bg-[#6a5348] shadow-md sm:h-7" />
        <div className="pointer-events-none absolute -bottom-1 right-[8%] h-6 w-3 rounded-b-sm bg-[#6a5348] shadow-md sm:h-7" />
      </div>
    </>
  )
}
