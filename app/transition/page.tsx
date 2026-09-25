import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
import { GuideCover } from '@/components/home/guide-cover'
import { BulletList, RoomSection } from '@/components/home/room-section'
import { LearnMoreSection } from '@/components/home/learn-more-section'
import { getTransitionGuideHref } from '@/utils/shopify-checkout'

export const metadata: Metadata = {
  title: 'Transition Guide: Now What?',
  description:
    'A practical transition guide for questioning, exploring, and building a life that feels more like yours.',
}

const COACHING_HREF = '/coaching'

const experimentItems = [
  'Trying names',
  'Testing pronouns',
  'Exploring neopronouns',
  'Changing presentation',
  'Gender experimentation online',
  'Haircuts and styling',
  'Makeup',
  'Masculine, feminine, and androgynous presentation',
  'Drag and exaggerated gender play',
  'Voice exploration',
  'Coming out selectively—or not coming out at all',
]

const testosteroneChanges = [
  'Voice deepening',
  'Facial and body hair',
  'Muscle changes',
  'Bottom growth',
  'Libido changes',
  'Acne and skin changes',
  'Changes in body odor',
  'Fat redistribution',
  'Possible fertility changes',
]

const estrogenChanges = [
  'Breast development',
  'Softer skin',
  'Fat redistribution',
  'Changes in body hair',
  'Changes in libido',
  'Possible genital changes',
  'Emotional changes',
  'Possible fertility changes',
]

const hrtCareItems = [
  'Why routine monitoring matters',
  'Hormone-level testing',
  'Bloodwork commonly used during HRT',
  'Medication interactions',
  'Questions to ask your provider',
  'When something deserves another conversation',
  'Getting copies of your own labs',
  'Informed-consent models',
  'Finding trans-competent healthcare',
  'Harm-reduction considerations when someone cannot access conventional care',
]

const makeupItems = [
  'Concealer',
  'Facial-hair shadow correction',
  'Mascara',
  'Eyeliner',
  'Brows',
  'Contour',
  'Blush',
  'Lips',
  'Masculine makeup',
  'Feminine makeup',
  'Androgynous looks',
]

const voiceItems = [
  'Pitch',
  'Resonance',
  'Intonation',
  'Speech patterns',
  'Vocal experimentation',
  'Professional voice training',
]

const surgeryPrepItems = [
  'What change you’re actually hoping surgery will create',
  'Dysphoria vs. euphoria',
  'Surgeon consultations',
  'Second opinions',
  'Recovery time',
  'Caregiving needs',
  'Transportation',
  'Work leave',
  'Insurance',
  'Grants and financial support',
  'Preparing your home for recovery',
]

const paperworkItems = [
  'Your legal name',
  'Driver’s license or state ID',
  'Social Security records',
  'Passport',
  'Birth certificate',
  'Medical records',
  'Financial accounts',
  'Digital accounts',
]

const forYouItems = [
  'You’re wondering whether you might be trans',
  'You’ve recently realized you’re trans and have absolutely no idea what happens next',
  'You’ve known for years but haven’t had the safety or resources to transition',
  'You want to experiment with gender without committing to anything',
  'You’re trying to understand HRT',
  'You’re preparing to start testosterone or estrogen',
  'You’re already on HRT but want to understand your care better',
  'You’re researching gender-affirming surgery',
  'You’re trying to change your legal name or documents',
  'You’re looking for financial assistance',
  'You’re trying to find trans-friendly healthcare',
  'You’re looking for Charlotte-area resources',
  'You want help finding queer community',
  'You’re supporting a trans partner, child, friend, or family member',
  'You just want somebody to explain all of this without talking to you like you’re reading an insurance brochure',
]

