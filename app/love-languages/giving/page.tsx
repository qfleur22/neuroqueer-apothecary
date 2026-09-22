import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { LoveLanguageQuiz } from '@/components/home/love-language-quiz'
import { givingQuestions, givingReflectionPrompts, givingScaleLabels } from '@/data/love-languages'

export const metadata: Metadata = {
  title: 'How You Give Love',
  description:
    'A quiz about the ways you tend to express affection, connection, support, and care.',
}

export default function GivingLoveLanguagePage() {
  return (
    <RoomPage>
      <WallCard title="How Do You Give Love?" wide="xl">
        <LoveLanguageQuiz
          kind="giving"
          intro={[
            'When somebody matters to you, what do you naturally do?',
            'This quiz explores the ways you tend to express affection, connection, support, and care.',
          ]}
          scaleLabels={givingScaleLabels}
          questions={givingQuestions}
          reflectionPrompts={givingReflectionPrompts}
          otherQuizHref="/love-languages/receiving"
          otherQuizLabel="How do you receive love? →"
        />
      </WallCard>
    </RoomPage>
  )
}
