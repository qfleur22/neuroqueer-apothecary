import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
import { GuideCover } from '@/components/home/guide-cover'
import { BulletList, RoomSection } from '@/components/home/room-section'
import { LearnMoreSection } from '@/components/home/learn-more-section'
import { PurchaseIncludes } from '@/components/home/purchase-includes'
import { getCarePlanWorkshopHref } from '@/utils/shopify-checkout'

export const metadata: Metadata = {
  title: 'Care Plan Creation Workshop Kit',
  description:
    'A ready-to-facilitate Care Plan Creation Workshop—curriculum, prompts, participant materials, and facilitation structure included.',
}

const COACHING_HREF = '/coaching'
const INDIVIDUAL_HREF = '/care-plan'
const KIT_LABEL = 'Get the Care Plan Creation Workshop Kit →'

const communityItems = [
  'Autistic people',
  'People with ADHD',
  'Neurodivergent adults',
  'Chronically ill people',
  'Disabled people',
  'People experiencing burnout',
  'People with fluctuating capacity',
  'People who experience shutdowns or meltdowns',
  'People with sensory needs',
  'People who struggle to identify what they need',
  'People who have difficulty communicating under stress',
  'Queer and trans communities',
  'Chosen families',
  'Partners and polycules',
  'Caregivers',
  'Peer-support groups',
  'Mutual-aid networks',
  'Community organizations',
  'Support groups',
  'College organizations',
]

const hostItems = [
  'Community organizers',
  'Peer-support facilitators',
  'Disability organizers',
  'Queer and trans organizations',
  'Neurodivergent groups',
  'Support-group leaders',
  'Educators',
  'Coaches',
  'Caregivers',
  'Mutual-aid organizers',
  'Student organizations',
  'Community centers',
  'Chosen-family groups',
  'Friends who looked at the Care Plan and immediately said, “Holy shit, everyone I know needs one of these.”',
]

const curriculumQuestions = [
  'What do I teach?',
  'What order should I teach it in?',
  'What should participants actually do?',
  'What questions should I ask?',
  'How do I explain the different sections?',
  'Where should we take breaks?',
  'What topics should remain private?',
  'How do I support somebody who’s stuck?',
  'How do I make the workshop accessible?',
  'What do I do if somebody doesn’t know the answer?',
  'How do I keep this from accidentally becoming group therapy?',
]

const workbookQuestions = [
  'What does a good day look like for me?',
  'What changes first when I’m struggling?',
  'What do people consistently misunderstand about me?',
  'How does my communication change under stress?',
  'What questions can I still answer when overwhelmed?',
  'What sensory input helps?',
  'What sensory input hurts?',
  'What does support feel like?',
  'What feels controlling?',
  'What do I need when I can’t identify what I need?',
  'Who are my safe people?',
]

const templateSections = [
  'Quick Reference',
  'Understanding Me',
  'Communication',
  'Doing Well',
  'Stress',
  'Overwhelm',
  'Shutdown',
  'Anxiety & Panic',
  'Depression',
  'Burnout',
  'Physical Pain & Exhaustion',
  'Sensory Seeking',
  'Sensory Avoidance',
  'Decision Fatigue',
  'Distress Levels',
  'Distress Checklist',
  'Comfort Menu',
  'Medical Support',
  'Capacity / Spoons Planning',
  'Relationships & Conflict',
  'Accountability & Repair',
  'Safety / Red Alert Planning',
  'Healthcare & Specialist Information',
]

const coachingItems = [
  'Choosing your workshop format',
  'Deciding what content to include',
  'Creating an agenda',
  'Adapting the presentation',
  'Determining workshop length',
  'Planning breaks',
  'Making activities accessible',
  'Facilitating neurodivergent participants',
  'Handling different processing speeds',
  'Setting community agreements',
  'Protecting privacy',
  'Avoiding forced disclosure',
  'Introducing sensitive material',
  'Responding when someone becomes overwhelmed',
  'Maintaining appropriate facilitator boundaries',
  'Distinguishing peer support from therapy',
  'Planning small-group activities',
  'Preparing supplies and materials',
  'Practicing your presentation',
  'Troubleshooting your workshop',
  'Developing follow-up sessions',
]

