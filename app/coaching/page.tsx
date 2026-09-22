import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
import { LearnMoreSection } from '@/components/home/learn-more-section'
import { BulletList, RoomSection } from '@/components/home/room-section'
import { TidyCalEmbed } from '@/components/home/tidycal-embed'

export const metadata: Metadata = {
  title: 'Work With Quinn',
  description:
    'Peer-informed coaching and practical navigation with Quinn Fleur—turning “I know something isn’t working” into “I know what my next steps are.”',
}

const BOOK_HREF = '#book'
const WORKSHOP_MAIL = 'mailto:quinndelafleur@gmail.com?subject=Workshop%20inquiry'
const SPEAKING_MAIL =
  'mailto:quinndelafleur@gmail.com?subject=Speaking%20or%20panel%20inquiry'
const CUSTOM_MAIL = 'mailto:quinndelafleur@gmail.com?subject=Custom%20project%20inquiry'
const IDEA_MAIL = 'mailto:quinndelafleur@gmail.com?subject=Work%20with%20Quinn'

const binderGreatFor = [
  'Complex chronic illness',
  'Multiple specialists',
  'Disability documentation',
  'People who struggle to recall medical information on demand',
  'Anyone tired of explaining their entire medical history from scratch',
]

const workshopItems = [
  'Bodily Autonomy, Boundaries & Consent — a community conversation about power, safety, consent, boundary-setting, recognizing harm, accountability, repair, and reclaiming our bodies.',
  'So, You Think You’re Hypermobile? — an accessible introduction to hypermobility and Ehlers-Danlos syndrome, recognizing patterns in your body, documenting symptoms, and preparing to navigate healthcare.',
  'Build Your Medical Binder — a hands-on workshop for turning years of scattered symptoms, diagnoses, treatments, and records into a medical history you can actually use.',
  'Neurodivergent Self-Advocacy — understanding needs, accommodations, communication, masking, executive dysfunction, sensory differences, and advocating for yourself without treating neurotypical behavior as the ultimate goal.',
  'Trans Healthcare & Self-Advocacy — tools for navigating gender-affirming care, preparing for appointments, understanding options, asking better questions, and maintaining autonomy within medical systems.',
  'Consent for Complicated Humans — consent through the lens of autism, ADHD, disability, queerness, trauma, non-monogamy, power, communication differences, and community care.',
  'Radical Rest & Sustainable Care — moving beyond wellness culture toward disability-aware rest, pacing, nervous-system care, accessibility, and sustainable ways of living.',
]

const speakingTopics =
  'Transness • neurodivergence • autism • ADHD • disability • chronic illness • EDS and hypermobility • medical self-advocacy • queer community • polyamory • consent • bodily autonomy • accessibility • community care • transformative justice • chosen family • gender expression • drag • trans representation • neuroqueerness'

const customItems = [
  'Workshops',
  'Presentations',
  'Facilitator guides',
  'Participant worksheets',
  'Resource guides',
  'Community handouts',
  'Accessibility materials',
  'Discussion guides',
  'Training materials',
  'Care-planning resources',
  'Educational programming',
]

const facilitationItems = [
  'Community agreements',
  'Accessibility',
  'Boundaries',
  'Consent culture',
  'Communication',
  'Conflict',
  'Accountability',
  'Transformative approaches to harm',
  'Queer community building',
  'Neurodivergent inclusion',
]

