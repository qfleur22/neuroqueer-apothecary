import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
import { LearnMoreSection } from '@/components/home/learn-more-section'
import { BulletList, RoomSection } from '@/components/home/room-section'

export const metadata: Metadata = {
  title: 'How NQA Works',
  description:
    'What a Neuroqueer Apothecary purchase includes: ongoing site access, living updates, and resources built for variable capacity—not a static PDF.',
}

const purchaseItems = [
  'Unlimited access to the resource on this site',
  'Future updates as new information and resources are added',
  'Neurodivergent-friendly formatting',
  'Quick TL;DRs when you just need the answer',
  'Expandable deep dives when you want the whole explanation',
  'Lived-experience context alongside research-informed information',
  'Resources created through trans, neurodivergent, disabled, and chronically ill perspectives',
]

const landscapeItems = [
  'What might be worth researching further?',
  'What kind of specialist deals with this?',
  'What symptoms should I document?',
  'What terminology might help me explain this?',
  'What questions could I bring to my appointment?',
  'What tests or evaluations might I encounter?',
  'What conditions are commonly confused with or considered alongside this one?',
  'What resources already exist so I don’t have to reinvent the wheel?',
]

const livedExperienceItems = [
  'Here’s the terminology that finally helped me describe this symptom.',
  'Here’s what I wish I’d documented before my appointment.',
  'Here’s the kind of specialist I didn’t realize existed.',
  'Here are the questions I wish I’d known to ask.',
  'Here’s the rabbit hole you probably don’t need to spend six hours researching because I already did.',
]

const coachingTopics = [
  'EDS and hypermobility',
  'ME/CFS',
  'IBS and complicated GI symptoms',
  'Questions about conditions such as MALS',
  'Chronic pain',
  'Dysautonomia',
  'Neurodivergence',
  'Medical binders',
  'Resource navigation',
  'Care planning',
]

const otherCoachingItems = [
  'Building a medical binder',
  'Trying to understand your love languages',
  'Making a care plan',
  'Looking for trans resources',
  'Figuring out what kind of support actually works for your brain',
  'Developing a workshop or convention panel',
  'Organizing a complicated project',
  'Trying to locate resources in Charlotte or somewhere else entirely',
]

const buyingItems = [
  'Organization',
  'Translation',
  'Accessibility',
  'Context',
  'Research',
  'Lived experience',
  'A place to start',
  'A place to come back to',
]

