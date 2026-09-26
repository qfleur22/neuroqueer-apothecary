import { LibraryItem } from '@/models/library-item'
import { getLibraryItemsByHandle, libraryItems } from '@/data/library-items'
import { CustomerAccount } from '@/models/customer-account'
import { CustomerSession } from '@/models/customer-session'
import { customerGraphql, refreshCustomerToken } from '@/utils/shopify-customer-auth'

interface CustomerLibraryResponse {
  customer: {
    displayName?: string
    firstName?: string
    lastName?: string
    creationDate?: string
    emailAddress?: { emailAddress?: string }
    phoneNumber?: { phoneNumber?: string }
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
      displayName
      firstName
      lastName
      creationDate
      emailAddress {
        emailAddress
      }
      phoneNumber {
        phoneNumber
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

const matchLibraryItems = ({
  handle,
  title,
}: {
  handle?: string
  title?: string
}) => {
  if (handle) {
    const byHandle = getLibraryItemsByHandle({ handle })

    if (byHandle.length > 0) {
      return byHandle
    }
  }

  if (!title) {
    return []
  }

  const normalizedTitle = title.toLowerCase()

  return libraryItems.filter((item) => {
    if (item.title.toLowerCase() === normalizedTitle) {
      return true
    }
    return item.aliasTitles?.some((alias) => alias.toLowerCase() === normalizedTitle) ?? false
  })
}

export const getOwnedLibraryItems = async ({
  session,
}: {
  session: CustomerSession
}): Promise<CustomerAccount> => {
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
      const matches = matchLibraryItems({
        handle: line.product?.handle,
        title: line.title,
      })

      for (const item of matches) {
        owned.set(item.slug, item)
      }
    }
  }

  const email = data.customer.emailAddress?.emailAddress ?? session.email

  return {
    items: [...owned.values()],
    email,
    displayName: data.customer.displayName,
    firstName: data.customer.firstName,
    lastName: data.customer.lastName,
    phone: data.customer.phoneNumber?.phoneNumber,
    createdAt: data.customer.creationDate,
    session: {
      ...nextSession,
      email,
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