export default function TransitionGuidePage() {
  const buyHref = getTransitionGuideHref()

  return (
    <RoomPage>
      <WallCard title="Transition Guide: Now What?" wide="xl">
        <p className="font-gallery text-xl italic text-room-brown">
          A practical transition guide for questioning, exploring, and building a life that feels
          more like yours.
        </p>
        <p className="text-center">Created by Quinn Fleur — from one trans person to another.</p>
        <div className="mx-auto max-w-xs">
          <GuideCover
            title="Transition Guide: Now What?"
            tagline="from one trans person to another"
          />
        </div>
        <p>Maybe you&apos;ve been thinking about gender for years.</p>
        <p>Maybe the thought showed up last week and now it won&apos;t leave you alone.</p>
        <p>
          Maybe you already know you&apos;re trans, but every time you try to figure out what comes
          next, you end up with 37 open tabs about hormones, names, surgery, voice training,
          insurance, legal paperwork, clothes, dysphoria, and whether you&apos;re somehow
          &ldquo;doing transition wrong.&rdquo;
        </p>
        <p>Or maybe you just want to understand what transitioning actually looks like.</p>
        <p>This guide was made for all of those places.</p>
        <p>
          <em>Transition Guide: Now What?</em> is a practical, lived-experience-informed guide to
          exploring gender and navigating transition—from the very first &ldquo;wait… am I
          trans?&rdquo; all the way through hormones, surgery, paperwork, relationships, community,
          and actually living your life after the initial transition checklist starts disappearing.
        </p>
        <p>You do not need to know exactly who you are before you begin.</p>
        <p>You just need somewhere to start.</p>
        <GuideCta href={buyHref} label="Get Transition Guide: Now What? →" isDominant />

        <LearnMoreSection title="You Don’t Need to Be Sure Yet">
          <p>There is no transgender entrance exam.</p>
          <p>
            Nobody is going to appear with a clipboard and decide whether you have experienced
            enough dysphoria, owned enough flannel, worn enough eyeliner, changed your hair enough
            times, or stared longingly at someone else&apos;s gender for long enough to qualify.
          </p>
          <p>Questioning counts.</p>
          <p>Curiosity counts.</p>
          <p>Experimenting counts.</p>
          <p>
            And deciding later that a particular label, pronoun, medication, surgery, or transition
            path isn&apos;t right for you is allowed too.
          </p>
          <p>
            The first part of the guide is designed to help you explore rather than pressure
            yourself into an answer.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Start With the Question Everyone Eventually Googles">
          <p className="italic">&ldquo;Am I Trans?&rdquo;</p>
          <p>
            Instead of giving you a checklist designed to prove something about yourself, the guide
            gives you questions worth sitting with.
          </p>
          <p>Things like:</p>
          <p>When do I feel most like myself?</p>
          <p>What makes me feel unexpectedly happy about my gender?</p>
          <p>What makes me feel disconnected from myself?</p>
          <p>
            Are there names, pronouns, clothes, roles, or ways of being perceived that feel
            exciting—or strangely peaceful?
          </p>
          <p>
            If there were no social consequences at all, how would I want people to see me?
          </p>
          <p>
            We also explore concepts like gender euphoria, dysphoria, experimentation, fluidity,
            sexuality, names, pronouns, and identity without pretending everyone experiences them
            the same way.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Try Things Before You Commit to Things">
          <p>Transition does not have to begin with a doctor&apos;s appointment.</p>
          <p>Sometimes it begins with a haircut.</p>
          <p>Or a Discord username.</p>
          <p>Or asking one trusted person to call you something different.</p>
          <p>
            Or ordering coffee under a name you&apos;re thinking about and seeing what happens
            inside your brain when the barista calls it out.
          </p>
          <p>
            The guide includes low-stakes ways to experiment with gender privately or socially,
            including:
          </p>
          <BulletList items={experimentItems} />
          <p>
            You are allowed to experiment without promising anyone that the experiment is
            permanent.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="There Is No One Transition Path">
          <p>Some people change their name and nothing else.</p>
          <p>Some take hormones.</p>
          <p>Some have surgery.</p>
          <p>Some socially transition but never medically transition.</p>
          <p>Some medically transition without explaining themselves to most people.</p>
          <p>Some pursue every transition option available to them.</p>
          <p>Some change direction halfway through.</p>
          <p>All of those people can be trans.</p>
          <p>The guide breaks transition into four broad areas so you can explore the pieces that matter to you:</p>
          <p>
            <strong>Social transition</strong>
            <br />
            Names, pronouns, clothes, hair, makeup, voice, relationships, coming out, and
            presentation.
          </p>
          <p>
            <strong>Hormonal transition</strong>
            <br />
            Testosterone, estrogen, anti-androgens, progesterone, different delivery methods,
            expected changes, monitoring, safety, and finding care.
          </p>
          <p>
            <strong>Surgical transition</strong>
            <br />
            Top surgery, bottom surgery, hysterectomy, orchiectomy, facial surgery, body
            contouring, voice surgery, preparing for consultations, recovery, and finding support.
          </p>
          <p>
            <strong>Legal transition</strong>
            <br />
            Names, IDs, Social Security records, passports, birth certificates, and dealing with
            the delightful bureaucratic experience of proving to seven separate institutions that
            you are, in fact, the same person.
          </p>
          <p>Take one path.</p>
          <p>Take all four.</p>
          <p>Take none.</p>
          <p>The guide exists to show you the map—not decide where you&apos;re supposed to go.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Hormones Without the Mystery">
          <p>
            HRT can feel especially overwhelming because information is scattered everywhere and
            different providers may explain it very differently.
          </p>
          <p>
            The guide gives you an introduction to both testosterone-based and estrogen-based HRT,
            including common forms such as:
          </p>
          <p>
            Injections • Gels • Patches • Pills • Pellets • Anti-androgens • Progesterone
          </p>
          <p>You&apos;ll learn about common changes people may experience, including:</p>
          <h3 className="font-display text-xl text-room-teal">Testosterone</h3>
          <BulletList items={testosteroneChanges} />
          <h3 className="font-display text-xl text-room-teal">Estrogen-based HRT</h3>
          <BulletList items={estrogenChanges} />
          <p>And importantly:</p>
          <p>What HRT cannot reliably control.</p>
          <p>Bodies are annoyingly committed to being individual.</p>
          <p>There is no dosage that lets you select:</p>
          <p>Facial hair: yes</p>
          <p>Bottom growth: maybe</p>
          <p>Acne: absolutely not</p>
          <p>Voice drop: maximum</p>
          <p>Ass: dramatically increased</p>
          <p>HRT works systemically, and genetics get a considerable vote.</p>
          <p>Understanding that before starting can make the process much less confusing.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Learn How to Advocate for Better HRT Care">
          <p>
            One of the most important sections of this guide is about becoming an informed
            participant in your own healthcare.
          </p>
          <p>You&apos;ll learn about:</p>
          <BulletList items={hrtCareItems} />
          <p>The goal is not to turn you into your own endocrinologist.</p>
          <p>
            The goal is to help you understand enough about your treatment that you can recognize
            when you have questions worth asking.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Transition Isn’t Just HRT">
          <p>
            For some people, the most affirming parts of transition aren&apos;t medical at all.
          </p>
          <p>
            The guide includes practical sections on gender presentation and experimentation,
            including beginner-friendly approaches to:
          </p>
          <h3 className="font-display text-xl text-room-teal">Makeup</h3>
          <p>
            Explore ways makeup can soften, sharpen, masculinize, feminize, exaggerate, or simply
            make your face feel more interesting.
          </p>
          <p>You&apos;ll find approachable starting points for:</p>
          <BulletList items={makeupItems} />
          <p>No $400 Sephora pilgrimage required.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Hair & Presentation">
          <p>Hair can change how your entire face reads.</p>
          <p>
            The guide discusses finding inspiration, choosing styles based on the effect you
            actually want, communicating with stylists, and balancing gender goals with the amount
            of daily maintenance you&apos;re realistically willing to do.
          </p>
          <p>
            Because the perfect haircut isn&apos;t perfect if it requires 45 minutes of styling
            when your actual morning routine consists of staring into the void and looking for your
            keys.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Voice">
          <p>You can explore your voice whether or not you&apos;re taking hormones.</p>
          <p>
            The guide introduces concepts used in masculinizing, feminizing, and androgynous voice
            work, including:
          </p>
          <BulletList items={voiceItems} />
          <p>The goal isn&apos;t to create one universally &ldquo;male&rdquo; or &ldquo;female&rdquo; voice.</p>
          <p>It&apos;s finding a voice that feels more comfortable to inhabit.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Thinking About Surgery?">
          <p>
            Surgery can be one of the most intimidating areas of transition because researching it
            often means navigating medical terminology, insurance requirements, surgeon portfolios,
            Reddit posts, recovery stories, financing, referral letters, and pictures of drains you
            absolutely were not emotionally prepared to see at 2 a.m.
          </p>
          <p>The guide gives you a starting framework for understanding procedures including:</p>
          <p>
            Top surgery • Breast augmentation • Hysterectomy • Oophorectomy • Orchiectomy •
            Vaginoplasty • Metoidioplasty • Phalloplasty • Facial feminization • Facial
            masculinization • Body contouring • Voice surgery
          </p>
          <p>You&apos;ll also find guidance for thinking through:</p>
          <BulletList items={surgeryPrepItems} />
          <p>You do not have to want surgery.</p>
          <p>And wanting one surgery doesn&apos;t obligate you to want another.</p>
        </LearnMoreSection>

        <LearnMoreSection title="The Paperwork Section Nobody Wants but Everybody Needs">
          <p>Unfortunately, gender sometimes comes with administrative side quests.</p>
          <p>The guide introduces the process of changing things like:</p>
          <BulletList items={paperworkItems} />
          <p>
            There are also strategies for living under your correct name before you&apos;re ready
            or able to complete a legal change.
          </p>
          <p>
            Because sometimes the government&apos;s timeline and your gender&apos;s timeline are
            not remotely interested in coordinating.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Transitioning While Poor Is Still Transitioning">
          <p>Money should not determine whether someone gets to feel at home in their body.</p>
          <p>The guide includes resources for finding assistance with things like:</p>
          <p>
            HRT • Surgery • Binders • Shapewear • Legal changes • Transportation • Housing • Food •
            Emergency assistance • Recovery support
          </p>
          <p>
            It includes national programs as well as Charlotte-area resources I&apos;ve encountered
            through years of queer and trans community involvement.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="What Happens After the “Transition Checklist”?">
          <p>This is one of the biggest reasons I wanted to make the guide.</p>
          <p>Because transition isn&apos;t really:</p>
          <p>New name → hormones → surgery → congratulations, gender completed.</p>
          <p>Eventually transition becomes less about appointments and more about having a life.</p>
          <p>You still need:</p>
          <p>Friends.</p>
          <p>Partners.</p>
          <p>Community.</p>
          <p>Housing.</p>
          <p>Food.</p>
          <p>Healthcare.</p>
          <p>People who understand you.</p>
          <p>Things you enjoy doing.</p>
          <p>Places where you don&apos;t have to explain yourself.</p>
          <p>
            The later sections of the guide focus on living your transition, not simply completing
            it.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Making Friends When Socializing Feels Impossible">
          <p>There is also an entire section for the extremely specific problem of:</p>
          <p className="italic">
            &ldquo;How do I make queer friends when I am an introverted neurodivergent trans person
            who would rather be launched into the sun than walk alone into a room full of
            strangers?&rdquo;
          </p>
          <p>I have thoughts.</p>
          <p>
            You&apos;ll explore different types of social environments based on how much
            interaction they demand:
          </p>
          <p>
            <strong>Parallel-play spaces</strong>
            <br />
            Craft groups, silent book clubs, and events where existing near other humans counts as
            participation.
          </p>
          <p>
            <strong>Structured socialization</strong>
            <br />
            Book clubs, classes, workshops, and speed-friending where conversation already has a
            framework.
          </p>
          <p>
            <strong>Semi-structured events</strong>
            <br />
            Board games, dances, hobby groups, and activities where interacting with people is part
            of doing something else.
          </p>
          <p>
            <strong>Barely structured socialization</strong>
            <br />
            Parties.
          </p>
          <p>The final boss.</p>
          <p>
            You&apos;ll also get practical suggestions for approaching people, returning to
            recurring groups, removing the expectation that you must immediately &ldquo;make
            friends,&rdquo; and letting familiarity build naturally over time.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Built From Lived Experience">
          <p>Hi. I&apos;m Quinn Fleur.</p>
          <p>
            I&apos;m a trans man, neurodivergent, disabled, deeply queer, and someone who has spent
            a significant portion of adulthood learning how to navigate gender, healthcare,
            community, medical systems, bureaucracy, relationships, and all of the strange
            logistics nobody hands you when you realize you might be trans.
          </p>
          <p>
            I made this guide because I don&apos;t think people should have to reconstruct
            transition knowledge from a thousand scattered Reddit posts, dead links, medical PDFs,
            TikToks, Discord conversations, surgeon websites, support groups, and whispered
            recommendations from somebody&apos;s friend&apos;s boyfriend who got top surgery three
            years ago.
          </p>
          <p>There are excellent resources out there.</p>
          <p>There are also a lot of gaps between them.</p>
          <p>This guide is meant to help fill those gaps.</p>
          <p>Not by telling you exactly who you are.</p>
          <p>Not by prescribing the perfect transition.</p>
          <p>But by sitting beside you and saying:</p>
          <p className="italic">
            Okay. Here are your options. Let&apos;s figure out which ones actually sound like you.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="This Guide May Be For You If…">
          <p>You might find this guide helpful if:</p>
          <BulletList items={forYouItems} />
          <p>You don&apos;t need to know what your transition looks like yet.</p>
          <p>That&apos;s what the guide is for.</p>
        </LearnMoreSection>

        <LearnMoreSection title="What You’ll Find Inside">
          <p>
            <strong>Part I: Beginning the Journey</strong>
            <br />
            Questioning gender, gender euphoria and dysphoria, identity exploration, sexuality,
            names, pronouns, and low-stakes experiments.
          </p>
          <p>
            <strong>Part II: Paths of Transition</strong>
            <br />
            Social transition, HRT, surgery, healthcare navigation, and legal transition.
          </p>
          <p>
            <strong>Part III: Living Your Transition</strong>
            <br />
            Skin and body changes, relationships, community, making friends, healthcare access,
            housing, financial assistance, food support, harm reduction, and building an actual
            life around your transition.
          </p>
          <p>
            <strong>Part IV: Resources &amp; Glossary</strong>
            <br />
            National resources, Charlotte-area resources, funding programs, educational resources,
            support organizations, and plain-language definitions of common terminology.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="You Don’t Have to Earn Your Gender">
          <p>You don&apos;t have to suffer enough.</p>
          <p>You don&apos;t have to transition medically.</p>
          <p>You don&apos;t have to medically transition enough.</p>
          <p>You don&apos;t have to know since childhood.</p>
          <p>You don&apos;t have to hate your body.</p>
          <p>You don&apos;t have to change your name.</p>
          <p>You don&apos;t have to use certain pronouns.</p>
          <p>You don&apos;t have to dress a particular way.</p>
          <p>You don&apos;t have to understand everything right now.</p>
          <p>And you don&apos;t have to convince me.</p>
          <p>This guide is here to give you information.</p>
          <p>You get to decide what to do with it.</p>
        </LearnMoreSection>

        <RoomSection title="Ready to Start Exploring?">
          <p>
            Get <em>Transition Guide: Now What?</em> and start building a transition that actually
            belongs to you.
          </p>
          <p>Explore identity.</p>
          <p>Understand your options.</p>
          <p>Learn the language.</p>
          <p>Find resources.</p>
          <p>Ask better questions.</p>
          <p>Try things.</p>
          <p>Change your mind.</p>
          <p>Keep what works.</p>
          <p>Leave what doesn&apos;t.</p>
          <GuideCta href={buyHref} label="Get Transition Guide: Now What? →" isDominant />
        </RoomSection>

        <RoomSection title="Want Someone to Help You Sort Through It?">
          <p>Sometimes reading the information isn&apos;t the difficult part.</p>
          <p>The difficult part is figuring out what any of it means for you.</p>
          <p>
            I also offer peer-informed transition coaching and resource navigation for people
            who want help exploring options, organizing questions, preparing for appointments,
            researching providers, building transition plans, finding resources, or simply talking
            through the enormous pile of decisions that can come with transition.
          </p>
          <p>Coaching can include support around:</p>
          <p>
            Gender exploration • HRT questions • Provider research • Surgery research • Appointment
            preparation • Name changes • Resource navigation • Clothing and presentation •
            Community building • Transition planning
          </p>
          <p>This is peer support and education—not therapy or medical care.</p>
          <GuideCta href={COACHING_HREF} label="Explore Transition Coaching →" />
        </RoomSection>

        <RoomSection title="A Note About Safety & Medical Information">
          <p>
            This guide combines lived experience, community knowledge, practical resources, and
            introductory educational information.
          </p>
          <p>
            It is not medical advice, and I am not acting as your doctor, therapist,
            pharmacist, attorney, or surgeon.
          </p>
          <p>
            Medical transition should be individualized. Hormone regimens, laboratory targets,
            contraindications, fertility considerations, surgical requirements, legal procedures,
            and standards of care can change over time and differ based on your health, medications,
            location, goals, and provider.
          </p>
          <p>
            Resources, providers, laws, funding programs, and organizational policies can also
            change.
          </p>
          <p className="rounded-md border border-room-gold bg-room-teal/10 px-4 py-3">
            Exact hormone target ranges, monitoring schedules, DIY-HRT instructions,
            genital-health claims, surgeon and provider lists, surgery descriptions,
            passport/gender-marker rules, and statements about WPATH standards are treated as
            versioned information with a last medically reviewed / resources-checked date inside
            the guide—not as permanent guidance. Verify current medical and legal details with
            qualified professionals.
          </p>
          <p>
            Use the guide as a starting point for research and self-advocacy, and verify important
            medical and legal information with current authoritative sources and qualified
            professionals.
          </p>
          <p>Most importantly:</p>
          <p>Your transition does not have to look like anyone else&apos;s transition to be real.</p>
          <p>Move quickly.</p>
          <p>Move slowly.</p>
          <p>Experiment.</p>
          <p>Change course.</p>
          <p>Transition privately.</p>
          <p>Transition loudly.</p>
          <p>Transition medically.</p>
          <p>Don&apos;t transition medically.</p>
          <p>Use the label you&apos;ve loved since you were twelve.</p>
          <p>Invent a new one tomorrow.</p>
          <p>
            There isn&apos;t a finish line where somebody finally hands you permission to be
            yourself.
          </p>
          <p>There is just your life.</p>
          <p>And you deserve the chance to build one that feels like yours.</p>
        </RoomSection>

        <p className="text-center">
          <RoomLink href="/store">Back to the store</RoomLink>
        </p>
      </WallCard>
    </RoomPage>
  )
}
