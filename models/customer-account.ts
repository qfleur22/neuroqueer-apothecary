import { LibraryItem } from '@/models/library-item'
import { CustomerSession } from '@/models/customer-session'

export interface CustomerAccount {
  items: LibraryItem[]
  email?: string
  displayName?: string
  firstName?: string
  lastName?: string
  phone?: string
  createdAt?: string
  session: CustomerSession
}
