import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
import { GuideCover } from '@/components/home/guide-cover'
import { BulletList, RoomSection } from '@/components/home/room-section'
import { LearnMoreSection } from '@/components/home/learn-more-section'
import { getBinderGuideHref } from '@/utils/shopify-checkout'

export const metadata: Metadata = {
  title: 'How to Make Your Own Medical Binder',
  description:
    'A DIY medical binder guide and blank template for turning a scattered history into something you can actually use at appointments.',
}

const COACHING_HREF = '/coaching'
const CUSTOM_BINDER_HREF = '/custom-binder'
const DIY_LABEL = 'Get the Guide + Blank Binder →'

const helpfulIfItems = [
  'You see several specialists',
  'You have multiple diagnoses',
  'Your symptoms affect several body systems',
  'You’ve been sick for years',
  'Your medical records are spread across different hospital systems',
  'You’ve moved or changed providers',
  'You’ve had multiple surgeries or hospitalizations',
  'You’ve tried a lot of medications',
  'Your symptoms fluctuate',
  'You’re still pursuing diagnoses',
  'You struggle to remember details during appointments',
  'Brain fog makes medical conversations difficult',
  'You become overwhelmed or lose words when advocating for yourself',
  'You have communication or cognitive disabilities',
  'Your medical history doesn’t fit neatly into a 30-second explanation',
  'You’re preparing to establish care with a new specialist',
  'You’re preparing for surgery',
  'You’re tired of telling your entire medical story over and over and over again',
]

const guideSkills = [
  'Decide what information belongs in the binder',
  'Organize complicated histories',
  'Create a useful medical timeline',
  'Separate facts from suspicions',
  'Document symptoms precisely',
  'Describe functional impairment',
  'Build a useful medication history',
  'Summarize testing without trying to interpret it yourself',
  'Handle contradictory records',
  'Maintain an evidence trail',
  'Prepare for appointments',
  'Write condition-specific summaries',
  'Keep your own voice in a clinician-facing document',
  'Avoid drowning the useful information in hundreds of irrelevant details',
  'Keep the binder updated over time',
]

const templateSections = [
  'Quick Medical Reference',
  'Emergency Information',
  'Care Priorities',
  'Diagnoses',
  'Medications',
  'Medication History',
  'Allergies & Reactions',
  'Care Team',
  'Surgeries',
  'Anesthesia History',
  'Hospitalizations',
  'Medical Timeline',
  'Symptoms',
  'Functional Status',
  'Assistive Devices',
  'Condition-Specific Profiles',
  'Testing',
  'Imaging',
  'Labs',
  'Pathology',
  'Family History',
  'Reproductive & Hormonal Health',
  'Mental Health & Neurodevelopmental Care',
  'Pain',
  'Sleep',
  'Nutrition & GI',
  'Appointment Preparation',
  'New-Specialist Questions',
  'Symptom Tracking',
  'Records Index',
  'One-Page Clinician Summary',
]

const customIncludes = [
  'Medical-record review',
  'Timeline reconstruction',
  'Diagnosis organization',
  'Medication history',
  'Surgical history',
  'Hospitalization history',
  'Testing indexes',
  'Condition-specific summaries',
  'Symptom organization',
  'Functional-history documentation',
  'Care-team organization',
  'Appointment reference sheets',
  'Records indexing',
  'Questions for your next appointment',
]

const coachingItems = [
  'Figuring out where to start',
  'Organizing records',
  'Building your timeline',
  'Preparing for a new specialist',
  'Identifying missing records',
  'Developing questions',
  'Describing symptoms',
  'Documenting disability and function',
  'Creating condition sections',
  'Preparing for appointments',
  'Updating an existing binder',
  'Turning a pile of information into an actual plan',
]

