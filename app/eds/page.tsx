import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { GuideCta } from '@/components/home/guide-cta'
import { LearnMoreSection } from '@/components/home/learn-more-section'
import { BulletList } from '@/components/home/room-section'
import { getHypermobileStoreItemHref } from '@/utils/shopify-checkout'

export const metadata: Metadata = {
  title: 'Living in a Body That Bends',
  description:
    'Ehlers-Danlos syndrome, disability, and the guide So, You Think You’re Hypermobile? — from me to you.',
}

const GUIDE_CTA = 'Get So, You Think You’re Hypermobile →'

const experienceItems = [
  'Chronic joint and muscle pain',
  'Subluxations and joint instability',
  'Extremely tight muscles trying to compensate for unstable joints',
  'Exercise and repetitive-motion intolerance',
  'Chronic fatigue and brain fog',
  'Dizziness and difficulty remaining upright',
  'Temperature intolerance',
  'Headaches, neck pain, and facial pain',
  'GI problems',
  'Bladder and urinary symptoms',
  'Poor proprioception and clumsiness',
  'Periods of significantly reduced mobility',
]

const guideTopics = [
  {
    title: 'Understanding hypermobility',
    body: 'What hypermobility actually means, how it differs from ordinary flexibility, the Beighton Scale, HSD, hEDS, and other forms of Ehlers-Danlos syndrome.',
  },
  {
    title: 'Getting evaluated',
    body: 'What the diagnostic process can look like, genetic versus clinical diagnosis, common barriers to getting diagnosed, and questions worth bringing to your providers.',
  },
  {
    title: 'Living with pain',
    body: 'Pain management, muscle tension, physical therapy, heat, massage, pacing, adaptive equipment, and building a personal toolkit.',
  },
  {
    title: 'Staying active without destroying yourself',
    body: 'Finding movement that works with your body instead of repeatedly forcing your body through exercise designed for somebody else.',
  },
  {
    title: 'POTS and dysautonomia',
    body: 'Dizziness, heart-rate changes, heat intolerance, circulation problems, hydration, electrolytes, compression, exercise adaptations, and treatment options to discuss with clinicians.',
  },
  {
    title: 'Mast-cell symptoms',
    body: 'Allergic-type reactions, flushing, GI symptoms, common evaluations, and the kinds of treatments people may encounter.',
  },
  {
    title: 'GI problems',
    body: 'IBS-like symptoms, food intolerance, bloating, diarrhea, constipation, and some of the gastrointestinal issues that frequently appear in hypermobile populations.',
  },
  {
    title: 'Joint instability',
    body: 'Subluxations, dislocations, muscle compensation, braces, mobility aids, and learning what your body’s baseline actually feels like.',
  },
  {
    title: 'Neurological and spinal complications',
    body: 'An introduction to conditions you may encounter while researching EDS, including tethered cord, cranio-cervical instability, and Chiari malformation.',
  },
  {
    title: 'Fatigue, sleep, and brain fog',
    body: 'Because sometimes the joints aren’t even the most disabling part.',
  },
  {
    title: 'Tools and accommodations',
    body: 'From heating pads and TENS units to shower chairs, compression garments, rollators, canes, and wheelchairs.',
  },
]

