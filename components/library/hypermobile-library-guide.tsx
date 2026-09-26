import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
import { LearnMoreSection } from '@/components/home/learn-more-section'
import { BulletList, RoomSection } from '@/components/home/room-section'

const questionnaireItems = [
  'Can you now (or could you ever) place your hands flat on the floor without bending your knees?',
  'Can you now (or could you ever) bend your thumb to touch your forearm?',
  'As a child, did you amuse your friends by contorting your body into strange shapes, or could you do the splits?',
  'As a child or teenager, did your kneecap or shoulder dislocate on more than one occasion?',
  'Do you consider yourself “double-jointed”?',
]

const hedsSymptomItems = [
  'Overly flexible joints — connective tissue that holds joints together is looser, so joints can move far past the usual range. Joint pain and dislocations are common.',
  'Stretchy skin — you may be able to pull up a pinch of skin, but it snaps back. Skin can feel very soft and velvety.',
  'Fragile skin — thin skin that often does not heal well. Stitches may tear out, leaving a gaping, thin, crinkly scar.',
]

const skinMeasureItems = [
  '1.5 cm on the forearms',
  '1.5 cm on the back of the hands',
  '3 cm on the neck',
  '3 cm on the knees',
]

const edsTypeItems = [
  'Hypermobile EDS (hEDS) — generalized joint hypermobility, joint instability, chronic pain',
  'Classical EDS (cEDS) — skin fragility with extensive atrophic scarring; very stretchy, velvety or doughy skin',
  'Vascular EDS (vEDS) — arterial fragility with aneurysm, dissection, or rupture; organ fragility; extensive bruising; pneumothorax',
  'Periodontal EDS (pEDS) — severe, early-onset gum disease with tooth loss; pretibial plaques',
  'Kyphoscoliotic EDS (kEDS) — congenital or early-onset kyphoscoliosis; congenital hypotonia',
  'Spondylodysplastic EDS (spEDS) — short stature, muscle weakness, limb bowing, craniofacial features',
  'Brittle cornea syndrome (BCS) — severe problems with the cornea; hearing loss',
  'Arthrochalasia EDS (aEDS) — severe joint hypermobility; congenital bilateral hip dislocation',
  'Musculocontractural EDS (mcEDS) — congenital multiple contractures; craniofacial features',
  'Classical-like EDS (clEDS) — stretchy, velvety skin without atrophic scarring; foot deformities; leg swelling',
  'Dermatosparaxis EDS (dEDS) — severe skin fragility; craniofacial features; loose excess skin; severe bruising; short limbs',
  'Myopathic EDS (mEDS) — congenital hypotonia; proximal joint contractures',
  'Cardiac-valvular EDS (cvEDS) — severe heart valve insufficiency',
]

const featureAItems = [
  'Unusually soft or velvety skin',
  'Mild skin hyperextensibility',
  'Unexplained striae on the back, groins, thighs, breasts, and/or abdomen in adolescents, men, or pre-pubertal women without significant weight change',
  'Bilateral piezogenic papules of the heel',
  'Recurrent or multiple abdominal hernias',
  'Atrophic scarring involving at least two sites, without the papyraceous or hemosideric scars of classical EDS',
  'Pelvic floor, rectal, and/or uterine prolapse in children, men, or nulliparous women without morbid obesity or another known cause',
  'Dental crowding and high or narrow palate',
  'Arachnodactyly: positive wrist sign and/or thumb sign on both sides',
  'Arm span-to-height ratio ≥ 1.05',
  'Mitral valve prolapse, mild or greater, on strict echocardiographic criteria',
  'Aortic root dilatation with Z-score > +2',
]

const featureCItems = [
  'Musculoskeletal pain in two or more limbs, recurring daily for at least 3 months',
  'Chronic, widespread pain for ≥ 3 months',
  'Recurrent joint dislocations or frank joint instability in the absence of trauma',
]

const ruleOutItems = [
  'Types of Ehlers-Danlos syndrome, especially hEDS',
  'Other heritable connective tissue disorders such as Marfan syndrome, osteogenesis imperfecta, Loeys-Dietz syndrome, Stickler syndrome, and skeletal dysplasias',
  'Autoimmune rheumatic connective tissue disorders such as lupus and rheumatoid arthritis',
  'Chromosomal conditions such as Fragile X, Kabuki syndrome, and Down syndrome',
  'Neuromuscular disorders that can make joints unstable, such as multiple sclerosis and myopathies',
]

const movementItems = [
  'Start small if you have not been active or are in a lot of pain',
  'Find a physical therapist knowledgeable about hypermobility or EDS when you can',
  'Try isometric exercises and nerve glides if typical PT is too much',
  'Recumbent bikes, water aerobics, and other gentle movement',
  'Sometimes this looks like a few minutes of chores a couple of times a day, working toward a more consistent routine',
]

