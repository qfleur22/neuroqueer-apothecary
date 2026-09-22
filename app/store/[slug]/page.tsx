import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
import { GuideCover } from '@/components/home/guide-cover'
import { RoomSection } from '@/components/home/room-section'
import { LearnMoreSection } from '@/components/home/learn-more-section'
import { getStoreProduct } from '@/data/store-products'
import { getHypermobileGuideHref } from '@/utils/shopify-checkout'

export const generateStaticParams = () => {
  return [{ slug: 'so-you-think-youre-hypermobile' }]
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const { slug } = await params
  const product = getStoreProduct({ slug })

  if (!product) {
    return { title: 'Store' }
  }

  return {
    title: product.name,
    description: product.summary,
  }
}

const diagnosisTopics = [
  'Clinical evaluation for hEDS',
  'The role of the Beighton score',
  'Symptoms and physical features providers may consider',
  'Genetic testing and its limitations',
  'Why different forms of EDS are evaluated differently',
  'Preparing to discuss hypermobility with a healthcare provider',
  'What to do when your symptoms don’t fit neatly into one diagnostic box',
]

const movementTopics = [
  'Starting small after periods of inactivity',
  'Finding hypermobility-informed physical therapy',
  'Isometric exercises',
  'Recumbent movement',
  'Water-based exercise',
  'Building consistency gradually',
  'Creating high-, medium-, and low-energy movement plans',
  'Recognizing when “push through it” isn’t a useful strategy',
]

const forYouItems = [
  'Someone recently suggested that you may be hypermobile',
  'You suspect hEDS or HSD but don’t know where to start',
  'You’re chronically stiff and somehow hypermobile',
  'You have unexplained chronic joint or muscle pain',
  'Repetitive activities hurt much more than you think they “should”',
  'Your joints frequently pop, shift, buckle, or feel unstable',
  'You’re constantly injuring yourself in seemingly minor ways',
  'You’re dealing with dizziness, fatigue, brain fog, GI problems, or allergic-type symptoms alongside joint problems',
  'You’ve recently been diagnosed and feel overwhelmed by the amount of information available',
  'You’re trans or neurodivergent and want a resource written by someone who understands that those experiences can affect healthcare navigation',
  'You want better language for explaining what’s happening to doctors, physical therapists, partners, family, or caregivers',
]