export default function EdsPage() {
  const guideHref = getHypermobileStoreItemHref()

  return (
    <RoomPage>
      <WallCard title="Living in a Body That Bends" wide="xl">
        <p className="font-gallery text-xl italic text-room-brown">
          Ehlers-Danlos Syndrome, Disability, and Learning How to Live With My Body
        </p>

        <GuideCta href={guideHref} label={GUIDE_CTA} isDominant />

        <p>Hi, I&apos;m Quinn.</p>
        <p>
          I have hypermobile Ehlers-Danlos syndrome (hEDS), a connective-tissue disorder that
          affects far more of my life than just being &ldquo;flexible.&rdquo; I&apos;m also
          disabled, chronically ill, and someone who has spent years learning how to understand a
          body that rarely behaves the way I expect it to.
        </p>
        <p>
          My experience with EDS includes chronic joint and muscle pain, unstable joints,
          subluxations and dislocations, fatigue, exercise intolerance, brain fog, and a collection
          of other problems that don&apos;t always look related until you start understanding
          connective tissue and the systems surrounding it.
        </p>
        <p>
          My disability has changed how I move through the world. I&apos;ve had periods where
          walking, standing, driving, exercising, doing chores, or simply staying upright were
          difficult. I&apos;ve used mobility aids and adaptive equipment. I&apos;ve spent an
          enormous amount of time in physical therapy, doctors&apos; offices, hospitals, and trying
          things at home to figure out what actually makes my body function better.
        </p>
        <p>And for a long time, I didn&apos;t have a map for any of it.</p>

        <GuideCta href={guideHref} label={GUIDE_CTA} />

        <LearnMoreSection title="So, You Think You’re Hypermobile?">
          <p className="italic">A guide from one trans EDSer to another.</p>
          <p>
            One of the hardest parts of discovering that you might have EDS is figuring out what
            the hell you&apos;re supposed to do next.
          </p>
          <p>Maybe someone watched you bend your hand backward and said, &ldquo;Hey, have you ever heard of EDS?&rdquo;</p>
          <p>Maybe you&apos;ve had unexplained pain for years.</p>
          <p>
            Maybe your joints pop, shift, or hurt constantly, but doctors keep telling you your
            imaging looks normal.
          </p>
          <p>
            Maybe you&apos;re exhausted all the time, get dizzy when you stand up, have inexplicable
            stomach problems or allergic-type reactions, and are slowly discovering that these
            things might not be completely unrelated.
          </p>
          <p>
            Or maybe you already know you&apos;re hypermobile and are trying to figure out what
            that actually means for your life.
          </p>
          <p>
            I made <em>So, You Think You’re Hypermobile?</em> for that stage of the journey.
          </p>
          <p>
            It isn&apos;t a medical textbook, and it isn&apos;t a replacement for medical care.
            It&apos;s the resource I wish someone had handed me when I was trying to understand my
            body.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="EDS Is More Than Being Flexible">
          <p>
            When people hear &ldquo;hypermobility,&rdquo; they often picture someone who can do the
            splits or bend their fingers backward.
          </p>
          <p>That can be part of it, but it barely scratches the surface.</p>
          <p>
            Connective tissue is everywhere. It helps support your joints, skin, blood vessels,
            organs, and other structures throughout your body. When that tissue behaves
            differently, the consequences can show up in seemingly unrelated places.
          </p>
          <p>
            For me, understanding EDS meant realizing that I wasn&apos;t dealing with a collection
            of completely isolated problems.
          </p>
          <p>My joint instability mattered.</p>
          <p>My constantly tight muscles mattered.</p>
          <p>My chronic pain mattered.</p>
          <p>My difficulty tolerating repetitive movement mattered.</p>
          <p>My dizziness and exercise intolerance mattered.</p>
          <p>My GI problems mattered.</p>
          <p>My fatigue mattered.</p>
          <p>The weird things my body had been doing for years finally had context.</p>
          <p>
            That context didn&apos;t magically make me healthy, but it gave me somewhere to start.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="My Experience With hEDS">
          <p>
            I was diagnosed with hypermobile Ehlers-Danlos syndrome in 2021, but the story starts
            much earlier than the diagnosis.
          </p>
          <p>
            Like a lot of people with EDS, I can look back at childhood and recognize things that
            make much more sense now. The more disabling parts of my condition became increasingly
            difficult to ignore as I got older.
          </p>
          <p>
            Eventually, pain, joint instability, fatigue, dysautonomia, and neurological and
            mobility problems became significant parts of my everyday life.
          </p>
          <p>I&apos;ve experienced things like:</p>
          <BulletList items={experienceItems} />
          <p>
            I also live with several conditions that can overlap with or complicate EDS, including
            POTS/dysautonomia, mast-cell-related symptoms, chronic gastrointestinal issues, chronic
            fatigue, and sleep/energy problems.
          </p>
          <p>
            My spinal and neurological symptoms eventually became severe enough that I&apos;ve also
            undergone two lumbar surgeries related to tethered cord.
          </p>
          <p>
            EDS isn&apos;t identical from person to person, and my experience shouldn&apos;t be
            treated as a checklist for what someone else&apos;s EDS is supposed to look like.
          </p>
          <p>But that&apos;s also why I think sharing our experiences matters.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Disability Isn’t a Personal Failure">
          <p>
            One of the biggest things EDS has forced me to learn is that doing something the
            &ldquo;normal&rdquo; way isn&apos;t inherently better.
          </p>
          <p>If standing in the shower uses half of the energy I have for the day, I can sit.</p>
          <p>
            If walking through an event means I spend the next two days recovering, I can use a
            wheelchair.
          </p>
          <p>If compression helps keep my body functioning, I can wear compression.</p>
          <p>If a cane makes something easier, I can use a cane.</p>
          <p>
            If I need to lie down, change positions, wear a brace, use a heating pad, bring
            electrolytes, take breaks, modify an exercise, or say no to something, I can
            accommodate myself.
          </p>
          <p>
            Mobility aids aren&apos;t a punishment you unlock once you&apos;ve become &ldquo;disabled
            enough.&rdquo;
          </p>
          <p>Accessibility isn&apos;t cheating.</p>
          <p>Rest isn&apos;t something you have to earn.</p>
          <p>
            The goal isn&apos;t to prove how much discomfort I can tolerate. The goal is to build a
            life my body can actually participate in.
          </p>
          <p>
            That change in thinking has been as important to me as almost any individual treatment.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Learning My Body">
          <p>EDS has also required me to become extraordinarily familiar with my own body.</p>
          <p>
            I&apos;ve had to learn the difference between pain that means this muscle is angry,
            pain that means this joint isn&apos;t sitting right, pain that means I&apos;ve done too
            much, and pain that means something new is actually wrong.
          </p>
          <p>
            I&apos;ve learned how much muscle tension can develop when your body is constantly
            trying to stabilize itself.
          </p>
          <p>
            I&apos;ve learned about pacing, physical therapy, heat, massage, trigger points,
            braces, compression, mobility aids, hydration, electrolytes, medication, sleep,
            nervous-system regulation, and adaptation.
          </p>
          <p>
            Most importantly, I&apos;ve learned that managing chronic illness isn&apos;t about
            finding the one magical intervention that finally &ldquo;fixes&rdquo; you.
          </p>
          <p>It&apos;s about building a toolkit.</p>
          <p>Some days I need movement.</p>
          <p>Some days I need rest.</p>
          <p>Some days I need medication.</p>
          <p>Some days I need a mobility aid.</p>
          <p>Some days I need someone else to help me.</p>
          <p>And sometimes the most useful question isn&apos;t:</p>
          <p className="italic">&ldquo;How do I make myself able to do this?&rdquo;</p>
          <p>It&apos;s:</p>
          <p className="italic">&ldquo;How can I change this so my body can do it?&rdquo;</p>
        </LearnMoreSection>

        <LearnMoreSection title="The Guide I Wish I’d Had">
          <p>
            <em>So, You Think You’re Hypermobile?</em> is my attempt to put years of lived
            experience, research, trial and error, conversations with other disabled people, and
            lessons from navigating healthcare into one approachable starting place.
          </p>
          <p>The guide explores:</p>
          {guideTopics.map((topic) => (
            <LearnMoreSection key={topic.title} title={topic.title} headingLevel={3}>
              <p>{topic.body}</p>
            </LearnMoreSection>
          ))}
          <p>
            And, perhaps most importantly, the guide talks about learning to accommodate yourself
            before your body forces you to.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="A Guide From One Trans EDSer to Another">
          <p>I specifically wrote this resource from the perspective of a trans disabled person.</p>
          <p>
            Being trans can make navigating healthcare complicated enough before adding a poorly
            understood connective-tissue disorder to the equation.
          </p>
          <p>
            A lot of us have spent years having symptoms dismissed, normalized, blamed on anxiety,
            blamed on weight, blamed on hormones, or simply treated as unrelated complaints.
          </p>
          <p>Community knowledge cannot replace competent medical care.</p>
          <p>But community knowledge can help us find competent medical care.</p>
          <p>It can give us vocabulary.</p>
          <p>It can help us recognize patterns.</p>
          <p>It can help us formulate questions.</p>
          <p>It can teach us what specialists exist.</p>
          <p>
            And sometimes another disabled person saying, &ldquo;Hey, my body does that too,&rdquo;
            is the beginning of finally understanding something you&apos;ve struggled to explain
            for years.
          </p>
          <p>That&apos;s what I hope this guide can be.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Start Here">
          <p>
            If you&apos;ve recently discovered you&apos;re hypermobile, suspect you may have EDS or
            HSD, love someone who&apos;s beginning this process, or simply want to understand what
            living with a connective-tissue disorder can actually look like:
          </p>
          <GuideCta href={guideHref} label={GUIDE_CTA} isDominant />
          <p className="text-center font-display text-2xl text-room-teal">
            So, You Think You’re Hypermobile?
          </p>
          <p className="text-center italic">A guide from one trans EDSer to another.</p>
          <p className="text-center">Created by Quinn Fleur</p>
          <p>
            Take what helps. Research further. Ask questions. Bring those questions to
            knowledgeable clinicians. Compare experiences without assuming everyone&apos;s body
            will behave the same way.
          </p>
          <p>
            Most of all, start learning the language your body has been speaking to you all along.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="A Note About Medical Information">
          <p>
            This website discusses my personal experiences with disability, Ehlers-Danlos
            syndrome, medical care, medications, procedures, and strategies that I or other people
            have encountered.
          </p>
          <p>It is not medical advice.</p>
          <p>
            Something being helpful for me does not mean it is safe or appropriate for you. EDS
            and its associated conditions vary significantly between individuals, and some
            symptoms can have causes completely unrelated to EDS.
          </p>
          <p>
            Information about medications, supplements, physical therapy, mobility aids, massage,
            exercise, joint instability, spinal conditions, or other treatments should be used as
            a starting point for learning and discussing options with qualified healthcare
            professionals—not as instructions for self-treatment.
          </p>
          <p>
            If something new, severe, or concerning is happening with your body, don&apos;t assume
            it&apos;s &ldquo;just EDS.&rdquo;
          </p>
        </LearnMoreSection>
      </WallCard>
    </RoomPage>
  )
}
