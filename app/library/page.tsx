import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
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
            <p>
              This room holds the guides and kits you have already bought. Log in with the same
              Shopify customer account you used at checkout — Google works if you turn it on in
              Shopify customer accounts.
            </p>
            <GuideCta href="/api/auth/shopify/login?returnTo=/library" label="Log in →" isDominant />
            <p>
              Looking to buy something first? The public shelf is still in the{' '}
              <RoomLink href="/store">store</RoomLink>.
            </p>
          </>
        ) : (
          <>
            <p>
              Signed in{owned?.email ? ` as ${owned.email}` : ''}. These are the resources tied to
              your Shopify purchases.
            </p>
            {loadError ? (
              <p>We could not read your orders just now. Refresh, or come back in a minute.</p>
            ) : null}
            {owned && owned.items.length === 0 && !loadError ? (
              <p>
                No purchases are attached to this account yet. If you just checked out, give Shopify
                a moment, then refresh. Sales pages stay on the{' '}
                <RoomLink href="/store">store</RoomLink>.
              </p>
            ) : null}
            {owned && owned.items.length > 0 ? (
              <ul className="space-y-3">
                {owned.items.map((item) => (
                  <li key={item.slug}>
                    <RoomLink href={item.href}>{item.title}</RoomLink>
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="text-center">
              <a
                href="/api/auth/shopify/logout"
                className="font-display text-lg text-black underline decoration-room-gold underline-offset-4 transition hover:text-room-teal"
              >
                Log out
              </a>
            </p>
          </>
        )}
      </WallCard>
    </RoomPage>
  )
}