const pharmaItems = [
  'On the worst days, some people are prescribed opioid medications when other options are not enough. That is not available or appropriate for everyone.',
  'Clinics often start with medications such as gabapentin, celecoxib, duloxetine, or meloxicam, with very different results from person to person.',
  'Muscle relaxers such as tizanidine and cyclobenzaprine are often used for overall pain and sleep.',
  'Low-dose naltrexone is a non-traditional option that many people with EDS and neurodivergence find helpful for turning down pain and sensory load.',
]

const otcItems = [
  'Heat is often more useful than ice for tense muscles — a solid heating pad, baths, and showers',
  'Ice is usually better for an acute injury than for chronic pain',
  'Massage is often more tolerable when muscles are already warm',
  'Magnesium foam or lotion, or CBD cream, can help some people release tension',
]

const naturalItems = [
  'CBD',
  'Arnica',
  'Devil’s claw',
  'Epsom salt baths',
  'Journaling, meditating, distraction, and rest',
]

const betterItems = [
  'Stay active with a high / medium / low spoons physical therapy plan',
  'Calm the body with heat and trigger-point work before you try to interpret every signal',
  'Reset the nervous system and practice breathing',
  'Release fascia — including cupping if you tolerate it',
  'Use trigger-point release on muscles that keep pulling joints out of place',
  'Look for myofascial-release or hypermobility-informed massage',
  'Be very cautious with chiropractic neck adjustments',
  'Lower stress with time-framed, achievable lists instead of a never-ending pile',
  'Ask for help, including support groups and people who already live this',
  'Once the body is calmer, map what hurts and accommodate it',
]

const cuppingItems = [
  'Squeeze a soft cup and apply it so it lifts the skin',
  'Glide slowly with lotion or water; pause where it sticks for 10–30 seconds',
  'Leave cups a few minutes only on spots you tolerate — many EDSers bruise easily',
]

const mcasLabItems = [
  'Serum tryptase',
  'Chromogranin A',
  'Plasma histamine',
  'Prostaglandins',
  '24-hour urine: N-methylhistamine, 11-beta-PGF2-alpha, leukotriene E4',
]

const firstGenH1Items = [
  'Benadryl (diphenhydramine)',
  'Chlor-Trimeton (chlorpheniramine)',
  'Tavegyl (clemastine)',
]

const secondGenH1Items = [
  'Xyzal (levocetirizine)',
  'Zyrtec (cetirizine)',
  'Allegra (fexofenadine)',
  'Claritin (loratadine)',
]

const h2Items = [
  'Pepcid (famotidine)',
  'Tagamet (cimetidine)',
  'Axid (nizatidine) — not available in the US',
]

const potsTestItems = [
  'Echocardiogram',
  'Electrocardiogram (EKG)',
  'Holter monitor (at least 24–48 hours)',
  'Tilt table test (used often, not always required; some people emulate a version at home)',
]

const potsHelpItems = [
  'Medications some clinicians use: ivabradine, fludrocortisone, midodrine, propranolol',
  'Electrolytes and salt — many protocols mention 8–12 grams of salt, individualized',
  'Hydration — some protocols mention about 3 liters of water daily, individualized',
  'Compression garments',
  'Avoid sudden position changes',
  'Pacing and recumbent exercise; CHOP, Dallas, and Levine protocols',
]

const otherCooccurItems = [
  '“Cigarette paper” or atrophic scarring',
  'Restless leg syndrome',
  'Sensory processing issues',
  'Pelvic floor dysfunction',
  'Misshapen or crowded teeth',
  'Easy bruising',
  'Clumsiness / poor proprioception',
  'Joint popping',
  'Light sensitivity',
  'Chronic fatigue',
  'Brain fog',
  'Migraines and headaches',
  'Facial pain around the eyebrows',
  'Jaw pain / TMJ',
  'Urinary issues',
]

const toolItems = [
  'Foam roller',
  'Massage gun',
  'Lacrosse ball',
  'Magnesium foam',
  'Massage lotion',
  'Acupressure mats',
  'Scrapers / Graston-style tools',
  'Cupping cups',
  'Vibration plate',
  'TENS unit',
  'Heating pad or hot water bottle',
  'Ice packs',
]

const ResourceLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <RoomLink href={href} isExternal={href.startsWith('http')}>
      {label}
    </RoomLink>
  )
}

