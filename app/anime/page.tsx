import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { RoomLink } from '@/components/home/room-link'
import { GuideCta } from '@/components/home/guide-cta'
import { GuideCover } from '@/components/home/guide-cover'
import { BulletList, RoomSection } from '@/components/home/room-section'
import { LearnMoreSection } from '@/components/home/learn-more-section'

export const metadata: Metadata = {
  title: 'Trans+ Representation in Anime',
  description:
    'Explore the characters, stories, history, and wonderfully complicated relationship between anime and gender.',
}

const DATABASE =
  'https://docs.google.com/spreadsheets/d/1RAGFgfxsFJCaiNvmvz7g1qVpm3gXo6Em_gMJOZppL64/edit'
const COACHING_HREF = '/coaching'
const PANEL_HREF = '/anime-panel'

const audienceItems = [
  'You’re trans and looking for anime that actually sees you',
  'You want queer anime recommendations',
  'You’re interested in anime history',
  'You study gender or media',
  'You teach LGBTQ+ topics',
  'You’re researching trans representation',
  'You run an anime club',
  'You’re building convention programming',
  'You’re an aspiring convention panelist',
  'You want examples of both good and bad representation',
  'You want to understand why some older works remain important',
  'You’re interested in the difference between gender exploration and explicit representation',
  'You have extremely strong opinions about anime and would like additional material with which to develop even stronger opinions',
]

const coachingItems = [
  'Convention applications',
  'Panel descriptions',
  'Presenter bios',
  'Learning the material',
  'Adapting the deck',
  'Choosing examples',
  'Presentation structure',
  'Timing',
  'Audience engagement',
  'Public speaking',
  'Handling questions',
  'Facilitating sensitive discussions',
  'Preparing for disagreements',
  'Accessibility',
  'Content warnings',
  'Practicing your presentation',
  'Cutting a panel to fit a time slot',
  'Expanding it for longer programming',
]

