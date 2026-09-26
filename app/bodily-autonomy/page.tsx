import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
import { GuideCover } from '@/components/home/guide-cover'
import { BulletList, RoomSection } from '@/components/home/room-section'
import { LearnMoreSection } from '@/components/home/learn-more-section'
import { PurchaseIncludes } from '@/components/home/purchase-includes'
import {
  getBodilyAutonomyBundleHref,
  getBodilyAutonomyGuideHref,
  getBoundariesWorksheetHref,
} from '@/utils/shopify-checkout'

export const metadata: Metadata = {
  title: 'Queer Sex, Consent & Bodily Autonomy',
  description:
    'A trans- and neurodivergent-informed toolkit for bodily autonomy, boundaries, consent, communication, safer sex, and intimacy—plus a companion worksheet.',
}

const GUIDE_LABEL = 'Get the Queer Sex & Bodily Autonomy Guide →'
const WORKSHEET_LABEL = 'Get the Boundaries, Consent & Red Flags Worksheet →'
const WORKSHEET_SHORT = 'Get the Boundaries Worksheet →'
const WORKSHOPS_HREF = '/coaching#workshops'

const inventoryItems = [
  'YES — I’m interested in this.',
  'NO — This isn’t something I want.',
  'MAYBE — I’m curious, but I’d need to talk about the circumstances.',
  'FANTASY ONLY — I like the idea without wanting to experience it.',
  'I DON’T KNOW — I haven’t figured this one out yet.',
]

const saferSexItems = [
  'Barriers and condoms',
  'Dental dams',
  'Gloves',
  'Shared toys',
  'Lubrication and reducing tissue injury',
  'STI transmission and testing',
  'PrEP and PEP',
  'Pregnancy prevention where relevant',
  'Communication about testing and symptoms',
]

const transConversationItems = [
  'What words do you want someone to use for your body?',
  'Are there words that create dysphoria?',
  'Are there areas you don’t want touched?',
  'Are there areas where touch is especially affirming?',
  'Do you want to keep certain clothing on?',
  'How should someone interact with binders, packers, prosthetics, straps, or other gender-affirming items?',
  'What happens if dysphoria suddenly shows up during intimacy?',
]

const worksheetLanguageItems = [
  'Words you like for your body',
  'Words you don’t want used',
  'Names and titles that feel affirming',
  'Potential dysphoria triggers',
  'Gender-affirming items a partner should understand',
  'How you’d like someone to respond if dysphoria happens',
]

const kinkPrepItems = [
  'Boundaries and hard limits',
  'Things that require more discussion',
  'Safewords and nonverbal signals',
  'Relevant medical or accessibility considerations',
  'Emotional triggers',
  'Risk awareness',
  'Aftercare',
  'What happens if someone becomes overwhelmed',
  'How you’ll check in afterward',
]

const desireQuestions = [
  'What draws me toward intimacy or kink?',
  'What roles or dynamics am I curious about?',
  'What makes me feel affirmed?',
  'What am I definitely not interested in?',
  'What am I interested in only under certain circumstances?',
]

const aftercareItems = [
  'Cuddling',
  'Quiet',
  'Reassurance',
  'Food and water',
  'A blanket',
  'Space',
  'Medications',
  'Watching something familiar',
  'Talking through what happened',
  'Being left completely alone for a while',
]

const consentTalkItems = [
  'Boundaries',
  'Medical considerations',
  'Triggers',
  'STI status and risk decisions',
  'Safewords or signals',
  'Accessibility',
  'Aftercare',
  'What happens if somebody freezes, becomes nonverbal, dissociates, or otherwise has difficulty communicating',
]

const redFlagItems = [
  'Pushes you to ignore or renegotiate a boundary after you’ve declined',
  'Treats your uncertainty as permission',
  'Skips conversations about limits when they’re relevant',
  'Ignores safewords or agreed signals',
  'Uses intimate titles or dynamics without establishing that they’re welcome',
  'Treats consent to one experience as blanket consent for others',
  'Makes you feel guilty for changing your mind',
]

