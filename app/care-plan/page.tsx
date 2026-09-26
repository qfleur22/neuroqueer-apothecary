import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
import { GuideCover } from '@/components/home/guide-cover'
import { BulletList, RoomSection } from '@/components/home/room-section'
import { LearnMoreSection } from '@/components/home/learn-more-section'
import { PurchaseIncludes } from '@/components/home/purchase-includes'
import { getCarePlanGuideHref } from '@/utils/shopify-checkout'

export const metadata: Metadata = {
  title: 'How to Make a Care Plan',
  description:
    'A practical care-plan system for neurodivergence, chronic illness, disability, mental health, overwhelm, burnout, crisis, and everyday support.',
}

const COACHING_HREF = '/coaching'
const WORKSHOP_HREF = '/care-plan-workshop'
const DIY_LABEL = 'Get the Care Plan Guide + Blank Template →'

const guideSkills = [
  'Decide which sections you actually need',
  'Start with your highest-priority information',
  'Identify your baseline',
  'Recognize early warning signs',
  'Separate stress from overwhelm and crisis',
  'Identify sensory needs',
  'Build a distress checklist',
  'Create useful comfort options',
  'Document communication differences',
  'Write instructions supporters can actually follow',
  'Identify medical-support needs',
  'Build different plans for different capacities',
  'Think through conflict before you’re in it',
  'Create an emergency plan',
  'Decide what healthcare providers need to know',
  'Test your plan with the people who may actually use it',
  'Update the plan as you learn more about yourself',
]

const templateSections = [
  'Quick Reference',
  'Emergency Contacts',
  'Understanding Me',
  'Doing Well',
  'Stress',
  'Overwhelm',
  'Shutdown',
  'Anxiety & Panic',
  'Depression',
  'Burnout',
  'Pain & Exhaustion',
  'Sensory Seeking',
  'Sensory Avoidance',
  'Decision Fatigue',
  'When I Don’t Know What I Need',
  'Communication Guide',
  'Alternative Communication',
  'Distress Levels',
  'Distress Checklist',
  'Comfort Menu',
  'Medical Support',
  'Capacity / Spoons Planning',
  'Relationship & Conflict',
  'Accountability & Repair',
  'Safety / Red Alert Plan',
  'Healthcare & Specialist Reference',
]

const coachingTopics = [
  'Communication',
  'Neurodivergence',
  'Autistic shutdown or meltdown support',
  'ADHD and executive-function support',
  'Sensory regulation',
  'Burnout',
  'Chronic illness',
  'Disability',
  'Pain and fatigue',
  'Decision fatigue',
  'Basic-needs support',
  'Relationship communication',
  'Conflict planning',
  'Medical advocacy',
  'Crisis planning',
  'Support networks',
  'Accessibility',
  'Capacity planning',
  'Caregiver communication',
]

const workshopAudience = [
  'Peer-support groups',
  'Queer and trans organizations',
  'Neurodivergent communities',
  'Disability groups',
  'Mutual-aid networks',
  'Community centers',
  'Support groups',
  'Coaches',
  'Educators',
  'Caregivers',
  'Student organizations',
  'Chosen families',
  'Community workshops',
]

const workshopQuestions = [
  'What does “doing well” actually look like for me?',
  'What changes first when I’m struggling?',
  'What do people misunderstand about me?',
  'What questions can I answer when overwhelmed?',
  'What sensory accommodations help?',
  'What makes things worse?',
  'What does Yellow look like before I reach Orange?',
  'What’s on my Comfort Menu?',
  'Who are my safe people?',
  'How should somebody support me during conflict?',
  'What should happen during a crisis?',
  'What do I wish doctors understood about me?',
]

const facilitatorCoaching = [
  'Planning the workshop',
  'Choosing which sections to teach',
  'Timing',
  'Creating an accessible environment',
  'Introducing care plans',
  'Guiding reflection',
  'Facilitating discussion',
  'Handling different communication styles',
  'Supporting people without taking over',
  'Privacy and consent',
  'Managing emotionally difficult material',
  'Building in breaks',
  'Helping participants who get stuck',
  'Adapting the workshop for your community',
  'Establishing scope and boundaries',
  'Preparing resources',
  'Practicing your facilitation',
]

