import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
import { GuideCover } from '@/components/home/guide-cover'
import { BulletList, RoomSection } from '@/components/home/room-section'
import { LearnMoreSection } from '@/components/home/learn-more-section'
import { getCustomBinderHref } from '@/utils/shopify-checkout'

export const metadata: Metadata = {
  title: 'Custom Medical Binder Creation',
  description:
    'A done-for-you service that turns your scattered medical history into an organized, usable medical binder.',
}

const COACHING_HREF = '/coaching'
const DIY_HREF = '/diy-binder'
const START_LABEL = 'Start Your Medical Binder →'

const usefulIfItems = [
  'Have multiple diagnoses or unresolved medical concerns',
  'See several specialists',
  'Have years of medical records',
  'Have records spread across different healthcare systems',
  'Have tried many medications or treatments',
  'Have undergone multiple procedures, surgeries, or hospitalizations',
  'Struggle with brain fog, memory, fatigue, or executive dysfunction',
  'Are pursuing a complicated diagnosis',
  'Are establishing care with a new specialist',
  'Need a better way to communicate how your conditions affect everyday life',
  'Are completely exhausted by telling the same ten-year medical story over and over again',
]

const useBinderItems = [
  'Meet a new specialist',
  'Prepare for surgery',
  'Change healthcare systems',
  'Pursue a diagnosis',
  'Review previous treatments',
  'Prepare for appointments',
  'Advocate for accommodations',
  'Need to remember what happened five years ago',
]

