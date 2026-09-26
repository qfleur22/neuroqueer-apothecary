import type { Metadata } from 'next'
import Link from 'next/link'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { GuideCover } from '@/components/home/guide-cover'
import { storeProducts } from '@/data/store-products'

export const metadata: Metadata = {
  title: 'Store',
  description: 'Guides and offerings from the Neuroqueer Apothecary, founded by Quinn Fleur.',
}

export default function StorePage() {
  return (
    <RoomPage>
      <WallCard title="Store" wide>
        <p>
          Guides from the Neuroqueer Apothecary — take what helps, leave the rest on the shelf.
          One purchase is ongoing site access and updates, not a PDF that goes stale.{' '}
          <Link href="/how-nqa-works" className="text-room-teal underline decoration-room-gold underline-offset-4">
            How NQA Works
          </Link>
        </p>
        <ul className="grid gap-10 sm:grid-cols-2">
          {storeProducts.map((product) => (
            <li key={product.slug}>
              <Link href={product.href} className="group block outline-none">
                <div className="mx-auto max-w-xs">
                  <GuideCover title={product.name} tagline={product.tagline} />
                </div>
                <h2 className="mt-4 text-center font-display text-2xl text-room-teal group-hover:underline group-hover:decoration-room-gold group-focus-visible:underline">
                  {product.name}
                </h2>
                <p className="mt-2 text-center text-black/80">{product.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </WallCard>
    </RoomPage>
  )
}
