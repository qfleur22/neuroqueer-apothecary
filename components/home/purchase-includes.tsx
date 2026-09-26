import { LearnMoreSection } from '@/components/home/learn-more-section'
import { RoomLink } from '@/components/home/room-link'

export const PurchaseIncludes = () => {
  return (
    <LearnMoreSection title="What your purchase includes" headingLevel={3}>
      <p>One purchase gives you ongoing access here—not a PDF that goes stale in a downloads folder.</p>
      <ul className="guide-list">
        <li>Unlimited access to the resource on this site</li>
        <li>Future updates as new information and resources are added</li>
        <li>Neurodivergent-friendly formatting</li>
        <li>Quick TL;DRs when you just need the answer</li>
        <li>Expandable deep dives when you want the whole explanation</li>
        <li>Lived-experience context alongside research-informed information</li>
      </ul>
      <p>
        <RoomLink href="/how-nqa-works">How Neuroqueer Apothecary works →</RoomLink>
      </p>
    </LearnMoreSection>
  )
}
