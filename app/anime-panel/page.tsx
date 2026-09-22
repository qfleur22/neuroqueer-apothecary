import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
import { GuideCover } from '@/components/home/guide-cover'
import { BulletList, RoomSection } from '@/components/home/room-section'
import { LearnMoreSection } from '@/components/home/learn-more-section'
import { getAnimeKitHref } from '@/utils/shopify-checkout'

export const metadata: Metadata = {
  title: 'Trans Representation in Anime Panel Kit',
  description:
    'A ready-to-present Trans+ Representation in Anime panel kit with the PowerPoint, presenter notes, and research spreadsheet already built.',
}

const DATABASE =
  'https://docs.google.com/spreadsheets/d/1RAGFgfxsFJCaiNvmvz7g1qVpm3gXo6Em_gMJOZppL64/edit'
const COACHING_HREF = '/coaching'
const KIT_LABEL = 'Get the Convention Panel Kit →'

const topicItems = [
  'What makes trans representation meaningful',
  'How to evaluate queer and gender-diverse characters',
  'Explicitly transgender characters',
  'Transmasculine representation',
  'Transfeminine representation',
  'Nonbinary and gender-nonconforming characters',
  'Gender transformation stories',
  'Cross-dressing and gender-role narratives',
  'Historical anime and manga',
  'Modern representation',
  'Problematic portrayals',
  'How representation has changed over time',
  'Why some stories resonate with trans audiences even when they aren’t explicitly trans stories',
]

const customizeItems = [
  'Your convention',
  'Your time slot',
  'Your audience',
  'Your presentation style',
  'Your favorite examples',
  'Your own research',
]

const notesItems = [
  'Explaining each example',
  'Historical context',
  'Why particular characters are included',
  'Representation analysis',
  'Important distinctions',
  'Transitions between topics',
  'Additional examples',
  'Discussion points',
  'Nuance that doesn’t belong on the slide itself',
  'Reminders about sensitive or complicated material',
]

const spreadsheetUses = [
  'Swap examples in and out',
  'Create a shorter presentation',
  'Build a longer presentation',
  'Answer audience questions',
  'Find additional recommendations',
  'Research a sequel panel',
  'Build themed panels',
  'Compare decades',
  'Focus on a specific kind of representation',
  'Find examples of problematic tropes',
  'Build your own completely different presentation',
]

const experiencedUses = [
  'Add another panel to your convention repertoire',
  'Adapt the material into a recurring panel',
  'Create follow-up presentations',
  'Build more specialized anime-and-gender topics',
  'Run the presentation for a local group before taking it to larger conventions',
  'Collaborate with another presenter',
  'Use the database as a jumping-off point for your own research',
]

const coachingItems = [
  'Convention panel applications',
  'Writing your panel description',
  'Presenter bios',
  'Adapting the slide deck',
  'Picking examples',
  'Cutting the presentation to time',
  'Expanding it for longer sessions',
  'Learning unfamiliar material',
  'Structuring jokes and audience interaction',
  'Public-speaking confidence',
  'Accessibility planning',
  'Content warnings',
  'Moderating sensitive discussions',
  'Preparing for audience questions',
  'Running a practice panel',
  'Reviewing your presentation before the convention',
]

const forYouItems = [
  'You want to start presenting at anime conventions',
  'You’re applying for your first panel',
  'You already run panels and want another topic',
  'You’re trans or queer and want to bring more LGBTQ+ programming to conventions',
  'You run an anime club',
  'You teach gender or media studies',
  'You work with an LGBTQ+ organization',
  'You want to present at libraries or community events',
  'You enjoy media criticism',
  'You want a researched presentation without doing months of groundwork',
  'You want the ability to customize and expand the material',
  'You would like to spend less time fighting PowerPoint at 2 a.m. before the submission deadline',
]