export default function BinderPage() {
  const buyHref = getBinderGuideHref()

  return (
    <RoomPage>
      <WallCard title="Your Medical History Shouldn’t Be a Memory Test." wide="xl">
        <p className="font-gallery text-xl italic text-room-brown">
          DIY Medical Binder Guide + Template from the Neuroqueer Apothecary
        </p>
        <p className="text-center">Created by Quinn Fleur</p>
        <div className="mx-auto max-w-xs">
          <GuideCover title="How to Make Your Own Medical Binder" tagline="your history, in one place" />
        </div>
        <p>You sit down with a new specialist.</p>
        <p>They ask:</p>
        <p className="italic">&ldquo;So, what brings you in?&rdquo;</p>
        <p>And somehow you&apos;re supposed to explain the last ten years of your life in fifteen minutes.</p>
        <p>When did the symptoms start?</p>
        <p>Which medication did you try three doctors ago?</p>
        <p>What did that MRI actually say?</p>
        <p>Was the surgery in 2021 or 2022?</p>
        <p>Which cardiologist diagnosed you?</p>
        <p>What dose were you taking when you had that reaction?</p>
        <p>Did anyone ever test that already?</p>
        <p>And what was the name of that one procedure?</p>
        <p>
          Meanwhile, you&apos;re in pain, you&apos;re anxious, you&apos;ve been sitting upright in
          the waiting room for 45 minutes, your brain fog has eaten half your vocabulary, and the
          clinician has already started typing.
        </p>
        <p>There is a better way to carry your medical history.</p>
        <GuideCta href={buyHref} label={DIY_LABEL} isDominant />

        <LearnMoreSection title="Meet the Medical Binder System">
          <p>
            My Medical Binder Guide + Blank Medical Binder Template gives you a framework
            for turning a scattered medical history into something organized, searchable,
            understandable, and actually useful during healthcare appointments.
          </p>
          <p>
            Instead of relying on memory—or handing a new doctor 600 pages of records and hoping
            for the best—you&apos;ll learn how to create a layered medical binder that puts the
            most important information first while keeping the evidence available when someone
            needs it.
          </p>
          <GuideCta href={buyHref} label={DIY_LABEL} isDominant />
        </LearnMoreSection>

        <LearnMoreSection title="This Is Not Just a Folder Full of Medical Records">
          <p>A stack of records tells you what happened at individual appointments.</p>
          <p>A good medical binder tells the story of your health.</p>
          <p>There is an important difference.</p>
          <p>Your records might separately show:</p>
          <p>
            Emergency visit → cardiology appointment → normal imaging → medication trial → another
            medication → specialist consultation → abnormal test → diagnosis → medication change.
          </p>
          <p>Your binder connects them:</p>
          <p>
            Symptoms began → symptoms worsened → initial workup → diagnosis → treatments attempted
            → what failed → what helped → what is still happening now.
          </p>
          <p>That is the information a new clinician actually needs.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Built for Complicated Bodies">
          <p>
            This system can be useful for anyone, but it was designed with chronic illness,
            disability, neurodivergence, and complex medical histories especially in mind.
          </p>
          <p>It may be particularly helpful if:</p>
          <BulletList items={helpfulIfItems} />
          <p>
            If you&apos;ve ever wished you could simply hand a doctor the context, this system was
            made for that problem.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="The Secret Is Layers">
          <p>
            One of the most important things you&apos;ll learn is that a medical binder
            shouldn&apos;t be one enormous document.
          </p>
          <p>The system organizes information in layers.</p>
          <h3 className="font-display text-xl text-room-teal">Layer One: Quick Reference</h3>
          <p>The information someone may need in seconds.</p>
          <p>
            Your major diagnoses. Medications. Allergies. Surgeries. Emergency considerations. Care
            team. Accessibility needs.
          </p>
          <h3 className="font-display text-xl text-room-teal">Layer Two: Your Medical Summary</h3>
          <p>The big picture.</p>
          <p>
            What&apos;s happened? What&apos;s been investigated? What treatments have you tried?
            What remains unresolved?
          </p>
          <h3 className="font-display text-xl text-room-teal">Layer Three: Condition-Specific Sections</h3>
          <p>This is where your medical history becomes your medical history.</p>
          <p>
            Instead of defining POTS, migraine, EDS, IBS, endometriosis, chronic pain, or whatever
            conditions you have, these sections answer:
          </p>
          <p className="italic">What does this condition actually look like in my body?</p>
          <h3 className="font-display text-xl text-room-teal">Layer Four: The Evidence</h3>
          <p>Imaging.</p>
          <p>Labs.</p>
          <p>Operative reports.</p>
          <p>Pathology.</p>
          <p>Specialist consultations.</p>
          <p>Hospital records.</p>
          <p>Diagnostic testing.</p>
          <p>Your summaries explain what happened.</p>
          <p>Your records back them up.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Turn “I Have a Lot of Symptoms” Into Useful Information">
          <p>The template helps you document more than the name of a symptom.</p>
          <p>Instead of:</p>
          <p>Dizziness</p>
          <p>you can capture:</p>
          <p>
            What does it feel like? → When does it happen? → How often? → What triggers it? → What
            happens immediately beforehand? → What happens during it? → What helps? → How long does
            recovery take? → What does it prevent you from doing?
          </p>
          <p>There are dedicated spaces for:</p>
          <p>
            Symptoms • Episodes • Triggers • Functional limitations • Flares • Baselines • Recovery
            • Pain • Sleep • Nutrition • Mobility • Cognitive symptoms • Accessibility
          </p>
          <p>The goal isn&apos;t to obsessively record everything your body ever does.</p>
          <p>
            It&apos;s to capture the details that could actually change how someone understands
            your health.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Show Doctors What Your Symptoms Actually Cost You">
          <p>Sometimes saying &ldquo;I experience fatigue and dizziness&rdquo; doesn&apos;t communicate very much.</p>
          <p>The binder helps translate symptoms into function.</p>
          <p>Can you stand long enough to shower?</p>
          <p>Can you walk through a grocery store?</p>
          <p>Can you drive?</p>
          <p>Can you prepare food?</p>
          <p>How long can you sit upright?</p>
          <p>Can you work a full day?</p>
          <p>What happens after exertion?</p>
          <p>How long does it take to recover?</p>
          <p>Do you need a cane sometimes? A wheelchair? Compression? Braces? A shower chair?</p>
          <p>
            There is space to document what your body can actually do, because a ten-minute
            appointment doesn&apos;t necessarily show someone what the other 10,070 minutes of your
            week look like.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Stop Accidentally Retrying the Same Failed Medication">
          <p>
            If you&apos;ve been chronically ill long enough, you&apos;ve probably experienced some
            version of:
          </p>
          <p className="italic">&ldquo;Have you tried _____?&rdquo;</p>
          <p>Yes.</p>
          <p>Yes, you have.</p>
          <p>Three years ago.</p>
          <p>You think.</p>
          <p>It either didn&apos;t work or made you feel terrible.</p>
          <p>You can&apos;t remember which.</p>
          <p>The binder includes a detailed medication-history system for tracking:</p>
          <p>
            Medication → Dose → Why you took it → When you took it → Whether it helped → Side
            effects → Why you stopped
          </p>
          <p>Alongside separate sections for your:</p>
          <p>
            Current medications • PRNs • Supplements • Periodic treatments • Recently discontinued
            medications • Important previous trials
          </p>
          <p>Future You will be extremely grateful that Present You wrote it down.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Keep Confirmed Diagnoses and Suspicions Separate">
          <p>
            When you have a complicated medical history, there can be an enormous difference
            between:
          </p>
          <p className="italic">&ldquo;I have this.&rdquo;</p>
          <p>and:</p>
          <p className="italic">&ldquo;We&apos;re investigating this.&rdquo;</p>
          <p>The system gives you clear ways to label conditions:</p>
          <p>Confirmed • Working Diagnosis • Suspected • Historical • Resolved • Ruled Out</p>
          <p>That distinction matters.</p>
          <p>
            Your binder should help make your medical history more accurate, not accidentally turn
            every possibility that has ever been mentioned into a permanent diagnosis.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Build the Timeline Your Medical Chart Doesn’t Give You">
          <p>Healthcare records are organized around appointments.</p>
          <p>Your illness wasn&apos;t.</p>
          <p>That&apos;s why the binder includes a medical timeline.</p>
          <p>You can reconstruct major events such as:</p>
          <p>
            Symptom onset → injuries → infections → worsening → emergency visits → specialist
            evaluations → diagnoses → medication changes → surgeries → relapses → improvements
          </p>
          <p>
            Instead of asking a new specialist to piece together the story from years of individual
            notes, you can give them the sequence yourself.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="A Dedicated Section for Every Major Condition">
          <p>
            For every important diagnosis or unresolved medical concern, the Complete Medical
            Binder gives you a repeatable structure for documenting:
          </p>
          <p>
            <strong>Diagnostic Status</strong>
            <br />
            Who diagnosed it? When? Where? Is it confirmed or still being investigated?
          </p>
          <p>
            <strong>Your Explanation</strong>
            <br />
            How would you explain what this condition does to your life?
          </p>
          <p>
            <strong>Symptoms</strong>
            <br />
            Primary symptoms, associated symptoms, episodic symptoms, warning signs, triggers,
            flares, and recovery.
          </p>
          <p>
            <strong>Functional Impact</strong>
            <br />
            What does this actually prevent or make difficult?
          </p>
          <p>
            <strong>Testing</strong>
            <br />
            What has already been investigated?
          </p>
          <p>
            <strong>Treatment</strong>
            <br />
            What are you doing now?
          </p>
          <p>
            <strong>Treatment History</strong>
            <br />
            What have you already tried?
          </p>
          <p>
            <strong>Current Problems</strong>
            <br />
            What&apos;s still happening?
          </p>
          <p>
            <strong>Questions</strong>
            <br />
            What do you need your clinicians to help figure out?
          </p>
          <p>
            <strong>Goals</strong>
            <br />
            What would meaningful improvement actually look like?
          </p>
          <p>And finally:</p>
          <p>
            <strong>Records to Attach</strong>
            <br />
            So you know exactly which original documents belong behind the summary.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Walk Into Appointments Knowing What You Need">
          <p>The binder isn&apos;t only about documenting the past.</p>
          <p>It&apos;s also designed to help with the appointment happening next Tuesday.</p>
          <p>You&apos;ll get reusable appointment-preparation pages where you can organize:</p>
          <p>Why I&apos;m here</p>
          <p>What changed since my last appointment</p>
          <p>Current symptoms</p>
          <p>Must address today</p>
          <p>Questions</p>
          <p>Medication concerns</p>
          <p>Testing or referrals to discuss</p>
          <p>Decisions I need help making</p>
          <p>What needs to happen next</p>
          <p>
            There is even a before-I-leave checklist for making sure you actually know what was
            ordered, what changed, when you&apos;re supposed to follow up, and who you&apos;re
            supposed to contact if the plan doesn&apos;t work.
          </p>
          <p>
            Because remembering your most important question as you walk through the parking lot is
            getting old.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="There’s a One-Page Version, Too">
          <p>
            You are absolutely not supposed to slap a three-inch binder onto every specialist&apos;s
            desk.
          </p>
          <p>
            The system includes a One-Page New Clinician Summary designed to communicate:
          </p>
          <p>
            Why you&apos;re there • Relevant diagnoses • Most important symptoms • Functional
            impact • Relevant testing • Current treatment • Important previous failures • What
            you&apos;re hoping to accomplish • Your three biggest questions
          </p>
          <p>Your full medical history remains available.</p>
          <p>But the doctor gets the information they need first.</p>
        </LearnMoreSection>

        <LearnMoreSection title="What Comes With the Medical Binder Resource?">
          <p>The complete resource includes two pieces.</p>
          <h3 className="font-display text-xl text-room-teal">
            The Guide to Creating Your Medical Binder
          </h3>
          <p>
            A practical walkthrough teaching you how to build, organize, verify, maintain, and
            actually use a medical binder.
          </p>
          <p>You&apos;ll learn how to:</p>
          <BulletList items={guideSkills} />
          <p>And then you get the framework to actually do it.</p>
          <h3 className="font-display text-xl text-room-teal">The Blank Complete Medical Binder</h3>
          <p>A fillable master template with sections for:</p>
          <BulletList items={templateSections} />
          <p>You don&apos;t have to invent the system.</p>
          <p>You just fill in your information.</p>
          <GuideCta href={buyHref} label={DIY_LABEL} isDominant />
        </LearnMoreSection>

        <LearnMoreSection title="“This Looks Great, but My Brain Absolutely Will Not Let Me Do This.”">
          <p>Yeah.</p>
          <p>
            There&apos;s a slight problem with giving chronically ill people a beautifully
            organized system for managing chronic illness:
          </p>
          <p>You still have to have enough energy and executive function to organize the chronic illness.</p>
          <p>Maybe you have years of records.</p>
          <p>Maybe you don&apos;t know which details matter.</p>
          <p>Maybe every hospital calls the same thing something different.</p>
          <p>Maybe you have 900 pages of PDFs sitting in a patient portal.</p>
          <p>Maybe your timeline exists exclusively as:</p>
          <p className="italic">
            I think that happened sometime after I got COVID but before I switched cardiologists?
          </p>
          <p>Maybe you&apos;re looking at this template thinking:</p>
          <p className="italic">
            This would change my life if somebody else would just fill the damn thing out.
          </p>
          <p>That&apos;s an option.</p>
        </LearnMoreSection>

        <RoomSection title="I Can Build Your Medical Binder For You">
          <p>Done-for-you medical history organization for complicated patients.</p>
          <p>
            I offer custom medical binder creation for people who want the benefits of an
            organized medical history without having to construct the entire thing themselves.
          </p>
          <p>You provide the information and records.</p>
          <p>I help turn them into an organized medical narrative.</p>
          <p>Depending on the scope of your binder, this can include:</p>
          <BulletList items={customIncludes} />
          <p>The goal is not to interpret your medical records or diagnose you.</p>
          <p>
            It&apos;s to turn information you already have into something you and your healthcare
            team can actually navigate.
          </p>
          <GuideCta href={CUSTOM_BINDER_HREF} label="Have me build your binder →" />
        </RoomSection>

        <LearnMoreSection title="What Does Custom Binder Creation Look Like?" id="custom">
          <p>
            <strong>1. You Tell Me What You’re Dealing With</strong>
            <br />
            You&apos;ll start with your current diagnoses, concerns, providers, symptoms,
            medications, and goals. It does not have to be organized. That&apos;s rather the
            point.
          </p>
          <p>
            <strong>2. Gather Your Records</strong>
            <br />
            Depending on the project, you may provide specialist notes, lab results, imaging
            reports, operative reports, hospital records, emergency-department records, medication
            lists, diagnostic testing, and previous medical summaries. I identify the
            information relevant to building your binder.
          </p>
          <p>
            <strong>3. Fill In the Gaps</strong>
            <br />
            Medical records don&apos;t capture everything. I can help identify questions such
            as: When did this actually start? Is this still happening? Did this medication help?
            How frequently are these episodes occurring now? What happens before you pass out? What
            does a bad day actually prevent you from doing? Your records provide the clinical
            history. You provide the lived history.
          </p>
          <p>
            <strong>4. I Organize It</strong>
            <br />
            The information is transformed into the layered binder system: Quick Reference →
            Medical Summary → Condition-Specific Sections → Timeline → Supporting Records
          </p>
          <p>
            <strong>5. You Review It</strong>
            <br />
            Because it&apos;s your medical history. Uncertain information should remain uncertain.
            Suspected diagnoses should remain suspected. Conflicting records should be identified
            rather than silently &ldquo;fixed.&rdquo; You get the opportunity to identify mistakes,
            clarify your experience, and make sure the final binder represents you accurately.
          </p>
          <p>
            <strong>6. Use It</strong>
            <br />
            Bring the relevant pages to appointments. Update your copy as things change. Use it
            when you meet a new specialist, when preparing for surgery, when remembering which
            medication you already tried four years ago, and when someone asks you to summarize a
            decade of medicine before you&apos;ve finished sitting down.
          </p>
          <GuideCta href={CUSTOM_BINDER_HREF} label="Learn About Custom Medical Binders →" />
        </LearnMoreSection>

        <RoomSection title="Need Help, But Don’t Need Someone to Build the Whole Thing?">
          <p>There&apos;s a middle option.</p>
          <h3 className="font-display text-xl text-room-teal">
            Medical Navigation &amp; Binder Coaching With Me
          </h3>
          <p>Book time with me to work through your medical history together.</p>
          <p>Coaching can be useful if you need help:</p>
          <BulletList items={coachingItems} />
          <p>You remain in control of the binder.</p>
          <p>I help you get unstuck.</p>
          <p>
            This can also be useful before a particularly complicated medical appointment when you
            don&apos;t need an entire binder—you just need to figure out:
          </p>
          <p className="italic">
            What does this doctor actually need to know, and what do I need to ask them?
          </p>
          <GuideCta href={COACHING_HREF} label="Book Medical Navigation Coaching →" />
        </RoomSection>

        <RoomSection title="Choose How Much Help You Want">
          <h3 className="font-display text-xl text-room-teal">DIY</h3>
          <p>Blank Medical Binder + Guide</p>
          <p>Best if you want the complete system and are comfortable filling it out yourself.</p>
          <GuideCta href={buyHref} label="Get the DIY Binder →" isDominant />
          <h3 className="font-display text-xl text-room-teal">Guided</h3>
          <p>Medical Binder + Coaching</p>
          <p>
            Best if you want to build your own binder but need another person to help organize your
            thoughts, records, symptoms, and next steps.
          </p>
          <GuideCta href={COACHING_HREF} label="Book a Binder Session →" />
          <h3 className="font-display text-xl text-room-teal">Done For You</h3>
          <p>Custom Medical Binder Creation</p>
          <p>
            Best for complicated histories, large record collections, significant brain fog or
            executive dysfunction, or anyone who simply does not want to spend their remaining
            mortal years formatting a medication-history table.
          </p>
          <p>You provide the records and lived context.</p>
          <p>I do the organization.</p>
          <GuideCta href={CUSTOM_BINDER_HREF} label="Get a Custom Binder →" />
        </RoomSection>

        <LearnMoreSection title="Built by Someone Who Actually Uses One">
          <p>Hi, I&apos;m Quinn Fleur.</p>
          <p>
            I&apos;m disabled, chronically ill, neurodivergent, and someone with a medical history
            complicated enough that explaining it to a new provider can become an appointment unto
            itself.
          </p>
          <p>
            I originally developed this system because I needed a better way to understand and
            communicate my own healthcare.
          </p>
          <p>
            I needed somewhere to track diagnoses, surgeries, medication trials, strange reactions,
            testing, symptoms, specialists, unresolved questions, and the differences between what
            a medical record says and what actually happens to me on an average Tuesday.
          </p>
          <p>
            Over time, the binder became less about keeping records and more about making those
            records useful.
          </p>
          <p>That distinction became the foundation of this system.</p>
          <p>
            I don&apos;t think patients should have to become professional medical-record
            archivists just to receive coordinated healthcare.
          </p>
          <p>
            But when the healthcare system doesn&apos;t connect all of those dots for us, having
            our own map can make an enormous difference.
          </p>
          <p>So I turned mine into a template you can use too.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Your Medical Binder Doesn’t Need to Be Perfect">
          <p>You don&apos;t need every record before you start.</p>
          <p>You don&apos;t need every date memorized.</p>
          <p>You don&apos;t need to know exactly what every lab means.</p>
          <p>You don&apos;t need to have a diagnosis for every symptom.</p>
          <p>And you absolutely should not pretend to know something you don&apos;t.</p>
          <p>Write:</p>
          <p>Approximate.</p>
          <p>Patient reported.</p>
          <p>Date unknown.</p>
          <p>Records requested.</p>
          <p>Needs confirmation.</p>
          <p>Leave blanks.</p>
          <p>Come back later.</p>
          <p>
            A trustworthy incomplete medical history is more useful than a beautifully formatted
            inaccurate one.
          </p>
        </LearnMoreSection>

        <RoomSection title="Stop Starting Your Medical History From Scratch">
          <p>Your healthcare has already required enough work from you.</p>
          <p>
            You shouldn&apos;t also have to reconstruct your entire medical history from memory
            every time you meet someone new.
          </p>
          <p>Build a system that remembers with you.</p>
          <p>Do it yourself.</p>
          <GuideCta href={buyHref} label={DIY_LABEL} isDominant />
          <p>Build it with me.</p>
          <GuideCta href={COACHING_HREF} label="Book Medical Binder Coaching →" />
          <p>Have me organize it for you.</p>
          <GuideCta href={CUSTOM_BINDER_HREF} label="Get a Custom Medical Binder →" />
          <p>However much help you need, the goal is the same:</p>
          <p>
            Walk into healthcare appointments with less information trapped in your head and more
            of it somewhere you can actually use.
          </p>
        </RoomSection>

        <RoomSection title="Important Note">
          <p>
            My Medical Binder resources, coaching, and custom binder-creation services
            are intended for organization, education, appointment preparation, and self-advocacy
            support.
          </p>
          <p>
            I do not diagnose medical conditions, interpret diagnostic testing as a
            clinician, determine whether a treatment is medically appropriate, provide medical
            advice, or replace your healthcare providers.
          </p>
          <p>
            When creating custom binders, information from medical records can be summarized and
            organized, but the original records remain the authoritative source. Unclear,
            contradictory, or unverified information should be labeled accordingly rather than
            presented as established medical fact.
          </p>
          <p>
            A medical binder also should not delay emergency care. In an emergency, contact
            appropriate emergency services or seek medical attention rather than attempting to
            complete or consult the binder first.
          </p>
          <p>Your medical history is complicated enough. Finding it shouldn&apos;t have to be.</p>
        </RoomSection>

        <p className="text-center">
          <RoomLink href="/store">Back to the store</RoomLink>
          {' · '}
          <RoomLink href="/custom-binder">Have me build it for you</RoomLink>
        </p>
      </WallCard>
    </RoomPage>
  )
}