export default function CustomBinderPage() {
  const startHref = getCustomBinderHref()

  return (
    <RoomPage>
      <WallCard title="Your Medical History, Organized For You." wide>
        <p className="font-gallery text-xl italic text-room-brown">
          Custom Medical Binder Creation from the Neuroqueer Apothecary
        </p>
        <p className="text-center">Created by Quinn Fleur</p>
        <div className="mx-auto max-w-xs">
          <GuideCover title="Custom Medical Binder" tagline="you provide the records, I build the map" />
        </div>
        <p>You already did the hard part: living through it.</p>
        <p>
          You shouldn&apos;t also have to spend weeks digging through patient portals, reconstructing
          timelines, comparing medication lists, sorting PDFs, and figuring out which details a new
          specialist actually needs to know.
        </p>
        <p>
          Custom Medical Binder Creation is a done-for-you service that turns your scattered
          medical history into an organized, usable medical binder.
        </p>
        <p>You provide the records and lived context. I build the map.</p>
        <div id="start">
          <GuideCta href={startHref} label={START_LABEL} isDominant />
        </div>

        <LearnMoreSection title="Built for Complicated Medical Histories">
          <p>
            This service was created especially for chronically ill, disabled, neurodivergent,
            trans, and medically complex people whose healthcare doesn&apos;t fit neatly into one
            diagnosis, one specialist, or one hospital system.
          </p>
          <p>It may be especially useful if you:</p>
          <BulletList items={usefulIfItems} />
          <p>You don&apos;t need to organize everything before coming to me.</p>
          <p>That&apos;s the service.</p>
        </LearnMoreSection>

        <LearnMoreSection title="What I Can Build">
          <p>Depending on your history and what you need, your custom binder can include:</p>
          <h3 className="font-display text-xl text-room-teal">Quick Medical Reference</h3>
          <p>
            Diagnoses • medications • allergies and reactions • surgeries • providers • emergency
            considerations • accessibility needs
          </p>
          <h3 className="font-display text-xl text-room-teal">Medical History &amp; Timeline</h3>
          <p>
            Symptom onset • major changes • diagnoses • emergency visits • hospitalizations •
            procedures • surgeries • treatment changes
          </p>
          <h3 className="font-display text-xl text-room-teal">Condition-Specific Profiles</h3>
          <p>
            What each condition actually looks like in your body—including symptoms, triggers,
            episodes, functional effects, testing, treatments, previous treatment failures, current
            concerns, and goals.
          </p>
          <h3 className="font-display text-xl text-room-teal">Medication History</h3>
          <p>What you&apos;ve taken • why • dose • response • side effects • why it was discontinued</p>
          <h3 className="font-display text-xl text-room-teal">Testing &amp; Records Organization</h3>
          <p>
            Imaging • labs • pathology • diagnostic testing • operative reports • specialist
            evaluations • relevant hospital and emergency records
          </p>
          <h3 className="font-display text-xl text-room-teal">Functional History</h3>
          <p>
            Mobility • activities of daily living • fatigue • pain • cognition • sleep • nutrition
            • assistive devices • accessibility needs
          </p>
          <h3 className="font-display text-xl text-room-teal">Appointment Tools</h3>
          <p>
            One-page clinician summaries • appointment preparation • questions for specialists •
            unresolved issues • records to bring
          </p>
          <h3 className="font-display text-xl text-room-teal">Records Index</h3>
          <p>A system for connecting the summaries in your binder back to the original medical evidence.</p>
          <p>The exact binder is built around your medical history and what you need it to accomplish.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Your Records Tell Me What Happened. You Tell Me What It Was Like.">
          <p>Medical records are important—but they&apos;re incomplete.</p>
          <p>A chart might say:</p>
          <p className="italic">Syncope.</p>
          <p>You can tell me:</p>
          <p className="italic">
            I become nauseated and extremely lightheaded, start shaking, my vision darkens, I get
            weak and short of breath, and sometimes I lose consciousness.
          </p>
          <p>A chart might say:</p>
          <p className="italic">Fatigue.</p>
          <p>You can tell me:</p>
          <p className="italic">Showering means I need to lie down afterward.</p>
          <p>Both kinds of information matter.</p>
          <p>That&apos;s why custom binder creation combines record review with your lived experience.</p>
        </LearnMoreSection>

        <LearnMoreSection title="How It Works">
          <h3 className="font-display text-xl text-room-teal">1. Tell Me What You&apos;re Dealing With</h3>
          <p>
            We start with your diagnoses, symptoms, current concerns, providers, medications,
            medical history, and what you want the binder to help you accomplish.
          </p>
          <p>It can be messy.</p>
          <p>Messy is fine.</p>
          <h3 className="font-display text-xl text-room-teal">2. Give Me the Records</h3>
          <p>
            Depending on your project, this might include specialist notes, imaging, labs,
            operative reports, emergency visits, hospital records, diagnostic testing, medication
            lists, and previous summaries.
          </p>
          <p>I&apos;ll identify and organize the information relevant to your binder.</p>
          <h3 className="font-display text-xl text-room-teal">
            3. We Fill In What the Chart Can&apos;t Tell Me
          </h3>
          <p>I&apos;ll identify places where your lived experience matters or the record isn&apos;t clear.</p>
          <p>When did this start?</p>
          <p>Is it still happening?</p>
          <p>How often?</p>
          <p>What does an episode actually feel like?</p>
          <p>Did that medication help?</p>
          <p>Why did you stop taking it?</p>
          <p>What happens after exertion?</p>
          <p>What does this prevent you from doing?</p>
          <p>Your records provide the clinical history. You provide the lived history.</p>
          <h3 className="font-display text-xl text-room-teal">4. I Build Your Binder</h3>
          <p>Your information is organized into a layered system:</p>
          <p>
            Quick Reference → Medical Summary → Timeline → Condition Profiles → Testing &amp;
            Treatment → Supporting Records
          </p>
          <p>
            Instead of hundreds of disconnected pieces of information, you get a medical history
            designed to tell a coherent story.
          </p>
          <h3 className="font-display text-xl text-room-teal">5. You Review Everything</h3>
          <p>Because you remain the authority on your own history.</p>
          <p>Uncertain information stays uncertain.</p>
          <p>Suspected diagnoses stay suspected.</p>
          <p>Conflicting records are identified rather than quietly “corrected.”</p>
          <p>If we don&apos;t know something, we say so.</p>
          <p>Approximate. Patient reported. Date unknown. Needs confirmation. Records requested.</p>
          <p>Accuracy matters more than making the binder look complete.</p>
          <h3 className="font-display text-xl text-room-teal">6. Take Your History With You</h3>
          <p>Use your binder when you:</p>
          <BulletList items={useBinderItems} />
          <p>
            Instead of trying to recreate your medical history in fifteen minutes, you already
            brought it with you.
          </p>
          <GuideCta href={startHref} label={START_LABEL} isDominant />
        </LearnMoreSection>

        <LearnMoreSection title="Why Have Someone Else Do This?">
          <p>Because managing chronic illness already takes an absurd amount of administrative labor.</p>
          <p>
            Appointments. Referrals. Prior authorizations. Pharmacy calls. Records requests.
            Symptom tracking. Medication management. Insurance. Scheduling. Research.
          </p>
          <p>And somewhere in there, you&apos;re also supposed to actually be sick.</p>
          <p>
            If fatigue, pain, brain fog, ADHD, autism, executive dysfunction, overwhelm—or simply
            having better things to do with your remaining mortal years—makes building a
            comprehensive medical binder unrealistic, you can hand off the organizational work.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Built by Someone Who Actually Uses One">
          <p>Hi, I&apos;m Quinn Fleur.</p>
          <p>
            I&apos;m disabled, chronically ill, neurodivergent, trans, and someone whose medical
            history became complicated enough that explaining it could consume an entire
            appointment.
          </p>
          <p>I originally built this system for myself.</p>
          <p>
            Over time, I realized the useful part wasn&apos;t simply collecting records. It was
            connecting the dots between them.
          </p>
          <p>What happened first?</p>
          <p>What changed?</p>
          <p>What was investigated?</p>
          <p>What was ruled out?</p>
          <p>What treatments failed?</p>
          <p>What helped?</p>
          <p>What is still happening?</p>
          <p>And what does any of this actually mean for my day-to-day life?</p>
          <p>The Neuroqueer Apothecary Medical Binder system grew out of that experience.</p>
          <p>I can&apos;t make the healthcare system magically coordinate your care.</p>
          <p>I can help make sure you&apos;re carrying a map.</p>
        </LearnMoreSection>

        <RoomSection title="Not Ready for Done-for-You?">
          <p>You can choose how much help you want.</p>
          <h3 className="font-display text-xl text-room-teal">
            DIY — Medical Binder Guide + Blank Template
          </h3>
          <p>Get the complete system and fill it out yourself.</p>
          <GuideCta href={DIY_HREF} label="Get the DIY Binder →" />
          <h3 className="font-display text-xl text-room-teal">Guided — Medical Binder Coaching</h3>
          <p>Bring your records, questions, or half-finished binder and we&apos;ll work through it together.</p>
          <GuideCta href={COACHING_HREF} label="Book Binder Coaching →" />
          <h3 className="font-display text-xl text-room-teal">
            Done For You — Custom Medical Binder Creation
          </h3>
          <p>Give me the records and context. I&apos;ll do the organizational heavy lifting.</p>
          <GuideCta href={startHref} label="Start a Custom Binder →" isDominant />
        </RoomSection>

        <RoomSection title="Stop Reconstructing Your Medical History From Memory.">
          <p>You don&apos;t need perfect records.</p>
          <p>You don&apos;t need every date.</p>
          <p>You don&apos;t need every diagnosis figured out.</p>
          <p>You don&apos;t need to understand every lab result.</p>
          <p>You just need somewhere to start.</p>
          <p>
            Your healthcare already asks enough of you. Your medical history shouldn&apos;t have to
            live entirely inside your head.
          </p>
          <GuideCta href={startHref} label="Have Me Build Your Medical Binder →" isDominant />
        </RoomSection>

        <RoomSection title="Important Note">
          <p>
            Custom Medical Binder Creation is an organizational, educational,
            appointment-preparation, and self-advocacy service. It is not medical care.
          </p>
          <p>
            I do not diagnose conditions, determine appropriate treatments, or provide clinical
            interpretation of medical testing. Medical records may be summarized and organized, but
            the original records remain the authoritative source. Uncertain, contradictory,
            suspected, or patient-reported information is identified accordingly.
          </p>
          <p>
            Your binder is a tool to help you and your healthcare providers navigate your
            history—not a replacement for them.
          </p>
        </RoomSection>

        <p className="text-center">
          <RoomLink href="/store">Back to the store</RoomLink>
          {' · '}
          <RoomLink href="/diy-binder">How to make your own medical binder</RoomLink>
        </p>
      </WallCard>
    </RoomPage>
  )
}
