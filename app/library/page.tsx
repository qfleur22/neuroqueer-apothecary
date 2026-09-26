import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
import { PurchasedResources } from '@/components/library/purchased-resources'
import { readCustomerSession } from '@/utils/customer-session'
import { getOwnedLibraryItems } from '@/utils/customer-library'
import { isShopifyCustomerAuthConfigured } from '@/utils/shopify-domain'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Your library',
  description: 'Guides and kits you have purchased from the Neuroqueer Apothecary.',
  robots: { index: false, follow: false },
}

export default async function LibraryPage({
  searchParams,
}: {
  searchParams: Promise<{ auth?: string }>
}) {
  const { auth } = await searchParams
  const session = await readCustomerSession()
  const isConfigured = isShopifyCustomerAuthConfigured()

  let owned: Awaited<ReturnType<typeof getOwnedLibraryItems>> | null = null
  let loadError = false

  if (session) {
    try {
      owned = await getOwnedLibraryItems({ session })
    } catch (error) {
      void error
      loadError = true
    }
  }

  return (
    <RoomPage>
      <WallCard title="Your library" wide>
        {auth === 'setup' || !isConfigured ? (
          <p>
            Shopify customer accounts are not connected yet. Add your store domain and Customer
            Account API client ID, then the login button will send people through Shopify (email,
            Shop, or Google if you enable it in customer account settings).
          </p>
        ) : null}

        {auth === 'error' ? (
          <p>Sign-in did not finish. You can try again, or email Quinn if it keeps happening.</p>
        ) : null}

        {!session ? (
          <>
            <p>Log in to see the resources attached to your Shopify purchases.</p>
            <GuideCta href="/api/auth/shopify/login?returnTo=/library" label="Log in →" isDominant />
            <p>
              Looking to buy something first? The public shelf is in the{' '}
              <RoomLink href="/store">store</RoomLink>.
            </p>
          </>
        ) : null}

        {session && loadError ? (
          <p>We could not read your orders right now. Refresh, or come back in a minute.</p>
        ) : null}

        {session && !loadError ? <PurchasedResources items={owned?.items ?? []} /> : null}

        {session ? (
          <p className="text-center">
            <RoomLink href="/profile">Your profile</RoomLink>
          </p>
        ) : null}
      </WallCard>
    </RoomPage>
  )
}
