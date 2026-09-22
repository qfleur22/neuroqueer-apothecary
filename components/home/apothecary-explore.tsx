import Link from 'next/link'
import { ArrowRight, Instagram, type LucideIcon } from 'lucide-react'
import { storeProducts } from '@/data/store-products'

interface SitemapLink {
  label: string
  href: string
}

interface SitemapSection {
  title: string
  href?: string
  links: SitemapLink[]
}

interface SocialLink {
  label: string
  handle: string
  href: string
  icon: LucideIcon | 'tiktok'
}

const sitemap: SitemapSection[] = [
  {
    title: 'Main pages',
    href: '/',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Coaching', href: '/coaching' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/about#contact' },
      { label: 'Sitemap', href: '/sitemap' },
      { label: 'Your library', href: '/library' },
    ],
  },
  {
    title: 'Resources',
    href: '/resources',
    links: [
      { label: 'Charlotte & North Carolina', href: '/charlotte' },
      { label: 'Living in a Body That Bends', href: '/eds' },
    ],
  },
  {
    title: 'Guides & store',
    href: '/store',
    links: storeProducts.map((product) => ({
      label: product.name,
      href: product.href,
    })),
  },
  {
    title: 'Around the room',
    links: [
      { label: 'Drag', href: '/drag' },
      { label: 'Portfolio', href: '/portfolio' },
    ],
  },
]

const socials: SocialLink[] = [
  {
    label: 'Instagram',
    handle: '@neuroqueerapothecary',
    href: 'https://www.instagram.com/neuroqueerapothecary',
    icon: Instagram,
  },
  {
    label: 'TikTok',
    handle: '@neuroqueer.apothecary',
    href: 'https://www.tiktok.com/@neuroqueer.apothecary',
    icon: 'tiktok',
  },
]

export const ApothecaryExplore = () => {
  return (
    <section className="space-y-5 border-t border-room-brown/30 pt-8">
      <h2 className="font-display text-3xl text-room-teal sm:text-4xl">
        Want to explore the apothecary?
      </h2>
      <p>
        Here&apos;s a map of the rooms — main pages, resources, guides, and a few other corners of
        the house.
      </p>

      <nav aria-label="Sitemap" className="grid gap-8 sm:grid-cols-2">
        {sitemap.map((section) => (
          <div
            key={section.title}
            className="space-y-3 border-l-4 border-room-gold pl-4 sm:pl-5"
          >
            <h3 className="font-display text-2xl text-room-teal">
              {section.href ? (
                <Link
                  href={section.href}
                  className="underline decoration-room-gold underline-offset-4 transition hover:text-[#0c4a43]"
                >
                  {section.title}
                </Link>
              ) : (
                section.title
              )}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={`${section.title}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="font-display text-lg text-black underline decoration-room-gold underline-offset-4 transition hover:text-room-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <ul className="flex flex-wrap justify-center gap-4 pt-2">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 rounded-lg p-3 text-center transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-room-gold"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-room-gold bg-room-teal text-room-gold shadow-md transition group-hover:bg-[#0f5c53]">
                <SocialIcon icon={social.icon} />
              </span>
              <span className="font-display text-sm text-room-teal">{social.label}</span>
              <span className="break-all font-gallery text-xs text-room-brown">
                {social.handle}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="text-center">
        <Link
          href="/resources"
          className="inline-flex max-w-full items-center justify-center gap-3 rounded-full border-2 border-room-gold bg-room-teal px-6 py-3 text-center font-display text-lg text-room-gold shadow-md transition hover:bg-[#0f5c53] sm:px-8 sm:py-4 sm:text-2xl"
        >
          Check out the resources
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-room-gold bg-[#0c4a43] sm:h-9 sm:w-9"
            aria-hidden="true"
          >
            <ArrowRight size={18} />
          </span>
        </Link>
      </p>
    </section>
  )
}

const SocialIcon = ({ icon }: { icon: LucideIcon | 'tiktok' }) => {
  if (icon === 'tiktok') {
    return <TikTokIcon />
  }

  const Icon = icon

  return <Icon size={26} aria-hidden="true" />
}

const TikTokIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M14.5 3c.4 2.6 1.9 4.4 4.5 4.7v3.1c-1.5 0-2.9-.5-4.1-1.3v6.7c0 3.4-2.7 6.2-6.2 6.3-3.4 0-6.2-2.8-6.2-6.3S5.3 10 8.7 10c.4 0 .8 0 1.2.1v3.3c-.4-.2-.8-.3-1.2-.3-1.7 0-3 1.4-3 3.1s1.4 3.1 3 3.1 3-1.4 3-3.1V3h2.8Z" />
    </svg>
  )
}