export default function CoachingPage() {
  return (
    <RoomPage>
      <WallCard title="You Don’t Have to Figure It All Out From Scratch." wide="xl">
        <p className="font-gallery text-xl italic text-room-brown">Work with Quinn Fleur</p>
        <p>
          Quinn helps people turn “I know something isn’t working” into “I know what my next steps
          are.”
        </p>
        <p>
          This is peer-informed navigation and practical support—not medical, legal, or mental-health
          treatment.
        </p>
        <p>
          Sometimes you don&apos;t need someone to have all the answers. You need someone who knows
          how to help you find them.
        </p>

        <section id="book" className="scroll-mt-[12.5rem] space-y-4 sm:scroll-mt-[15rem]">
          <h2 className="font-display text-2xl text-room-teal sm:text-3xl">Book a session</h2>
          <p>
            Pick a time below. If you&apos;re looking for a workshop, panel, or custom project, you
            can still start here or{' '}
            <RoomLink href="#community">skip down to community work</RoomLink>.
          </p>
          <TidyCalEmbed />
        </section>

        <LearnMoreSection title="Meet Quinn">
          <p>
            Quinn Fleur is a trans, neurodivergent, disabled educator, resource-builder, and
            community organizer who has spent years learning how to navigate systems that were rarely
            designed with people like him in mind.
          </p>
          <p>
            As a late-diagnosed AuDHDer living with Ehlers-Danlos syndrome and complex chronic
            illness, Quinn knows how quickly healthcare can become a second job: keeping track of
            years of records, figuring out which specialist you actually need, learning enough
            medical vocabulary to explain what is happening, preparing for appointments, finding
            providers who understand your conditions, and trying to remember everything when someone
            asks, “So, what brings you in today?”
          </p>
          <p>His work grew out of building the resources he wished he had.</p>
          <p>
            Through Neuroqueer Apothecary, Quinn combines lived experience, community knowledge,
            research, systems thinking, and years of resource navigation to help other trans,
            neurodivergent, hypermobile, and chronically ill people make complicated things more
            manageable.
          </p>
          <p>
            Quinn isn’t here to diagnose you or tell you what your body, identity, relationships, or
            life should look like. He helps you understand your options, organize what you already
            know, find useful resources, ask better questions, and build a path forward that actually
            makes sense for you.
          </p>
        </LearnMoreSection>

        <h2 className="font-display text-3xl text-room-teal sm:text-4xl">Coaching Services</h2>

        <LearnMoreSection title="Coaching & Peer Navigation">
          <p>You do not need to figure everything out alone.</p>
          <p>
            Neuroqueer Apothecary coaching is practical, collaborative support for navigating
            complicated bodies, identities, relationships, healthcare systems, and life logistics.
            Sessions are built around a simple question:
          </p>
          <p className="italic">What would make this easier to navigate?</p>
          <p>
            Bring the giant folder of medical records. Bring the half-finished spreadsheet. Bring the
            list of symptoms in your Notes app. Bring the appointment you have no idea how to prepare
            for. Bring the problem you can’t quite figure out how to turn into a plan.
          </p>
          <p>We’ll start where you are.</p>
          <GuideCta href={BOOK_HREF} label="Book Coaching →" isDominant />
        </LearnMoreSection>

        <LearnMoreSection title="Medical Binder Coaching" id="medical-binder">
          <p>Your medical history shouldn’t be a memory test.</p>
          <p>
            When you have multiple diagnoses, specialists, medications, surgeries, tests, and years
            of symptoms, “Tell me your medical history” becomes an enormous question.
          </p>
          <p>
            Medical Binder Coaching helps you turn scattered medical information into something you
            can actually use.
          </p>
          <p>
            Quinn can help you decide what belongs in your binder, organize diagnoses and symptom
            histories, build medication and testing timelines, identify records worth requesting,
            create specialist-specific summaries, prepare questions for appointments, and turn years
            of disconnected information into a coherent picture of your care.
          </p>
          <p>
            You can build your own binder alongside Quinn, get help improving one you’ve already
            started, or use coaching to figure out what information you’re still missing.
          </p>
          <p>Great for:</p>
          <BulletList items={binderGreatFor} />
          <p>
            There’s also a{' '}
            <RoomLink href="/diy-binder">Medical Binder guide</RoomLink> and{' '}
            <RoomLink href="/custom-binder">custom binder creation</RoomLink> on the shelf.
          </p>
          <GuideCta href={BOOK_HREF} label="Book Medical Binder Coaching →" />
        </LearnMoreSection>

        <LearnMoreSection title="EDS & Hypermobility Roadmapping" id="eds-roadmapping">
          <p>You think you might be hypermobile. Now what?</p>
          <p>
            Learning that your seemingly unrelated symptoms might actually be connected can be
            validating—and incredibly overwhelming.
          </p>
          <p>
            Who evaluates hypermobility? What is a Beighton score? What should you document before an
            appointment? Which symptoms belong with orthopedics, cardiology, GI, physical therapy,
            autonomic medicine, or another specialty? What does an EDS workup actually involve? And
            what do you do when every specialist seems to focus on only one piece?
          </p>
          <p>
            EDS &amp; Hypermobility Roadmapping is a peer-navigation session designed to help you map
            the landscape.
          </p>
          <p>
            Together, we can organize your symptom history, identify questions worth bringing to
            clinicians, discuss the kinds of specialists and evaluations commonly involved in
            hypermobility care, identify gaps in your existing care team, and turn an intimidating
            web of possibilities into manageable next steps.
          </p>
          <p>
            This isn’t diagnosis or a substitute for medical care. It is help figuring out where you
            are, what information you need, and where you might go next.
          </p>
          <p>
            Start with the written guide:{' '}
            <RoomLink href="/store/so-you-think-youre-hypermobile">
              So, You Think You’re Hypermobile?
            </RoomLink>
          </p>
          <GuideCta href={BOOK_HREF} label="Book EDS Roadmapping →" />
        </LearnMoreSection>

        <LearnMoreSection title="Resource Navigation" id="resource-navigation">
          <p>Tell me what you’re looking for. We’ll figure out where to start.</p>
          <p>
            Finding the right resource is often harder than knowing that you need help in the first
            place.
          </p>
          <p>
            Resource Navigation sessions help you search for healthcare providers, affirming
            services, community organizations, support groups, accessibility resources, transition
            resources, educational materials, and other practical supports.
          </p>
          <p>
            Quinn brings extensive experience navigating resources in Charlotte and the surrounding
            region, along with strategies for searching beyond North Carolina when the care or
            expertise you need isn’t available locally.
          </p>
          <p>
            Instead of handing you an enormous directory and wishing you luck, the goal is to narrow
            the possibilities around your actual needs: location, insurance, accessibility, identity,
            specialty, budget, transportation, and what you are trying to accomplish.
          </p>
          <p>
            The <RoomLink href="/charlotte">Charlotte &amp; NC resource guide</RoomLink> is a good
            place to browse first.
          </p>
          <GuideCta href={BOOK_HREF} label="Book Resource Navigation →" />
        </LearnMoreSection>

        <LearnMoreSection title="Appointment Strategy & Preparation">
          <p>Walk into the appointment knowing what you need to say.</p>
          <p>
            You waited four months for this appointment. You shouldn’t have to improvise the
            important parts in fifteen minutes.
          </p>
          <p>
            Bring Quinn an upcoming appointment and work together to create a concise preparation
            sheet: why you’re going, your most relevant symptoms, important history, previous testing
            and treatments, what has changed, questions you want answered, and what you hope happens
            next.
          </p>
          <p>
            Especially useful before seeing a new specialist, seeking another opinion, discussing a
            complicated diagnosis, or returning to a provider after months of testing.
          </p>
          <GuideCta href={BOOK_HREF} label="Book Appointment Preparation →" />
        </LearnMoreSection>

        <h2 className="font-display text-3xl text-room-teal sm:text-4xl">
          More Ways We Can Work Together
        </h2>

        <LearnMoreSection title="Medical Records Detective">
          <p>Turn a pile of records into a story.</p>
          <p>
            Have hundreds of pages of visit notes, imaging reports, labs, medication lists, and test
            results but no idea what matters?
          </p>
          <p>
            Quinn can help you develop a system for reviewing your records, creating timelines,
            identifying recurring themes, finding missing documentation, and generating questions to
            investigate further with your healthcare team.
          </p>
          <p>This can also pair naturally with Medical Binder Coaching.</p>
          <GuideCta href={BOOK_HREF} label="Book a Records Session →" />
        </LearnMoreSection>

        <LearnMoreSection title="“What Specialist Do I Even Need?”">
          <p>
            Sometimes you don’t need a six-month plan. You have one problem and absolutely no idea
            where it belongs.
          </p>
          <p>
            This focused navigation session helps you organize the problem, understand what different
            specialties generally address, identify potentially relevant categories of care, and
            develop a shortlist of questions and next steps to investigate.
          </p>
          <p>No diagnosis required.</p>
          <GuideCta href={BOOK_HREF} label="Book a Specialist Navigation Session →" />
        </LearnMoreSection>

        <LearnMoreSection title="Neurodivergent Life Systems">
          <p>Build systems for the brain you actually have.</p>
          <p>
            Planners, routines, and productivity advice are usually designed around an imaginary
            person with consistent energy, executive function, attention, and memory.
          </p>
          <p>
            Quinn can help you build external systems for task initiation, reminders, routines,
            information organization, executive dysfunction, fluctuating capacity, sensory needs, and
            everyday logistics—with neurodivergence and disability treated as design requirements
            rather than obstacles to overcome.
          </p>
          <GuideCta href={BOOK_HREF} label="Book Life Systems Coaching →" />
        </LearnMoreSection>

        <LearnMoreSection title="Care Plan Coaching">
          <p>Make a plan before everything is on fire.</p>
          <p>
            Using Neuroqueer Apothecary’s Care Plan framework, Quinn can help you identify what doing
            well, stressed, overwhelmed, and in crisis actually look like for you—and what support is
            helpful or harmful at each stage.
          </p>
          <p>
            Build communication preferences, comfort menus, distress-level plans, support
            instructions, sensory accommodations, recovery activities, boundaries, and escalation
            plans that can be shared with partners, friends, chosen family, roommates, or caregivers.
          </p>
          <p>
            The <RoomLink href="/care-plan">care plan guide</RoomLink> is on the shelf if you want
            the written version first.
          </p>
          <GuideCta href={BOOK_HREF} label="Book Care Plan Coaching →" />
        </LearnMoreSection>

        <LearnMoreSection title="Love Language & Connection Mapping" id="love-language-coaching">
          <p>Love languages are much more interesting when we stop trying to fit everyone into five boxes.</p>
          <p>
            Using Neuroqueer Apothecary’s expanded love-language framework—including Activity,
            Appreciation, Emotional, Financial, Intellectual, Physical, and Practical styles
            alongside neurodivergent patterns such as parallel play, penguin pebbling, info-dumping,
            regulation/deep pressure, and support swapping—Quinn can help you explore how you
            naturally give and receive connection.
          </p>
          <p>
            Sessions can focus on an individual, friendship, partnership, polycule, or other
            relationship, especially when two people care deeply about each other but keep missing
            each other’s bids for connection.
          </p>
          <p>
            Take the quizzes first on the{' '}
            <RoomLink href="/love-languages">love languages page</RoomLink>.
          </p>
          <GuideCta href={BOOK_HREF} label="Book Love Language Coaching →" />
        </LearnMoreSection>

        <LearnMoreSection title="Trans & Gender Exploration Navigation">
          <p>
            There is no checklist you have to complete to be trans, and coaching isn’t here to give
            you one.
          </p>
          <p>
            Drawing from Quinn’s <RoomLink href="/transition">Transition Guide</RoomLink> and
            community-organizing experience, these sessions offer a place to explore possibilities
            around names, pronouns, presentation, social transition, HRT, surgery, healthcare,
            paperwork, community, and the enormous space between questioning your gender and deciding
            what—if anything—you want to change.
          </p>
          <p>
            The goal isn’t to determine whether you’re “trans enough.” It’s to give you information
            and room to figure out what feels like yours.
          </p>
          <GuideCta href={BOOK_HREF} label="Book Gender Navigation →" />
        </LearnMoreSection>

        <LearnMoreSection title="Bodily Autonomy, Boundaries & Consent Coaching">
          <p>
            Knowing that you’re allowed to have boundaries and knowing how to navigate them in real
            life can be two very different things.
          </p>
          <p>
            These sessions use the framework from{' '}
            <RoomLink href="/consent">
              Know Your Rights: Bodily Autonomy, Boundaries &amp; Consent
            </RoomLink>{' '}
            to explore identifying boundaries, communicating needs, navigating consent, responding
            when boundaries have been crossed, preparing for difficult conversations, and building
            relationships and communities based on mutual respect rather than control.
          </p>
          <p>Sessions can also focus specifically on bodily autonomy and consent within healthcare.</p>
          <GuideCta href={BOOK_HREF} label="Book Boundaries & Consent Coaching →" />
        </LearnMoreSection>

        <LearnMoreSection title="Chronic Illness Resource Mapping">
          <p>
            When several conditions overlap, researching them one at a time can leave you with dozens
            of disconnected recommendations.
          </p>
          <p>This session focuses on building the map.</p>
          <p>
            Organize diagnoses, suspected conditions, symptoms, specialists, current treatments,
            unanswered questions, accommodations, and practical resources into one visual or written
            roadmap. From there, identify what has already been addressed, what is still unresolved,
            and which questions are worth investigating next.
          </p>
          <GuideCta href={BOOK_HREF} label="Book Resource Mapping →" />
        </LearnMoreSection>

        <LearnMoreSection title="Custom Session" id="custom-session">
          <p>“I don’t know what this appointment should be called.”</p>
          <p>That’s okay.</p>
          <p>
            If your problem falls somewhere between chronic illness, disability, neurodivergence,
            trans life, healthcare navigation, resource-finding, organization, care planning, or one
            of Neuroqueer Apothecary’s guides, book a Custom Session and tell Quinn what you’re
            trying to figure out.
          </p>
          <p>You don’t need to know what kind of help you need before you’re allowed to ask for help.</p>
          <GuideCta href={BOOK_HREF} label="Book a Custom Session →" />
        </LearnMoreSection>

        <LearnMoreSection title="Bring Quinn to Your Community" id="community">
          <p>The Neuroqueer Apothecary isn’t only one-on-one.</p>
          <p>
            I also offer workshops, presentations, panels, speaking, facilitation, and custom
            educational programming for community organizations, nonprofits, conferences, queer and
            trans groups, disability organizations, student organizations, conventions, support
            groups, and other spaces interested in these conversations.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Workshops" id="workshops">
          <p>Existing and customizable workshop topics include:</p>
          <BulletList items={workshopItems} />
          <p>
            Workshops can be adapted to the age, experience, needs, accessibility requirements, and
            context of your community.
          </p>
          <p>
            Ready-to-host kits are also on the shelf:{' '}
            <RoomLink href="/consent-workshop">Know Your Rights</RoomLink> and the{' '}
            <RoomLink href="/care-plan-workshop">Care Plan Creation Workshop</RoomLink>.
          </p>
          <GuideCta href={WORKSHOP_MAIL} label="Bring a Workshop to Your Community →" />
        </LearnMoreSection>

        <LearnMoreSection title="Panels & Speaking" id="speaking">
          <p>
            Looking for someone who can speak from the intersections rather than treating each
            identity as an entirely separate conversation?
          </p>
          <p>
            I’m available for panels, conferences, conventions, community discussions, classes,
            podcasts, organizational events, and moderated conversations.
          </p>
          <p>Topics can include:</p>
          <p>{speakingTopics}</p>
          <p>And, frequently, the places where several of those collide.</p>
          <GuideCta href={SPEAKING_MAIL} label="Invite Quinn to Speak →" />
        </LearnMoreSection>

        <LearnMoreSection title="Custom Workshops & Educational Resources" id="custom">
          <p>Don’t see exactly what your community needs?</p>
          <p>Ask me. I can develop custom:</p>
          <BulletList items={customItems} />
          <p>
            Maybe your organization needs a training on making events more accessible to
            neurodivergent people.
          </p>
          <p>Maybe your trans group wants a workshop on chronic illness and hypermobility.</p>
          <p>
            Maybe your polyamorous community wants to talk about autonomy and consent without
            importing monogamous assumptions.
          </p>
          <p>Maybe your staff needs practical guidance for creating trans-affirming spaces.</p>
          <p>Maybe you have a very specific group of very specific weirdos with a very specific problem.</p>
          <p>Those are kind of my favorite.</p>
          <GuideCta href={CUSTOM_MAIL} label="Ask About a Custom Project →" />
        </LearnMoreSection>

        <LearnMoreSection title="Facilitation & Community Conversations">
          <p>Some conversations need more than a PowerPoint.</p>
          <p>I can also help organizations structure and facilitate conversations around:</p>
          <BulletList items={facilitationItems} />
          <p>
            The goal isn’t to arrive as an outside authority and tell your community how it should
            function. It’s to provide structure, language, questions, and tools that help your
            community figure out what it wants to build together.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Not Sure What You Need?">
          <p>That’s okay too.</p>
          <p>Tell me:</p>
          <p>Who are you?</p>
          <p>Who is this for?</p>
          <p>What’s happening?</p>
          <p>What are you hoping will be different afterward?</p>
          <p>
            We can figure out whether that means a coaching session, workshop, facilitated
            conversation, panel, resource, presentation, or something we haven’t named yet.
          </p>
          <GuideCta href={IDEA_MAIL} label="Talk to Quinn About Your Idea →" />
        </LearnMoreSection>

        <RoomSection title="Lived Experience Is Knowledge">
          <p>The Neuroqueer Apothecary is built around a simple principle:</p>
          <p>We shouldn’t all have to independently rediscover the same survival knowledge.</p>
          <p>
            I’m not interested in positioning myself as the ultimate authority on your body, gender,
            brain, relationships, or community.
          </p>
          <p>
            I’m interested in taking what I’ve learned through lived experience, community
            organizing, research, trial and error, disability, transition, neurodivergence, and years
            of navigating complicated systems—and making that knowledge easier for someone else to
            reach.
          </p>
          <p>Sometimes I have an answer.</p>
          <p>Sometimes I have a resource.</p>
          <p>Sometimes I know the question you haven’t figured out how to ask yet.</p>
          <p>And sometimes what I can offer is another neuroqueer person sitting beside you saying:</p>
          <p className="italic">Yeah, this is complicated. Let’s map it out.</p>
          <GuideCta href={BOOK_HREF} label="Book One-on-One Coaching →" isDominant />
          <GuideCta href={WORKSHOP_MAIL} label="Book a Workshop or Speaking Engagement →" />
          <GuideCta href={CUSTOM_MAIL} label="Ask About Something Custom →" />
        </RoomSection>

        <RoomSection title="What Coaching Is—and Isn’t">
          <p>
            Neuroqueer Apothecary coaching is peer education, organization, research support, and
            resource navigation informed by lived experience. Quinn can help you understand
            information, prepare questions, locate resources, organize records, explore
            possibilities, and advocate for what you need.
          </p>
          <p>
            Coaching does not provide medical diagnosis or treatment, psychotherapy, legal advice, or
            emergency services. When something belongs with a licensed professional, the goal is not
            to replace that professional—it is to help you become better prepared to find them, talk
            to them, and use the limited time you have with them effectively.
          </p>
          <p>
            You remain the person making decisions about your body, relationships, healthcare, and
            life.
          </p>
          <p>That’s kinda the point.</p>
        </RoomSection>

        <p className="text-center">
          <RoomLink href="/about#contact">Or leave a note</RoomLink>
          {' · '}
          <RoomLink href="/store">Browse the store</RoomLink>
        </p>
      </WallCard>
    </RoomPage>
  )
}
