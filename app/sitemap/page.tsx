import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { SiteMap } from '@/components/home/site-map'

export const metadata: Metadata = {
  title: 'Sitemap',
  description:
    'Everything in Neuroqueer Apothecary, all in one place: guides, tools, quizzes, coaching, workshops, and community resources.',
}

export default function SitemapPage() {
  return (
    <RoomPage>
      <WallCard title="Sitemap" wide>
        <SiteMap />
      </WallCard>
    </RoomPage>
  )
}