export const HypermobileLibraryGuide = () => {
  return (
    <RoomPage>
      <WallCard title="So, You Think You’re Hypermobile?" wide="xl">
        <p className="font-gallery text-xl italic text-room-brown">
          A guide from one trans EDSer to another
        </p>
        <p className="text-center">Created by Quinn Fleur for the Neuroqueer Apothecary</p>
        <p>
          This is a living educational guide — not a diagnosis, a treatment plan, or a substitute
          for clinicians who know your body. Use it to get language, questions, and next steps.
        </p>
        <GuideCta
          href="/library/eds-checklist"
          label="Open the EDS symptom checklist quiz →"
          isDominant
        />

        <RoomSection title="Hypermobility? What’s that?">
          <p>
            Hypermobility is when joints move outside a typical range. That is often screened with
            the Beighton scale.
          </p>
          <p>
            People hear “flexible” or “double-jointed.” Double-jointed is not really a medical
            category, but folks are usually talking about unusual joint movement. You may also
            think, “I’m not flexible, so that’s not me.” A lot of the time, when people have
            hypermobility or Ehlers-Danlos syndrome, muscles tighten to compensate for loose
            joints. Unless those muscles are actually relaxed — a state that can feel almost
            impossible when hypermobility is untreated — you will not see the extra flexibility in
            a lot of places.
          </p>
        </RoomSection>

        <RoomSection title="How do I know if I’m hypermobile?">
          <p>The 5-part questionnaire (Hakim and Grahame, 2003) is a quick check:</p>
          <BulletList items={questionnaireItems} />
          <p>
            Answering yes to two or more suggests hypermobility (sensitivity about 85%, specificity
            about 90%). It was designed as an alternative to the Beighton score. Two or more
            “yes” answers strongly predict a Beighton score of 4 or more — the cut-off used when
            the questionnaire was published.
          </p>
          <p>
            It has been used in clinics and research and translated for several languages (Glans et
            al., 2020).
          </p>
          <p>
            For a fuller picture, use the{' '}
            <RoomLink href="/library/eds-checklist">EDS symptom checklist quiz</RoomLink> — same
            dotted rating line as the love languages quizzes, with room to mark what happens now,
            what happened when you were younger, and what happens all the time.
          </p>
        </RoomSection>

        <RoomSection title="What other symptoms come along with hEDS?">
          <BulletList items={hedsSymptomItems} />
          <p>
            Skin extensibility is measured by pinching and gently pulling skin — usually on the
            underside of the forearm, the back of the hand, or the neck — and also noticing
            thickness and texture.
          </p>
          <p>Skin is often called hyperextensible if it stretches greater than:</p>
          <BulletList items={skinMeasureItems} />
          <p>
            Mild hyperextensibility can show up in any type of EDS. More severe stretch is more
            typical of certain types.
          </p>
        </RoomSection>

        <RoomSection title="Alright, but what does that mean for me?">
          <p>
            If you’re reading this, someone probably suggested you might be hypermobile, or you
            want to understand EDS better. For a lot of people with hEDS that looks like
            widespread body pain, sensitive soft stretchy skin, trouble with repetitive motion,
            exercise intolerance, and a pile of co-occurring conditions.
          </p>
        </RoomSection>

        <LearnMoreSection title="What’s the difference between hypermobility, HSD, hEDS, and other types of EDS?">
          <p>
            Hypermobility can be a marker of several different issues. hEDS is only one of them.
            Ehlers-Danlos syndrome is a group of inherited disorders that affect connective
            tissues — usually skin, joints, and blood vessel walls. Connective tissue gives
            strength and elasticity. People with EDS often have overly flexible joints and
            stretchy, fragile skin, which can be a problem when a wound needs stitches.
          </p>
          <p>
            There are many types. hEDS is currently the most commonly recognized. Hypermobility
            spectrum disorder (HSD) is used when someone has significant hypermobility without
            meeting the other markers of EDS.{' '}
            <ResourceLink
              href="https://www.ehlers-danlos.com/what-is-hsd/"
              label="The Ehlers-Danlos Society’s HSD overview"
            />{' '}
            is a useful starting point.
          </p>
          <BulletList items={edsTypeItems} />
        </LearnMoreSection>

        <LearnMoreSection title="Wait — if it’s inherited, does that mean I’ve always had this?">
          <p>
            You may be recontextualizing a lifetime of illnesses, injuries, and medical complexity
            that seemingly had no cause. Maybe they did, and maybe you’ve finally found a useful
            frame. This guide walks through that at a high level and in the weeds. Expand only
            what you have capacity for.
          </p>
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/RussekHSDKids.pdf"
              label="Russek: hypermobility / HSD in kids (PDF)"
            />
          </p>
          <p>
            <ResourceLink
              href="https://www.jimharrismd.com/articles/23-signs-ehlers-danlos-syndrome"
              label="23 signs of Ehlers-Danlos syndrome"
            />
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Okay, so how do I get diagnosed?" id="diagnosis">
          <p>
            This is tricky. There are genetic tests for some kinds of EDS (currently about 12
            subtypes), and those are often the less common kinds. The most common — hEDS — does
            not have a conclusive genetic marker yet and is diagnosed clinically, by relatively
            few doctors.             You can check symptoms against the{' '}
            <RoomLink href="/library/eds-checklist">EDS symptom checklist quiz</RoomLink> or the{' '}
            <ResourceLink
              href="https://www.ehlers-danlos.com/wp-content/uploads/2017/05/hEDS-Dx-Criteria-checklist-1.pdf"
              label="2017 hEDS diagnostic criteria checklist (PDF)"
            />
            .
          </p>
          <p>
            To be assessed, it is best to see a clinician experienced with heritable connective
            tissue disorders — often a geneticist, rheumatologist, or another specialist depending
            on where you live and which type of EDS is being considered.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Genetic testing" headingLevel={3}>
          <p>
            Many people get referred to genetics, hear that testing probably will not come back
            positive for hEDS, and get sent elsewhere for a clinical diagnosis. Clinical
            diagnosis is possible with knowledgeable clinicians — that is not always who we have.
          </p>
          <p>
            If you still want to try genetics, ask whether they can order a hypermobility /
            connective-tissue panel. Invitae is one company people use. Cost is often a bit over
            $100, but that changes.
          </p>
          <p>
            Next-generation sequencing (NGS) is the usual approach. A lab may offer an
            “Ehlers-Danlos syndrome panel” or “connective tissue disorder panel.” Whole genome or
            whole exome sequencing is more often used in research. If sequencing does not find a
            pathogenic variant, some labs look for large copy-number changes. When genetic testing
            is not available, protein studies such as SDS-PAGE or HPLC are sometimes used for
            certain types.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Clinical diagnosis" headingLevel={3}>
          <p>
            Current widely used guidance is the diagnostic criteria published in the{' '}
            <em>American Journal of Medical Genetics</em> in 2017. That means a lot of providers
            are working from information that is already aging, on a cluster of conditions we are
            still learning. Clinicians typically look for three things: generalized joint
            hypermobility; two or more of Features A, B, and C; and ruling out other conditions.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="The Beighton scale — and why it is incomplete" headingLevel={3}>
          <p>
            The Beighton scale asks you to do a few motions, mostly with the hands, and score
            joint hypermobility there. A low Beighton score does <em>not</em> mean you do not have
            EDS or hypermobility. Muscle tightness, injury, or an inexperienced examiner can hide
            it.
          </p>
          <p>
            Other tools look more carefully at the arm (Nicholson and Chan, 2018) and the leg and
            foot (Ferrari et al., 2005 in children; Meyer et al., 2017 in adults). Those require
            detailed exam of shoulder, elbow, wrist, hip, knee, ankle, heel, and toes. Experts
            encourage looking more broadly than Beighton alone when someone has local or
            widespread injuries and joint pain that might be related to hypermobility.
          </p>
          <p>
            The hEDS/HSD Working Group of the International Consortium (2022) audited which upper-
            and lower-limb tests most strongly suggest generalized hypermobility. Extra tests —
            especially shoulder, wrist, ankle, and toes — are being studied as possible additions
            to Beighton.
          </p>
          <p>
            <ResourceLink
              href="https://www.ehlers-danlos.com/"
              label="Measurement properties of clinical assessment methods for classifying generalized joint hypermobility — start from EDS Society research pages"
            />
          </p>
          <p>
            <ResourceLink
              href="https://www.ehlers-danlos.com/what-is-hsd/"
              label="A framework for classifying joint hypermobility and related conditions"
            />
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Features A, B, and C" headingLevel={3}>
          <p>Two or more of Features A, B, or C must be present.</p>
          <p>
            <strong>Feature A</strong> — five of these twelve must be present:
          </p>
          <BulletList items={featureAItems} />
          <p>
            <strong>Feature B</strong> — a positive family history: one or more first-degree
            relatives independently meeting current hEDS criteria.
          </p>
          <p>
            <strong>Feature C</strong> — at least one of:
          </p>
          <BulletList items={featureCItems} />
          <p>
            <ResourceLink
              href="https://www.ehlers-danlos.com/wp-content/uploads/2017/05/hEDS-Dx-Criteria-checklist-1.pdf"
              label="Download the 2017 hEDS diagnostic checklist (PDF)"
            />
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Ruling out other conditions" headingLevel={3}>
          <p>
            There is no lab test or imaging study that can prove someone does or does not have a
            type of HSD. Other explanations have to be considered, because management may be
            different.
          </p>
          <p>Conditions that typically need to be considered include:</p>
          <BulletList items={ruleOutItems} />
          <p>
            Someone diagnosed with HSD can later develop another condition, such as lupus, and
            then hold both diagnoses. If lupus (or another explanation) is already present, HSD is
            usually not added just because joint pain and instability showed up — there is already
            an explanation.
          </p>
          <p>
            For hEDS, unusual skin fragility should prompt consideration of other EDS types.
            People with an acquired connective-tissue disease such as lupus or rheumatoid
            arthritis need Features A and B of Criterion 2; Feature C (chronic pain and/or
            instability) cannot be counted toward hEDS in that situation.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Well, then what?">
          <p>
            We treat symptoms and stay aware of what is hard on this kind of body. There is no
            cure. Working with the body — calming it and listening — is how a lot of us move from
            surviving toward something more livable. At the beginning there is often so much pain
            and brain fog that it is hard to tell when one thing is wrong because everything is
            wrong.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="How to stay active when everything hurts" headingLevel={3}>
          <BulletList items={movementItems} />
        </LearnMoreSection>

        <LearnMoreSection title="How to hold it down when it will not stop hurting" headingLevel={3}>
          <p>Pain management is a large part of staying functional with EDS.</p>
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/RussekCarePlan.docx"
              label="Russek care plan (DOCX)"
            />
          </p>
          <p>
            <strong>Pharmaceuticals.</strong> Not an option for everyone. This is peer
            information about what people are often offered — not a prescription.
          </p>
          <BulletList items={pharmaItems} />
          <p>
            <strong>Over the counter and topical support.</strong>
          </p>
          <BulletList items={otcItems} />
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/Russek_Topicals.pdf"
              label="Russek topicals (PDF)"
            />
          </p>
          <p>
            <strong>Other remedies people try.</strong>
          </p>
          <BulletList items={naturalItems} />
          <p>
            More herbal notes live on the{' '}
            <RoomLink href="/resources#herbalism">resources herbalism shelf</RoomLink>.
          </p>
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/Russek_UnhelpfulThinking.pdf"
              label="Russek: unhelpful thinking (PDF)"
            />
          </p>
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/RussekFlarePlan.docx"
              label="Russek flare plan (DOCX)"
            />
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="How to get better — a working list" headingLevel={3}>
          <BulletList items={betterItems} />
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/RussekStartingEx.docx"
              label="Russek: starting exercise (DOCX)"
            />
          </p>
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/RussekVagusRelax.pdf"
              label="Russek: vagus / relaxation (PDF)"
            />
          </p>
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/RussekBreathing.pdf"
              label="Russek: breathing (PDF)"
            />
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Releasing fascia and trigger points" headingLevel={3}>
          <p>
            Fascia can stick where we are having trouble. Moving skin and fascia before trying to
            release muscle often helps. Cupping is one way. Soft cups that glide work well for
            many people:
          </p>
          <BulletList items={cuppingItems} />
          <p>
            A trigger point often feels like a knot — intense, sometimes in a “hurts so good”
            way. Sites such as{' '}
            <ResourceLink href="https://www.triggerpoints.net" label="triggerpoints.net" /> can
            help map referred pain.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Massage, chiropractic, and who to trust" headingLevel={3}>
          <p>
            Therapeutic massage from someone who understands bodies like this can be huge. You
            can also teach household members, but that takes advocacy. Searching “myofascial
            release” or hypermobility-informed providers is a reasonable start. Call the office
            and listen to how the staff talk — knowing the front desk may not have the
            terminology.
          </p>
          <p>
            Chiropractic manipulation, especially of the neck, can be dangerous for people with
            EDS because of risks such as CCI and Chiari. Techniques that actually help are often
            available from massage or physical therapy instead. If you do see a chiropractor, a
            knowledgeable one will usually avoid aggressive manual neck adjustments and lean
            toward soft-tissue work. Be very cautious.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Stress, self-care, and asking for help" headingLevel={3}>
          <p>
            Stress lives in this body. Overwhelm can look like burnout: no break, everything
            harder, no motivation, daily tasks suddenly enormous. Care-planning tools on the{' '}
            <RoomLink href="/care-plan">care plan page</RoomLink> can help you write a map when
            that happens.
          </p>
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/RussekToolBox.pdf"
              label="Russek toolbox (PDF)"
            />
          </p>
          <p>
            Questions are welcome.{' '}
            <RoomLink href="/about#contact">Leave a note</RoomLink>, book{' '}
            <RoomLink href="/coaching#book">coaching</RoomLink>, or lurk in EDS support spaces
            and take what is useful. Tell people you trust what is going on and what you actually
            need.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Listen to your body and accommodate it" headingLevel={3}>
          <p>
            Once things are calmer, check in. What hurts, and which muscle is actually doing it?
            Knees angry? Cane or brace. Wrists angry? Targeted exercises. Shower chairs,
            wheelchairs, rollators, and compression can change a day. Compression can help POTS
            and can also cue joints. Hate that chair? Put a pillow on it. You will not get those
            spoons back.
          </p>
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/RussekHSDPosture.pdf"
              label="Russek HSD posture (PDF)"
            />
          </p>
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/FFFPosture.pdf"
              label="Functional posture handout (PDF)"
            />
          </p>
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/RussekJointProtection.pdf"
              label="Joint protection strategies (PDF)"
            />
          </p>
          <p>Ergonomics extras:</p>
          <p>
            <ResourceLink
              href="https://corporateworkhealth.com.au/wp-content/uploads/2023/05/CWHA_Ergo_Training_Poster.pdf"
              label="Office / computer ergonomics"
            />
          </p>
          <p>
            <ResourceLink
              href="https://corporateworkhealth.com.au/wp-content/uploads/2023/05/CWHA_Ergo-Work-From-Home-Workstation-Tips-Poster-2020-FINAL.pdf"
              label="Home office ergonomics"
            />
          </p>
          <p>
            <ResourceLink
              href="https://corporateworkhealth.com.au/wp-content/uploads/2023/05/CWHA_Vehicle-Ergo-Poster-Final.pdf"
              label="Car ergonomics"
            />
          </p>
          <p>
            <ResourceLink
              href="https://corporateworkhealth.com.au/wp-content/uploads/2023/05/CWHA_Manual_Handling_Poster.pdf"
              label="Lifting / manual handling"
            />
          </p>
        </LearnMoreSection>

        <RoomSection title="Common symptoms and co-occurring conditions">
          <p>Expand only the ones you have capacity for today.</p>
        </RoomSection>

        <LearnMoreSection title="Pain" headingLevel={3}>
          <p>
            Often from muscle tension, “overuse” that does not feel like overuse, tight fascia,
            and subluxed or dislocated joints. People with EDS are often very intolerant of
            repetitive motion. Muscle relaxers and low-dose naltrexone are two of the options
            people discuss with clinicians.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Inflammation" headingLevel={3}>
          <p>
            Widespread inflammation is common. Some people use regular NSAIDs and cromolyn
            (NasalCrom) after talking with a clinician. Inflammation can feel like pockets of
            built-up fluid or heat in uncomfortable areas.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="MCAS / mast cells" headingLevel={3}>
          <p>
            For a lot of us, mast cell activation shows up next to the joints: flushing,
            congestion, rashes, stomach problems, or “why does my body freak out over nothing.”
            Tests are tricky because mast cells do a lot of their work in tissues, not always in
            blood or urine.
          </p>
          <p>Labs some clinicians run:</p>
          <BulletList items={mcasLabItems} />
          <p>
            Tryptase is usually normal in a large majority of people with MCAS. A normal tryptase
            does not rule MCAS out; it is more useful for looking at mastocytosis or hereditary
            alpha-tryptasemia. Call ahead and ask whether the clinic actually diagnoses
            non-clonal MCAS. Immunologists who understand that picture are worth hunting for.
          </p>
          <p>
            There is no cure. First-line treatment that knowledgeable clinicians often start with
            is an H1 plus H2 antihistamine combination. Dr. Lawrence Afrin has written that some
            combination of H1/H2 blocking helps a majority of MCAD patients, and the medications
            are inexpensive and generally long-term safe compared with many alternatives.
          </p>
          <p>First-generation H1s — rescue, not usually daily:</p>
          <BulletList items={firstGenH1Items} />
          <p>Second-generation H1s — more often used daily:</p>
          <BulletList items={secondGenH1Items} />
          <p>H2 blockers:</p>
          <BulletList items={h2Items} />
          <p>
            Some people skip H2s and raise the H1 dose. H2s can constipate and can affect
            absorption of some medications and B12. Proton-pump inhibitors are not the same as
            H2s. None of this is a prescription — check interactions with a clinician or
            pharmacist.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Upset stomach / IBS" headingLevel={3}>
          <p>
            EDS affects collagen throughout the body, including the gut. Diarrhea, constipation,
            bloating, cramps, and food intolerances are common. A low-FODMAP trial can help some
            people find trigger foods. SIBO is worth asking about. There is not a finished NQA
            low-FODMAP guide yet; start with a clinician or dietitian who will not treat this as
            “just IBS.”
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="POTS / dysautonomia" headingLevel={3}>
          <p>
            The nervous system does not regulate blood pressure and heart rate the way textbooks
            expect. The classic picture is dizziness or feeling faint going from lying down to
            standing. Other hallmarks: dizziness with arms raised, cold hands and feet, heat
            intolerance, coat-hanger pain, brain fog, and exercise intolerance.
          </p>
          <p>Formal testing, if you go that route, often lives with cardiology:</p>
          <BulletList items={potsTestItems} />
          <p>
            Clinical diagnosis is possible without a tilt table if the clinician knows what they
            are looking at. Tilt tables are hard on the body.
          </p>
          <p>Day-to-day management people discuss:</p>
          <BulletList items={potsHelpItems} />
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/RussekPOTSintro.pdf"
              label="Russek POTS intro (PDF)"
            />
          </p>
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/RussekPOTSchecklist.pdf"
              label="Russek POTS checklist (PDF)"
            />
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Headaches, migraines, and jaw pain" headingLevel={3}>
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/RussekHATrP.pdf"
              label="Russek headache / trigger points (PDF)"
            />
          </p>
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/RussekHAdiary.doc"
              label="Russek headache diary (DOC)"
            />
          </p>
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/RussekTMD.pdf"
              label="Russek TMD (PDF)"
            />
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Subluxations and dislocations" headingLevel={3}>
          <p>
            A joint or the bone meeting it has moved out of its usual place. Overuse, strain, or
            injury can do it; for some people it happens extremely easily. The usual approach is
            to relax the muscles around it and gently guide the joint back — which requires
            knowing where “home” is.
          </p>
          <p>
            Trigger-point work often helps get a joint to stay. Referred pain is sneaky: a neck
            muscle can shout into an arm; a back muscle can shout into a leg.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Tethered cord" headingLevel={3}>
          <p>
            The filum terminale is abnormally attached, restricting spinal cord movement. Pain,
            bladder or bowel changes, leg weakness, and declining mobility show up more than they
            used to in hEDS conversations.
          </p>
          <p>
            Lumbar MRI is the main tool; some surgeons want an upright MRI. Not every radiologist
            recognizes subtle cases. Communities often mention surgeons experienced with EDS;
            Dr. Patel at MUSC is one name people share — that is community information, not an
            endorsement that replaces your own consult.
          </p>
          <p>
            The main treatment for progressive, non-improving cases is surgical release. Recovery
            is long. Physical therapy cannot untether a cord. After detethering, scar tissue can
            re-tether; weekly scraping and massage from a hypermobility-informed PT or a trained
            helper is how some people try to keep the area mobile. It is uncomfortable and usually
            needs another person’s hands.
          </p>
          <p>
            <ResourceLink
              href="https://www.chronicpainpartners.com/wp-content/uploads/2023/02/surgery-prep-meeting-your-eds-hospital-stay-needs.pdf"
              label="Surgery prep / hospital stay needs (PDF)"
            />
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Cranio-cervical instability and Chiari" headingLevel={3}>
          <p>
            CCI is instability in the upper neck. It can feel like headaches, neck and shoulder
            pain, coat-hanger pain, and a head that is “too heavy.” Soft collars, bracing, and
            treating a tethered cord sometimes help; some people eventually need fusion.
          </p>
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/RussekUCI.pdf"
              label="Russek upper cervical instability (PDF)"
            />
          </p>
          <p>
            <ResourceLink
              href="https://www.chronicpainpartners.com/wp-content/uploads/2023/05/9YyQ9C-Cervical-Spine-Instability-Ebook-copy.pdf"
              label="Cervical spine instability ebook (PDF)"
            />
          </p>
          <p>
            Chiari is when cerebellar tonsils push into the spinal canal. MRI of brain and
            cervical spine is the usual test. Headaches worse with coughing or straining, neck
            pain, dizziness, balance trouble, and numbness are common prompts. Mild cases are
            monitored; severe cases may need decompression.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Fibromyalgia, sleep, and energy" headingLevel={3}>
          <p>
            Fibromyalgia is a clinical diagnosis — widespread pain for more than three months,
            often with fatigue and sleep disruption. Medications people are offered include
            duloxetine, pregabalin, and low-dose naltrexone. Pacing, sleep, and trigger-point
            work matter as much as pills.
          </p>
          <p>
            For insomnia, muscle relaxers have a dual effect for some people. Diphenhydramine
            can also help people who have MCAS. Valerian is one herbal option people try.
          </p>
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/Russek_HSD_Sleep_Bedding.pdf"
              label="Russek sleep and bedding (PDF)"
            />
          </p>
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/docs/hypermobility/RussekSleep.pdf"
              label="Russek sleep (PDF)"
            />
          </p>
          <p>
            Chronic fatigue is sometimes met with stimulants, especially if ADHD is also in the
            picture. Vibration plates, pacing, and LDN are other things people try. If this is
            looking like ME/CFS, say that out loud to a clinician who will not treat it as
            deconditioning.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Physical therapy tips" headingLevel={3}>
          <p>
            A useful session, in Quinn’s experience, is a therapist who spends most of the visit
            re-aligning joints with soft-tissue and manual work, then sends you home with
            exercises. The CHOP protocol is often recommended when POTS is part of the picture.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Other common co-occurrences" headingLevel={3}>
          <BulletList items={otherCooccurItems} />
        </LearnMoreSection>

        <LearnMoreSection title="If this is a connective tissue thing, can I take collagen?">
          <p>
            Connective tissue supports and gives structure. Most of it is extracellular matrix —
            collagen fibers, elastic fibers, proteoglycans. Tendons, ligaments, dura, bone,
            cartilage, and fascia are all connective tissue.
          </p>
          <p>
            EDS sits in the hereditary disorders of connective tissue, as distinct from acquired
            autoimmune conditions such as rheumatoid arthritis or lupus. Collagen is the major
            protein. Many EDS types involve collagen itself or the enzymes that process it.
            Fibrillar collagens are triple helices. Pathogenic variants in type V collagen
            underlie classical EDS; type III collagen underlies vascular EDS. hEDS still does
            not have a single tidy gene story.
          </p>
          <p>
            Taking collagen powder is a common question. It is not a proven way to “replace”
            the collagen your genes are building. If you try it, treat it as an experiment, not a
            cure, and run it past a clinician if you have a complicated gut or MCAS picture.
          </p>
        </LearnMoreSection>

        <RoomSection title="Tools">
          <BulletList items={toolItems} />
        </RoomSection>

        <RoomSection title="Resources">
          <p>
            <ResourceLink
              href="https://webspace.clarkson.edu/~lrussek/research.html"
              label="Leslie Russek EDS self-care handouts"
            />
          </p>
          <p>
            <ResourceLink href="https://www.ehlers-danlos.com/resources/" label="Ehlers-Danlos Society resources" />
          </p>
          <p>
            <ResourceLink href="https://www.chronicpainpartners.com/" label="Chronic Pain Partners" />
          </p>
          <p>
            <ResourceLink href="https://www.bendybodiespodcast.com/" label="Bendy Bodies podcast" />
          </p>
          <p>
            <ResourceLink href="https://www.youtube.com/@unraveledpod" label="Unraveled podcast" />
          </p>
          <p>
            <ResourceLink href="https://bobbyjonescsf.org/" label="Bobby Jones Chiari & Syringomyelia Foundation" />
          </p>
          <p>
            <ResourceLink
              href="https://www.inspire.com/groups/ehlers-danlos-syndromes/"
              label="Inspire EDS community"
            />
          </p>
          <p>
            <ResourceLink href="https://www.ehlers-danlos.com/leslie-russek/" label="Leslie Russek at EDS Society" />
          </p>
          <p>
            <ResourceLink href="https://jeanniedibon.com/" label="Jeannie DiBon" />
          </p>
          <p>
            <ResourceLink href="https://complexneurology.com/" label="David Saperstein / Complex Neurology" />
          </p>
          <p>
            <ResourceLink href="https://www.youtube.com/@DoctorClair" label="Dr. Clair Francomano on YouTube" />
          </p>
          <p>
            On this site:{' '}
            <RoomLink href="/eds">Quinn’s EDS story</RoomLink>,{' '}
            <RoomLink href="/library/eds-checklist">EDS symptom checklist quiz</RoomLink>,{' '}
            <RoomLink href="/flowchart">symptom flowchart</RoomLink>,{' '}
            <RoomLink href="/diy-binder">medical binder</RoomLink>,{' '}
            <RoomLink href="/coaching">coaching</RoomLink>.
          </p>
        </RoomSection>

        <LearnMoreSection title="Selected references">
          <p>
            Ferrari J, Parslow C, Lim E, Hayward A. Joint hypermobility: the use of a new
            assessment tool to measure lower limb hypermobility. <em>Clin Exp Rheumatol.</em>{' '}
            2005;23(3):413-20.{' '}
            <ResourceLink
              href="https://www.clinexprheumatol.org/abstract.asp?a=2612"
              label="Abstract"
            />
          </p>
          <p>
            Glans M, Humble MB, Elwin M, et al. Self-rated joint hypermobility: the five-part
            questionnaire evaluated in a Swedish non-clinical adult population.{' '}
            <em>BMC Musculoskelet Disord.</em> 2020;21:174.{' '}
            <ResourceLink href="https://doi.org/10.1186/s12891-020-3067-1" label="DOI" />
          </p>
          <p>
            Hakim AJ, Grahame R. A simple questionnaire to detect hypermobility.{' '}
            <em>Int J Clin Pract.</em> 2003;57:163-6.
          </p>
          <p>
            Meyer KJ, Chan C, Hopper L, et al. Identifying lower limb specific and generalised
            joint hypermobility in adults. <em>BMC Musculoskelet Disord.</em> 2017;18:514.
          </p>
          <p>
            Nicholson LL, Chan C. The Upper Limb Hypermobility Assessment Tool.{' '}
            <em>Musculoskelet Sci Pract.</em> 2018;35:38-45.
          </p>
        </LearnMoreSection>

        <GuideCta href="/library" label="Back to your library →" />
        <p className="text-center">
          <RoomLink href="/store/so-you-think-youre-hypermobile">Public sales page</RoomLink>
        </p>
      </WallCard>
    </RoomPage>
  )
}