export default function CarePlanPage() {
  const buyHref = getCarePlanGuideHref()

  return (
    <RoomPage>
      <WallCard title="Make a Plan for the Days When You Can’t Explain What You Need" wide="xl">
        <p className="font-gallery text-xl italic text-room-brown">
          A practical care-plan system for neurodivergence, chronic illness, disability, mental
          health, overwhelm, burnout, crisis, communication, relationships, and everyday support.
        </p>
        <p className="text-center">Created by Quinn Fleur</p>
        <div className="mx-auto max-w-xs">
          <GuideCover title="How to Make a Care Plan" tagline="a manual for being you" />
        </div>
        <p>When you&apos;re doing well, you might know exactly what helps you.</p>
        <p>Then you&apos;re overwhelmed.</p>
        <p>Your brain stops cooperating.</p>
        <p>Someone asks:</p>
        <p className="italic">&ldquo;What do you need?&rdquo;</p>
        <p>And suddenly that is the most impossible question anyone has ever asked you.</p>
        <p>Do you need food?</p>
        <p>Quiet?</p>
        <p>Medication?</p>
        <p>Company?</p>
        <p>To go home?</p>
        <p>A hug?</p>
        <p>Absolutely no one to touch you?</p>
        <p>Are you anxious?</p>
        <p>In pain?</p>
        <p>Sensory overloaded?</p>
        <p>Burned out?</p>
        <p>Just really fucking tired?</p>
        <p>You don&apos;t know.</p>
        <p>Your loved one doesn&apos;t know.</p>
        <p>Everyone wants to help.</p>
        <p>
          And now you have to somehow explain your nervous system while actively losing access to
          the part of your brain that explains things.
        </p>
        <p>So figure it out before you need it.</p>
        <p>
          My Guide to Making a Care Plan helps you create a personalized manual for understanding,
          supporting, communicating with, and caring for yourself—especially when doing those
          things becomes difficult.
        </p>
        <GuideCta href={buyHref} label={DIY_LABEL} isDominant />
        <PurchaseIncludes />

        <LearnMoreSection title="What Is a Care Plan?">
          <p>Think of it as:</p>
          <p>An instruction manual for being you.</p>
          <p>Not because you&apos;re a machine.</p>
          <p>And definitely not because somebody else should get to control you.</p>
          <p>A good care plan communicates things like:</p>
          <p>This is what I&apos;m like when I&apos;m okay.</p>
          <p>This is how you&apos;ll know I&apos;m starting to struggle.</p>
          <p>This is what overwhelm looks like for me.</p>
          <p>This behavior probably doesn&apos;t mean what you think it means.</p>
          <p>This is how I communicate when words get hard.</p>
          <p>These things usually help.</p>
          <p>Please, for the love of God, do not do these things.</p>
          <p>Here&apos;s what to check when I don&apos;t know what I need.</p>
          <p>Here&apos;s what a crisis looks like.</p>
          <p>Here&apos;s who to call.</p>
          <p>Here&apos;s what my medical conditions look like when they flare.</p>
          <p>Here&apos;s how I want conflict handled.</p>
          <p>And if I can&apos;t effectively advocate for myself, here&apos;s what I want you to know.</p>
          <p>
            Your care plan externalizes information that otherwise has to live entirely in your
            head.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="This Isn’t Just a Crisis Plan">
          <p>Crisis plans matter.</p>
          <p>But this Care Plan starts much earlier.</p>
          <p>
            Because the best time to figure out what helps during a meltdown isn&apos;t necessarily
            during the meltdown.
          </p>
          <p>The system looks at the entire spectrum:</p>
          <p>Doing Well → Stressed → Overwhelmed → Crisis</p>
          <p>What changes?</p>
          <p>What disappears first?</p>
          <p>What becomes harder?</p>
          <p>What can someone else notice?</p>
          <p>What helps at each stage?</p>
          <p>And most importantly:</p>
          <p>Can we intervene while the problem is still small?</p>
          <p>
            Sometimes the difference between an awful night and a manageable one isn&apos;t a
            revolutionary coping skill.
          </p>
          <p>
            It&apos;s noticing at 4 p.m. that you&apos;re hungry, dehydrated, overstimulated, in
            pain, haven&apos;t taken your medication, and have agreed to three more things than
            your brain can currently process.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="The Blank Care Plan">
          <p>You don&apos;t have to invent the structure yourself.</p>
          <p>
            The Blank Personal Care Plan Template walks you through creating your own plan using
            detailed prompts, checklists, examples, and spaces for customization.
          </p>
          <p>Build it for yourself.</p>
          <p>Build one collaboratively with a partner.</p>
          <p>Help a friend make theirs.</p>
          <p>Use it with a client, where appropriate to your role and scope.</p>
          <p>Make a short version.</p>
          <p>Make an enormous one.</p>
          <p>Ignore sections that don&apos;t apply.</p>
          <p>Go absolutely feral with the highlighter.</p>
          <p>The point is to make a document that actually reflects the person using it.</p>
          <GuideCta href={buyHref} label="Get the Blank Care Plan Template →" />
        </LearnMoreSection>

        <LearnMoreSection title="Start With a Quick Reference">
          <p>
            Your first pages shouldn&apos;t require someone to read your autobiography before they
            can help you.
          </p>
          <p>The Care Plan begins with a quick-reference section covering information such as:</p>
          <p>
            Preferred name • Pronouns • Emergency contacts • Important medical information •
            Communication needs • What I&apos;m like when I&apos;m doing well • What struggling
            looks like • Common misunderstandings • What helps • What to avoid • Who to contact •
            When to get additional help • Emergency instructions
          </p>
          <p>Then the rest of the plan explains those things in detail.</p>
          <p>
            It&apos;s designed so someone can get the basics in a few minutes and go deeper when
            they need to.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="“People Think I’m Angry When I’m Actually Overwhelmed.”">
          <p>This is exactly the kind of information a care plan can capture.</p>
          <p>Maybe:</p>
          <p>Your silence gets interpreted as punishment.</p>
          <p>Your tone gets interpreted as anger.</p>
          <p>Your pacing gets interpreted as agitation.</p>
          <p>Your lack of eye contact gets interpreted as disrespect.</p>
          <p>Your withdrawal gets interpreted as rejection.</p>
          <p>Your increased joking gets interpreted as being fine.</p>
          <p>
            Your irritability gets interpreted as hostility when you&apos;re actually in severe
            pain.
          </p>
          <p>Your inability to answer gets interpreted as refusing to communicate.</p>
          <p>Your plan can explain:</p>
          <p>What people see.</p>
          <p>and</p>
          <p>What it actually means.</p>
          <p>Sometimes that distinction can prevent an enormous amount of unnecessary conflict.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Create an “Understanding Me” Guide">
          <p>The template walks you through what support looks like across different states.</p>
          <h3 className="font-display text-xl text-room-teal">When I’m Doing Well</h3>
          <p>How do I normally communicate?</p>
          <p>What routines am I maintaining?</p>
          <p>What does independence look like?</p>
          <p>How can people support me without micromanaging me?</p>
          <h3 className="font-display text-xl text-room-teal">When I’m Stressed</h3>
          <p>What changes first?</p>
          <p>What demands can be reduced?</p>
          <p>Do I need reassurance, prioritization, rest, or practical help?</p>
          <h3 className="font-display text-xl text-room-teal">When I’m Overwhelmed</h3>
          <p>Are open-ended questions becoming impossible?</p>
          <p>Do I need less sensory input?</p>
          <p>Do conversations need to wait?</p>
          <h3 className="font-display text-xl text-room-teal">During Shutdown</h3>
          <p>Can I still text?</p>
          <p>Would writing work?</p>
          <p>Do I need someone to sit quietly nearby?</p>
          <p>Do I need everyone to please stop asking me what’s wrong every 45 seconds?</p>
          <h3 className="font-display text-xl text-room-teal">During Anxiety or Panic</h3>
          <p>Do I want grounding?</p>
          <p>Reassurance?</p>
          <p>Space?</p>
          <p>Touch?</p>
          <p>Medication?</p>
          <p>Distraction?</p>
          <h3 className="font-display text-xl text-room-teal">During Depression</h3>
          <p>How does someone know I’m isolating beyond my normal amount?</p>
          <p>What basic tasks disappear?</p>
          <p>What kind of contact helps?</p>
          <h3 className="font-display text-xl text-room-teal">During Burnout</h3>
          <p>What needs to stop?</p>
          <p>What expectations need to change?</p>
          <p>What helps recovery rather than demanding more productivity?</p>
          <h3 className="font-display text-xl text-room-teal">During Physical Pain or Exhaustion</h3>
          <p>What can someone take off my plate?</p>
          <p>What symptoms need attention?</p>
          <p>Do I need mobility support?</p>
          <h3 className="font-display text-xl text-room-teal">When I’m Sensory Seeking</h3>
          <p>Movement?</p>
          <p>Pressure?</p>
          <p>Music?</p>
          <p>Strong flavors?</p>
          <p>Stimming?</p>
          <h3 className="font-display text-xl text-room-teal">When I’m Sensory Avoiding</h3>
          <p>Quiet?</p>
          <p>Darkness?</p>
          <p>Headphones?</p>
          <p>Fewer people?</p>
          <p>Absolutely nobody unexpectedly touching me?</p>
          <h3 className="font-display text-xl text-room-teal">During Decision Fatigue</h3>
          <p>Don&apos;t ask:</p>
          <p className="italic">&ldquo;What do you want for dinner?&rdquo;</p>
          <p>Try:</p>
          <p className="italic">&ldquo;Soup, sandwich, or should I choose?&rdquo;</p>
          <p>Sometimes support isn&apos;t doing more.</p>
          <p>It&apos;s making the cognitive load smaller.</p>
        </LearnMoreSection>

        <LearnMoreSection title="The Communication Guide">
          <p>Because &ldquo;just communicate&rdquo; is terrible advice if nobody explains how.</p>
          <p>A major section of the Care Plan is devoted entirely to communication.</p>
          <p>You&apos;ll work out:</p>
          <p>How people should check in with you</p>
          <p>How frequently you like check-ins</p>
          <p>Whether you prefer direct or gentle communication</p>
          <p>How much processing time you need</p>
          <p>What happens to your communication under stress</p>
          <p>What alternative communication methods work</p>
          <p>How people can tell you need space</p>
          <p>Which questions are easiest to answer</p>
          <p>Which questions make your brain completely freeze</p>
          <p>Whether touch helps</p>
          <p>Whether eye contact helps</p>
          <p>Whether conversation helps</p>
          <p>Whether silence helps</p>
          <p>How difficult conversations should be approached</p>
          <p>What reassurance actually works</p>
          <p>How someone should reconnect after giving you space</p>
          <p>And even:</p>
          <p>How will someone know their support is working?</p>
          <p>Maybe you start joking again.</p>
          <p>Maybe you can answer more complicated questions.</p>
          <p>Maybe your body relaxes.</p>
          <p>Maybe you start making decisions.</p>
          <p>Maybe you ask for food.</p>
          <p>Those tiny signs matter.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Build Backup Communication for When Words Stop Working">
          <p>Maybe verbal communication becomes difficult when you&apos;re overwhelmed.</p>
          <p>Your plan can identify alternatives such as:</p>
          <p>Texting</p>
          <p>Writing</p>
          <p>Notes apps</p>
          <p>Communication cards</p>
          <p>AAC</p>
          <p>Emoji responses</p>
          <p>Number scales</p>
          <p>Green / Yellow / Orange / Red</p>
          <p>Thumbs up/down</p>
          <p>Pointing</p>
          <p>Hand signals</p>
          <p>
            You don&apos;t need to suddenly become excellent at spoken emotional communication
            while having the worst day of your month.
          </p>
          <p>Build another route.</p>
        </LearnMoreSection>

        <LearnMoreSection title="The Green / Yellow / Orange / Red System">
          <p>One of the core tools in the Care Plan is a personalized distress scale.</p>
          <h3 className="font-display text-xl text-room-teal">🟢 Green — My Normal Range</h3>
          <p>Green doesn&apos;t mean perfectly healthy or symptom-free.</p>
          <p>It means:</p>
          <p>I&apos;m generally managing.</p>
          <p>What does that look like for you?</p>
          <p>How much are you socializing?</p>
          <p>What routines are intact?</p>
          <p>What does your normal energy look like?</p>
          <h3 className="font-display text-xl text-room-teal">🟡 Yellow — Something Is Starting to Slip</h3>
          <p>This is often where intervention is easiest.</p>
          <p>Maybe you&apos;re:</p>
          <p>More irritable.</p>
          <p>Sleeping worse.</p>
          <p>Cancelling plans.</p>
          <p>Forgetting things.</p>
          <p>Masking harder.</p>
          <p>Procrastinating more.</p>
          <p>Having increased pain.</p>
          <p>Becoming more sensitive to sensory input.</p>
          <p>What can you change now before Yellow becomes Orange?</p>
          <h3 className="font-display text-xl text-room-teal">🟠 Orange — I’m Overwhelmed</h3>
          <p>Your resources are running out.</p>
          <p>Communication gets harder.</p>
          <p>Executive function disappears.</p>
          <p>Everything takes more effort.</p>
          <p>Maybe you need:</p>
          <p>
            Yes/no questions • Reduced stimulation • Fewer demands • Food • Medication • Help
            prioritizing • Comfort items • Rest • Difficult conversations postponed
          </p>
          <h3 className="font-display text-xl text-room-teal">🔴 Red — Crisis</h3>
          <p>Your normal coping strategies aren&apos;t enough.</p>
          <p>This section connects directly to your personalized Safety / Red Alert Plan.</p>
          <p>
            Instead of asking supporters to invent a crisis response while everyone is scared:
          </p>
          <p>You already wrote one.</p>
        </LearnMoreSection>

        <LearnMoreSection title="“I Don’t Know What’s Wrong.”">
          <p>Open the Distress Checklist.</p>
          <p>Sometimes you genuinely don&apos;t know.</p>
          <p>So the Care Plan includes a systematic check of:</p>
          <h3 className="font-display text-xl text-room-teal">Food &amp; Hydration</h3>
          <p>Have I eaten?</p>
          <p>Had water?</p>
          <p>Do I need electrolytes?</p>
          <p>Would a safe food be easier?</p>
          <h3 className="font-display text-xl text-room-teal">Sleep &amp; Rest</h3>
          <p>Am I physically tired?</p>
          <p>Mentally exhausted?</p>
          <p>Do I need sleep or simply no-input rest?</p>
          <h3 className="font-display text-xl text-room-teal">Pain &amp; Medical Needs</h3>
          <p>Medication?</p>
          <p>Pain?</p>
          <p>Temperature?</p>
          <p>Position?</p>
          <p>A symptom I’ve been ignoring?</p>
          <h3 className="font-display text-xl text-room-teal">Hygiene &amp; Body Needs</h3>
          <p>Bathroom?</p>
          <p>Shower?</p>
          <p>Clean clothes?</p>
          <p>Teeth?</p>
          <p>Basic body care?</p>
          <h3 className="font-display text-xl text-room-teal">Sensory Input</h3>
          <p>Too much?</p>
          <p>Too little?</p>
          <h3 className="font-display text-xl text-room-teal">Emotions</h3>
          <p>Sad?</p>
          <p>Angry?</p>
          <p>Afraid?</p>
          <p>Lonely?</p>
          <p>Ashamed?</p>
          <p>Grieving?</p>
          <p>Numb?</p>
          <p>No fucking clue?</p>
          <p>That’s an option too.</p>
          <h3 className="font-display text-xl text-room-teal">Cognitive Load</h3>
          <p>Brain fog?</p>
          <p>Decision fatigue?</p>
          <p>Rumination?</p>
          <p>Everything feels urgent?</p>
          <h3 className="font-display text-xl text-room-teal">Social Needs</h3>
          <p>Alone?</p>
          <p>Quiet company?</p>
          <p>A hug?</p>
          <p>Parallel play?</p>
          <p>Someone to listen?</p>
          <p>Practical help?</p>
          <h3 className="font-display text-xl text-room-teal">Environment</h3>
          <p>Would going home solve 40% of the problem?</p>
          <h3 className="font-display text-xl text-room-teal">Responsibilities</h3>
          <p>What can wait?</p>
          <p>What can someone else do?</p>
          <p>What’s the smallest next step?</p>
          <p>You don’t have to intuitively identify the answer.</p>
          <p>Work the problem.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Build a Comfort Menu">
          <p>A Comfort Menu isn’t simply:</p>
          <p>Things That Make Me Happy™</p>
          <p>
            It’s a collection of interventions, accommodations, activities, and supports that can
            help regulate or restore you.
          </p>
          <p>Your menu can include categories like:</p>
          <p>
            <strong>Comfort</strong>
            <br />
            Blankets, tea, plushies, routines, medications, water.
          </p>
          <p>
            <strong>Sensory Regulation</strong>
            <br />
            Headphones, temperature changes, fidgets, movement, compression, music.
          </p>
          <p>
            <strong>Co-Regulation</strong>
            <br />
            Quiet company, reassurance, physical touch, stories, familiar people.
          </p>
          <p>
            <strong>Food</strong>
            <br />
            Safe foods, small meals, electrolytes, meal preparation.
          </p>
          <p>
            <strong>Rest</strong>
            <br />
            Reduced input, sleep routines, eyes-closed audio, permission to stop.
          </p>
          <p>
            <strong>Cognitive Rest</strong>
            <br />
            Brain dumps, decision help, one-task rules, putting worries somewhere for later.
          </p>
          <p>
            <strong>Emotional Support</strong>
            <br />
            Feelings wheels, journaling, self-compassion, permission to cry.
          </p>
          <p>
            <strong>Creative Rest</strong>
            <br />
            Art, music, makeup, fashion, crafts, writing.
          </p>
          <p>
            <strong>Spiritual Care</strong>
            <br />
            Nature, ritual, prayer, gratitude, spiritual practice.
          </p>
          <p>
            <strong>Practical Support</strong>
            <br />
            Calendar checks, prioritization, preparing for tomorrow, offloading responsibilities.
          </p>
          <p>Then when someone asks:</p>
          <p className="italic">&ldquo;What can I do?&rdquo;</p>
          <p>you have an actual menu.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Support for Chronic Illness & Disability">
          <p>Some people need another layer.</p>
          <p>
            The template includes an optional Medical Support section for chronically ill,
            disabled, and medically complicated people.
          </p>
          <p>This section isn’t a replacement for medical care.</p>
          <p>It’s a personalized reference for the people who support you.</p>
          <p>You can document:</p>
          <p>
            Important diagnoses • Medications • Rescue medications • Allergies • Mobility aids •
            Baseline symptoms • Common flares • What usually helps • What makes symptoms worse •
            When your normal plan isn’t enough • When outside medical help is appropriate
          </p>
          <p>The template includes customizable starting points for areas such as:</p>
          <p>Joint instability and hypermobility</p>
          <p>POTS / dysautonomia-type flares</p>
          <p>Allergic or mast-cell-type symptoms</p>
          <p>GI flares</p>
          <p>Migraine and neurological symptoms</p>
          <p>Fatigue and post-exertion crashes</p>
          <p>Sleep problems</p>
          <p>
            Then you personalize them based on your own healthcare plan and clinician guidance.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Create a High / Medium / Low Capacity Plan">
          <p>Not every day has the same number of spoons.</p>
          <p>
            Instead of expecting yourself to maintain your highest level of functioning every day,
            you can create different plans.
          </p>
          <h3 className="font-display text-xl text-room-teal">High Capacity</h3>
          <p>What can I reasonably do?</p>
          <p>What keeps me stable?</p>
          <h3 className="font-display text-xl text-room-teal">Medium Capacity</h3>
          <p>What should be prioritized?</p>
          <p>What support becomes useful?</p>
          <h3 className="font-display text-xl text-room-teal">Low Capacity</h3>
          <p>What is actually essential?</p>
          <p>What can be paused?</p>
          <p>What should someone else take over?</p>
          <p>A low-capacity plan means you don’t have to decide whether you’re “failing.”</p>
          <p>You’re following the plan for the capacity you actually have.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Relationships Need Care Plans Too">
          <p>Your Care Plan can also explain how you want conflict handled.</p>
          <p>Not:</p>
          <p className="italic">&ldquo;Nobody is ever allowed to disagree with me.&rdquo;</p>
          <p>But:</p>
          <p className="italic">
            &ldquo;Here’s how we have a disagreement without making everything ten times worse.&rdquo;
          </p>
          <p>You’ll explore:</p>
          <p>How concerns should be brought up</p>
          <p>When difficult conversations should happen</p>
          <p>When they absolutely should not</p>
          <p>What communication helps</p>
          <p>What makes conflict escalate</p>
          <p>How to know when you need a break</p>
          <p>How to pause without abandoning the issue</p>
          <p>What accountability means to you</p>
          <p>What makes an apology meaningful</p>
          <p>How you rebuild trust</p>
          <p>How you reconnect after conflict</p>
          <p>Sometimes:</p>
          <p className="italic">&ldquo;Can we talk about something difficult?&rdquo;</p>
          <p>
            works much better than launching into the issue while someone is half-asleep, hungry,
            overstimulated, and trying to put on their shoes.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Know When to Pause">
          <p>Your plan helps identify signs that productive communication has stopped.</p>
          <p>Maybe you’re:</p>
          <p>Dissociating</p>
          <p>Crying uncontrollably</p>
          <p>Unable to speak</p>
          <p>Repeating yourself</p>
          <p>Unable to process information</p>
          <p>Entering a meltdown or panic attack</p>
          <p>Maybe the other person is escalating.</p>
          <p>Maybe both of you are simply talking in circles.</p>
          <p>The plan can establish ahead of time:</p>
          <p>How do we pause?</p>
          <p>How long?</p>
          <p>Who reconnects?</p>
          <p>When are we coming back?</p>
          <p>What does “I need a break” actually mean?</p>
          <p>Because taking a break from conflict and abandoning conflict aren’t the same thing.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Make the Emergency Plan Before the Emergency">
          <p>The Safety &amp; Red Alert Plan is the:</p>
          <p>Everything Has Gone Sideways Page.</p>
          <p>
            If you’re no longer able to effectively advocate for yourself, what should somebody
            know?
          </p>
          <p>You’ll identify:</p>
          <p>Warning signs</p>
          <p>Safe people</p>
          <p>People not to contact</p>
          <p>Safe places</p>
          <p>Coping strategies that have actually worked</p>
          <p>Communication methods</p>
          <p>Sensory supports</p>
          <p>Immediate physical needs</p>
          <p>Emergency instructions</p>
          <p>When outside support is needed</p>
          <p>Hospital or crisis preferences</p>
          <p>Important medical information</p>
          <p>What people commonly misunderstand during your crises</p>
          <p>
            It removes decisions from a moment when your ability to make decisions may already be
            compromised.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Make Healthcare Easier Too">
          <p>The Care Plan includes a section specifically designed to share with:</p>
          <p>
            Doctors • Specialists • Therapists • Psychiatrists • Emergency departments • Physical
            therapists • Crisis clinicians • Urgent care • Other healthcare professionals
          </p>
          <p>Think of it as a short personal healthcare passport.</p>
          <p>
            Instead of giving someone your entire Care Plan, you can provide the information they
            need to work with you effectively.
          </p>
          <p>That can include:</p>
          <p>Preferred name and pronouns</p>
          <p>Current medications</p>
          <p>Allergies</p>
          <p>Medical conditions</p>
          <p>Emergency contacts</p>
          <p>Medical baseline</p>
          <p>Communication needs</p>
          <p>Accessibility accommodations</p>
          <p>Medical triggers</p>
          <p>Helpful approaches</p>
          <p>Things clinicians commonly misunderstand</p>
          <p>Important history</p>
          <p>Goals of care</p>
          <p>Questions you don’t want to forget</p>
          <p>And a simple:</p>
          <p>Please Read This First</p>
          <p>
            A short explanation of what someone needs to understand about you within the first 30
            seconds.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="What’s Included in the Blank Care Plan?">
          <p>The complete template includes sections for:</p>
          <BulletList items={templateSections} />
          <p>
            Plus prompts, examples, checkboxes, reflection questions, and blank spaces for turning
            the framework into your plan.
          </p>
          <GuideCta href={buyHref} label="Get the Blank Care Plan →" />
        </LearnMoreSection>

        <LearnMoreSection title="And There’s a Guide for Actually Making It">
          <p>Because giving someone a 50-page blank template and saying:</p>
          <p className="italic">&ldquo;Have fun!&rdquo;</p>
          <p>would be an objectively terrible care-planning system.</p>
          <p>The Guide to Making Your Care Plan walks you through the process.</p>
          <p>You’ll learn how to:</p>
          <BulletList items={guideSkills} />
          <GuideCta href={buyHref} label={DIY_LABEL} isDominant />
        </LearnMoreSection>

        <LearnMoreSection title="“This Is Exactly What I Need, and I Have No Idea How to Fill It Out.”">
          <p>Perfectly reasonable.</p>
          <p>Figuring out what you need is often the hard part.</p>
          <p>Especially if you’re:</p>
          <p>Neurodivergent.</p>
          <p>Alexithymic.</p>
          <p>Burned out.</p>
          <p>Chronically ill.</p>
          <p>Used to masking.</p>
          <p>Used to taking care of everyone else.</p>
          <p>Newly diagnosed.</p>
          <p>Learning what accommodation actually feels like.</p>
          <p>Or staring at:</p>
          <p className="italic">&ldquo;What helps when you’re overwhelmed?&rdquo;</p>
          <p>thinking:</p>
          <p className="italic">I don’t fucking know. That’s why I’m overwhelmed.</p>
          <p>You don’t have to figure it out alone.</p>
        </LearnMoreSection>

        <RoomSection title="Build Your Care Plan With Me">
          <h3 className="font-display text-xl text-room-teal">One-on-One Care Plan Coaching</h3>
          <p>I offer peer-informed coaching to help you create a personalized Care Plan.</p>
          <p>Instead of simply filling blanks, we’ll explore:</p>
          <p>What actually happens to you?</p>
          <p>What do people misunderstand?</p>
          <p>What has helped before?</p>
          <p>What consistently makes things worse?</p>
          <p>What happens first when you’re deteriorating?</p>
          <p>What does your body need?</p>
          <p>How does your communication change?</p>
          <p>What should someone do when you can’t explain yourself?</p>
          <p>Where do you need more autonomy rather than more help?</p>
          <p>Then we turn those answers into something usable.</p>
          <GuideCta href={COACHING_HREF} label="Book Care Plan Coaching →" />
        </RoomSection>

        <LearnMoreSection title="We Can Build the Plan Together">
          <p>Depending on your needs, coaching can focus on:</p>
          <BulletList items={coachingTopics} />
          <p>Or:</p>
          <p className="italic">&ldquo;I have no idea what I need. Help me figure it out.&rdquo;</p>
          <p>That’s a valid place to start.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Make a Care Plan for Someone You Love">
          <p>The template doesn’t have to be completed alone.</p>
          <p>It can become a structured conversation between:</p>
          <p>Partners</p>
          <p>Friends</p>
          <p>Chosen family</p>
          <p>Roommates</p>
          <p>Parents and adult children</p>
          <p>Caregivers</p>
          <p>Support workers</p>
          <p>Peer-support relationships</p>
          <p>Clients and appropriate helping professionals</p>
          <p>Instead of waiting for a crisis to discover:</p>
          <p className="italic">
            &ldquo;Oh, apparently repeatedly asking them what’s wrong makes this dramatically
            worse,&rdquo;
          </p>
          <p>you can talk about it beforehand.</p>
          <p>What does support mean to them?</p>
          <p>When should you step in?</p>
          <p>When should you back off?</p>
          <p>What does consent look like around care?</p>
          <p>What should never be assumed?</p>
          <p>What helps them retain autonomy?</p>
          <p>A good care plan isn’t instructions for controlling another person.</p>
          <p>It’s instructions for supporting them without erasing them.</p>
        </LearnMoreSection>

        <RoomSection title="Want to Help Other People Build Their Own Care Plans?">
          <p>Maybe you don’t only want one for yourself.</p>
          <p>Maybe you’re the person in your community who read this and immediately thought:</p>
          <p className="italic">We should all make these.</p>
          <p>Excellent.</p>
          <p>I also offer resources for people who want to facilitate care-plan creation for others.</p>
          <p>This can work especially well for:</p>
          <BulletList items={workshopAudience} />
          <p>You don’t need to tell people what their care plan should say.</p>
          <p>You create the structure that helps them figure it out.</p>
        </RoomSection>

        <RoomSection title="Host a Care Plan Creation Workshop" id="workshop">
          <p>
            Give people the time, prompts, structure, and support to write the instructions they
            wish other people already knew.
          </p>
          <p>A Care Plan Creation Workshop can guide participants through questions like:</p>
          <BulletList items={workshopQuestions} />
          <p>Participants leave with more than information about care plans.</p>
          <p>They leave having begun to make one.</p>
        </RoomSection>

        <LearnMoreSection title="Get the Care Plan Workshop Kit">
          <p>
            For facilitators who want to run their own Care Plan Creation session, I offer a
            workshop resource package built from the same framework.
          </p>
          <p>The facilitator materials can help you move from:</p>
          <p className="italic">&ldquo;We should host something about care plans.&rdquo;</p>
          <p>to:</p>
          <p className="italic">&ldquo;Here is the workshop.&rdquo;</p>
          <p>
            The kit is designed to support a structured, participant-centered session rather than
            requiring facilitators to invent the curriculum themselves.
          </p>
          <p>It can include:</p>
          <p>
            <strong>Facilitator Guide</strong>
            <br />
            A structure for guiding participants through the care-planning process.
          </p>
          <p>
            <strong>Participant Care Plan Template</strong>
            <br />
            A blank plan participants can continue developing during and after the workshop.
          </p>
          <p>
            <strong>Workshop Worksheets</strong>
            <br />
            Focused exercises for communication, distress levels, support needs, comfort menus, and
            crisis planning.
          </p>
          <p>
            <strong>Discussion Prompts</strong>
            <br />
            Questions designed to help participants identify needs they may never have explicitly
            considered.
          </p>
          <p>
            <strong>Workshop Structure</strong>
            <br />
            A suggested order, pacing, breaks, and opportunities for individual reflection and
            group discussion.
          </p>
          <p>
            <strong>Accessibility Guidance</strong>
            <br />
            Ideas for making participation easier for neurodivergent, disabled, chronically ill,
            and overwhelmed participants.
          </p>
          <p>
            <strong>Facilitation Considerations</strong>
            <br />
            Guidance around privacy, autonomy, opting out, emotional topics, and avoiding pressure
            to disclose personal information publicly.
          </p>
          <GuideCta href={WORKSHOP_HREF} label="Get the Care Plan Workshop Kit →" />
        </LearnMoreSection>

        <LearnMoreSection title="You Don’t Have to Be Someone’s Therapist to Help Them Think">
          <p>
            A care-plan workshop shouldn’t involve the facilitator diagnosing participants or
            deciding what they need.
          </p>
          <p>Your role is to ask better questions.</p>
          <p>Instead of:</p>
          <p className="italic">&ldquo;You should put weighted blankets on your plan.&rdquo;</p>
          <p>try:</p>
          <p className="italic">
            &ldquo;When you’re overwhelmed, does pressure feel regulating, uncomfortable, or does
            it depend?&rdquo;
          </p>
          <p>Instead of:</p>
          <p className="italic">&ldquo;Your emergency contact should be your parent.&rdquo;</p>
          <p>ask:</p>
          <p className="italic">
            &ldquo;Who actually stays calm and respects your choices when something goes wrong?&rdquo;
          </p>
          <p>Instead of:</p>
          <p className="italic">&ldquo;Everyone needs someone with them during a crisis.&rdquo;</p>
          <p>ask:</p>
          <p className="italic">
            &ldquo;Does another person’s presence help you regulate, or can it increase your
            distress?&rdquo;
          </p>
          <p>The workshop framework is built around:</p>
          <p>Curiosity rather than assumptions.</p>
        </LearnMoreSection>

        <RoomSection title="Learn How to Facilitate the Workshop With Me">
          <h3 className="font-display text-xl text-room-teal">Care Plan Facilitator Coaching</h3>
          <p>
            If you want to host a Care Plan Creation Workshop but aren’t sure how to actually run
            one, I can help you prepare.
          </p>
          <p>Facilitator coaching can cover:</p>
          <BulletList items={facilitatorCoaching} />
          <GuideCta href={COACHING_HREF} label="Book Facilitator Coaching →" />
        </RoomSection>

        <LearnMoreSection title="Adapt the Workshop to Your Community">
          <p>Not every group needs the same Care Plan.</p>
          <p>A workshop for autistic adults may spend much more time on:</p>
          <p>Communication • Sensory needs • Shutdowns • Meltdowns • Masking • Executive function</p>
          <p>A chronic-illness group may emphasize:</p>
          <p>Capacity • Flares • Medical support • Mobility • Pain • Post-exertion recovery</p>
          <p>A queer community organization might focus on:</p>
          <p>Chosen family • Identity • Autonomy • Emergency contacts • Community support</p>
          <p>A caregiver workshop may emphasize:</p>
          <p>Supporting without controlling • Recognizing warning signs • Communication • Consent around care</p>
          <p>A mental-health peer-support group may spend more time on:</p>
          <p>Distress levels • Crisis planning • Coping strategies • Safe people • Reconnection</p>
          <p>
            I can help you adapt the framework without requiring every participant to squeeze
            themselves into the same template.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Want to Help Someone One-on-One?">
          <p>
            The facilitator resources can also support structured individual care-plan creation,
            not only workshops.
          </p>
          <p>
            If your role appropriately includes this kind of support, the framework can help you
            guide someone through:
          </p>
          <p>Understanding their baseline</p>
          <p>Identifying early warning signs</p>
          <p>Recognizing unmet needs</p>
          <p>Creating communication accommodations</p>
          <p>Building a Comfort Menu</p>
          <p>Planning for different capacities</p>
          <p>Documenting support preferences</p>
          <p>Creating a crisis plan</p>
          <p>Preparing healthcare accommodations</p>
          <p>The principle stays the same:</p>
          <p>You’re not writing a plan about someone.</p>
          <p>You’re helping them create a plan that belongs to them.</p>
        </LearnMoreSection>

        <RoomSection title="Four Ways to Use the Care Plan System">
          <h3 className="font-display text-xl text-room-teal">1. Make One Yourself</h3>
          <p>Care Plan Guide + Blank Template</p>
          <p>For people who want to work independently.</p>
          <p>Learn the framework, complete the prompts, and create your own personalized plan.</p>
          <GuideCta href={buyHref} label="Get the DIY Care Plan →" isDominant />
          <h3 className="font-display text-xl text-room-teal">2. Make One With Me</h3>
          <p>One-on-One Care Plan Coaching</p>
          <p>
            For people who want help identifying needs, working through questions, and turning
            their answers into a practical plan.
          </p>
          <GuideCta href={COACHING_HREF} label="Book Care Plan Coaching →" />
          <h3 className="font-display text-xl text-room-teal">3. Help Someone Else Make One</h3>
          <p>Care Plan Support &amp; Facilitator Resources</p>
          <p>
            For caregivers, peer supporters, coaches, community leaders, and others helping people
            identify and communicate their own support needs.
          </p>
          <GuideCta href={WORKSHOP_HREF} label="Explore Facilitator Resources →" />
          <h3 className="font-display text-xl text-room-teal">4. Host a Workshop</h3>
          <p>Care Plan Creation Workshop Kit + Facilitator Coaching</p>
          <p>
            For organizations and community leaders who want to bring care planning to an entire
            group.
          </p>
          <p>Get the curriculum and resources—or work with me to prepare your version.</p>
          <GuideCta href={WORKSHOP_HREF} label="Get the Workshop Kit →" />
          <GuideCta href={COACHING_HREF} label="Book Facilitator Coaching →" />
        </RoomSection>

        <LearnMoreSection title="Created by Quinn Fleur">
          <p>Hi, I&apos;m Quinn Fleur.</p>
          <p>
            I&apos;m autistic, ADHD, disabled, chronically ill, queer, and someone whose ability
            to explain what I need can change dramatically depending on how I&apos;m doing.
          </p>
          <p>I can be incredibly articulate about my needs.</p>
          <p>I can also become overwhelmed enough that:</p>
          <p className="italic">&ldquo;What do you need?&rdquo;</p>
          <p>might as well be:</p>
          <p className="italic">
            &ldquo;Please derive the quadratic formula while the building is on fire.&rdquo;
          </p>
          <p>I started developing this kind of care planning because I wanted to externalize some of that work.</p>
          <p>I wanted the people who care about me to know:</p>
          <p>What I’m like normally.</p>
          <p>What changes first.</p>
          <p>What helps.</p>
          <p>What doesn’t.</p>
          <p>How to communicate with me.</p>
          <p>When to leave me alone.</p>
          <p>When not to leave me alone.</p>
          <p>What my disabilities actually look like.</p>
          <p>What to check when neither of us knows what’s wrong.</p>
          <p>And what I want to happen if everything really does go sideways.</p>
          <p>But the more I worked on it, the more I realized:</p>
          <p>
            You shouldn’t have to be in crisis to benefit from knowing how you want to be cared
            for.
          </p>
          <p>A care plan can help us understand ourselves on ordinary days too.</p>
        </LearnMoreSection>

        <LearnMoreSection title="A Care Plan Isn’t Permission to Control Someone">
          <p>This is important.</p>
          <p>A Care Plan should support autonomy.</p>
          <p>It should not become:</p>
          <p className="italic">
            &ldquo;Your document says you’re Orange, therefore I’m taking over.&rdquo;
          </p>
          <p>
            Support still requires communication and consent whenever the person is capable of
            participating.
          </p>
          <p>Someone’s plan may explicitly say:</p>
          <p>Let me take reasonable risks.</p>
          <p>Don’t make decisions for me.</p>
          <p>Ask before touching me.</p>
          <p>Offer help instead of automatically taking over.</p>
          <p>Give me processing time.</p>
          <p>Believe me when I tell you something isn’t helping.</p>
          <p>
            The purpose of knowing someone’s needs is to support their autonomy—not replace it.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Your Care Plan Is Allowed to Change">
          <p>The plan you make today isn’t a contract with Future You.</p>
          <p>Maybe you discover a better communication strategy.</p>
          <p>Maybe medication changes your baseline.</p>
          <p>Maybe you get diagnosed.</p>
          <p>Maybe you recover from burnout.</p>
          <p>Maybe your disability progresses.</p>
          <p>Maybe you realize a coping strategy you’ve used for years doesn’t actually help.</p>
          <p>Maybe a relationship changes.</p>
          <p>Maybe you simply understand yourself better.</p>
          <p>Update it.</p>
          <p>Cross things out.</p>
          <p>Add pages.</p>
          <p>Delete entire sections.</p>
          <p>Write:</p>
          <p className="italic">&ldquo;We tried this. Turns out I fucking hate it.&rdquo;</p>
          <p>That’s useful information.</p>
          <p>A Care Plan should grow alongside the person it belongs to.</p>
        </LearnMoreSection>

        <RoomSection title="Stop Expecting Yourself to Explain Everything in the Moment">
          <p>
            Figure out what helps while you have access to the part of your brain that can think
            about it.
          </p>
          <p>Write it down.</p>
          <p>Give your loved ones a map.</p>
          <p>Give Future You a checklist.</p>
          <p>Give healthcare providers the information they need.</p>
          <p>Give your community better tools for supporting one another.</p>
          <p>
            And give yourself permission to need different kinds of care on different kinds of
            days.
          </p>
          <p>Make your own.</p>
          <GuideCta href={buyHref} label={DIY_LABEL} isDominant />
          <p>Build it with me.</p>
          <GuideCta href={COACHING_HREF} label="Book One-on-One Care Plan Coaching →" />
          <p>Help somebody else build theirs.</p>
          <GuideCta href={WORKSHOP_HREF} label="Get the Care Plan Facilitator Resources →" />
          <p>Bring it to your community.</p>
          <GuideCta href={WORKSHOP_HREF} label="Get the Care Plan Creation Workshop Kit →" />
          <GuideCta href={COACHING_HREF} label="Book Workshop Facilitator Coaching →" />
        </RoomSection>

        <RoomSection title="Important Note">
          <p>
            These Care Plan resources, workshops, and coaching are educational and peer-support
            tools. They are not medical treatment, psychotherapy, case management, crisis
            intervention, or a substitute for individualized professional care.
          </p>
          <p>
            The medical-support portions of the template are intended to help people document
            their existing diagnoses, clinician-provided instructions, known accommodations, and
            established flare plans. General examples in the template should be customized to the
            individual rather than treated as medical instructions.
          </p>
          <p>
            Similarly, a Safety / Red Alert Plan can help people think through emergencies in
            advance, but a written plan cannot anticipate every crisis. Immediate medical
            emergencies, imminent danger, or situations where someone cannot remain safe may
            require appropriate professional or emergency support.
          </p>
          <p>
            People creating plans for others should work collaboratively, preserve the person’s
            privacy and autonomy, avoid diagnosing or prescribing treatment outside their
            professional scope, and avoid turning a care plan into a tool for surveillance or
            control.
          </p>
          <p>The person is always more important than the plan.</p>
        </RoomSection>

        <p className="text-center">
          <RoomLink href="/store">Back to the store</RoomLink>
        </p>
      </WallCard>
    </RoomPage>
  )
}