const greenFlagItems = [
  'Talk openly about boundaries',
  'Respect a no without requiring justification',
  'Check in when they’re uncertain',
  'Care about your comfort as much as their own',
  'Take accountability when something goes wrong',
  'Respect safewords and signals immediately',
  'Discuss aftercare and accessibility needs',
  'Understand that consent can change',
  'Make it safe to say “I don’t know.”',
]

const deserveItems = [
  'Pleasure without shame',
  'Boundaries without guilt',
  'Curiosity without obligation',
  'Communication without fear',
  'Language that affirms your body',
  'Relationships where “no” is safe',
  'Relationships where “maybe” isn’t treated as “yes”',
  'Intimacy that centers your autonomy, safety, connection, and joy',
]

export default function BodilyAutonomyPage() {
  const guideHref = getBodilyAutonomyGuideHref()
  const worksheetHref = getBoundariesWorksheetHref()
  const bundleHref = getBodilyAutonomyBundleHref()

  return (
    <RoomPage>
      <WallCard title="Your Body Belongs to You." wide>
        <p className="font-gallery text-xl italic text-room-brown">
          Queer Sex, Consent &amp; Bodily Autonomy
        </p>
        <p className="text-center">A Neuroqueer Apothecary guide by Quinn Fleur</p>
        <div className="mx-auto max-w-xs">
          <GuideCover title="Queer Sex & Bodily Autonomy" tagline="your body belongs to you" />
        </div>
        <p>You are allowed to want things.</p>
        <p>You are allowed to not want things.</p>
        <p>You are allowed to be curious.</p>
        <p>You are allowed to not know yet.</p>
        <p>You are allowed to say yes.</p>
        <p>You are allowed to say no.</p>
        <p>And you&apos;re allowed to say:</p>
        <p className="italic">&ldquo;Actually, I changed my mind.&rdquo;</p>
        <p>
          The <em>Queer Sex &amp; Bodily Autonomy Guide</em> is a practical, trans- and
          neurodivergent-informed resource for understanding your body, boundaries, desires,
          consent, communication, safer sex, and intimacy.
        </p>
        <p>It isn&apos;t a rulebook for how you&apos;re supposed to have sex.</p>
        <p>
          It&apos;s a toolkit for figuring out what you want—and communicating that with the people
          you choose to share yourself with. It is just as useful if you are sexually active,
          exploring kink, questioning what you want, navigating dysphoria, or simply trying to
          become better at boundaries.
        </p>
        <GuideCta href={guideHref} label={GUIDE_LABEL} isDominant />
        <GuideCta href={worksheetHref} label={WORKSHEET_LABEL} />
        <PurchaseIncludes />

        <LearnMoreSection title="TL;DR — What’s in the Guide?">
          <p>
            <strong>Bodily autonomy.</strong> Understanding that your body belongs to you—including
            the right to change your mind.
          </p>
          <p>
            <strong>Consent.</strong> Moving beyond &ldquo;yes or no&rdquo; toward ongoing
            communication and check-ins.
          </p>
          <p>
            <strong>Yes / No / Maybe inventories.</strong> A structured way to explore interests,
            uncertainty, fantasies, and boundaries.
          </p>
          <p>
            <strong>Desire &amp; self-exploration.</strong> Questions and tools for figuring out
            what you actually like.
          </p>
          <p>
            <strong>Communication.</strong> Practical scripts for talking about sex, boundaries,
            bodies, needs, and uncertainty.
          </p>
          <p>
            <strong>Safer queer sex.</strong> Risk-reduction information designed around the kinds
            of sex queer people actually have.
          </p>
          <p>
            <strong>Queer &amp; non-monogamous relationships.</strong> Challenging assumptions
            about sex, jealousy, boundaries, and relationship structures.
          </p>
          <p>
            <strong>Barriers &amp; contraception.</strong> Understanding your options without
            assuming everyone&apos;s bodies, partners, or pregnancy risks look the same.
          </p>
          <p>
            <strong>Kink basics.</strong> Boundaries, safewords, negotiation, risk awareness,
            aftercare, and exploring kink intentionally.
          </p>
          <p>
            <strong>Trans-affirming intimacy.</strong> Finding language for bodies, navigating
            dysphoria, and communicating about gender-affirming clothing and prosthetics.
          </p>
          <GuideCta href={guideHref} label="Explore the Full Guide →" />
        </LearnMoreSection>

        <RoomSection title="Consent Is More Than “Did They Say Yes?”">
          <p>Consent isn&apos;t a permission slip you collect before sex.</p>
          <p>It&apos;s a practice.</p>
          <p>One useful model is F.R.I.E.S.</p>
          <p>
            <strong>Freely Given</strong> — without pressure or coercion.
          </p>
          <p>
            <strong>Reversible</strong> — anyone can change their mind.
          </p>
          <p>
            <strong>Informed</strong> — everyone understands what they&apos;re agreeing to.
          </p>
          <p>
            <strong>Enthusiastic</strong> — participation is genuinely wanted rather than simply
            tolerated.
          </p>
          <p>
            <strong>Specific</strong> — agreeing to one thing doesn&apos;t automatically mean
            agreeing to something else.
          </p>
          <p>
            The guide goes beyond defining consent and looks at what it can sound like in actual
            conversations.
          </p>
          <p className="italic">&ldquo;How are you feeling right now?&rdquo;</p>
          <p className="italic">&ldquo;Do you want me to keep going?&rdquo;</p>
          <p className="italic">
            &ldquo;When you said yes to this, did you also mean this other thing—or should I ask
            separately?&rdquo;
          </p>
          <p className="italic">&ldquo;I thought I wanted this, but I don&apos;t anymore.&rdquo;</p>
          <p>
            Because knowing the definition of consent and knowing how to practice it with another
            human being aren&apos;t always the same skill.
          </p>
        </RoomSection>

        <RoomSection title="Know Your Boundaries Before You Have to Explain Them">
          <p>
            It can be incredibly difficult to communicate a boundary when you haven&apos;t figured
            out what the boundary is yet.
          </p>
          <p>
            The <em>Boundaries, Consent &amp; Red Flags Worksheet</em> is the practical companion:
            somewhere to start applying the guide to yourself.
          </p>
          <p>Work through it alone, with a partner, or use separate copies and compare your answers together.</p>
          <GuideCta href={worksheetHref} label={WORKSHEET_SHORT} isDominant />
        </RoomSection>

        <LearnMoreSection title="Yes. No. Maybe. I Don’t Know.">
          <p>Not knowing is an answer.</p>
          <p>
            The guide includes a Yes / No / Maybe sexual inventory to help you explore your
            reactions to different experiences without requiring you to immediately decide whether
            you would actually do them.
          </p>
          <p>Something can be:</p>
          <BulletList items={inventoryItems} />
          <p>And those answers aren&apos;t permanent.</p>
          <p>A yes today can become a no.</p>
          <p>A no can remain a no forever.</p>
          <p>A maybe might become a yes with one person and a no with another.</p>
          <p>
            Something you enthusiastically enjoy in one context may feel completely wrong in
            another.
          </p>
          <p>Your boundaries are information, not contracts with your past self.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Okay… But What Do I Actually Like?">
          <p>For some people, the answer comes easily.</p>
          <p>For others?</p>
          <p>Not so much.</p>
          <p>Maybe nobody ever gave you permission to think about your own pleasure.</p>
          <p>
            Maybe you learned sex through abstinence education, pornography, heteronormative
            assumptions, or awkward health-class diagrams.
          </p>
          <p>
            Maybe you&apos;re trans and you&apos;re still figuring out what kinds of intimacy make
            you feel connected to your body rather than dysphoric.
          </p>
          <p>
            Maybe you&apos;re autistic and you&apos;re discovering that some of your preferences
            are as much about sensory input and predictability as sexuality.
          </p>
          <p>Maybe you&apos;re kinky.</p>
          <p>Maybe you&apos;re asexual.</p>
          <p>Maybe you&apos;re somewhere in between.</p>
          <p>Maybe the answer is simply:</p>
          <p className="italic">I don&apos;t know yet.</p>
          <p>That&apos;s okay.</p>
          <p>
            The guide provides reflection questions and outside resources that can help you
            develop language for desire without treating curiosity as an obligation to act.
          </p>
        </LearnMoreSection>

        <RoomSection title="You Don’t Need to Know Everything About Yourself Before You Start">
          <p>Try the <em>Boundaries, Consent &amp; Red Flags Worksheet</em> when you need help turning:</p>
          <p className="italic">&ldquo;I don&apos;t know what I&apos;m comfortable with.&rdquo;</p>
          <p>into:</p>
          <p className="italic">&ldquo;Here&apos;s what sounds good.&rdquo;</p>
          <p className="italic">&ldquo;Here&apos;s what I don&apos;t want.&rdquo;</p>
          <p className="italic">&ldquo;Here&apos;s what I&apos;m curious about.&rdquo;</p>
          <p className="italic">&ldquo;Here&apos;s what we&apos;d need to discuss first.&rdquo;</p>
          <GuideCta href={worksheetHref} label="Work Through Your Boundaries →" isDominant />
        </RoomSection>

        <LearnMoreSection title="Queer Safer Sex That Actually Talks About Queer Sex">
          <p>
            Safer-sex education often assumes everyone involved is cisgender, heterosexual,
            monogamous, and having one particular kind of sex.
          </p>
          <p>That leaves enormous gaps.</p>
          <p>
            The guide discusses risk reduction across different forms of sexual contact and covers
            topics including:
          </p>
          <BulletList items={saferSexItems} />
          <p>And language matters here, too.</p>
          <p>
            Instead of treating STI status as a measure of whether somebody is
            &ldquo;clean&rdquo; or &ldquo;dirty,&rdquo; the guide encourages accurate,
            non-stigmatizing language such as positive, negative, diagnosed, tested, or unknown.
          </p>
          <p>Safer sex isn&apos;t about eliminating every possible risk.</p>
          <p>
            It&apos;s about having enough information to make intentional choices about the risks
            you and your partners are comfortable taking.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Trans Bodies Deserve Better Conversations About Sex">
          <p>You shouldn&apos;t have to translate every intimacy resource into something that fits your gender.</p>
          <p>This guide was created from a trans perspective from the beginning.</p>
          <p>That includes conversations about:</p>
          <BulletList items={transConversationItems} />
          <p>There isn&apos;t one universally &ldquo;trans-affirming&rdquo; way to talk about someone&apos;s body.</p>
          <p>The affirming language is the language that person wants used for their body.</p>
          <p>So ask.</p>
        </LearnMoreSection>

        <RoomSection title="Your Body. Your Words.">
          <p>The companion worksheet includes space to identify:</p>
          <BulletList items={worksheetLanguageItems} />
          <p>
            Because &ldquo;What words feel good for your body?&rdquo; can be a much better question
            than assuming.
          </p>
          <GuideCta href={worksheetHref} label={WORKSHEET_SHORT} />
        </RoomSection>

        <LearnMoreSection title="Curious About Kink?">
          <p>You don&apos;t have to already know what every acronym means.</p>
          <p>You don&apos;t need a perfectly defined role.</p>
          <p>
            You don&apos;t need to know whether you&apos;re a top, bottom, switch, Dom, sub, brat,
            service-oriented anything, or somebody who just thinks restraints sound kind of
            interesting.
          </p>
          <p>Curiosity is enough reason to learn.</p>
          <p>
            The guide introduces ways to explore interests and emphasizes the conversations that
            should happen before an intense experience—not only afterward.
          </p>
          <p>That can include:</p>
          <BulletList items={kinkPrepItems} />
          <p>
            Some activities carry meaningful physical risks, so the guide also emphasizes
            researching activity-specific safety rather than assuming that consent alone makes an
            activity safe.
          </p>
          <p>Consent and risk awareness are related, but they aren&apos;t interchangeable.</p>
        </LearnMoreSection>

        <RoomSection title="Kink 101 / Workshops & Events">
          <p>
            Want a facilitated conversation rather than reading alone? Quinn offers Kink 101 and
            related workshops on consent, boundaries, and bodily autonomy for communities, groups,
            and events.
          </p>
          <p>
            Dates and locations change. The original presentations stay available as educational
            resources—the listing here is for current offerings, not a one-time event that will
            make the guide look outdated.
          </p>
          <GuideCta href={WORKSHOPS_HREF} label="See Workshops & Events →" isDominant />
        </RoomSection>

        <RoomSection title="The Companion Worksheet">
          <p className="font-display text-xl text-room-teal">Boundaries, Consent &amp; Red Flags</p>
          <p>Reading about boundaries is one thing.</p>
          <p>Figuring out yours is another.</p>
          <p>
            The worksheet turns the concepts in the guide into something you can actually fill
            out.
          </p>
        </RoomSection>

        <LearnMoreSection title="Explore Your Desires">
          <p>Reflect on questions like:</p>
          <BulletList items={desireQuestions} />
        </LearnMoreSection>

        <LearnMoreSection title="Map Your Boundaries">
          <p>Sort activities into:</p>
          <p>Yes — Sounds good</p>
          <p>Maybe — Let&apos;s talk about it</p>
          <p>No — Hard limit</p>
          <p>
            And consider both giving and receiving, because your answer doesn&apos;t have to be
            the same.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Plan Your Aftercare">
          <p>What helps your nervous system come back down?</p>
          <p>Maybe it&apos;s:</p>
          <BulletList items={aftercareItems} />
          <p>There isn&apos;t a universally correct form of aftercare.</p>
          <p>The useful question is:</p>
          <p className="italic">What helps you?</p>
        </LearnMoreSection>

        <LearnMoreSection title="Talk About Consent Before You Need the Safeword">
          <p>Use the worksheet to discuss:</p>
          <BulletList items={consentTalkItems} />
          <p>Planning doesn&apos;t make intimacy less spontaneous.</p>
          <p>It can make spontaneity safer to explore.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Red Flags & Green Flags">
          <p>Part of learning boundaries is learning what it looks like when somebody respects them.</p>
          <p>Pay attention when someone:</p>
          <BulletList items={redFlagItems} />
          <p>Look for people who:</p>
          <BulletList items={greenFlagItems} />
        </LearnMoreSection>

        <RoomSection title="Get the Guide + Worksheet">
          <p>
            <strong>Queer Sex &amp; Bodily Autonomy Guide.</strong> Learn about bodily autonomy,
            consent, communication, desire, queer safer sex, barriers, kink, boundaries,
            trans-affirming intimacy, and building sexual relationships around choice rather than
            obligation.
          </p>
          <p>PLUS</p>
          <p>
            <strong>Boundaries, Consent &amp; Red Flags Worksheet.</strong> Turn what you&apos;ve
            learned into your own boundaries, language preferences, interests, limits, aftercare
            needs, communication plans, and things to watch for.
          </p>
          <GuideCta href={guideHref} label={GUIDE_LABEL} isDominant />
          <GuideCta href={worksheetHref} label={WORKSHEET_SHORT} />
          <GuideCta href={bundleHref} label="Get Both →" />
        </RoomSection>

        <RoomSection title="What Does My Purchase Get Me?">
          <p>
            Neuroqueer Apothecary resources aren&apos;t static PDFs you download once and lose
            somewhere in your files.
          </p>
          <p>
            Purchasing access gives you ongoing access to the resource here on the NQA website.
          </p>
          <p>
            The guide can continue to grow as Quinn finds useful research, resources, tools,
            community information, and better ways to explain complicated topics.
          </p>
          <p>It&apos;s also built for neurodivergent information processing.</p>
          <p>Need the answer quickly? Read the TL;DR.</p>
          <p>Want more context? Open the expandable section.</p>
          <p>Ready for the rabbit hole? Keep going.</p>
          <p>Take what you need now. Come back for the rest later.</p>
          <GuideCta href="/how-nqa-works" label="Learn How NQA Resources Work →" />
        </RoomSection>

        <RoomSection title="Want Help Figuring Out Your Boundaries?">
          <p>Sometimes a worksheet immediately clicks.</p>
          <p>Sometimes you stare at:</p>
          <p className="italic">&ldquo;What do you want?&rdquo;</p>
          <p>and your brain responds:</p>
          <p className="italic">¯\_(ツ)_/¯</p>
          <p>That&apos;s allowed.</p>
          <p>You may know that something feels uncomfortable without knowing why.</p>
          <p>
            You may struggle to distinguish &ldquo;I want this&rdquo; from &ldquo;I think I&apos;m
            supposed to want this.&rdquo;
          </p>
          <p>You might have trouble identifying your needs until you&apos;re already overwhelmed.</p>
          <p>You might know your boundaries internally but freeze when you try to communicate them.</p>
          <p>Or you might simply want another person to help you organize your thoughts.</p>
        </RoomSection>

        <RoomSection title="Boundaries & Bodily Autonomy Coaching">
          <p>
            Work with Quinn to explore your boundaries, communication preferences, relationship
            needs, affirming language, consent practices, or questions raised by the guide.
          </p>
          <p>Coaching can help turn:</p>
          <p className="italic">&ldquo;Something about this doesn&apos;t feel right.&rdquo;</p>
          <p>into language you can actually use.</p>
          <p>Or:</p>
          <p className="italic">&ldquo;I think I want this, but I don&apos;t know how to talk about it.&rdquo;</p>
          <p>into a conversation you feel prepared to have.</p>
          <GuideCta href="/coaching" label="Explore Coaching →" />
          <GuideCta href="/coaching#book" label="Book a Free 15-Minute Consult →" isDominant />
        </RoomSection>

        <RoomSection title="You Don’t Have to Be Good at Sex.">
          <p>You don&apos;t have to be adventurous.</p>
          <p>You don&apos;t have to be kinky.</p>
          <p>You don&apos;t have to have sex at all.</p>
          <p>You don&apos;t have to want what your partners want.</p>
          <p>You don&apos;t have to keep wanting something because you wanted it before.</p>
          <p>You don&apos;t have to know exactly what you want yet.</p>
          <p>The goal isn&apos;t perfect communication or perfectly negotiated intimacy.</p>
          <p>It&apos;s practice.</p>
          <p>Learning yourself.</p>
          <p>Listening to other people.</p>
          <p>Getting things wrong and taking accountability.</p>
          <p>Checking in.</p>
          <p>Changing your mind.</p>
          <p>Talking afterward.</p>
          <p>Trying again.</p>
        </RoomSection>

        <RoomSection title="What You Deserve">
          <BulletList items={deserveItems} />
          <GuideCta href={guideHref} label={GUIDE_LABEL} isDominant />
          <GuideCta href={worksheetHref} label={WORKSHEET_LABEL} />
          <p className="text-center font-gallery italic text-room-brown">
            Neuroqueer Apothecary by Quinn Fleur
          </p>
        </RoomSection>

        <p className="text-center">
          Related:{' '}
          <RoomLink href="/consent">Know Your Rights: Bodily Autonomy, Boundaries &amp; Consent</RoomLink>
        </p>
        <p className="text-center">
          <RoomLink href="/store">Back to the store</RoomLink>
        </p>
      </WallCard>
    </RoomPage>
  )
}