export default function AnimePage() {
  return (
    <RoomPage>
      <WallCard title="Trans+ Representation in Anime" wide="xl">
        <p className="font-gallery text-xl italic text-room-brown">
          Explore the characters, stories, history, and wonderfully complicated relationship
          between anime and gender.
        </p>
        <p className="text-center">Created by Quinn Fleur</p>
        <div className="mx-auto max-w-xs">
          <GuideCover
            title="Trans+ Representation in Anime"
            tagline="a guide, a database, a panel"
          />
        </div>
        <p>Anime has been messing with gender for a long time.</p>
        <p>
          Trans characters. Genderless characters. Cross-dressing. Body swaps. Magical
          transformations. Reincarnation. Boys becoming girls. Girls becoming princes. Characters
          refusing gender entirely. Characters whose gender somehow requires a 45-minute fandom
          argument and three citations from an untranslated 1997 art book.
        </p>
        <p>Some of these stories are incredible.</p>
        <p>Some were groundbreaking for their time.</p>
        <p>Some aren&apos;t actually trans representation—but have a lot to say about gender.</p>
        <p>And some have aged like milk.</p>
        <p>
          <em>Trans+ Representation in Anime</em> is Quinn Fleur&apos;s guide to understanding all
          of it.
        </p>
        <p>
          It&apos;s part recommendation guide, part media-analysis resource, part historical
          archive, and part convention panel—built around one deceptively complicated question:
        </p>
        <p className="italic">What actually makes trans representation good?</p>
        <GuideCta href={DATABASE} label="Explore Trans+ Representation in Anime →" isDominant />

        <LearnMoreSection title="More Than a List of Trans Anime Characters">
          <p>If you&apos;re looking for a spreadsheet that simply says:</p>
          <p>Character: trans</p>
          <p>Anime: yes</p>
          <p>Representation: good</p>
          <p>this isn&apos;t that.</p>
          <p>Because representation is more complicated.</p>
          <p>
            A series can explicitly call a character transgender and still treat them terribly.
          </p>
          <p>
            Another series may never use modern transgender terminology but explore gender,
            embodiment, autonomy, and identity in ways that profoundly resonate with trans
            audiences.
          </p>
          <p>
            And a character written decades before today&apos;s language existed can&apos;t always
            be understood without looking at the historical context surrounding them.
          </p>
          <p>So instead of simply asking:</p>
          <p className="italic">&ldquo;Is this character trans?&rdquo;</p>
          <p>Quinn&apos;s project asks:</p>
          <p>What story is being told?</p>
          <p>Who gets to define this character&apos;s identity?</p>
          <p>Does the narrative respect them?</p>
          <p>Do they have agency?</p>
          <p>Do they have community?</p>
          <p>Are they a complete person—or a gender joke wearing a wig?</p>
          <p>What did this representation mean when it was created?</p>
          <p>And what can we learn from it now?</p>
        </LearnMoreSection>

        <LearnMoreSection title="What Makes Good Representation?">
          <p>
            Putting a trans character on screen doesn&apos;t automatically make something good
            representation.
          </p>
          <p>
            Throughout the guide and accompanying database, Quinn evaluates representation using
            four major lenses.
          </p>
          <h3 className="font-display text-xl text-room-teal">Community</h3>
          <p>Does this character have people who support them?</p>
          <p>
            Queer characters have historically been portrayed as isolated—the only person like
            themselves in the entire fictional universe.
          </p>
          <p>But community changes everything.</p>
          <p>Does the character have supportive friends?</p>
          <p>Other queer people?</p>
          <p>Chosen family?</p>
          <p>Relationships where they&apos;re allowed to give and receive care?</p>
          <p>Or does the story treat being trans as an inherently lonely existence?</p>
          <p>
            Representation isn&apos;t only about who a character is. It&apos;s also about whether
            they&apos;re allowed to belong.
          </p>
          <h3 className="font-display text-xl text-room-teal">Agency</h3>
          <p>Who gets to decide who this person is?</p>
          <p>
            One of the strongest indicators of respectful representation is whether a character
            gets to define themselves.
          </p>
          <p>Do they choose their presentation?</p>
          <p>Do they name their own identity?</p>
          <p>Are decisions about their body made by them—or inflicted upon them?</p>
          <p>If transition happens, do they actively pursue it?</p>
          <p>Does the audience hear what they want?</p>
          <p>
            Gender stories become very different when characters are given control over their own
            narratives.
          </p>
          <h3 className="font-display text-xl text-room-teal">Respect</h3>
          <p>Does the story itself respect them?</p>
          <p>
            A trans character can experience discrimination in a story without the story endorsing
            that discrimination.
          </p>
          <p>That&apos;s an important distinction.</p>
          <p>Quinn looks at questions like:</p>
          <p>Is misgendering portrayed as harmful—or as the punchline?</p>
          <p>Is the character&apos;s identity respected by the narrative?</p>
          <p>Is their gender primarily being used for shock?</p>
          <p>Are we laughing with them or at them?</p>
          <p>Does the story believe this person deserves dignity?</p>
          <p>
            Characters can experience conflict, prejudice, rejection, and pain while still existing
            within respectful representation.
          </p>
          <p>The question is what the narrative is asking us to believe about them.</p>
          <h3 className="font-display text-xl text-room-teal">Depth</h3>
          <p>Would this character still be interesting if they weren&apos;t trans?</p>
          <p>Trans people have hobbies.</p>
          <p>Ambitions.</p>
          <p>Relationships.</p>
          <p>Bad habits.</p>
          <p>Careers.</p>
          <p>Favorite foods.</p>
          <p>Petty grudges.</p>
          <p>Terrible taste in romantic partners.</p>
          <p>Unreasonably strong opinions about anime.</p>
          <p>
            Gender can be an important part of someone&apos;s story without being the only thing
            they&apos;re allowed to have.
          </p>
          <p>
            The strongest representation gives gender-diverse characters enough complexity to
            simply be people.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="The Database">
          <p>Come for the recommendations. Accidentally spend three hours sorting a spreadsheet.</p>
          <p>
            At the center of this project is Quinn&apos;s growing Trans+ Representation in Anime
            &amp; Manga Database.
          </p>
          <p>
            It&apos;s designed to help you find media worth watching, discover overlooked
            representation, research convention presentations, compare portrayals across decades,
            and explore the history of gender in anime and manga.
          </p>
          <p>Entries can include information such as:</p>
          <p>
            Title • Character • Anime/Manga • Year • Genre • Representation Type • Representation
            Rating • Community • Agency • Respect • Depth • Tropes • Trigger Warnings • Historical
            Context • Strengths • Weaknesses • Discussion Notes • Presentation Recommendations
          </p>
          <p>And most importantly:</p>
          <p>Context.</p>
          <p>Because a star rating alone can&apos;t tell you why something matters.</p>
          <GuideCta href={DATABASE} label="Explore the Anime Representation Database →" />
        </LearnMoreSection>

        <LearnMoreSection title="Find Your Next Watch">
          <p>Maybe you&apos;re not here to write a thesis about gender.</p>
          <p>Maybe you just want something gay to watch tonight.</p>
          <p>Excellent.</p>
          <p>
            The database can help you discover stories across different kinds of representation and
            gender exploration.
          </p>
          <p>
            You&apos;ll find celebrated modern works alongside historical classics, obscure manga,
            complicated cases, and shows Quinn includes specifically because they&apos;re useful
            examples of what not to do.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="The Great Big “Is This Actually Trans Representation?” Problem">
          <p>Anime makes this question especially interesting.</p>
          <p>What do we do with:</p>
          <p>Body-swapping stories?</p>
          <p>Gender transformation?</p>
          <p>Cross-dressing?</p>
          <p>Reincarnation into another gender?</p>
          <p>Genderless characters?</p>
          <p>Androgyny?</p>
          <p>Characters resisting gender roles?</p>
          <p>Magical transformations?</p>
          <p>
            Characters whose identities don&apos;t map neatly onto contemporary Western
            terminology?
          </p>
          <p>Not every story that explores gender is transgender representation.</p>
          <p>But that doesn&apos;t make those stories irrelevant to trans people.</p>
          <p>
            The project distinguishes between explicit representation and gender exploration,
            allowing us to talk about both without pretending they&apos;re the same thing.
          </p>
        </LearnMoreSection>

        <LearnMoreSection title="Some Anime Were Queer Before You Were Born">
          <p>Trans and gender-diverse themes in anime didn&apos;t suddenly appear in the 2020s.</p>
          <p>
            The project reaches backward through anime and manga history to examine works such as:
          </p>
          <p>Princess Knight</p>
          <p>The Rose of Versailles</p>
          <p>Stop!! Hibari-kun!</p>
          <p>Family Compo</p>
          <p>
            and other influential works that played with gender long before contemporary
            terminology became widespread.
          </p>
          <p>Some remain remarkable.</p>
          <p>Some require significant historical context.</p>
          <p>
            Some simultaneously deserve a place in queer media history and criticism from a modern
            perspective.
          </p>
          <p>Those things aren&apos;t mutually exclusive.</p>
          <p>
            The goal isn&apos;t to put every anime into either the Good Representation Box™ or the
            Problematic Trash Can™.
          </p>
          <p>It&apos;s to understand what it did, when it did it, and what came next.</p>
        </LearnMoreSection>

        <LearnMoreSection title="And Yes, We’re Talking About the Bad Ones Too">
          <p>
            You cannot really understand the history of trans representation without talking about
            the representations that failed.
          </p>
          <p>Anime has a substantial history of:</p>
          <p>
            Trans-panic jokes • Forced feminization • Gender transformation as punishment •
            &ldquo;Trap&rdquo; stereotypes • Deceptive-trans-character tropes • Misgendering as
            comedy • Gender-diverse characters existing primarily as sexual jokes • Queer-coded
            characters without meaningful interiority
          </p>
          <p>Some of those works remain popular.</p>
          <p>Some are genuinely entertaining outside of their representation.</p>
          <p>Some were products of their time.</p>
          <p>Some really don&apos;t have that excuse.</p>
          <p>Rather than pretending they don&apos;t exist, Quinn uses them as case studies.</p>
          <p>What makes this portrayal uncomfortable?</p>
          <p>Who has agency?</p>
          <p>Who is the audience expected to laugh at?</p>
          <p>How could the same premise be handled differently?</p>
          <p>Bad representation can teach us an enormous amount about good representation.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Quinn’s Representation Ratings">
          <p>Every representation rating answers a specific question:</p>
          <p className="italic">
            How well does this work handle its transgender or gender-diverse representation?
          </p>
          <p>It is not an overall review of the anime.</p>
          <p>Something can be:</p>
          <p>★★★★★ anime</p>
          <p>and</p>
          <p>★☆☆☆☆ trans representation.</p>
          <p>Welcome to media criticism.</p>
          <p>Quinn&apos;s ratings consider:</p>
          <p>Community • Agency • Respect • Depth • Historical Context • Overall Impact</p>
          <p>
            That means an older series might receive substantial historical discussion despite
            scoring poorly by contemporary standards.
          </p>
          <p>
            Meanwhile, an obscure manga you&apos;ve never heard of may earn an exceptional
            representation score because it depicts gender-diverse people with extraordinary
            humanity.
          </p>
          <p>The score starts the conversation.</p>
          <p>The analysis explains it.</p>
        </LearnMoreSection>

        <LearnMoreSection title="Some Favorites to Start With">
          <p>If you&apos;re looking for stronger examples, the project explores works such as:</p>
          <p>
            <strong>Wandering Son</strong>
            <br />
            One of anime and manga&apos;s best-known explorations of young people questioning and
            navigating gender.
          </p>
          <p>
            <strong>Love Me for Who I Am</strong>
            <br />
            A story deeply concerned with identity, labels, queer community, and people&apos;s
            right to describe themselves.
          </p>
          <p>
            <strong>Boys Run the Riot</strong>
            <br />
            A transmasculine story centered on gender, fashion, self-expression, friendship, and
            creating something of your own.
          </p>
          <p>
            <strong>Zombieland Saga</strong>
            <br />
            Because apparently one answer to &ldquo;where can I find trans representation?&rdquo;
            is:
          </p>
          <p>Zombie idol anime.</p>
          <p>Anime is a beautiful medium.</p>
          <p>These are only the beginning.</p>
          <GuideCta href={DATABASE} label="Browse All Recommendations →" />
        </LearnMoreSection>

        <LearnMoreSection title="Turn the Research Into a Convention Panel">
          <p>Maybe you&apos;re looking at all of this thinking:</p>
          <p className="italic">
            I would absolutely listen to someone yell about this for an hour at an anime
            convention.
          </p>
          <p>Good news.</p>
          <p>That&apos;s how this project became a panel.</p>
          <h3 className="font-display text-xl text-room-teal">
            Trans+ Representation in Anime: The Convention Presentation
          </h3>
          <p>
            Quinn has transformed the research behind the database into a structured convention
            presentation exploring:
          </p>
          <p>
            The history of gender-diverse representation in anime • What makes representation
            meaningful • Explicit trans characters • Transmasculine representation • Transfeminine
            representation • Nonbinary and gender-nonconforming characters • Gender transformation
            stories • Historical classics • Modern recommendations • Complicated portrayals •
            Problematic representation • How portrayals have changed over time
          </p>
          <p>
            It&apos;s designed to be informative without becoming an academic lecture—and
            entertaining without treating the people being discussed as a joke.
          </p>
          <p>
            And if you&apos;d like to bring the topic to your own convention, anime club, queer
            organization, library, college, or community event, you don&apos;t have to build the
            presentation from scratch.
          </p>
        </LearnMoreSection>

        <RoomSection title="Get the Complete Convention Panel Kit">
          <p>The research is already done. The slides are already made. The speaker notes are already there.</p>
          <p>
            Quinn offers the complete Trans+ Representation in Anime Presentation Kit for people
            who want to present the topic themselves.
          </p>
          <h3 className="font-display text-xl text-room-teal">The PowerPoint</h3>
          <p>
            A ready-to-present slide deck designed to walk an audience through the history,
            framework, examples, recommendations, and complicated conversations surrounding trans
            representation in anime.
          </p>
          <p>Use it as-is or adapt it to fit your own voice, audience, and event.</p>
          <GuideCta href={PANEL_HREF} label="Get the Presentation →" />
          <h3 className="font-display text-xl text-room-teal">The Presenter Notes</h3>
          <p>
            Knowing what&apos;s supposed to be on a slide and knowing what to say about it for an
            hour are two very different problems.
          </p>
          <p>
            The presentation notes give you the context behind the slides so you aren&apos;t
            standing in front of 80 people thinking:
          </p>
          <p className="italic">
            Cool. The slide says Rose of Versailles. I definitely knew why yesterday.
          </p>
          <p>
            The notes help explain the major arguments, examples, transitions, historical context,
            discussion points, and important nuances behind the presentation.
          </p>
          <GuideCta href={PANEL_HREF} label="Get the Presenter Notes →" />
          <h3 className="font-display text-xl text-room-teal">The Complete Panel Bundle</h3>
          <p>Want everything?</p>
          <p>Get the:</p>
          <p>PowerPoint + Presenter Notes + Representation Database + Supporting Guide</p>
          <p>as one complete convention-panel package.</p>
          <p>You get the structure.</p>
          <p>You get the examples.</p>
          <p>You get the underlying research.</p>
          <p>
            And you get the database to answer the inevitable audience question about the one
            incredibly obscure manga somebody in the third row has been waiting their entire life
            to mention.
          </p>
          <GuideCta href={PANEL_HREF} label="Get the Complete Panel Kit →" isDominant />
        </RoomSection>

        <LearnMoreSection title="“I Want to Present This, but I’ve Never Run a Con Panel.”">
          <p>That&apos;s also something Quinn can help with.</p>
          <h3 className="font-display text-xl text-room-teal">Convention Panel Coaching</h3>
          <p>
            Quinn offers one-on-one panel coaching for people who want to bring Trans+
            Representation in Anime to conventions, universities, clubs, libraries, or community
            spaces.
          </p>
          <p>Maybe you&apos;ve never submitted a panel before.</p>
          <p>Maybe you&apos;ve presented before but never taught this particular topic.</p>
          <p>Maybe you&apos;re staring at the PowerPoint thinking:</p>
          <p className="italic">
            Okay, but how do I turn 60 slides into an actual conversation with a room full of
            people?
          </p>
          <p>We can work on that.</p>
        </LearnMoreSection>

        <LearnMoreSection title="What Can Panel Coaching Help With?">
          <p>Depending on what you need, coaching can cover:</p>
          <BulletList items={coachingItems} />
          <p>
            You can also book a practice session and actually run the panel with Quinn before you
            run it in front of an audience.
          </p>
          <p>We&apos;ll identify:</p>
          <p>What feels natural.</p>
          <p>What feels awkward.</p>
          <p>Where you&apos;re rushing.</p>
          <p>Where you&apos;re running long.</p>
          <p>Which arguments need more context.</p>
          <p>Which slides don&apos;t sound like you.</p>
          <p>
            And which anime rabbit hole is about to consume fourteen minutes of your carefully
            allotted panel time.
          </p>
          <GuideCta href={COACHING_HREF} label="Book Convention Panel Coaching →" />
        </LearnMoreSection>

        <LearnMoreSection title="Build Your Version, Not a Quinn Impression">
          <p>The presentation kit gives you a foundation.</p>
          <p>It isn&apos;t supposed to turn you into Quinn.</p>
          <p>
            If you&apos;re presenting the material yourself, your experiences, interests,
            interpretations, humor, and perspective should be part of the conversation.
          </p>
          <p>Maybe you&apos;re especially interested in magical-girl anime.</p>
          <p>Maybe you know significantly more about 1970s shōjo manga.</p>
          <p>Maybe your audience is a college LGBTQ+ group rather than an anime convention.</p>
          <p>Maybe you want to focus specifically on transmasculine characters.</p>
          <p>Maybe you&apos;ve got 45 minutes instead of 90.</p>
          <p>That&apos;s where customization comes in.</p>
          <p>
            Quinn can help you adapt the material into a panel that fits your event and your voice
            while maintaining the research and analytical framework underneath it.
          </p>
        </LearnMoreSection>

        <RoomSection title="Choose Your Rabbit Hole">
          <h3 className="font-display text-xl text-room-teal">I Want to Explore</h3>
          <p>The Trans+ Anime Guide &amp; Database</p>
          <p>
            For anime fans, trans folks, researchers, educators, and anyone looking for
            recommendations or interested in the history of gender in anime.
          </p>
          <GuideCta href={DATABASE} label="Explore the Resource →" />
          <h3 className="font-display text-xl text-room-teal">I Want to Present</h3>
          <p>Complete Convention Panel Kit</p>
          <p>
            Get the PowerPoint, detailed presenter notes, supporting guide, and representation
            database.
          </p>
          <p>
            For aspiring panelists, educators, anime clubs, queer organizations, and community
            presenters.
          </p>
          <GuideCta href={PANEL_HREF} label="Get the Panel Kit →" />
          <h3 className="font-display text-xl text-room-teal">I Want Help Presenting</h3>
          <p>Panel Coaching With Quinn</p>
          <p>
            Get one-on-one help preparing, adapting, practicing, or pitching the presentation.
          </p>
          <p>For people who want the panel but don&apos;t want to figure out convention presenting alone.</p>
          <GuideCta href={COACHING_HREF} label="Book Panel Coaching →" />
        </RoomSection>

        <LearnMoreSection title="Built by a Trans Anime Nerd Who Had Questions">
          <p>Hi, I&apos;m Quinn Fleur.</p>
          <p>
            I&apos;m trans, neurodivergent, a lifelong lover of media analysis, and the kind of
            person who can turn:
          </p>
          <p className="italic">
            &ldquo;Huh, I wonder how much trans representation there actually is in anime?&rdquo;
          </p>
          <p>into an alarmingly large spreadsheet.</p>
          <p>
            This project started because I wanted something more useful than lists of &ldquo;10
            Anime Characters You Didn&apos;t Know Were Trans!&rdquo;
          </p>
          <p>I wanted context.</p>
          <p>I wanted to know when these characters appeared.</p>
          <p>How the stories treated them.</p>
          <p>Whether they got to define themselves.</p>
          <p>Whether they had queer community.</p>
          <p>Whether the narrative respected them.</p>
          <p>How older portrayals influenced newer ones.</p>
          <p>
            And how gender exploration in anime fits alongside explicitly transgender storytelling.
          </p>
          <p>The deeper I went, the more interesting the history became.</p>
          <p>So I built the resource I wanted to exist.</p>
          <p>And then, naturally, I made a PowerPoint about it.</p>
        </LearnMoreSection>

        <LearnMoreSection title="For Fans, Researchers, Educators & Professional PowerPoint Enjoyers">
          <p>You might love this project if:</p>
          <BulletList items={audienceItems} />
          <p>Welcome.</p>
          <p>There&apos;s a spreadsheet.</p>
        </LearnMoreSection>

        <LearnMoreSection title="A Living Resource">
          <p>Representation doesn&apos;t stop.</p>
          <p>New anime air.</p>
          <p>New manga get translated.</p>
          <p>Old works become accessible.</p>
          <p>Language changes.</p>
          <p>Characters get reevaluated.</p>
          <p>
            Trans audiences bring new interpretations to stories that have existed for decades.
          </p>
          <p>
            That&apos;s why this project isn&apos;t intended to be a finished list sealed in amber.
          </p>
          <p>It&apos;s a growing resource.</p>
          <p>If Quinn missed something, tell him.</p>
          <p>If you&apos;ve got context an entry is missing, send it.</p>
          <p>If there&apos;s a new series everyone needs to know about, recommend it.</p>
          <p>If something is wrong, corrections are welcome.</p>
          <p>The goal isn&apos;t for one person to become the Supreme Authority on Anime Gender.</p>
          <p>The goal is to build something genuinely useful.</p>
        </LearnMoreSection>

        <RoomSection title="Ready to Start?">
          <p>
            Explore trans representation. Discover something new to watch, dig through decades of
            gender-diverse anime and manga, and learn a framework for thinking more critically
            about representation.
          </p>
          <GuideCta href={DATABASE} label="Explore the Guide + Database →" />
          <p>
            Take it to a convention. Get the complete presentation, presenter notes, research, and
            resources you need to bring the conversation to your own audience.
          </p>
          <GuideCta href={PANEL_HREF} label="Get the Convention Panel Kit →" isDominant />
          <p>
            Make the panel yours. Work directly with Quinn to adapt the presentation, prepare a
            convention submission, practice your delivery, and walk into your panel knowing what
            you want to say.
          </p>
          <GuideCta href={COACHING_HREF} label="Book Panel Coaching →" />
          <p>Anime has been asking questions about gender for generations.</p>
          <p>Let&apos;s talk about the answers.</p>
        </RoomSection>

        <p className="text-center">
          <RoomLink href="/store">Back to the store</RoomLink>
        </p>
      </WallCard>
    </RoomPage>
  )
}
