import type { ReactNode } from 'react'

export const LoveLanguageCtaCard = ({
  title,
  children,
  actions,
}: {
  title: string
  children: ReactNode
  actions: ReactNode
}) => {
  return (
    <aside className="space-y-4 rounded-md border-2 border-room-gold bg-room-teal/10 px-4 py-5 sm:px-6">
      <h2 className="font-display text-2xl text-room-teal sm:text-3xl">{title}</h2>
      <div className="space-y-3">{children}</div>
      <div className="space-y-3">{actions}</div>
    </aside>
  )
}