export default function HowNqaWorksPage() {
  return (
    <RoomPage>
      <WallCard title="What Does This Get Me?" wide>
        <p className="font-gallery text-xl italic text-room-brown">How Neuroqueer Apothecary works</p>
        <p>Resources built for brains like ours.</p>
        <p>
          When you purchase a Neuroqueer Apothecary resource, you&apos;re not just buying a PDF that
          gets downloaded once and forgotten in a folder somewhere.
        </p>
        <p>You&apos;re getting ongoing access to a living resource.</p>
        <p>
          Your purchase gives you access to the resource here on the Neuroqueer Apothecary website,
          where you can come back whenever you need it.
        </p>
        <p>
          And when Quinn finds new research, a better explanation, another useful resource, a new
          provider directory, an accessibility tool, or something else worth knowing?
        </p>
        <p>The resource can grow with it.</p>
        <p>No buying &ldquo;Version 2.&rdquo;</p>
        <p>
          No realizing six months later that the copy you downloaded is already out of date.
        </p>
        <p>Just come back.</p>

        <RoomSection title="One Purchase. Ongoing Access.">
          <p>Purchasing a Neuroqueer Apothecary resource gets you:</p>
          <BulletList items={purchaseItems} />
          <GuideCta href="/resources" label="Explore the Resource Library →" isDominant />
        </RoomSection>

        <LearnMoreSection title="Why Isn’t It Just a PDF?">
          <p>Because that&apos;s not how a lot of us actually need information.</p>
          <p>You know the experience.</p>
          <p>You open the 84-page resource.</p>
          <p>There&apos;s a wall of text.</p>
          <p>The answer you actually need is somewhere in there.</p>
          <p>You&apos;re pretty sure it&apos;s important.</p>
          <p>You read the same paragraph four times.</p>
          <p>You open another tab to look something up.</p>
          <p>Now there are 17 tabs.</p>
          <p>You get overwhelmed.</p>
          <p>You&apos;ll come back later.</p>
          <p>You do not come back later.</p>
          <p>We can do better than that.</p>
          <p>
            Neuroqueer Apothecary resources are designed as webpages built around neurodivergent
            learning and information processing.
          </p>
          <p>
            Instead of presenting everything with equal importance, information is broken into
            smaller pieces.
          </p>
          <p>Important information can be surfaced first.</p>
          <p>Complicated topics can be separated into expandable sections.</p>
          <p>
            TL;DRs can give you the essentials without requiring you to process the entire resource.
          </p>
          <p>And when you do want to know everything?</p>
          <p>Open the section and go down the rabbit hole.</p>
        </LearnMoreSection>

        <RoomSection title="TL;DR or Tell Me EVERYTHING">
          <p>Why choose?</p>
          <p>
            Our resources are designed to let you control how much information you&apos;re taking
            in at once.
          </p>
          <LearnMoreSection title="TL;DR" headingLevel={3}>
            <p>Need the important part right now?</p>
            <p>Start here.</p>
            <p>
              You shouldn&apos;t have to read an essay before you&apos;re allowed to understand the
              basic answer.
            </p>
          </LearnMoreSection>
          <LearnMoreSection title="Tell Me More +" headingLevel={3}>
            <p>Have a little more capacity?</p>
            <p>
              Expand the section for context, examples, definitions, considerations, and practical
              information.
            </p>
          </LearnMoreSection>
          <LearnMoreSection title="Okay, Give Me the Rabbit Hole +" headingLevel={3}>
            <p>
              Want to understand the mechanisms, research, related conditions, terminology,
              questions to ask, or resources to explore next?
            </p>
            <p>It&apos;s there when you want it.</p>
            <p>
              The information doesn&apos;t disappear just because you don&apos;t have the capacity
              to process it today.
            </p>
            <p>Collapse it.</p>
            <p>Come back tomorrow.</p>
          </LearnMoreSection>
        </RoomSection>

        <RoomSection title="Built for Variable Capacity">
          <p>Some days you can read everything.</p>
          <p>Some days you need three bullet points and a link.</p>
          <p>
            Some days you start researching EDS and somehow end up learning about autonomic
            dysfunction, mast cells, gastrointestinal motility, proprioception, pelvic floors,
            sleep, and why your shoulder has apparently never been where shoulders are supposed to
            be.
          </p>
          <p>
            The resource should adapt to your capacity—not require you to adapt to the resource.
          </p>
          <GuideCta href="/resources" label="Browse NQA Resources →" />
        </RoomSection>

        <LearnMoreSection title="Why Are the Resources Behind a Paywall?">
          <p>Because making good resources takes time.</p>
          <p>A lot of it.</p>
          <p>
            Neuroqueer Apothecary is an independent project by Quinn Fleur, and the small cost
            attached to many resources helps make it possible for me to keep researching, writing,
            updating, organizing, and maintaining them—and helps me make ends meet while doing it.
          </p>
          <p>
            I want these resources to remain low-cost and accessible while still recognizing the
            labor required to create them.
          </p>
          <p>
            When you purchase a resource, you&apos;re supporting both the information you&apos;re
            accessing and the continued existence of Neuroqueer Apothecary.
          </p>
          <p>Thank you.</p>
          <p>Seriously.</p>
        </LearnMoreSection>

        <RoomSection title="Want to Support the Apothecary Further?">
          <p>You don&apos;t have to.</p>
          <p>Purchasing a resource is already support.</p>
          <p>
            But if something I&apos;ve made saves you hours of research, helps you walk into an
            appointment better prepared, gives you language for something you&apos;ve struggled to
            explain, or simply makes your life a little easier, there are a couple of ways to help
            me keep doing this work.
          </p>
          <p>
            <strong>Leave a tip at checkout.</strong> Shopify gives you the option to add additional
            support when purchasing a resource.
          </p>
          <p>
            <strong>Book a coaching session.</strong> If you want help applying the information to
            your particular situation, coaching gives us space to work through it together.
          </p>
          <p>
            <strong>Share Neuroqueer Apothecary.</strong> Send a resource to someone who needs it,
            share the site with your community, or tell somebody where you found something useful.
          </p>
          <p>Every bit helps keep the Apothecary growing.</p>
          <GuideCta href="/resources" label="Browse Resources →" />
          <GuideCta href="/coaching" label="Explore Coaching →" />
        </RoomSection>

        <RoomSection title="Who Is Neuroqueer Apothecary For?">
          <p>Neuroqueer Apothecary started with a strangely specific group of people.</p>
          <p>Because I kept meeting them.</p>
          <p>Trans.</p>
          <p>Neurodivergent.</p>
          <p>Hypermobile.</p>
          <p>Chronically ill.</p>
          <p>Often late diagnosed.</p>
          <p>
            Often trying to figure out why six apparently unrelated problems keep showing up in the
            same body.
          </p>
          <p>
            Often very, very good at research—and completely overwhelmed by the amount of research
            required just to exist.
          </p>
          <p>Not everyone who uses Neuroqueer Apothecary will share all of those experiences.</p>
          <p>You don&apos;t need to be trans.</p>
          <p>You don&apos;t need to be autistic.</p>
          <p>You don&apos;t need to have EDS.</p>
          <p>But those perspectives influence how these resources are built.</p>
          <p>Because they influence how I learned to navigate the world.</p>
        </RoomSection>

        <RoomSection title="Hi. I’m Quinn.">
          <p>I&apos;m Quinn Fleur, the person behind Neuroqueer Apothecary.</p>
          <p>
            I&apos;m a late-diagnosed AuDHDer, a trans man, and someone living with Ehlers-Danlos
            syndrome and complex chronic illness.
          </p>
          <p>I know what it&apos;s like to have symptoms that don&apos;t fit neatly into one specialty.</p>
          <p>
            I know what it&apos;s like to research something because you have an appointment coming
            up and need to understand enough medical vocabulary to ask the question you were trying
            to ask in the first place.
          </p>
          <p>
            I know what it&apos;s like to need accommodations that weren&apos;t considered when a
            resource, system, healthcare office, workshop, or form was designed.
          </p>
          <p>And I know what it&apos;s like to finally encounter information that makes you think:</p>
          <p className="italic">Wait. There are other people experiencing this too?</p>
          <p>
            Neuroqueer Apothecary grew out of collecting, organizing, translating, and sharing that
            information.
          </p>
          <p>
            More about me lives on the <RoomLink href="/about#quinn">About</RoomLink> page.
          </p>
        </RoomSection>

        <RoomSection title="Lived Experience + Research">
          <p>Lived experience matters here.</p>
          <p>So does evidence.</p>
          <p>
            Neuroqueer Apothecary resources combine lived experience, community knowledge,
            practical tools, and research-informed information.
          </p>
          <p>
            When we&apos;re talking about healthcare in particular, I want to help you understand
            the landscape—not diagnose you or replace your medical team.
          </p>
          <p>That means helping you learn things like:</p>
          <BulletList items={landscapeItems} />
          <p>You remain the person making decisions about your body and care.</p>
        </RoomSection>

        <RoomSection title="Research Changes. So Do the Resources.">
          <p>A static guide captures what its author knew when they finished writing it.</p>
          <p>These resources aren&apos;t intended to be static.</p>
          <p>
            When I find meaningful new research, resources, tools, explanations, or information, I
            can incorporate them into the existing resource.
          </p>
          <p>Your access stays with you.</p>
          <p>Come back and see what&apos;s new.</p>
        </RoomSection>

        <LearnMoreSection title="Why Lived Experience Changes the Conversation">
          <p>
            There are excellent clinicians, researchers, therapists, educators, and other
            professionals doing important work.
          </p>
          <p>But professional expertise and lived experience answer different kinds of questions.</p>
          <p>A clinical resource might explain the diagnostic criteria for a condition.</p>
          <p>Someone who has spent years navigating that condition may also be able to tell you:</p>
          <BulletList items={livedExperienceItems} />
          <p>Neuroqueer Apothecary lives in that space.</p>
        </LearnMoreSection>

        <RoomSection title="When a Resource Isn’t Quite Enough">
          <p>Sometimes you don&apos;t need another article.</p>
          <p>You need somebody to help you figure out:</p>
          <p className="italic">Okay. What do I do with all of this?</p>
          <p>That&apos;s where coaching comes in.</p>
        </RoomSection>

        <RoomSection title="A Short Session Can Give You a Direction">
          <p>Complex problems can create enormous research trees.</p>
          <BulletList items={coachingTopics} />
          <p>You may already have 40 tabs open.</p>
          <p>Bring me the question.</p>
          <p>
            Before a consult, I&apos;ll ask you a few questions so I can understand what you&apos;re
            trying to figure out. I&apos;ll use that information to come prepared with relevant
            resources, possibilities to research, and potential next steps.
          </p>
          <p>
            In even a short session, the goal is for you to leave with a clearer roadmap for what
            you can investigate, document, ask about, or do next—not a diagnosis, a treatment plan,
            or a substitute for clinical care.
          </p>
          <p>
            Coaching is educational and navigational support rather than diagnosis or medical
            treatment.
          </p>
          <GuideCta href="/coaching#book" label="Book a Free 15-Minute Consult →" isDominant />
          <GuideCta href="/coaching" label="Explore Coaching Options →" />
        </RoomSection>

        <RoomSection title="Coaching Isn’t Just for Healthcare">
          <p>Sometimes the thing you&apos;re trying to navigate isn&apos;t a diagnosis.</p>
          <p>Maybe you&apos;re:</p>
          <BulletList items={otherCoachingItems} />
          <p>Or sitting in front of a problem thinking:</p>
          <p className="italic">
            I know there&apos;s probably a way forward. I just can&apos;t see it from here.
          </p>
          <p>That&apos;s a perfectly reasonable thing to bring to a consult.</p>
        </RoomSection>

        <RoomSection title="What You’re Actually Buying">
          <p>You&apos;re not buying a diagnosis.</p>
          <p>You&apos;re not buying a promise that one resource will solve everything.</p>
          <p>
            And you&apos;re definitely not buying the One Weird Trick™ that somehow escaped the
            entire internet.
          </p>
          <p>You&apos;re buying:</p>
          <BulletList items={buyingItems} />
          <p>
            And, hopefully, fewer hours spent staring at 37 open browser tabs wondering which one
            had the useful information.
          </p>
        </RoomSection>

        <RoomSection title="What Does This Get Me?">
          <p>A resource you can keep coming back to.</p>
          <p>Information organized for neurodivergent brains.</p>
          <p>TL;DRs when you&apos;re low on spoons.</p>
          <p>Deep dives when you&apos;re ready for them.</p>
          <p>Updates as the resource grows.</p>
          <p>
            A trans, neurodivergent, disabled perspective built into the resource from the
            beginning—not added as an afterthought.
          </p>
          <p>And if you need more than a guide?</p>
          <p>There&apos;s a human here, too.</p>
          <GuideCta href="/resources" label="Explore the Resource Library →" isDominant />
          <GuideCta href="/store" label="Visit the Store →" />
          <GuideCta href="/coaching#book" label="Book a Free 15-Minute Consult →" />
          <GuideCta href="/store" label="Support NQA with a Tip →" />
          <p className="text-center font-gallery italic text-room-brown">
            Neuroqueer Apothecary by Quinn Fleur
          </p>
        </RoomSection>
      </WallCard>
    </RoomPage>
  )
}
