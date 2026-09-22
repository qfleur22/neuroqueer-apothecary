import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
import { GuideCover } from '@/components/home/guide-cover'
import { BulletList, RoomSection } from '@/components/home/room-section'
import { LearnMoreSection } from '@/components/home/learn-more-section'
import { getConsentGuideHref } from '@/utils/shopify-checkout'

export const metadata: Metadata = {
  title: 'Know Your Rights: Bodily Autonomy, Boundaries & Consent',
  description:
    'A practical Neuroqueer Apothecary guide to autonomy in our bodies, relationships, medical care, communities, and everyday lives.',
}

const COACHING_HREF = '/coaching'

const insideItems = [
  'Bodily autonomy, consent, and boundary-setting',
  'Recognizing when something feels wrong',
  'Responding when boundaries are crossed',
  'Red flags, repair, and healing after harm',
  'Scripts for difficult conversations',
  'Worksheets to identify your boundaries and how your body communicates discomfort',
]

const forYouItems = [
  'You know you’re uncomfortable but can’t explain why',
  'You freeze instead of saying no',
  'Someone treats your boundary like the start of a negotiation',
  'You’re balancing needs with community, relationships, disability, gender, trauma, masking, or people-pleasing',
  'You’re afraid of hurting someone you love',
]

export default function ConsentPage() {
  const buyHref = getConsentGuideHref()

  return (
    <RoomPage>
      <WallCard title="Your Body. Your Boundaries. Your Choice." wide>
        <p className="font-gallery text-xl italic text-room-brown">
          Know Your Rights: Bodily Autonomy, Boundaries & Consent
        </p>
        <p className="text-center">A practical Neuroqueer Apothecary guide by Quinn Fleur.</p>
        <div className="mx-auto max-w-xs">
          <GuideCover title="Know Your Rights" tagline="your body, your choice" />
        </div>
        <p>Consent and boundaries sound simple until they collide with real life.</p>
        <p>This guide is for the moments when they do:</p>
        <BulletList items={forYouItems} />
        <p>
          <em>Know Your Rights</em> is a practical guide to what autonomy can actually look like in
          our bodies, relationships, medical care, communities, and everyday lives.
        </p>
        <div id="get-the-guide">
          <GuideCta href={buyHref} label="Get the Guide →" isDominant />
        </div>

        <LearnMoreSection title="Built for Complicated Humans">
          <p>
            This resource is especially designed with trans, queer, neurodivergent, disabled, and
            chronically ill people in mind.
          </p>
          <p>
            For many of us, boundaries aren’t as straightforward as “just say no.” Autism can make
            it difficult to recognize our needs until we’ve already exceeded them. ADHD can
            complicate impulse and emotional regulation. Masking and people-pleasing can teach us
            to prioritize other people’s comfort. Disability can require intimate care or
            dependence on others. Trans people routinely encounter situations where our bodily
            autonomy is questioned by families, partners, institutions, and medical systems.
          </p>
          <p>You deserve tools that acknowledge that complexity.</p>
        </LearnMoreSection>

        <LearnMoreSection title="What’s Inside">
          <p>
            You’ll get concrete language and worksheets designed to help you identify your own
            boundaries, recognize how your body communicates discomfort, and practice advocating
            for what you need.
          </p>
          <BulletList items={insideItems} />
          <p>
            The framework is rooted in autonomy, harm reduction, mutual respect, transformative
            justice, and radical care—not punishment, shame, or pretending any of us navigate
            relationships perfectly.
          </p>
          <GuideCta href={buyHref} label="Get the Guide →" isDominant />
        </LearnMoreSection>

        <RoomSection title="Bring This Conversation to Your Community">
          <p>
            Want to host <em>Know Your Rights</em> as a workshop or presentation? The kit includes
            slides and presenter notes so you can facilitate a community conversation about power,
            safety, and reclaiming our bodies—without building the curriculum from scratch.
          </p>
          <GuideCta href="/consent-workshop" label="Get the Workshop & Presentation Kit →" />
        </RoomSection>

        <RoomSection title="Want Help Applying It to Your Life?">
          <p>
            Knowing what a boundary is and figuring out what to do about your actual roommate,
            partner, parent, doctor, friend, caregiver, or community are very different things.
          </p>
          <p>
            One-on-one peer coaching with Quinn Fleur gives you a space to untangle those
            situations with someone who understands the intersections of transness, queerness,
            neurodivergence, disability, nontraditional relationships, and community care.
          </p>
          <p>
            We can work together to identify what you’re actually feeling, clarify your
            boundaries, write language that sounds like you, prepare for difficult conversations,
            think through consent and power dynamics, or figure out what repair could look like
            after something has already gone wrong.
          </p>
          <p>This is peer support and education—not therapy or medical care.</p>
          <GuideCta href={COACHING_HREF} label="Explore Peer Coaching →" />
        </RoomSection>

        <p>
          You don’t have to become less complicated to deserve autonomy. You can learn to build
          boundaries that work with your brain, your body, your relationships, and the life you
          actually live.
        </p>

        <p className="text-center">
          <RoomLink href="/store">Back to the store</RoomLink>
        </p>
      </WallCard>
    </RoomPage>
  )
}
