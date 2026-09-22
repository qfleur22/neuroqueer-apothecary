import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { LoveLanguagesGuide } from '@/components/home/love-languages-guide'

export const metadata: Metadata = {
  title: 'Love Languages',
  description:
    'Quizzes for how you give and receive love, including neuroqueer styles like parallel play, penguin pebbling, infodumping, support swapping, and deep pressure.',
}

export default function LoveLanguagesPage() {
  return (
    <RoomPage>
      <WallCard title="Love Is a Language. Most of Us Are Multilingual." wide="xl">
        <LoveLanguagesGuide />
      </WallCard>
    </RoomPage>
  )
}