export default function CarePlanWorkshopPage() {
  const buyHref = getCarePlanWorkshopHref()

  return (
    <RoomPage>
      <WallCard title="Host a Care Plan Creation Workshop" wide="xl">
        <p className="font-gallery text-xl italic text-room-brown">
          Everything you need to help your community figure out what support actually looks
          like—before they&apos;re overwhelmed, burned out, sick, shut down, or in crisis.
        </p>
        <p className="text-center">Created by Quinn Fleur</p>
        <div className="mx-auto max-w-xs">
          <GuideCover title="Care Plan Creation Workshop Kit" tagline="ready to facilitate" />
        </div>
        <p>You know what would be useful?</p>
        <p>Sitting down with the people you care about and actually talking about:</p>
        <p>How do I know when you&apos;re struggling?</p>
        <p>What does overwhelm look like for you?</p>
        <p>What should I do when you can&apos;t tell me what you need?</p>
        <p>Do you want company or space?</p>
        <p>What makes a shutdown worse?</p>
        <p>What does sensory overload look like?</p>
        <p>Who should I call in an emergency?</p>
        <p>How should we handle conflict when you&apos;re already overwhelmed?</p>
        <p>What do you wish people understood about caring for you?</p>
        <p>Those conversations rarely happen when everyone is doing well.</p>
        <p>Instead, we tend to learn the answers experimentally.</p>
        <p>Usually at the worst possible moment.</p>
        <p>The Care Plan Creation Workshop Kit gives you the structure and resources to change that.</p>
        <p>
          It&apos;s a ready-to-facilitate workshop designed to help people begin creating
          personalized guides for how they want to be understood, communicated with, supported, and
          cared for.
        </p>
        <GuideCta href={buyHref} label={KIT_LABEL} isDominant />
        <PurchaseIncludes />

        <LearnMoreSection title="Stop Waiting for a Crisis to Learn How to Care for Each Other">
          <p>A lot of communities are very good at saying:</p>
          <p className="italic">&ldquo;Ask for what you need.&rdquo;</p>
          <p>The problem is that sometimes we don&apos;t know.</p>
          <p>
            Or we know when we&apos;re regulated but lose access to that information when we&apos;re
            overwhelmed.
          </p>
          <p>Or we know exactly what we need but can&apos;t communicate it.</p>
          <p>
            Or we ask for help and the person helping has absolutely no idea what to do next.
          </p>
          <p>Care planning moves some of those conversations before the crisis.</p>
          <p>
            Instead of improvising support while someone is at their limit, participants create a
            reference for:
          </p>
          <p>What I&apos;m like normally.</p>
          <p>How you&apos;ll know something is changing.</p>
          <p>What helps early.</p>
          <p>What makes things worse.</p>
          <p>How my communication changes.</p>
          <p>What to check when I don&apos;t know what&apos;s wrong.</p>
          <p>What helps when I&apos;m overwhelmed.</p>
          <p>What support looks like during a crisis.</p>
          <p>How I want people to preserve my autonomy while helping me.</p>
          <p>That can be extraordinarily useful information to have written down.</p>
        </LearnMoreSection>

        <LearnMoreSection title="What Is a Care Plan Creation Workshop?">
          <p>
            This isn&apos;t a lecture where participants spend an hour hearing about how they
            should take care of themselves.
          </p>
          <p>It&apos;s a structured working session.</p>
          <p>
            Participants are introduced to the Care Plan framework and then guided through
            exercises designed to help them actually begin creating their own plans.
          </p>
          <p>There are opportunities to:</p>
          <p>Reflect privately</p>
          <p>Complete worksheets</p>
          <p>Identify patterns</p>
          <p>Discuss ideas where appropriate</p>
          <p>Build support menus</p>
          <p>Create communication preferences</p>
          <p>Identify distress levels</p>
          <p>Think through crisis planning</p>
          <p>Talk with trusted people</p>
          <p>and ultimately:</p>
          <p>Write something they can use after the workshop ends.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Who Is This Workshop For?">
          <p>Care planning can be useful in an enormous range of communities.</p>
          <p>The workshop can be especially valuable for:</p>
          <BulletList items={communityItems} />
          <p>And honestly:</p>
          <p>People.</p>
          <p>
            You don&apos;t need a diagnosis to benefit from understanding how you want to be
            supported.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Who Can Host It?">
          <p>
            The Workshop Kit is designed for people who want to bring structured care planning
            into their existing communities or support work.
          </p>
          <p>That might include:</p>
          <BulletList items={hostItems} />
          <p>
            You don&apos;t need to position yourself as the expert on somebody else&apos;s needs.
          </p>
          <p>In fact, you shouldn&apos;t.</p>
          <p>
            The facilitator&apos;s job is to provide structure, questions, options, time, and
            support.
          </p>
          <p>Participants remain the experts on themselves.</p>
        </LearnMoreSection>

        <LearnMoreSection title="The Workshop Kit Gives You the Structure">
          <p>
            You shouldn&apos;t have to create an entire curriculum before you can help people make
            care plans.
          </p>
          <p>The kit is designed to answer:</p>
          <BulletList items={curriculumQuestions} />
          <p>I&apos;ve already done the curriculum-building part.</p>
          <p>You get to facilitate it.</p>
        </LearnMoreSection>

        <LearnMoreSection title="What’s Included in the Care Plan Workshop Kit?">
          <h3 className="font-display text-xl text-room-teal">1. Facilitator Guide</h3>
          <p>Your roadmap for running the workshop.</p>
          <p>
            The guide walks you through the purpose of each activity, concepts to introduce,
            questions to ask, facilitation considerations, and ways to help participants when they
            get stuck.
          </p>
          <p>It also helps you distinguish between:</p>
          <p>Helping someone think</p>
          <p>and</p>
          <p>Telling someone what they need.</p>
          <p>That&apos;s an important difference.</p>

          <h3 className="font-display text-xl text-room-teal">2. Workshop Agenda &amp; Run of Show</h3>
          <p>Know what you&apos;re doing before everyone arrives.</p>
          <p>The workshop structure can help you plan:</p>
          <p>Welcome &amp; orientation</p>
          <p>What a Care Plan is</p>
          <p>Quick Reference</p>
          <p>Understanding Me</p>
          <p>Communication</p>
          <p>Distress Levels</p>
          <p>Distress Checklist</p>
          <p>Comfort Menu</p>
          <p>Relationships &amp; Conflict</p>
          <p>Safety Planning</p>
          <p>Optional Medical Support</p>
          <p>Next Steps</p>
          <p>Closing</p>
          <p>
            You&apos;ll have a structure you can adapt depending on your group&apos;s needs and
            available time.
          </p>

          <h3 className="font-display text-xl text-room-teal">3. Participant Workbook</h3>
          <p>Every participant gets something to actually work on.</p>
          <p>The workbook guides people through questions such as:</p>
          <BulletList items={workbookQuestions} />
          <p>The goal is not necessarily to leave with every page completed.</p>
          <p>
            The goal is to leave with more information about yourself than you arrived with and a
            structure for continuing the work.
          </p>

          <h3 className="font-display text-xl text-room-teal">4. The Blank Care Plan Template</h3>
          <p>Participants can take the full Care Plan home and continue developing it.</p>
          <p>The template includes sections for:</p>
          <BulletList items={templateSections} />
          <p>Participants can use every section—or only the ones that matter to them.</p>

          <h3 className="font-display text-xl text-room-teal">5. Care Plan Presentation</h3>
          <p>Because you shouldn&apos;t also have to make the PowerPoint.</p>
          <p>
            The workshop materials include a presentation designed to guide participants through
            the major concepts and activities.
          </p>
          <p>Use the slides to introduce:</p>
          <p>What care planning is</p>
          <p>Why it helps</p>
          <p>How to identify baseline functioning</p>
          <p>Early warning signs</p>
          <p>Communication differences</p>
          <p>Green / Yellow / Orange / Red</p>
          <p>Basic-needs check-ins</p>
          <p>Comfort and regulation</p>
          <p>Supporting without controlling</p>
          <p>Crisis planning</p>
          <p>How to continue the plan afterward</p>
          <p>Use the deck as provided or customize it for your community.</p>

          <h3 className="font-display text-xl text-room-teal">6. Facilitator Presentation Notes</h3>
          <p>Slides tell participants what they&apos;re looking at.</p>
          <p>The facilitator notes help you know what you&apos;re talking about.</p>
          <p>
            You&apos;ll get context, suggested explanations, discussion prompts, activity
            instructions, important distinctions, and reminders about accessibility, consent,
            privacy, and scope.
          </p>
          <p>You don&apos;t need to memorize a script.</p>
          <p>The notes give you enough structure to make the workshop your own.</p>

          <h3 className="font-display text-xl text-room-teal">
            7. Green / Yellow / Orange / Red Activity
          </h3>
          <p>Participants create their own personalized distress map.</p>
          <p>🟢 Green</p>
          <p>What does my normal range look like?</p>
          <p>🟡 Yellow</p>
          <p>What changes first?</p>
          <p>🟠 Orange</p>
          <p>What happens when my coping resources are becoming exhausted?</p>
          <p>🔴 Red</p>
          <p>What tells me my normal coping strategies are no longer enough?</p>
          <p>Then comes the important part:</p>
          <p>What helps at each level?</p>
          <p>Because &ldquo;support me when I&apos;m struggling&rdquo; is vague.</p>
          <p>
            &ldquo;When I&apos;m Yellow, help me cancel unnecessary commitments and remind me to
            eat&rdquo; is something another person can actually use.
          </p>

          <h3 className="font-display text-xl text-room-teal">8. Distress Checklist Activity</h3>
          <p>Sometimes:</p>
          <p className="italic">&ldquo;What do you need?&rdquo;</p>
          <p>is simply too large a question.</p>
          <p>Participants learn how to systematically check areas such as:</p>
          <p>
            Food • Hydration • Medication • Pain • Sleep • Temperature • Sensory input • Emotions
            • Cognitive load • Social needs • Environment • Responsibilities • Regulation
          </p>
          <p>
            Instead of expecting someone to spontaneously understand their entire internal state
            while overwhelmed, the checklist gives them somewhere to start.
          </p>

          <h3 className="font-display text-xl text-room-teal">9. Build-a-Comfort-Menu Activity</h3>
          <p>This is one of the most practical pieces of the workshop.</p>
          <p>
            Participants create their own menu of things that may help across categories such as:
          </p>
          <p>
            Physical comfort • Sensory regulation • Co-regulation • Food and hydration • Rest •
            Cognitive rest • Emotional care • Creative activities • Spiritual care • Social
            connection • Practical support
          </p>
          <p>Instead of a supporter asking:</p>
          <p className="italic">&ldquo;WHAT CAN I DO?&rdquo;</p>
          <p>while everyone panics, the person can have actual options.</p>
          <p>Tea.</p>
          <p>Quiet.</p>
          <p>Food.</p>
          <p>Headphones.</p>
          <p>Parallel play.</p>
          <p>Help deciding.</p>
          <p>Go home.</p>
          <p>Call someone.</p>
          <p>Heating pad.</p>
          <p>No-input time.</p>
          <p>Whatever actually works for them.</p>

          <h3 className="font-display text-xl text-room-teal">10. Communication Mapping</h3>
          <p>One of the most useful workshop conversations is:</p>
          <p>How do I communicate when communication gets hard?</p>
          <p>Participants explore:</p>
          <p>Preferred communication styles</p>
          <p>Processing time</p>
          <p>Verbal vs. written communication</p>
          <p>Alternative communication</p>
          <p>Questions that are easy to answer</p>
          <p>Questions that become impossible</p>
          <p>Touch preferences</p>
          <p>Eye-contact preferences</p>
          <p>How they ask for space</p>
          <p>What silence means</p>
          <p>What reassurance works</p>
          <p>How someone should reconnect</p>
          <p>They can build alternatives such as:</p>
          <p>
            Texting • Writing • Communication cards • AAC • Emoji systems • Number scales • Color
            systems • Thumbs up/down • Pointing • Hand signals
          </p>
          <p>
            A care plan doesn&apos;t require somebody to communicate the same way at every level of
            distress.
          </p>

          <h3 className="font-display text-xl text-room-teal">11. Support Without Taking Over</h3>
          <p>This is foundational to the workshop.</p>
          <p>Knowing someone&apos;s Care Plan doesn&apos;t give you authority over them.</p>
          <p>If somebody&apos;s plan says:</p>
          <p className="italic">&ldquo;When I&apos;m overwhelmed, offer me three choices,&rdquo;</p>
          <p>that does not mean:</p>
          <p className="italic">&ldquo;When they&apos;re overwhelmed, I make all their decisions.&rdquo;</p>
          <p>The workshop teaches participants to distinguish:</p>
          <p>Support</p>
          <p>from</p>
          <p>Control.</p>
          <p>That can mean:</p>
          <p>Offer help instead of assuming it.</p>
          <p>Ask before touching.</p>
          <p>Respect reasonable risks.</p>
          <p>Give processing time.</p>
          <p>Don&apos;t treat distress as incompetence.</p>
          <p>Don&apos;t use the Care Plan to win arguments.</p>
          <p>Don&apos;t police someone&apos;s behavior because you think they&apos;re &ldquo;Orange.&rdquo;</p>
          <p>A Care Plan should increase autonomy.</p>
          <p>Not decrease it.</p>

          <h3 className="font-display text-xl text-room-teal">12. Relationship &amp; Conflict Planning</h3>
          <p>Support isn&apos;t only about meltdowns and bad health days.</p>
          <p>It&apos;s also about what happens when two people are pissed at each other.</p>
          <p>Participants can begin identifying:</p>
          <p>How concerns should be raised</p>
          <p>When difficult conversations should happen</p>
          <p>When conversations should pause</p>
          <p>What escalation looks like</p>
          <p>What communication styles make conflict worse</p>
          <p>What helps them process</p>
          <p>What accountability means</p>
          <p>What repair looks like</p>
          <p>How they prefer to reconnect</p>
          <p>
            Imagine knowing before the argument that your partner needs 30 minutes of processing
            time but also needs reassurance that the conversation isn&apos;t being abandoned.
          </p>
          <p>That&apos;s useful information.</p>

          <h3 className="font-display text-xl text-room-teal">13. Optional Medical Support Planning</h3>
          <p>
            For chronic-illness and disability-focused groups, the workshop can include an
            additional Medical Support component.
          </p>
          <p>Participants can begin documenting:</p>
          <p>Important conditions</p>
          <p>Medications</p>
          <p>Mobility aids</p>
          <p>Known flare patterns</p>
          <p>Established treatment plans</p>
          <p>What supporters can help with</p>
          <p>What shouldn&apos;t be assumed</p>
          <p>When their usual strategies aren&apos;t working</p>
          <p>When they want outside medical help</p>
          <p>
            The purpose is not for participants or facilitators to diagnose or prescribe treatment.
          </p>
          <p>It&apos;s to document:</p>
          <p className="italic">
            &ldquo;This is what my healthcare plan already looks like, and this is how you can help
            me follow it.&rdquo;
          </p>

          <h3 className="font-display text-xl text-room-teal">14. Safety &amp; Red Alert Planning</h3>
          <p>
            Some participants may choose to create a plan for times when ordinary support isn&apos;t
            enough.
          </p>
          <p>They can think through:</p>
          <p>Warning signs</p>
          <p>Safe people</p>
          <p>People not to contact</p>
          <p>Safe places</p>
          <p>Coping strategies that actually work</p>
          <p>Communication preferences</p>
          <p>Sensory supports</p>
          <p>Emergency instructions</p>
          <p>When professional support may be needed</p>
          <p>Hospital or crisis preferences</p>
          <p>Important information for supporters</p>
          <p>This portion should be facilitated carefully.</p>
          <p>
            Nobody should be required to publicly disclose crisis history, trauma, suicidal
            thoughts, medical information, or other private experiences in order to participate.
          </p>
          <p>A care-planning workshop is not group therapy.</p>
          <p>The kit helps facilitators maintain that distinction.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Privacy Is Part of the Workshop">
          <p>Some parts of a Care Plan are personal.</p>
          <p>Really personal.</p>
          <p>Participants may be thinking about:</p>
          <p>Relationships.</p>
          <p>Mental health.</p>
          <p>Medical conditions.</p>
          <p>Trauma.</p>
          <p>Family.</p>
          <p>Crisis.</p>
          <p>People they trust.</p>
          <p>People they absolutely do not trust.</p>
          <p>The workshop should never create pressure to perform vulnerability for the room.</p>
          <p>Participants should be able to:</p>
          <p>Skip questions.</p>
          <p>Write privately.</p>
          <p>Take breaks.</p>
          <p>Decline discussion.</p>
          <p>Leave sections blank.</p>
          <p>Share only what they choose.</p>
          <p>The goal is:</p>
          <p>Reflection without forced disclosure.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Make the Workshop Neurodivergent-Friendly">
          <p>
            A workshop about supporting neurodivergent people should probably not require them to
            sit under fluorescent lights listening to uninterrupted verbal instruction for three
            hours.
          </p>
          <p>The facilitator materials encourage things like:</p>
          <p>Clear agendas</p>
          <p>Predictable transitions</p>
          <p>Breaks</p>
          <p>Written instructions</p>
          <p>Multiple communication formats</p>
          <p>Low-pressure participation</p>
          <p>Permission to move</p>
          <p>Permission to stim</p>
          <p>Optional discussion</p>
          <p>Processing time</p>
          <p>Sensory considerations</p>
          <p>Concrete examples</p>
          <p>Reduced reliance on open-ended questions</p>
          <p>No expectation of eye contact</p>
          <p>And:</p>
          <p>You do not have to finish everything today.</p>
          <p>Completion is not the measure of whether the workshop worked.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Adapt It for Your Community">
          <p>The same Care Plan framework can become very different workshops.</p>
          <h3 className="font-display text-xl text-room-teal">Autism &amp; ADHD</h3>
          <p>
            Communication • Sensory regulation • Masking • Shutdowns • Meltdowns • Executive
            dysfunction • Decision fatigue • Alternative communication
          </p>
          <h3 className="font-display text-xl text-room-teal">Chronic Illness &amp; Disability</h3>
          <p>
            Capacity • Flares • Medical support • Mobility • Pain • Fatigue • Recovery • Healthcare
            communication
          </p>
          <h3 className="font-display text-xl text-room-teal">Queer &amp; Trans Community</h3>
          <p>
            Chosen family • Autonomy • Identity • Safe contacts • Community care • Communication •
            Crisis support
          </p>
          <h3 className="font-display text-xl text-room-teal">Partners &amp; Polycules</h3>
          <p>
            Communication • Co-regulation • Conflict • Capacity • Boundaries • Caregiving •
            Reconnection
          </p>
          <h3 className="font-display text-xl text-room-teal">Peer-Support Communities</h3>
          <p>
            Early intervention • Distress levels • Comfort menus • Support networks • Crisis
            planning • Autonomy
          </p>
          <h3 className="font-display text-xl text-room-teal">Caregivers &amp; Supporters</h3>
          <p>
            Recognizing signs • Asking instead of assuming • Supporting communication • Preserving
            independence • Responding to distress
          </p>
          <p>The kit gives you the foundation.</p>
          <p>You decide what your community needs most.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Run a Short Workshop or Make It a Series">
          <p>The complete Care Plan is substantial.</p>
          <p>That&apos;s intentional.</p>
          <p>You don&apos;t have to cram it into one session.</p>
          <p>The material can support different formats.</p>
          <p>
            <strong>Care Plan 101</strong>
            <br />
            Introduce the concept, Quick Reference, Understanding Me, and basic support
            preferences.
          </p>
          <p>
            <strong>Communication Workshop</strong>
            <br />
            Go deeper into processing, shutdowns, alternative communication, reassurance, and
            difficult conversations.
          </p>
          <p>
            <strong>Build Your Distress Plan</strong>
            <br />
            Create Green / Yellow / Orange / Red plans and a Distress Checklist.
          </p>
          <p>
            <strong>Build Your Comfort Menu</strong>
            <br />
            A lower-intensity, highly practical workshop focused on regulation and support.
          </p>
          <p>
            <strong>Chronic Illness Care Planning</strong>
            <br />
            Focus on capacity, medical flares, accessibility, and healthcare communication.
          </p>
          <p>
            <strong>Relationships &amp; Conflict</strong>
            <br />
            Create communication, pause, accountability, repair, and reconnection plans.
          </p>
          <p>
            <strong>Safety Planning</strong>
            <br />
            A more carefully facilitated session focused on support networks and crisis
            preferences.
          </p>
          <p>Or run the whole thing as a:</p>
          <p>
            <strong>Care Plan Workshop Series</strong>
          </p>
          <p>
            Participants can build their plans over several sessions instead of trying to
            understand their entire nervous system on a Saturday afternoon.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Great for Existing Communities">
          <p>You don&apos;t need to create a brand-new care-planning organization.</p>
          <p>Bring the workshop into a community that already exists.</p>
          <p>It can become programming for:</p>
          <p>
            LGBTQ+ centers • Autistic-adult groups • Disability organizations • Mutual-aid
            networks • Peer-support groups • College LGBTQ+ organizations • University disability
            groups • Community centers • Support groups • Chosen-family gatherings • Retreats •
            Caregiver programs • Community conferences
          </p>
          <p>
            The workshop creates something people can take home and continue using long after the
            event ends.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="“I Love This. I Have Never Facilitated Anything in My Life.”">
          <p>You don&apos;t have to figure that part out alone either.</p>
          <h3 className="font-display text-xl text-room-teal">
            Care Plan Workshop Facilitator Coaching
          </h3>
          <p>The kit gives you the curriculum.</p>
          <p>I can help you turn it into your workshop.</p>
          <GuideCta href={COACHING_HREF} label="Book Facilitator Coaching →" />
        </LearnMoreSection>

        <LearnMoreSection title="What Can Facilitator Coaching Help With?">
          <p>Depending on your experience and community, I can help with:</p>
          <BulletList items={coachingItems} />
          <p>You can bring me:</p>
          <p className="italic">
            &ldquo;Here&apos;s my group. Here&apos;s my venue. Here&apos;s how much time I have.
            Help.&rdquo;
          </p>
          <p>That&apos;s enough to start.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Practice Your Workshop Before You Run It">
          <p>You can also book a facilitator session specifically to rehearse.</p>
          <p>Walk through:</p>
          <p>Your introduction.</p>
          <p>Your slides.</p>
          <p>Your activities.</p>
          <p>Your transitions.</p>
          <p>Your explanations.</p>
          <p>Your discussion prompts.</p>
          <p>Your closing.</p>
          <p>I can help identify:</p>
          <p>Where instructions aren&apos;t clear</p>
          <p>Where participants may need more processing time</p>
          <p>Where you need a break</p>
          <p>Where the workshop could accidentally become too disclosure-heavy</p>
          <p>Which material can be cut</p>
          <p>Which sections need more context</p>
          <p>Where accessibility can be improved</p>
          <p>Whether your two-hour workshop currently contains approximately seven hours of material</p>
          <p>It happens.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Get Help Designing a Custom Version">
          <p>Maybe the standard workshop isn&apos;t quite right.</p>
          <p>You might want:</p>
          <p>A Care Plan Workshop for Autistic Adults</p>
          <p>or</p>
          <p>Care Planning for Chronically Ill Partners</p>
          <p>or</p>
          <p>Building Chosen-Family Support Plans</p>
          <p>or</p>
          <p>Care Plans for Polycules</p>
          <p>or</p>
          <p>Disability Care Planning for College Students</p>
          <p>I can help you adapt the existing framework around the needs of your specific audience.</p>
          <GuideCta href={COACHING_HREF} label="Ask About Workshop Customization →" />
        </LearnMoreSection>

        <RoomSection title="The Complete Workshop Package">
          <h3 className="font-display text-xl text-room-teal">Care Plan Creation Workshop Kit</h3>
          <p>Your kit includes the resources needed to move from:</p>
          <p className="italic">&ldquo;We should teach people about this.&rdquo;</p>
          <p>to:</p>
          <p className="italic">&ldquo;We&apos;re hosting the workshop next month.&rdquo;</p>
          <h3 className="font-display text-xl text-room-teal">Facilitator Materials</h3>
          <p>
            Facilitator Guide • Workshop structure / run of show • Facilitation notes • Discussion
            prompts • Activity instructions • Accessibility considerations • Privacy and autonomy
            guidance
          </p>
          <h3 className="font-display text-xl text-room-teal">Presentation Materials</h3>
          <p>Workshop presentation • Presenter notes • Editable structure for adapting the session</p>
          <h3 className="font-display text-xl text-room-teal">Participant Materials</h3>
          <p>
            Participant workbook • Blank Care Plan Template • Green / Yellow / Orange / Red
            exercise • Communication exercises • Distress Checklist • Comfort Menu activity •
            Reflection prompts • Take-home care-planning materials
          </p>
          <h3 className="font-display text-xl text-room-teal">And the Framework to Keep Building</h3>
          <p>Use the complete workshop.</p>
          <p>Shorten it.</p>
          <p>Turn it into a series.</p>
          <p>Run a specialized version.</p>
          <p>Bring it back six months later.</p>
          <p>Build another workshop from one section.</p>
          <p>
            The goal is to give you something you can actually facilitate, not a folder full of
            PDFs you&apos;re supposed to reverse-engineer into programming.
          </p>
          <GuideCta href={buyHref} label="Get the Complete Care Plan Workshop Kit →" isDominant />
          <p>Want help getting ready to run it?</p>
          <GuideCta href={COACHING_HREF} label="Book Facilitator Coaching →" />
          <p>Need it adapted for a specific community or organization?</p>
          <GuideCta href={COACHING_HREF} label="Ask About Workshop Customization →" />
        </RoomSection>

        <RoomSection title="Want the Materials Without Running a Workshop?">
          <p>
            If you&apos;re primarily interested in making a Care Plan for yourself or someone you
            support, you don&apos;t need the facilitator package.
          </p>
          <p>Get the individual version instead:</p>
          <p>Guide to Making a Care Plan + Blank Care Plan</p>
          <p>Learn the framework and create a personalized plan at your own pace.</p>
          <GuideCta href={INDIVIDUAL_HREF} label="Get the Individual Care Plan Resource →" />
        </RoomSection>

        <LearnMoreSection title="Want Someone to Help You Make Your Own?">
          <p>I also offer:</p>
          <h3 className="font-display text-xl text-room-teal">One-on-One Care Plan Coaching</h3>
          <p>
            Work through your own communication, distress, sensory, medical, relationship,
            capacity, and crisis-support needs with me.
          </p>
          <GuideCta href={COACHING_HREF} label="Book Personal Care Plan Coaching →" />
        </LearnMoreSection>

        <LearnMoreSection title="Created by Quinn Fleur">
          <p>Hi, I&apos;m Quinn Fleur.</p>
          <p>
            I&apos;m autistic, ADHD, disabled, chronically ill, queer, and deeply interested in
            the question:
          </p>
          <p>How do we get better at actually caring for each other?</p>
          <p>Not theoretically.</p>
          <p>Not:</p>
          <p className="italic">&ldquo;Reach out if you need anything!&rdquo;</p>
          <p>Actual care.</p>
          <p>What should I bring you?</p>
          <p>What should I ask?</p>
          <p>What should I stop asking?</p>
          <p>How do I know you&apos;re deteriorating?</p>
          <p>What does your silence mean?</p>
          <p>When should I give you space?</p>
          <p>When should I check again?</p>
          <p>What do I do if you can&apos;t talk?</p>
          <p>How do I help without taking over?</p>
          <p>What makes you feel cared for rather than controlled?</p>
          <p>The Care Plan grew out of trying to answer those questions.</p>
          <p>The workshop grew out of another realization:</p>
          <p>These are incredibly useful questions to answer together.</p>
          <p>When one person creates a Care Plan, they gain a tool.</p>
          <p>
            When a community learns how to talk about care, communication, capacity, distress,
            autonomy, and support together, you start building a culture of care.
          </p>
          <p>That&apos;s what this workshop is for.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Help People Write the Instructions They Wish Others Already Knew">
          <p>
            Your participants don&apos;t need you to tell them how they should be cared for.
          </p>
          <p>They need:</p>
          <p>Time to think.</p>
          <p>Better questions.</p>
          <p>Examples when their minds go blank.</p>
          <p>Language for things they&apos;ve noticed but never named.</p>
          <p>Permission to skip what doesn&apos;t fit.</p>
          <p>A structure for writing down what does.</p>
          <p>You provide the space.</p>
          <p>I provide the framework.</p>
          <p>They create the plan.</p>
          <p>Bring Care Plan Creation to your community.</p>
          <GuideCta href={buyHref} label={KIT_LABEL} isDominant />
          <p>Want help preparing to facilitate it?</p>
          <GuideCta href={COACHING_HREF} label="Book Care Plan Facilitator Coaching →" />
          <p>Need a customized workshop for your organization?</p>
          <GuideCta href={COACHING_HREF} label="Ask About Workshop Customization →" />
        </LearnMoreSection>

        <RoomSection title="Important Note for Facilitators">
          <p>
            The Care Plan Creation Workshop is an educational and peer-support framework.
            Purchasing the workshop materials does not qualify someone to provide psychotherapy,
            medical treatment, crisis intervention, case management, or other regulated
            professional services.
          </p>
          <p>
            Participants should maintain control over what they write and disclose. They should
            not be required to share diagnoses, trauma histories, crisis information, medications,
            relationship information, or completed Care Plans with facilitators or other
            participants.
          </p>
          <p>
            The workshop should not be used to diagnose participants, prescribe treatment, assess
            whether someone is medically or psychiatrically safe, or create plans for someone
            without their meaningful participation.
          </p>
          <p>
            Medical sections should document participants&apos; established care instructions
            rather than encourage facilitators to recommend individualized medical treatment.
          </p>
          <p>
            Safety planning deserves particular care. Facilitators should establish the scope of
            the workshop, identify appropriate local/professional resources before the event, and
            have a plan for responding if a participant needs support beyond the facilitator&apos;s
            role.
          </p>
          <p>
            Organizations and professionals using these resources remain responsible for complying
            with the laws, professional standards, privacy obligations, accessibility
            requirements, and safeguarding requirements applicable to their work and location.
          </p>
          <p>Most importantly:</p>
          <p>A Care Plan belongs to the person whose care it describes.</p>
          <p>It should help other people understand their needs.</p>
          <p>It should never become a tool for controlling them.</p>
        </RoomSection>

        <p className="text-center">
          <RoomLink href="/store">Back to the store</RoomLink>
          {' · '}
          <RoomLink href="/care-plan">The individual Care Plan</RoomLink>
        </p>
      </WallCard>
    </RoomPage>
  )
}
