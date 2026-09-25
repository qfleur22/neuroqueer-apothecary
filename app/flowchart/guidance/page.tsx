import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { FlowchartGuidance } from '@/components/flowchart/flowchart-guidance'

export const metadata: Metadata = {
  title: 'What to Do About It',
  description:
    'Triage-style next steps and mechanisms to consider after the Neuroqueer Apothecary symptom flowchart. This is not a diagnosis.',
}

export default function FlowchartGuidancePage() {
  return (
    <RoomPage>
      <WallCard title="What to do about it" wide="xl">
        <FlowchartGuidance />
      </WallCard>
    </RoomPage>
  )
}