export default async function StoreProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getStoreProduct({ slug })

  if (!product) {
    notFound()
  }

  if (product.href !== `/store/${slug}`) {
    redirect(product.href)
  }

  const buyHref = getHypermobileGuideHref()

  return (
    <RoomPage>
      <WallCard title="So, You Think You’re Hypermobile?" wide="xl">
        <p className="font-gallery text-xl italic text-room-brown">
          A practical guide to hypermobility, Ehlers-Danlos syndrome, and figuring out what the
          hell your body is doing.
        </p>
        <p className="text-center">Created by Quinn Fleur — from one trans EDSer to another.</p>
        <div className="mx-auto max-w-xs">
          <GuideCover title="So, You Think You’re Hypermobile?" tagline={product.tagline} />
        </div>
        <p>
          Maybe someone watched you bend a joint in a deeply concerning direction and said,
          &ldquo;Uh… have you ever heard of Ehlers-Danlos syndrome?&rdquo;
        </p>
        <p>
          Maybe you&apos;ve spent years dealing with chronic pain, weird injuries, unexplained
          fatigue, stomach problems, dizziness, muscle tension, joints that never quite feel where
          they belong, or a collection of seemingly unrelated symptoms that nobody has been able to
          put together.
        </p>
        <p>Maybe you discovered hypermobility online and suddenly started wondering:</p>
        <p className="italic">Wait. Is this why my body does all of that?</p>
        <p>
          <em>So, You Think You’re Hypermobile</em> was made for that moment.
        </p>
        <p>
          It&apos;s an approachable, lived-experience-informed guide to understanding hypermobility,
          hEDS, HSD, common co-occurring conditions, and the practical next steps you can take when
          you&apos;re trying to make sense of a complicated body.
        </p>
        <div id="get-the-guide">
          <GuideCta href={buyHref} label="Get the Guide →" isDominant />
        </div>

        <LearnMoreSection title="Hypermobility Is More Than Being Flexible">
          <p>You don&apos;t have to be able to do the splits.</p>
          <p>You don&apos;t have to think of yourself as &ldquo;double-jointed.&rdquo;</p>
          <p>
            And you definitely don&apos;t need to look like a contortionist to have clinically
            significant hypermobility.
          </p>
          <p>
            For some people, hypermobility is completely asymptomatic. For others, joint
            instability can exist alongside chronic pain, muscle tension, repetitive-motion
            intolerance, fatigue, injuries, poor proprioception, gastrointestinal problems,
            autonomic symptoms, and other issues.
          </p>
          <p>
            Sometimes the muscles surrounding unstable joints become extremely tight while trying
            to compensate—which means a hypermobile person can actually feel incredibly stiff.
          </p>
          <p>
            That contradiction is one of many reasons hypermobility can be difficult to recognize.
          </p>
          <p>This guide helps you start connecting those dots.</p>
        </LearnMoreSection>

        <LearnMoreSection title="What’s Inside the Guide?">
          <h3 className="font-display text-xl text-room-teal">Start With the Basics</h3>
          <p>Learn what hypermobility actually means and how it differs from:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Generalized joint hypermobility</li>
            <li>Hypermobility Spectrum Disorder (HSD)</li>
            <li>Hypermobile Ehlers-Danlos syndrome (hEDS)</li>
            <li>Other types of Ehlers-Danlos syndrome</li>
          </ul>
          <p>
            We&apos;ll also talk about the Beighton score, why it&apos;s useful, where it has
            limitations, and why hypermobility involves much more than whether you can bend your
            thumb toward your wrist.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Understand the Diagnosis Process">
          <p>
            One of the most frustrating parts of suspecting EDS is figuring out where you&apos;re
            actually supposed to go from here.
          </p>
          <p>The guide walks through topics including:</p>
          <ul className="list-disc space-y-1 pl-6">
            {diagnosisTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
          <p>The goal isn&apos;t to diagnose yourself.</p>
          <p>It&apos;s to help you become a more informed participant in your own healthcare.</p>
        </LearnMoreSection>

        <LearnMoreSection title="“Okay, But What Do I Actually Do About It?”">
          <p>
            A diagnosis—or even the suspicion of one—doesn&apos;t magically tell you how to live in
            your body.
          </p>
          <p>That&apos;s why a huge portion of this guide is about day-to-day life.</p>
          <h3 className="font-display text-xl text-room-teal">Movement When Everything Hurts</h3>
          <p>
            Explore ways people with hypermobility may adapt movement and physical therapy,
            including:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            {movementTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
          <p>The goal isn&apos;t performing wellness perfectly.</p>
          <p>
            It&apos;s finding movement that works with your body instead of constantly fighting
            against it.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Making Sense of Pain">
          <p>
            When pain is everywhere, figuring out why something hurts can become incredibly
            difficult.
          </p>
          <p>
            The guide discusses different contributors to pain that hypermobile people may
            encounter, including joint instability, repetitive movement, muscle guarding,
            soft-tissue irritation, subluxations, injuries, and chronic muscle tension.
          </p>
          <p>
            You&apos;ll also find discussions of common comfort and pain-management
            approaches—from heat and supportive equipment to massage, physical therapy, pacing, and
            conversations you may have with medical professionals about treatment.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Learn to Accommodate Yourself">
          <p>
            Sometimes improving your quality of life isn&apos;t about making your body capable of
            doing something the &ldquo;normal&rdquo; way.
          </p>
          <p>It&apos;s about changing the environment.</p>
          <p>The guide encourages you to think practically about things like:</p>
          <p>
            Braces • Compression • Canes • Rollators • Wheelchairs • Shower chairs • Pillows • Heat
            • Ice • TENS • Massage tools • Ergonomic changes • Activity modification
          </p>
          <p>
            If a tool makes an activity safer, less painful, or less exhausting, that&apos;s useful
            information.
          </p>
          <p>
            You don&apos;t have to wait until you&apos;re completely unable to do something before
            you&apos;re allowed to make it easier.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="The “Why Are All These Things Happening at Once?” Section">
          <p>
            One of the strangest parts of entering the hypermobility world is discovering how many
            seemingly unrelated symptoms other patients are talking about too.
          </p>
          <p>
            The guide introduces conditions and symptom clusters that may be discussed alongside
            connective-tissue disorders so you&apos;ll have vocabulary for further conversations
            with your healthcare team.
          </p>
          <h3 className="font-display text-xl text-room-teal">POTS &amp; Dysautonomia</h3>
          <p>
            Dizziness when standing. Racing heart. Heat intolerance. Brain fog. Exercise
            intolerance. Feeling terrible after standing in one place.
          </p>
          <p>
            Learn the basics of POTS and dysautonomia, how they&apos;re commonly evaluated, and
            the kinds of management strategies patients may encounter.
          </p>
          <h3 className="font-display text-xl text-room-teal">Mast-Cell &amp; Allergic-Type Symptoms</h3>
          <p>
            Flushing. Rashes. Congestion. GI reactions. Itching. Seemingly unpredictable
            allergic-type symptoms.
          </p>
          <p>
            The guide introduces mast-cell disorders, the complexities of testing, and common
            treatment concepts you may want to discuss with a knowledgeable clinician.
          </p>
          <h3 className="font-display text-xl text-room-teal">Gastrointestinal Problems</h3>
          <p>
            Constipation, diarrhea, bloating, cramps, nausea, food intolerances, and other GI
            problems can deserve their own investigation.
          </p>
          <p>
            Learn about topics you may encounter—including IBS, Low FODMAP approaches, and
            SIBO—and questions worth bringing to your healthcare team.
          </p>
          <h3 className="font-display text-xl text-room-teal">Subluxations &amp; Dislocations</h3>
          <p>What does someone actually mean when they say their joint &ldquo;slipped&rdquo;?</p>
          <p>
            We discuss joint instability, subluxations, dislocations, repetitive-motion problems,
            and why learning your own body&apos;s patterns can matter.
          </p>
          <h3 className="font-display text-xl text-room-teal">Neurological &amp; Spinal Conditions</h3>
          <p>
            The guide also introduces conditions you may hear discussed in hypermobility
            communities, including:
          </p>
          <p>Tethered cord • Craniocervical instability (CCI) • Chiari malformation</p>
          <p>
            These conditions require appropriate medical evaluation; the guide helps you understand
            the terminology and recognize why someone might seek specialist assessment rather than
            attempting to diagnose them yourself.
          </p>
          <h3 className="font-display text-xl text-room-teal">Fatigue, Sleep &amp; Widespread Pain</h3>
          <p>
            We also discuss chronic fatigue, sleep difficulties, fibromyalgia-like pain, brain
            fog, and the challenge of balancing movement, recovery, and everyday responsibilities.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Stop Treating Every Symptom Like an Isolated Problem">
          <p>
            For many people, discovering hypermobility changes the questions they&apos;re asking.
          </p>
          <p>Instead of:</p>
          <p className="italic">&ldquo;Why does my knee hurt again?&rdquo;</p>
          <p>you may start asking:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>&ldquo;What was I doing before my knee started hurting?&rdquo;</li>
            <li>&ldquo;Am I repeatedly loading an unstable joint?&rdquo;</li>
            <li>&ldquo;Are the surrounding muscles guarding?&rdquo;</li>
            <li>&ldquo;Would changing how I do this activity help?&rdquo;</li>
            <li>&ldquo;What information should I bring to my PT or doctor?&rdquo;</li>
          </ul>
          <p>
            That kind of pattern recognition is one of the central skills this guide is designed to
            help you develop.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Built From Lived Experience">
          <p>Hi, I&apos;m Quinn Fleur.</p>
          <p>
            I&apos;m trans, neurodivergent, disabled, and living with hypermobile Ehlers-Danlos
            syndrome and several of the complicated conditions that can come along for the ride.
          </p>
          <p>I made this because figuring all of this out was overwhelming.</p>
          <p>
            When your brain fog is terrible, your body hurts, you&apos;re exhausted, and you&apos;ve
            already spent years being told individual tests look normal, &ldquo;just research
            EDS&rdquo; isn&apos;t particularly helpful advice.
          </p>
          <p>
            There is an enormous amount of information out there—but it&apos;s scattered across
            medical literature, specialist websites, physical therapy resources, patient
            communities, support groups, and years of accumulated lived experience.
          </p>
          <p>
            <em>So, You Think You’re Hypermobile</em> is meant to give you somewhere to start.
          </p>
          <p>Not a replacement for your doctor.</p>
          <p>Not a promise that every symptom is caused by EDS.</p>
          <p>Not a miracle cure.</p>
          <p>A map.</p>
          <p>
            Something that can help you learn the language, identify patterns worth investigating,
            find questions to ask, and advocate for a body you understand a little better.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="This Guide May Be For You If…">
          <p>You might find this useful if:</p>
          <ul className="list-disc space-y-1 pl-6">
            {forYouItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>You don&apos;t need to already know what&apos;s wrong.</p>
          <p>That&apos;s the point.</p>
        </LearnMoreSection>

        <LearnMoreSection title="What You’ll Leave With">
          <p>By the end, you should have a much clearer framework for understanding:</p>
          <p>
            What hypermobility is → what hEDS and HSD are → what symptoms may be worth tracking →
            what other conditions may deserve investigation → what kinds of providers may help →
            what questions to ask → what accommodations may make everyday life easier.
          </p>
          <p>More importantly, you&apos;ll have somewhere to begin.</p>
          <p>
            Because the first step doesn&apos;t need to be understanding everything about EDS.
          </p>
          <p>It can simply be:</p>
          <p className="italic">
            &ldquo;Okay. Something is happening with my body. Let&apos;s figure out what questions
            I need to ask next.&rdquo;
          </p>
        </LearnMoreSection>

        <RoomSection title="Ready to Start Connecting the Dots?">
          <p>
            Get <em>So, You Think You’re Hypermobile</em> and start building a clearer picture of
            your symptoms, your body, and the conversations you want to have with your healthcare
            team.
          </p>
          <GuideCta href={buyHref} label="Get So, You Think You’re Hypermobile →" isDominant />
        </RoomSection>

        <RoomSection title="Need More Help Making Sense of It?">
          <p>Reading about hypermobility is one thing.</p>
          <p>
            Trying to organize years of symptoms, medical records, appointments, treatments,
            accommodations, and questions is another.
          </p>
          <p>
            Quinn also offers peer-informed coaching and resource navigation for people who want
            help organizing what they&apos;re experiencing, preparing for appointments, identifying
            questions to research, creating symptom trackers and medical binders, exploring
            accommodations, and turning an overwhelming amount of information into manageable next
            steps.
          </p>
          <GuideCta href="/coaching" label="Explore Coaching →" />
        </RoomSection>

        <RoomSection title="Important Note">
          <p>
            <em>So, You Think You’re Hypermobile</em> is an educational and lived-experience
            resource. It is not medical advice, diagnosis, physical therapy, or a substitute for
            care from a qualified healthcare professional. Treatments, medications, supplements,
            exercises, mobility aids, dietary changes, and other interventions should be considered
            in the context of your individual health and discussed with an appropriate clinician
            when necessary.
          </p>
          <p>
            The guide discusses serious conditions that can overlap symptomatically with
            hypermobility. Experiencing a symptom associated with one of these conditions does not
            mean that you have it. The goal is to give you vocabulary and context for informed
            conversations with qualified professionals.
          </p>
        </RoomSection>

        <p className="text-center">
          <RoomLink href="/store">Back to the store</RoomLink>
        </p>
      </WallCard>
    </RoomPage>
  )
}
