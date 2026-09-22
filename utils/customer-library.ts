import { LibraryItem } from '@/models/library-item'
import { getLibraryItemByHandle, libraryItems } from '@/data/library-items'
import { CustomerSession } from '@/models/customer-session'
import { customerGraphql, refreshCustomerToken } from '@/utils/shopify-customer-auth'

interface CustomerLibraryResponse {
  customer: {
    emailAddress?: { emailAddress?: string }
    orders?: {
      nodes: {
        lineItems: {
          nodes: {
            title?: string
            product?: { handle?: string }
          }[]
        }
      }[]
    }
  }
}

const libraryQuery = `
  query CustomerLibrary {
    customer {
      emailAddress {
        emailAddress
      }
      orders(first: 50) {
        nodes {
          lineItems(first: 30) {
            nodes {
              title
              product {
                handle
              }
            }
          }
        }
      }
    }
  }
`

const matchLibraryItem = ({
  handle,
  title,
}: {
  handle?: string
  title?: string
}) => {
  if (handle) {
    const byHandle = getLibraryItemByHandle({ handle })

    if (byHandle) {
      return byHandle
    }
  }

  if (!title) {
    return undefined
  }

  return libraryItems.find((item) => item.title.toLowerCase() === title.toLowerCase())
}

export const getOwnedLibraryItems = async ({
  session,
}: {
  session: CustomerSession
}): Promise<{ items: LibraryItem[]; email?: string; session: CustomerSession }> => {
  let nextSession = session

  if (session.expiresAt < Date.now() + 60_000 && session.refreshToken) {
    const refreshed = await refreshCustomerToken({ refreshToken: session.refreshToken })
    nextSession = { ...session, ...refreshed }
  }

  const data = await customerGraphql<CustomerLibraryResponse>({
    accessToken: nextSession.accessToken,
    query: libraryQuery,
  })

  const owned = new Map<string, LibraryItem>()

  for (const order of data.customer.orders?.nodes ?? []) {
    for (const line of order.lineItems.nodes) {
      const item = matchLibraryItem({
        handle: line.product?.handle,
        title: line.title,
      })

      if (item) {
        owned.set(item.slug, item)
      }
    }
  }

  return {
    items: [...owned.values()],
    email: data.customer.emailAddress?.emailAddress ?? session.email,
    session: {
      ...nextSession,
      email: data.customer.emailAddress?.emailAddress ?? session.email,
    },
  }
}

export const customerOwnsItem = ({
  items,
  slug,
}: {
  items: LibraryItem[]
  slug: string
}) => {
  return items.some((item) => item.slug === slug)
}
