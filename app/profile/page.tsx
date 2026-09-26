import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
import { RoomSection } from '@/components/home/room-section'
import { ProfileQuizResults } from '@/components/library/profile-quiz-results'
import { PurchasedResources } from '@/components/library/purchased-resources'
import { readCustomerSession } from '@/utils/customer-session'
import { getOwnedLibraryItems } from '@/utils/customer-library'
import { formatMemberSince } from '@/utils/format-member-since'
import { isShopifyCustomerAuthConfigured } from '@/utils/shopify-domain'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Your profile',
  description: 'Your Neuroqueer Apothecary account, unlocked resources, and quiz results.',
  robots: { index: false, follow: false },
}

export default async function ProfilePage({
  searchParams,
}: {
  searchParams: Promise<{ auth?: string }>
}) {
  const { auth } = await searchParams
  const session = await readCustomerSession()
  const isConfigured = isShopifyCustomerAuthConfigured()

  let account: Awaited<ReturnType<typeof getOwnedLibraryItems>> | null = null
  let loadError = false

  if (session) {
    try {
      account = await getOwnedLibraryItems({ session })
    } catch (error) {
      void error
      loadError = true
    }
  }

  const greeting = account?.firstName || account?.displayName || account?.email || session?.email
  const memberSince = formatMemberSince({ value: account?.createdAt })

  return (
    <RoomPage>
      <WallCard title="Your profile" wide>
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
              Your profile holds the Shopify account you check out with, the resources that
              purchase unlocked, and any quizzes you have taken in this browser.
            </p>
            <GuideCta href="/api/auth/shopify/login?returnTo=/profile" label="Log in →" isDominant />
          </>
        ) : null}

        {session && loadError ? (
          <p>We could not load your Shopify customer data right now. Refresh, or try again shortly.</p>
        ) : null}

        {session && !loadError ? (
          <>
            <RoomSection title="Account">
              <p>
                Signed in
                {greeting ? (
                  <>
                    {' '}
                    as <span className="font-display text-room-teal">{greeting}</span>
                  </>
                ) : null}
                .
              </p>
              {account?.email ? <p>Email: {account.email}</p> : null}
              {account?.phone ? <p>Phone: {account.phone}</p> : null}
              {memberSince ? <p>Customer since {memberSince}.</p> : null}
              <p className="text-base text-room-brown">
                Name, email, and purchases come from your Shopify customer account. Quiz answers do
                not.
              </p>
            </RoomSection>

            <RoomSection title="Unlocked resources">
              <PurchasedResources items={account?.items ?? []} />
              {(account?.items.length ?? 0) > 0 ? (
                <p>
                  Open the full shelf in <RoomLink href="/library">your library</RoomLink>.
                </p>
              ) : null}
            </RoomSection>

            <RoomSection title="Quizzes">
              <ProfileQuizResults />
            </RoomSection>

            <p className="text-center">
              <a
                href="/api/auth/shopify/logout"
                className="font-display text-lg text-black underline decoration-room-gold underline-offset-4 transition hover:text-room-teal"
              >
                Log out
              </a>
            </p>
          </>
        ) : null}
      </WallCard>
    </RoomPage>
  )
}
