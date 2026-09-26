import { RoomPage, WallCard } from '@/components/home/room-page'
import { EdsChecklistQuiz } from '@/components/library/eds-checklist-quiz'

export const EdsChecklistPage = () => {
  return (
    <RoomPage>
      <WallCard title="Hypermobility / Ehlers-Danlos Syndrome Symptom Checklist" wide="xl">
        <p className="font-gallery text-xl italic text-room-brown">
          A companion to So, You Think You’re Hypermobile?
        </p>
        <EdsChecklistQuiz />
      </WallCard>
    </RoomPage>
  )
}
