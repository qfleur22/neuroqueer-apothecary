import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
import { getLibraryItem } from '@/data/library-items'
import { customerOwnsItem, getOwnedLibraryItems } from '@/utils/customer-library'
import { readCustomerSession } from '@/utils/customer-session'

export const dynamic = 'force-dynamic'

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const { slug } = await params
  const item = getLibraryItem({ slug })

  return {
    title: item?.title ?? 'Library',
    robots: { index: false, follow: false },
  }
}

export default async function LibraryItemPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = getLibraryItem({ slug })

  if (!item) {
    notFound()
  }

  const session = await readCustomerSession()

  if (!session) {
    notFound()
  }

  let ownsItem = false
  let loadError = false

  try {
    const owned = await getOwnedLibraryItems({ session })
    ownsItem = customerOwnsItem({ items: owned.items, slug })
  } catch (error) {
    void error
    loadError = true
  }

  if (loadError) {
    return (
      <RoomPage>
        <WallCard title={item.title}>
          <p>We could not confirm this purchase right now. Refresh, or open your library again.</p>
          <GuideCta href="/library" label="Back to your library →" />
        </WallCard>
      </RoomPage>
    )
  }

  if (!ownsItem) {
    return (
      <RoomPage>
        <WallCard title={item.title}>
          <p>This room is locked to people who have bought this resource.</p>
          <GuideCta href={item.salesHref} label="Get this resource →" isDominant />
          <p>
            Already bought it on another email? Log in with that Shopify customer account from{' '}
            <RoomLink href="/library">your library</RoomLink>.
          </p>
        </WallCard>
      </RoomPage>
    )
  }

  return (
    <RoomPage>
      <WallCard title={item.title} wide>
        <p>
          You own this. The full guide will live here — not on the public sales page — so the HTML
          is only rendered after Shopify confirms the purchase.
        </p>
        <p>
          Until that content is moved in, keep your checkout email. The sales page is still at{' '}
          <RoomLink href={item.salesHref}>{item.salesHref}</RoomLink>.
        </p>
        <GuideCta href="/library" label="Back to your library →" />
      </WallCard>
    </RoomPage>
  )
}