export default function AnimePanelPage() {
  const buyHref = getAnimeKitHref()

  return (
    <RoomPage>
      <WallCard title="Run a Better Anime Convention Panel Without Starting From Zero" wide="xl">
        <p className="font-gallery text-xl italic text-room-brown">
          Get a ready-to-present Trans+ Representation in Anime panel kit with the PowerPoint,
          presenter notes, and research spreadsheet already built.
        </p>
        <p className="text-center">Created by Quinn Fleur</p>
        <div className="mx-auto max-w-xs">
          <GuideCover
            title="Trans Representation in Anime Panel Kit"
            tagline="slides, notes, research"
          />
        </div>
        <p>You have a panel idea.</p>
        <p>You know the topic is interesting.</p>
        <p>You may even know exactly why you care about it.</p>
        <p>And then you hit the part where you have to actually make the panel.</p>
        <p>Research.</p>
        <p>Outline.</p>
        <p>Slides.</p>
        <p>Examples.</p>
        <p>Sources.</p>
        <p>Timing.</p>
        <p>Speaker notes.</p>
        <p>Transitions.</p>
        <p>Audience questions.</p>
        <p>Backup material.</p>
        <p>
          And suddenly the &ldquo;fun anime panel&rdquo; has become a 30-hour project living in six
          browser windows and a Google Doc called panel_final_REAL_v4.
        </p>
        <p>I already did that part.</p>
        <p>
          The Trans+ Representation in Anime Convention Panel Kit gives you a complete foundation
          for presenting a thoughtful, engaging panel on gender and trans representation in anime
          and manga.
        </p>
        <p>You get:</p>
        <p>The PowerPoint</p>
        <p>Detailed presenter notes</p>
        <p>The full representation research spreadsheet</p>
        <p>
          Use the materials as-is, adapt them to your voice, shorten them for your time slot, or
          build your own version from the research.
        </p>
        <GuideCta href={buyHref} label={KIT_LABEL} isDominant />

        <LearnMoreSection title="Built for Anime Convention Panelists">
          <p>This kit is specifically for people who want to present at:</p>
          <p>
            Anime conventions • Comic conventions • Fan conventions • University anime clubs •
            LGBTQ+ conferences • Libraries • Community events • Queer organizations • Educational
            programs
          </p>
          <p>
            Whether this is your first panel or your fiftieth, the hardest part is often not
            standing in front of the room.
          </p>
          <p>It&apos;s building something worth presenting.</p>
          <p>
            This kit gives you the framework, research, examples, and talking points so you can
            spend your time learning and personalizing the material instead of rebuilding the
            entire subject from scratch.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="The Panel Topic">
          <h3 className="font-display text-xl text-room-teal">Trans+ Representation in Anime</h3>
          <p>Anime has a long, fascinating, and often extremely complicated relationship with gender.</p>
          <p>The presentation explores:</p>
          <BulletList items={topicItems} />
          <p>
            It&apos;s designed to give audiences both recommendations and something interesting to
            think about afterward.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Not Just “Here Are Some Trans Anime Characters”">
          <p>A good convention panel needs an argument.</p>
          <p>Otherwise you&apos;re just reading a list off a screen.</p>
          <p>
            This presentation is structured around a framework for evaluating representation
            through four major questions:
          </p>
          <h3 className="font-display text-xl text-room-teal">Community</h3>
          <p>Does the character have supportive relationships, queer community, or chosen family?</p>
          <h3 className="font-display text-xl text-room-teal">Agency</h3>
          <p>
            Does the character get to define their own identity and make decisions about their own
            life?
          </p>
          <h3 className="font-display text-xl text-room-teal">Respect</h3>
          <p>
            Does the narrative itself treat the character with dignity, even when other characters
            do not?
          </p>
          <h3 className="font-display text-xl text-room-teal">Depth</h3>
          <p>
            Is this a complete character with goals, flaws, relationships, and personality beyond
            gender?
          </p>
          <p>
            That framework lets you do much more than tell your audience whether I personally
            &ldquo;like&rdquo; a character.
          </p>
          <p>It gives the room a way to participate in the analysis.</p>
        </LearnMoreSection>

        <LearnMoreSection title="What’s Included" id="whats-included">
          <h3 id="presentation" className="scroll-mt-40 font-display text-xl text-room-teal">
            1. The Complete PowerPoint Presentation
          </h3>
          <p>
            The core of the kit is a ready-to-use slide deck built specifically for presenting this
            topic to an audience.
          </p>
          <p>The presentation moves through:</p>
          <p>
            Introduction → Representation framework → Historical context → Explicit trans
            representation → Gender-diverse characters → Gender exploration → Strong representation
            → Complicated examples → Problematic representation → Recommendations → Discussion
          </p>
          <p>The deck gives you a clear visual structure so you don&apos;t have to invent one.</p>
          <p>Use the presentation as-is or edit it to fit:</p>
          <BulletList items={customizeItems} />
          <GuideCta href={buyHref} label="Preview / Get the Presentation →" />

          <h3 id="presenter-notes" className="scroll-mt-40 font-display text-xl text-room-teal">
            2. Detailed Presenter Notes
          </h3>
          <p>Slides tell you what the audience sees.</p>
          <p>They don&apos;t tell you what the hell you&apos;re supposed to say.</p>
          <p>The kit includes presenter notes that give you the context behind the presentation.</p>
          <p>The notes can help with:</p>
          <BulletList items={notesItems} />
          <p>You don&apos;t have to memorize my exact wording.</p>
          <p>
            The notes are there to give you enough understanding of the material that you can
            explain it naturally.
          </p>
          <p>
            They&apos;re especially useful if you&apos;re presenting an anime you haven&apos;t
            personally watched recently or need a reminder about why a particular example matters.
          </p>
          <GuideCta href={buyHref} label="See What’s Included in the Presenter Notes →" />

          <h3 id="spreadsheet" className="scroll-mt-40 font-display text-xl text-room-teal">
            3. The Trans+ Anime Representation Spreadsheet
          </h3>
          <p>And then there&apos;s the spreadsheet.</p>
          <p>
            The research database behind the panel contains a much larger collection of anime and
            manga than can fit into a single convention presentation.
          </p>
          <p>Entries can include:</p>
          <p>
            Series • Character • Year • Representation type • Community • Agency • Respect • Depth
            • Overall representation rating • Genres • Tropes • Trigger warnings • Historical
            context • Character notes • Strengths • Weaknesses • Discussion notes • Presentation
            recommendations
          </p>
          <p>This makes the spreadsheet useful for much more than simply preparing the included panel.</p>
          <p>You can use it to:</p>
          <BulletList items={spreadsheetUses} />
          <p>In other words:</p>
          <p>The PowerPoint gives you the panel.</p>
          <p>The spreadsheet gives you the research library behind it.</p>
          <GuideCta href={DATABASE} label="Explore the Research Database →" />
        </LearnMoreSection>

        <LearnMoreSection title="Why Buy a Panel Kit Instead of Making One Yourself?">
          <p>You absolutely can make your own.</p>
          <p>
            But making a good convention panel takes more work than it looks like from the
            audience.
          </p>
          <p>For a research-heavy topic like this, you may spend hours:</p>
          <p>Watching or rewatching anime.</p>
          <p>Reading manga.</p>
          <p>Checking character information.</p>
          <p>Researching publication history.</p>
          <p>Comparing translations.</p>
          <p>Looking into historical context.</p>
          <p>Trying to distinguish fan interpretation from canon.</p>
          <p>Finding examples.</p>
          <p>Organizing them.</p>
          <p>Writing explanations.</p>
          <p>Building slides.</p>
          <p>Cutting slides.</p>
          <p>Putting the slides back.</p>
          <p>Cutting them again.</p>
          <p>
            Realizing your &ldquo;60-minute panel&rdquo; currently takes two hours and seventeen
            minutes.
          </p>
          <p>
            This kit gives you the benefit of my existing research so you don&apos;t have to begin
            at the beginning.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Made to Be Customized">
          <p>You do not have to give my exact panel.</p>
          <p>In fact, you probably shouldn&apos;t.</p>
          <p>The kit is designed to be a foundation.</p>
          <p>Maybe you want more manga.</p>
          <p>Maybe you&apos;re obsessed with 1990s anime.</p>
          <p>Maybe you want an entire section on magical transformation.</p>
          <p>Maybe you only have 45 minutes.</p>
          <p>Maybe the convention gave you 90.</p>
          <p>Maybe your audience is mostly queer people.</p>
          <p>
            Maybe your audience is a general anime crowd that has never thought critically about
            gender representation before.
          </p>
          <p>
            Maybe there&apos;s one series you know so well that you want to replace three of my
            examples with it.
          </p>
          <p>Do it.</p>
          <p>
            The best version of the presentation is the version you actually feel comfortable
            presenting.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Great for First-Time Panelists">
          <p>
            If you&apos;ve never submitted a convention panel before, starting with a complete
            presentation can make the process dramatically less intimidating.
          </p>
          <p>Instead of asking:</p>
          <p className="italic">&ldquo;Can I build an hour of content?&rdquo;</p>
          <p>you can focus on:</p>
          <p className="italic">&ldquo;How do I make this content mine?&rdquo;</p>
          <p>You&apos;ve already got:</p>
          <p>A topic.</p>
          <p>A structure.</p>
          <p>A slide deck.</p>
          <p>Research.</p>
          <p>Examples.</p>
          <p>Talking points.</p>
          <p>Backup material.</p>
          <p>That gives you more room to practice the part that really matters:</p>
          <p>Presenting.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Great for Experienced Panelists Too">
          <p>
            Experienced presenters know exactly how much time research and slide creation can
            consume.
          </p>
          <p>
            If you already know how to work a room, this kit gives you a shortcut to a thoroughly
            researched topic.
          </p>
          <p>Use it to:</p>
          <BulletList items={experiencedUses} />
          <p>You don&apos;t have to reinvent every panel you present.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Turn One Kit Into Multiple Panels">
          <p>The research behind this kit can support much more than one presentation.</p>
          <p>For example, you could eventually build panels like:</p>
          <p>
            <strong>The History of Gender in Anime</strong>
            <br />
            From early manga through contemporary trans representation.
          </p>
          <p>
            <strong>Good, Bad &amp; Complicated Trans Representation in Anime</strong>
            <br />
            A deeper media-analysis panel.
          </p>
          <p>
            <strong>Gender Transformation in Anime</strong>
            <br />
            Body swaps, magical transformations, reincarnation, and what they say about identity.
          </p>
          <p>
            <strong>Trans Manga You Should Be Reading</strong>
            <br />
            A recommendation-focused panel.
          </p>
          <p>
            <strong>Queer Anime Beyond Yuri and Yaoi</strong>
            <br />
            Looking at broader LGBTQ+ representation.
          </p>
          <p>
            <strong>How Anime Talks About Gender</strong>
            <br />
            A more introductory presentation for general audiences.
          </p>
          <p>The included panel gets you started.</p>
          <p>The database gives you room to keep going.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Worried About Audience Questions?">
          <p>Welcome to anime conventions.</p>
          <p>At some point, someone may ask:</p>
          <p className="italic">
            &ldquo;Okay, but what about [series you have never heard of]?&rdquo;
          </p>
          <p>The spreadsheet gives you a much larger reference pool than the presentation itself.</p>
          <p>It can also help you prepare for conversations around:</p>
          <p>
            Whether a character is canonically trans • Translation differences • Historical
            terminology • Gender-nonconforming vs. trans interpretation • Problematic tropes •
            Cultural context • Why different viewers interpret a character differently
          </p>
          <p>You still don&apos;t need to know everything.</p>
          <p>A perfectly acceptable answer at a panel is:</p>
          <p className="italic">
            &ldquo;I haven&apos;t researched that one enough to give you a good answer.&rdquo;
          </p>
          <p>But having a giant spreadsheet helps.</p>
        </LearnMoreSection>

        <RoomSection title="Want Help Getting the Panel Convention-Ready?">
          <p>You can also work directly with me.</p>
          <h3 className="font-display text-xl text-room-teal">
            One-on-One Convention Panel Coaching
          </h3>
          <p>The kit gives you the material.</p>
          <p>Coaching helps you figure out how you want to present it.</p>
          <p>I can help with:</p>
          <BulletList items={coachingItems} />
          <GuideCta href={COACHING_HREF} label="Book Panel Coaching With Me →" />
        </RoomSection>

        <RoomSection title="Practice the Whole Panel Before the Con">
          <p>One of the best uses of coaching is simple:</p>
          <p>Give the presentation.</p>
          <p>Run the slides.</p>
          <p>Talk through the material.</p>
          <p>Pretend there&apos;s an audience.</p>
          <p>I can help identify:</p>
          <p>Where you&apos;re rushing</p>
          <p>Where the explanation is unclear</p>
          <p>Which section is eating too much time</p>
          <p>Where the room may need more context</p>
          <p>Which examples you&apos;re strongest on</p>
          <p>Where an audience question is likely to derail things</p>
          <p>Whether your 60-minute panel is secretly a 96-minute panel</p>
          <p>Then you can go into the convention having already done it once.</p>
          <p>
            That&apos;s a very different feeling from standing at the podium and realizing slide 42
            exists for the first time.
          </p>
        </RoomSection>

        <LearnMoreSection title="What You Get">
          <h3 className="font-display text-xl text-room-teal">
            The Complete Trans+ Representation in Anime Convention Panel Kit
          </h3>
          <p>
            <strong>PowerPoint Presentation</strong>
            <br />
            A structured, editable convention presentation.
          </p>
          <p>
            <strong>Presenter Notes</strong>
            <br />
            Detailed context and talking points to help you actually deliver the material.
          </p>
          <p>
            <strong>Research Spreadsheet</strong>
            <br />
            The larger anime and manga representation database underlying the presentation.
          </p>
          <p>Together, these give you:</p>
          <p>The visual presentation + the material to teach it + the research to expand it.</p>
          <GuideCta href={buyHref} label="Get the Complete Panel Kit →" isDominant />
        </LearnMoreSection>

        <LearnMoreSection title="Who Is This For?">
          <p>This kit is a strong fit if:</p>
          <BulletList items={forYouItems} />
        </LearnMoreSection>

        <LearnMoreSection title="Created by Quinn Fleur">
          <p>Hi, I&apos;m Quinn Fleur.</p>
          <p>
            I&apos;m trans, neurodivergent, an anime fan, a media-analysis nerd, and someone who
            has spent a deeply unreasonable amount of time putting transgender and gender-diverse
            anime into spreadsheets.
          </p>
          <p>I built this presentation because I wanted to talk about trans representation in a way that went beyond:</p>
          <p className="italic">&ldquo;Here are some queer characters I like.&rdquo;</p>
          <p>I wanted to talk about why certain portrayals work.</p>
          <p>Why some don&apos;t.</p>
          <p>Why historical context matters.</p>
          <p>Why a character doesn&apos;t need to be perfect representation to be important.</p>
          <p>Why not every gender-bending anime is a trans story.</p>
          <p>
            And why anime&apos;s relationship with gender is so much richer and stranger than
            people often realize.
          </p>
          <p>Then I did the research.</p>
          <p>Then I made the panel.</p>
          <p>Then I made the spreadsheet much, much larger than the panel.</p>
          <p>Now you can use all of it without having to recreate the whole project yourself.</p>
        </LearnMoreSection>

        <RoomSection title="Stop Building Every Panel From Scratch">
          <p>You still get to make the presentation yours.</p>
          <p>You still get to choose your examples.</p>
          <p>You still get to bring your own interpretation.</p>
          <p>You still get to argue with the audience about anime.</p>
          <p>You just don&apos;t have to begin with a blank slide.</p>
          <p>Get the presentation.</p>
          <p>Get the notes.</p>
          <p>Get the research.</p>
          <p>Take it to your next convention.</p>
          <GuideCta href={buyHref} label="Get the Trans+ Representation in Anime Panel Kit →" isDominant />
          <p>And if you want help making it yours:</p>
          <GuideCta href={COACHING_HREF} label="Book Convention Panel Coaching →" />
          <p>Your next anime convention panel can start somewhere much better than:</p>
          <p className="italic">Untitled Presentation — Slide 1.</p>
        </RoomSection>

        <p className="text-center">
          <RoomLink href="/store">Back to the store</RoomLink>
          {' · '}
          <RoomLink href="/anime">The anime guide</RoomLink>
        </p>
      </WallCard>
    </RoomPage>
  )
}
