import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { FlowchartPicker } from '@/components/flowchart/flowchart-picker'

export const metadata: Metadata = {
  title: 'Symptom Flowchart',
  description:
    'A symptom-navigation tool for people with EDS/HSD. Choose what you are feeling right now and get safer next-step guidance. This does not diagnose a cause.',
}

export default function FlowchartPage() {
  return (
    <RoomPage>
      <WallCard title="What type of symptom are you experiencing right now?" wide="xl">
        <FlowchartPicker />
      </WallCard>
    </RoomPage>
  )
}
