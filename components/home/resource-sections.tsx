import { DollarSign } from 'lucide-react'
import { ResourceGroup, ResourceItem } from '@/models/resource-group'

export const ResourceSections = ({ groups }: { groups: ResourceGroup[] }) => {
  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <section key={group.id} id={group.id} className="scroll-mt-40 border-l-4 border-room-gold pl-4 sm:pl-5">
          <div className="mb-4 flex flex-wrap items-center gap-2.5">
            <h2 className="font-display text-2xl text-room-teal sm:text-3xl">{group.title}</h2>
            {group.href ? (
              <a
                href={group.href}
                target={group.href.startsWith('http') ? '_blank' : undefined}
                rel={group.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={group.cta ?? `Open ${group.title}`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-room-gold bg-room-teal font-display text-lg text-room-gold shadow-md transition hover:bg-[#0f5c53]"
              >
                {group.cta ?? '→'}
              </a>
            ) : null}
          </div>
          <ul className="space-y-5">
            {group.items.map((item) => (
              <ResourceEntry key={item.name} item={item} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

const ResourceName = ({ item }: { item: ResourceItem }) => {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span>{item.name}</span>
      {item.showDollar ? (
        <DollarSign
          size={18}
          aria-hidden="true"
          className="shrink-0 text-room-teal"
        />
      ) : null}
    </span>
  )
}

const ResourceEntry = ({ item }: { item: ResourceItem }) => {
  const label = item.showDollar ? `${item.name} (store)` : item.name

  return (
    <li>
      {item.href ? (
        <a
          href={item.href}
          aria-label={label}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="font-display text-xl text-black underline decoration-room-gold underline-offset-4 transition hover:text-room-teal"
        >
          <ResourceName item={item} />
        </a>
      ) : (
        <h3 className="font-display text-xl text-black">
          <ResourceName item={item} />
        </h3>
      )}
      {item.description ? (
        <p className="mt-1.5 text-base leading-relaxed text-black/80">{item.description}</p>
      ) : null}
      {item.contacts && item.contacts.length > 0 ? (
        <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm">
          {item.contacts.map((contact) => (
            <a
              key={contact.href}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-room-teal underline decoration-room-gold/70 underline-offset-2"
            >
              {contact.label}
            </a>
          ))}
        </p>
      ) : null}
    </li>
  )
}
