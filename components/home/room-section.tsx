const isCompactList = ({ items }: { items: string[] }) => {
  return items.every((item) => {
    return item.split(/\s+/).length <= 16 && item.length <= 120
  })
}

export const RoomSection = ({
  title,
  children,
  id,
}: {
  title: string
  children: React.ReactNode
  id?: string
}) => {
  return (
    <section id={id} className="space-y-4 border-l-4 border-room-gold pl-4 sm:pl-5">
      <h2 className="font-display text-2xl text-room-teal sm:text-3xl">{title}</h2>
      {children}
    </section>
  )
}

export const BulletList = ({ items }: { items: string[] }) => {
  const isCompact = isCompactList({ items })

  return (
    <ul className={isCompact ? 'guide-list guide-list-columns' : 'guide-list'}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
