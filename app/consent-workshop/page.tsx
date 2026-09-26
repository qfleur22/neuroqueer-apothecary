import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
import { GuideCover } from '@/components/home/guide-cover'
import { BulletList, RoomSection } from '@/components/home/room-section'
import { LearnMoreSection } from '@/components/home/learn-more-section'
import { PurchaseIncludes } from '@/components/home/purchase-includes'
import { getConsentWorkshopHref } from '@/utils/shopify-checkout'

export const metadata: Metadata = {
  title: 'Know Your Rights Workshop & Presentation Kit',
  description:
    'A ready-to-present community conversation about power, safety, and reclaiming our bodies—slides and presenter notes included.',
}

const COACHING_HREF = '/coaching'
const GUIDE_HREF = '/consent'
const KIT_LABEL = 'Get the Workshop & Presentation Kit →'

const includedItems = [
  'A complete slide deck for the workshop or presentation',
  'Presenter notes on what to say, how to pace it, and where to pause',
  'Guidance for adapting the material to your time slot and community',
  'Reminders about consent, privacy, accessibility, and keeping the room safe',
]

const topicItems = [
  'Bodily autonomy and what it can look like in real life',
  'Consent beyond a simple yes or no',
  'Boundary-setting when freeze, masking, or people-pleasing get in the way',
  'Power, safety, and reclaiming our bodies in relationships and institutions',
  'Recognizing red flags and responding when boundaries are crossed',
  'Repair and healing after harm',
]

const hostItems = [
  'Community organizers and peer-support facilitators',
  'Queer, trans, disabled, and neurodivergent groups',
  'Mutual-aid networks and chosen families',
  'Educators, coaches, and student organizations',
  'Anyone who wants to bring this conversation to a room without building the curriculum from scratch',
]

export default function ConsentWorkshopPage() {
  const buyHref = getConsentWorkshopHref()

  return (
    <RoomPage>
      <WallCard title="Know Your Rights: Bodily Autonomy, Boundaries & Consent" wide>
        <p className="font-gallery text-xl italic text-room-brown">
          A community conversation about power, safety, and reclaiming our bodies
        </p>
        <p className="text-center">
          A workshop and presentation kit from the Neuroqueer Apothecary, created by Quinn Fleur.
        </p>
        <div className="mx-auto max-w-xs">
          <GuideCover title="Know Your Rights" tagline="slides, notes, ready to present" />
        </div>
        <p>
          The guide helps one person figure out their own boundaries. This kit helps you bring that
          conversation into a room.
        </p>
        <p>
          You get a ready-to-present workshop and presentation on{' '}
          <em>Know Your Rights: Bodily Autonomy, Boundaries & Consent</em>—with slides and notes on
          how to present it—so you can facilitate a community conversation about power, safety, and
          reclaiming our bodies without starting from a blank deck.
        </p>
        <div id="get-the-kit">
          <GuideCta href={buyHref} label={KIT_LABEL} isDominant />
        </div>
        <PurchaseIncludes />

        <LearnMoreSection title="What’s Included">
          <p>
            Slides tell the room what they&apos;re looking at. The presenter notes tell you what to
            do with the room.
          </p>
          <BulletList items={includedItems} />
          <p>Use the materials as-is, or edit them to sound like you.</p>
          <GuideCta href={buyHref} label={KIT_LABEL} isDominant />
        </LearnMoreSection>

        <LearnMoreSection title="What the Conversation Covers">
          <p>The workshop and presentation move through:</p>
          <BulletList items={topicItems} />
          <p>
            The framework stays the same as the guide: autonomy, harm reduction, mutual respect,
            transformative justice, and radical care—not punishment, shame, or pretending any of us
            navigate relationships perfectly.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Who Can Host It">
          <p>The kit is for people who want to bring this conversation into an existing community.</p>
          <BulletList items={hostItems} />
          <p>
            You don&apos;t need to be someone&apos;s therapist. Your job is to hold the structure,
            ask better questions, and leave people in charge of their own bodies and stories.
          </p>
        </LearnMoreSection>

        <RoomSection title="Want the Individual Guide Instead?">
          <p>
            If you&apos;re working through this for yourself—scripts, worksheets, and language for
            your actual roommate, partner, parent, doctor, or community—start with the guide.
          </p>
          <GuideCta href={GUIDE_HREF} label="Get the Individual Guide →" />
        </RoomSection>

        <RoomSection title="Want Help Learning to Present It?">
          <p>
            One-on-one peer coaching with Quinn Fleur can help you adapt the slides, practice the
            notes, plan accessibility and content warnings, and think through how to hold a
            sensitive conversation without turning it into group therapy.
          </p>
          <p>This is peer support and education—not therapy or medical care.</p>
          <GuideCta href={COACHING_HREF} label="Explore Facilitator Coaching →" />
        </RoomSection>

        <p className="text-center">
          <RoomLink href="/store">Back to the store</RoomLink>
          {' · '}
          <RoomLink href="/consent">The individual guide</RoomLink>
        </p>
      </WallCard>
    </RoomPage>
  )
}
