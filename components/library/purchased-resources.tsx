import { GuideCta } from '@/components/home/guide-cta'
import { RoomLink } from '@/components/home/room-link'
import { LibraryItem } from '@/models/library-item'

export const PurchasedResources = ({ items }: { items: LibraryItem[] }) => {
  if (items.length === 0) {
    return (
      <>
        <p>You haven’t purchased any of our resources yet.</p>
        <GuideCta href="/store" label="Visit the store →" isDominant />
      </>
    )
  }

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.slug}>
          <RoomLink href={item.href}>{item.title}</RoomLink>
        </li>
      ))}
    </ul>
  )
}
