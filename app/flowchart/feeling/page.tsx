import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { FlowchartFeeling } from '@/components/flowchart/flowchart-feeling'

export const metadata: Metadata = {
  title: 'You Are Feeling…',
  description:
    'Follow-up questions for the symptoms you selected in the Neuroqueer Apothecary symptom flowchart.',
}

export default function FlowchartFeelingPage() {
  return (
    <RoomPage>
      <WallCard title="You are feeling…" wide="xl">
        <FlowchartFeeling />
      </WallCard>
    </RoomPage>
  )
}
