import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { LoveLanguageQuiz } from '@/components/home/love-language-quiz'
import {
  receivingQuestions,
  receivingReflectionPrompts,
  receivingScaleLabels,
} from '@/data/love-languages'

export const metadata: Metadata = {
  title: 'How You Receive Love',
  description: 'A quiz about what actually makes you feel loved, seen, supported, and connected.',
}

export default function ReceivingLoveLanguagePage() {
  return (
    <RoomPage>
      <WallCard title="How Do You Receive Love?" wide="xl">
        <LoveLanguageQuiz
          kind="receiving"
          intro={[
            'People can care deeply about us without their actions necessarily registering as love.',
            'This quiz asks a different question: what actually makes you feel loved? Think about moments when you feel particularly seen, safe, valued, supported, wanted, understood, or connected.',
          ]}
          scaleLabels={receivingScaleLabels}
          questions={receivingQuestions}
          reflectionPrompts={receivingReflectionPrompts}
          otherQuizHref="/love-languages/giving"
          otherQuizLabel="How do you give love? →"
        />
      </WallCard>
    </RoomPage>
  )
}
