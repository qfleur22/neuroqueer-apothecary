import type { ReactNode } from 'react'
import { GuideCta } from '@/components/home/guide-cta'
import { LearnMoreSection } from '@/components/home/learn-more-section'
import { LoveLanguageCtaCard } from '@/components/home/love-language-cta-card'
import { RoomLink } from '@/components/home/room-link'
import { BulletList, RoomSection } from '@/components/home/room-section'

const StyleSection = ({
  title,
  quote,
  children,
}: {
  title: string
  quote: string
  children: ReactNode
}) => {
  return (
    <LearnMoreSection title={title}>
      <p className="font-gallery text-xl italic text-room-brown">{quote}</p>
      {children}
    </LearnMoreSection>
  )
}

export const LoveLanguagesGuide = () => {
  return (
    <div className="space-y-8">
      <p className="font-gallery text-xl italic text-room-brown">
        Love Languages: Mapping How We Give &amp; Receive Care
      </p>

      <p>How do you know that somebody loves you?</p>
      <p>
        Maybe it’s when they remember exactly how you take your coffee. Maybe it’s a four-hour
        conversation about the universe. Maybe it’s getting a meme at 2 a.m. with absolutely no
        context because someone saw it and immediately thought of you.
      </p>
      <p>
        Maybe it’s a hand on your back in a crowded room. Someone doing the dishes because you’re
        out of spoons. Sitting silently on opposite sides of the couch while you play completely
        different video games. A friend letting you explain the entire history of your current
        special interest. A partner saying, “You don’t have to explain. I’ve got dinner tonight.”
      </p>
      <p>There are a lot of ways humans say:</p>
      <BulletList
        items={[
          'I love you.',
          'I know you.',
          'I was thinking about you.',
          'I want to share this with you.',
          'You don’t have to do this alone.',
        ]}
      />
      <p>Love-language frameworks give us vocabulary for some of those patterns.</p>
      <p>
        They aren’t diagnoses, rules, or boxes you have to fit inside. You don’t need to discover
        your One True Love Language™. Instead, think of them as tools for noticing what makes care
        feel like care to you—and how you instinctively try to communicate that care to other
        people.
      </p>
      <p>And there may be a much bigger difference between those two things than you expect.</p>

      <LoveLanguageCtaCard
        title="How Do You Love?"
        actions={
          <>
            <GuideCta href="/love-languages/giving" label="Take the Giving Love Quiz →" isDominant />
            <GuideCta href="/love-languages/receiving" label="Take the Receiving Love Quiz →" />
            <GuideCta
              href="/love-languages/giving"
              label="Take Both & Build Your Love Language Profile →"
            />
          </>
        }
      >
        <p>
          You probably already have a love language—or several. You just might not have words for
          them yet.
        </p>
        <p>
          Take the Neuroqueer Apothecary Love &amp; Connection Quizzes to map the ways you naturally
          give love and the things that actually make you feel loved.
        </p>
      </LoveLanguageCtaCard>

      <LearnMoreSection title="Where Did “Love Languages” Come From?">
        <p>
          The idea of “love languages” was popularized by Gary Chapman’s <em>The 5 Love Languages</em>.
          His original framework described five ways people may commonly communicate and experience
          affection:
        </p>
        <ul className="guide-list">
          <li>
            <strong>Words of Affirmation</strong> — expressing love through praise, encouragement,
            gratitude, and affectionate words.
          </li>
          <li>
            <strong>Quality Time</strong> — expressing love through focused time and shared
            experiences.
          </li>
          <li>
            <strong>Receiving Gifts</strong> — using meaningful objects and gifts as tangible
            expressions of care.
          </li>
          <li>
            <strong>Acts of Service</strong> — helping someone through actions and completing tasks
            that make their life easier.
          </li>
          <li>
            <strong>Physical Touch</strong> — communicating affection through consensual physical
            closeness and touch.
          </li>
        </ul>
        <p>
          The framework became enormously popular because it gave people an accessible vocabulary
          for something many relationships struggle with:
        </p>
        <p className="font-gallery text-xl italic text-room-brown">
          I may be trying very hard to love you without doing it in a way you recognize as love.
        </p>
        <p>But five categories don’t capture every way humans connect.</p>
        <p>
          Love languages are better treated as conversation starters than fixed psychological
          categories. People are complicated. Relationships are contextual. Culture, disability,
          neurotype, trauma, sensory needs, finances, attachment, family experiences, gender,
          sexuality, and countless other factors can influence how we understand intimacy and care.
        </p>
        <p>
          Contemporary adaptations have expanded this vocabulary. For this resource, we’re exploring
          seven modern connection styles alongside five community-described neurodivergent love
          languages.
        </p>
        <p>That gives us twelve different lenses for exploring connection.</p>
      </LearnMoreSection>

      <h2 className="font-display text-3xl text-room-teal sm:text-4xl">The 7 Modern Love Styles</h2>

      <StyleSection title="Activity" quote="Come do this with me.">
        <p>Activity-based connection happens through shared experiences.</p>
        <p>
          That might mean traveling together, going to concerts, playing games, cooking, hiking,
          trying restaurants, making art, running errands together, watching a show, attending
          events, or taking on a ridiculous project neither of you technically needed to start.
        </p>
        <p>The activity doesn’t have to be impressive.</p>
        <p>The important part is:</p>
        <p className="font-gallery text-xl italic text-room-brown">We experienced this together.</p>
      </StyleSection>

      <StyleSection title="Appreciation" quote="I want you to know what I see in you.">
        <p>Appreciation communicates love explicitly.</p>
        <p>
          Compliments, encouragement, gratitude, reassurance, celebration, recognition, and naming
          the qualities you admire in another person can all fall here.
        </p>
        <p>Someone with a strong appreciation style may especially value hearing things like:</p>
        <BulletList
          items={[
            '“I appreciate how much effort you put into this.”',
            '“I’m proud of you.”',
            '“I love the way your brain works.”',
            '“Thank you for taking care of that.”',
            '“I noticed.”',
          ]}
        />
        <p>
          Being loved isn’t only knowing someone probably appreciates you. Sometimes you need to
          hear it.
        </p>
      </StyleSection>

      <StyleSection title="Emotional" quote="You don’t have to feel this alone.">
        <p>Emotional connection centers empathy, vulnerability, understanding, and presence.</p>
        <p>
          Rather than immediately fixing a problem, emotional care may mean listening closely,
          asking thoughtful questions, validating someone’s experience, sharing vulnerability,
          checking in after something difficult, or simply staying present.
        </p>
        <p>The underlying message is:</p>
        <p className="font-gallery text-xl italic text-room-brown">Your internal world matters to me.</p>
      </StyleSection>

      <LoveLanguageCtaCard
        title="Knowing the Categories Isn’t the Same as Knowing Yourself"
        actions={
          <>
            <GuideCta href="/love-languages/giving" label="Discover How You Give Love →" isDominant />
            <GuideCta href="/love-languages/receiving" label="Discover How You Receive Love →" />
          </>
        }
      >
        <p>Maybe all three of those sounded like you. Maybe none of them did.</p>
        <p>
          That’s exactly why the quizzes don’t ask you to simply pick a label. Instead, you’ll
          respond to everyday examples of how people actually give and receive care, then build a
          profile across all 12 connection styles.
        </p>
      </LoveLanguageCtaCard>

      <StyleSection title="Financial" quote="What I have can help take care of us.">
        <p>Financial love is about sharing resources.</p>
        <p>
          That can include gifts, but it can also look like buying someone dinner, covering an
          expense during a difficult month, sharing household resources, saving toward something
          together, paying for an experience, picking up someone’s medication, or building financial
          security collaboratively.
        </p>
        <p>Financial care doesn’t require wealth.</p>
        <p>
          A $3 favorite snack can communicate as much as an expensive present when what it says is:
        </p>
        <p className="font-gallery text-xl italic text-room-brown">
          I had access to a resource and thought about how I could use it to care for you.
        </p>
      </StyleSection>

      <StyleSection title="Intellectual" quote="Let me inside your brain.">
        <p>For some people, exchanging ideas is intimacy.</p>
        <p>
          Intellectual connection can include deep conversations, friendly debates, learning
          together, asking questions, exchanging theories, discussing books or media, teaching each
          other things, and exploring how another person understands the world.
        </p>
        <p>
          Sometimes “What do you think about this?” is an invitation into intimacy.
        </p>
      </StyleSection>

      <StyleSection title="Physical" quote="I want to be close to you.">
        <p>Physical connection communicates affection through consensual touch and proximity.</p>
        <p>
          That might include cuddling, hugging, kissing, holding hands, leaning against one another,
          sitting close together, playing with someone’s hair, or brief affectionate touches
          throughout the day.
        </p>
        <p>
          Physical affection is also deeply individual. Someone can strongly value certain kinds of
          touch while disliking others.
        </p>
        <p>Consent remains part of the love language.</p>
      </StyleSection>

      <StyleSection title="Practical" quote="I’ll help carry this.">
        <p>Practical care turns affection into action.</p>
        <p>
          Cooking dinner. Doing dishes. Driving someone to an appointment. Fixing the broken
          cabinet. Picking something up from the store. Filling the gas tank. Handling an irritating
          phone call. Taking responsibility for part of the household.
        </p>
        <p>
          For someone who strongly identifies with practical love, reliability can itself feel
          romantic.
        </p>
      </StyleSection>

      <LoveLanguageCtaCard
        title="I Took the Quiz. Now What?"
        actions={
          <GuideCta
            href="/coaching#book"
            label="Book a Love Language Coaching Session →"
            isDominant
          />
        }
      >
        <p>Knowing that you score highly in Practical or Emotional love is useful.</p>
        <p>
          Knowing what that actually means when you’re dating someone, rebuilding a friendship,
          navigating polyamory, living with a partner, dealing with burnout, or trying to repair a
          disconnect is another question entirely.
        </p>
        <p>
          Love Language Coaching with Quinn turns your results into something you can actually use.
        </p>
        <p>
          Explore your giving and receiving patterns, identify places where your relationships are
          getting lost in translation, and build concrete ways to ask for and offer connection that
          work for the people actually involved.
        </p>
      </LoveLanguageCtaCard>

      <LearnMoreSection title="Five Neurodivergent Love Languages">
        <p>
          Neurodivergent communities have also developed playful language for forms of connection
          that may not be captured particularly well by traditional relationship frameworks.
        </p>
        <p>These aren’t clinical categories or universal characteristics of neurodivergent people.</p>
        <p>They’re community-created ways of saying:</p>
        <p className="font-gallery text-xl italic text-room-brown">Wait. You do that too?</p>
        <p>And you absolutely do not have to be neurodivergent to recognize yourself in them.</p>
      </LearnMoreSection>

      <StyleSection title="Parallel Play" quote="We don’t have to interact to be together.">
        <p>You’re playing a video game.</p>
        <p>They’re reading.</p>
        <p>Someone else is drawing.</p>
        <p>Nobody has spoken for 45 minutes.</p>
        <p>This can still be quality time.</p>
        <p>
          Parallel play means sharing space while independently engaging in separate activities,
          without requiring constant conversation or coordinated attention.
        </p>
        <p>
          For people who find sustained social interaction tiring, parallel play can offer
          companionship without performance.
        </p>
        <p className="font-gallery text-xl italic text-room-brown">Your presence is enough.</p>
      </StyleSection>

      <StyleSection title="Penguin Pebbling" quote="I found this and thought of you.">
        <BulletList
          items={[
            'A rock.',
            'A meme.',
            'A TikTok.',
            'A weird leaf.',
            'A screenshot.',
            'A snack.',
            'A song.',
            'A link to a 47-minute video essay you absolutely need to see.',
          ]}
        />
        <p>
          “Penguin pebbling” is the affectionate practice of collecting and sharing little things
          because they remind you of someone.
        </p>
        <p>The object isn’t necessarily the important part.</p>
        <p>The message underneath it is:</p>
        <p className="font-gallery text-xl italic text-room-brown">
          You existed in my mind even when you weren’t in the room.
        </p>
      </StyleSection>

      <StyleSection title="Infodumping" quote="I trust you with my enthusiasm.">
        <p>Sometimes intimacy sounds like:</p>
        <p className="font-gallery text-xl italic text-room-brown">
          “So first you need to understand the background lore…”
        </p>
        <p>
          Sharing a special interest or current fascination in enormous detail can be an act of
          vulnerability and connection.
        </p>
        <p>Listening can be one too.</p>
        <p>
          When somebody gives you access to the thing that makes their brain light up—and trusts
          that you won’t ridicule their excitement—they may be giving you something extraordinarily
          personal.
        </p>
        <p className="font-gallery text-xl italic text-room-brown">
          Come see the world through my brain for a minute.
        </p>
      </StyleSection>

      <LoveLanguageCtaCard
        title="Is Sending 14 Memes in a Row a Love Language?"
        actions={
          <GuideCta
            href="/love-languages/giving"
            label="Take the Neuroqueer Love & Connection Quizzes →"
            isDominant
          />
        }
      >
        <p>It can be here.</p>
        <p>
          Traditional relationship frameworks don’t always capture the ways neurodivergent people
          describe connection: parallel play, infodumping, pebbling, regulation, executive-function
          support, and sharing limited capacity.
        </p>
        <p>
          Our quizzes include all five neurodivergent connection styles alongside the seven modern
          styles so you don’t have to translate your relationships into a framework that doesn’t
          quite fit.
        </p>
      </LoveLanguageCtaCard>

      <StyleSection title="Support Swapping" quote="I have capacity where you don’t right now.">
        <p>Human capacity isn’t constant.</p>
        <p>
          Executive functioning disappears. Chronic illness flares. Sensory overload happens.
          Someone hasn’t eaten. Someone else cannot make the phone call. The laundry has become an
          adversary.
        </p>
        <p>
          Support swapping means treating care as collaborative and responsive rather than perfectly
          equal at every moment.
        </p>
        <p>Maybe you make the phone call because phone calls are easy for you.</p>
        <p>Maybe I drive because driving is easier for me.</p>
        <p>Maybe today you have eight spoons and I have two.</p>
        <p>Tomorrow that might reverse.</p>
        <p>Care becomes less about keeping score and more about asking:</p>
        <p className="font-gallery text-xl italic text-room-brown">
          What capacity do we have between us?
        </p>
      </StyleSection>

      <StyleSection title="Deep Pressure" quote="Help me feel grounded.">
        <p>Not all touch feels the same.</p>
        <p>
          Some people find light or unpredictable touch uncomfortable while finding firm, sustained,
          predictable pressure deeply regulating.
        </p>
        <p>
          This might include tight hugs, squeezes, lying against someone, weighted blankets,
          compression, or another mutually comfortable form of grounding sensory input.
        </p>
        <p>
          This category overlaps with physical affection, but the experience can be quite different.
        </p>
        <p>For some people, touch primarily communicates affection.</p>
        <p>For others, certain kinds of touch communicate:</p>
        <p className="font-gallery text-xl italic text-room-brown">My nervous system can settle here.</p>
      </StyleSection>

      <LearnMoreSection title="You Don’t Have One Love Language">
        <p>You might have three.</p>
        <p>Or seven.</p>
        <p>Or eleven.</p>
        <p>You may score highly across almost everything.</p>
        <p>You may also discover that none of these categories perfectly describe you.</p>
        <p>That’s useful information too.</p>
        <p>Rather than asking:</p>
        <p className="font-gallery text-xl italic text-room-brown">“What’s my love language?”</p>
        <p>Try asking:</p>
        <p className="font-gallery text-xl italic text-room-brown">
          “What actions reliably make me experience something as care?”
        </p>
        <p>That’s a much more interesting question.</p>
      </LearnMoreSection>

      <LoveLanguageCtaCard
        title="Build Your Love Language Profile"
        actions={
          <>
            <GuideCta href="/love-languages/giving" label="Take the Giving Love Quiz →" isDominant />
            <GuideCta href="/love-languages/receiving" label="Take the Receiving Love Quiz →" />
          </>
        }
      >
        <p>Forget finding your single “type.”</p>
        <p>Your results create a profile across:</p>
        <p className="font-display text-lg leading-relaxed text-room-teal">
          Activity • Appreciation • Emotional • Financial • Intellectual • Physical • Practical •
          Parallel Play • Penguin Pebbling • Infodumping • Support Swapping • Deep Pressure
        </p>
        <p>See which are core, strong, situational, or lower-priority ways you connect.</p>
      </LoveLanguageCtaCard>

      <LearnMoreSection title="Giving Love and Receiving Love Aren’t Necessarily the Same">
        <p>This distinction is one of the most important parts of our quizzes.</p>
        <p>
          Imagine someone who constantly sends their friends memes, interesting links, tiny gifts,
          and objects they found while walking.
        </p>
        <p>Their giving style might strongly include Penguin Pebbling.</p>
        <p>
          But when they are overwhelmed, what makes them feel most loved might be someone making
          dinner, handling an errand, and sitting quietly beside them.
        </p>
        <p>Their receiving styles might be Practical, Support Swapping, and Parallel Play.</p>
        <p>Neither answer is more authentic.</p>
        <p>They’re describing different things.</p>
        <p>Giving styles ask:</p>
        <p className="font-gallery text-xl italic text-room-brown">
          When I care about somebody, what do I instinctively want to do?
        </p>
        <p>Receiving styles ask:</p>
        <p className="font-gallery text-xl italic text-room-brown">
          What does somebody else do that makes care register most strongly for me?
        </p>
        <p>Knowing both can help explain a surprisingly common relationship experience:</p>
        <p className="font-gallery text-xl italic text-room-brown">
          “I’ve been showing you that I love you constantly.”
        </p>
        <p className="font-gallery text-xl italic text-room-brown">
          “I know—but I haven’t been feeling loved.”
        </p>
        <p>Neither person necessarily lacks care.</p>
        <p>They may need translation.</p>
      </LearnMoreSection>

      <LoveLanguageCtaCard
        title="Take Both. Compare the Difference."
        actions={
          <GuideCta
            href="/love-languages/giving"
            label="Take Both Love Language Quizzes →"
            isDominant
          />
        }
      >
        <p>
          <strong>Your Giving Profile:</strong> How you instinctively communicate “I care about you.”
        </p>
        <p>
          <strong>Your Receiving Profile:</strong> What makes your brain and body actually register
          “this person cares about me.”
        </p>
        <p>
          The interesting part isn’t just your highest score. It’s what happens when you put the two
          profiles beside each other.
        </p>
      </LoveLanguageCtaCard>

      <LearnMoreSection title="Your Languages Can Change Between Relationships">
        <p>Your profile doesn’t have to remain the same with everyone.</p>
        <p>
          You might love cuddling with a romantic partner but strongly prefer personal space with
          friends.
        </p>
        <p>
          You might infodump with your sibling, parallel-play with your roommate, seek emotional
          intimacy from your best friend, and build connection with a partner through adventures.
        </p>
        <p>
          You might express affection very differently with a new partner than with someone you’ve
          known for ten years.
        </p>
        <p>That doesn’t make one relationship less meaningful.</p>
        <p>Different relationships can speak different dialects of care.</p>
        <p>This is why you can also take the quizzes while thinking specifically about one person.</p>
        <p>Instead of only asking:</p>
        <p className="font-gallery text-xl italic text-room-brown">“How do I receive love?”</p>
        <p>Try:</p>
        <p className="font-gallery text-xl italic text-room-brown">
          “How do I receive love from this person?”
        </p>
        <p>Your answers might be surprisingly different.</p>
      </LearnMoreSection>

      <LearnMoreSection title="Your Languages Can Change With Capacity, Too">
        <p>Even within one relationship, what you need can change.</p>
        <p>During an ordinary week, Activity might make you feel connected.</p>
        <p>
          During burnout, Activity might sound exhausting while Practical Care, Parallel Play, and
          Support Swapping become incredibly meaningful.
        </p>
        <p>After conflict, you might particularly need Emotional connection and Appreciation.</p>
        <p>
          During grief, maybe you don’t want words at all—you want someone quietly sitting beside
          you.
        </p>
        <p>
          When you’re overstimulated, your normally beloved Physical connection might suddenly be
          the last thing your nervous system wants.
        </p>
        <p>Context changes care.</p>
        <p>
          A love-language profile should give you vocabulary for that flexibility—not erase it.
        </p>
      </LearnMoreSection>

      <LoveLanguageCtaCard
        title="My Results Depend Entirely on Who I’m Thinking About."
        actions={
          <GuideCta
            href="/coaching#book"
            label="Explore Love Language Coaching with Quinn →"
            isDominant
          />
        }
      >
        <p>Good. That’s information.</p>
        <p>
          Love Language Coaching can help you explore the relationship-specific version of your
          profile: what you want from partners, friends, chosen family, roommates, or other
          important people—and why those needs may change with trust, conflict, disability, burnout,
          sensory needs, or capacity.
        </p>
        <p>
          You don’t need to arrive knowing exactly what you need. Figuring that out is the point.
        </p>
      </LoveLanguageCtaCard>

      <LearnMoreSection title="When Two People’s Languages Don’t Match">
        <p>Imagine:</p>
        <p>You express love by doing someone’s dishes.</p>
        <p>They express love by telling you how much they appreciate you.</p>
        <p>You keep cleaning.</p>
        <p>They keep complimenting you.</p>
        <p>Eventually you’re thinking:</p>
        <p className="font-gallery text-xl italic text-room-brown">
          “Why am I doing everything around here?”
        </p>
        <p>And they’re thinking:</p>
        <p className="font-gallery text-xl italic text-room-brown">
          “Why don’t they ever tell me how they feel about me?”
        </p>
        <p>Both people may be putting substantial effort into the relationship.</p>
        <p>The problem isn’t necessarily the amount of love.</p>
        <p>Sometimes it’s the translation.</p>
        <p>Understanding each other’s profiles gives you an opportunity to say:</p>
        <BulletList
          items={[
            '“This is how I naturally show love.”',
            '“This is what makes me feel loved.”',
            '“What does that look like for you?”',
            '“Which things can we realistically give each other?”',
            '“Where might we need to intentionally do something that doesn’t come naturally?”',
          ]}
        />
        <p>That’s much more useful than expecting someone to correctly guess your needs.</p>
      </LearnMoreSection>

      <LearnMoreSection title="Love Languages Aren’t an Entitlement">
        <p>
          Understanding how you receive love doesn’t create an obligation for somebody else to
          provide it.
        </p>
        <p>
          “I have Physical as my love language” doesn’t mean another person owes you touch.
        </p>
        <p>
          “My love language is Emotional” doesn’t mean someone must be emotionally available at
          every moment.
        </p>
        <p>
          “Mine is Financial” doesn’t obligate someone to spend money they don’t have.
        </p>
        <p>
          “Support Swapping is how I feel loved” doesn’t make another person permanently responsible
          for your executive functioning.
        </p>
        <p>Needs can be real without automatically becoming another person’s obligation.</p>
        <p>The point of understanding love languages isn’t:</p>
        <p className="font-gallery text-xl italic text-room-brown">
          Here’s what you have to do for me.
        </p>
        <p>It’s:</p>
        <p className="font-gallery text-xl italic text-room-brown">
          Here’s something I’ve learned about how I experience connection. What does connection look
          like for you? And what can we realistically and consensually build together?
        </p>
        <p>That’s where the interesting conversation starts.</p>
      </LearnMoreSection>

      <LoveLanguageCtaCard
        title="Turn “I Need More Connection” Into Something You Can Actually Ask For"
        actions={
          <GuideCta href="/coaching#book" label="Book Love Language Coaching →" isDominant />
        }
      >
        <p>
          Sometimes the problem isn’t knowing that something feels missing. It’s figuring out what
          “more connection” would actually look like.
        </p>
        <p>
          In a Love Language Coaching session, Quinn can help you unpack your quiz results and turn
          broad needs into concrete, consent-based requests and experiments you can bring into your
          relationships.
        </p>
        <p>Instead of:</p>
        <p className="italic">“I need you to be more affectionate.”</p>
        <p>You might discover:</p>
        <p className="italic">
          “I’d like us to intentionally spend an hour parallel-playing together a few evenings a
          week.”
        </p>
        <p>Instead of:</p>
        <p className="italic">“I need more support.”</p>
        <p>Maybe what you actually mean is:</p>
        <p className="italic">
          “When I’m visibly overwhelmed, it helps when you offer one specific task you could take
          rather than asking me to figure out what I need.”
        </p>
        <p>Specific needs are easier to communicate, negotiate, and respond to.</p>
      </LoveLanguageCtaCard>

      <div className="space-y-6 rounded-md border-2 border-room-gold bg-room-teal/10 px-4 py-6 sm:px-6">
        <h2 className="font-display text-3xl text-room-teal sm:text-4xl">Map Your Love Languages</h2>
        <p>
          We’ve separated this assessment into two quizzes because how you give care and how you
          receive it can look completely different.
        </p>

        <RoomSection title="How Do You Give Love?">
          <p>Explore the behaviors you naturally use when someone matters to you.</p>
          <p>What do you instinctively offer?</p>
          <p>What might you already be doing that you didn’t realize was an expression of love?</p>
          <p>And which forms of affection require more conscious effort?</p>
          <GuideCta href="/love-languages/giving" label="Take the Giving Love Quiz →" isDominant />
        </RoomSection>

        <RoomSection title="How Do You Receive Love?">
          <p>
            Explore which behaviors most reliably make you feel seen, cared for, safe, valued, and
            connected.
          </p>
          <p>What actually registers as love?</p>
          <p>What feels nice but isn’t particularly important?</p>
          <p>What do you wish the people around you understood?</p>
          <GuideCta href="/love-languages/receiving" label="Take the Receiving Love Quiz →" isDominant />
        </RoomSection>

        <RoomSection title="Want to Understand the Results Together?">
          <p>
            Take both quizzes first, then bring your profiles to a Love Language Coaching session
            with Quinn.
          </p>
          <p>Together, you can explore:</p>
          <BulletList
            items={[
              'Where your giving and receiving styles match—and where they don’t.',
              'How your needs change across romantic, platonic, queerplatonic, familial, polyamorous, and other relationships.',
              'How neurodivergence, disability, sensory needs, executive functioning, and fluctuating capacity affect connection.',
              'Which forms of love you instinctively offer but other people may not recognize.',
              'Which kinds of care you need but have difficulty requesting.',
              'How to turn abstract needs into concrete, consensual requests.',
              'How two people’s different profiles can coexist without either person’s needs being treated as wrong.',
              'Ways to build connection rituals that actually fit your relationship instead of copying what relationships are “supposed” to look like.',
            ]}
          />
          <p>You don’t need to discover the correct way to love someone.</p>
          <p>You don’t need matching scores.</p>
          <p>You don’t need one primary love language.</p>
          <p>You need enough shared vocabulary to start asking better questions.</p>
          <GuideCta
            href="/love-languages/giving"
            label="Take Both Quizzes →"
            isDominant
          />
          <GuideCta href="/coaching#book" label="Book Love Language Coaching →" />
          <p>
            Because we’re not trying to put your relationships into twelve boxes. We’re trying to
            give you twelve more ways to talk about what love can look like.
          </p>
        </RoomSection>
      </div>

      <p className="text-center">
        <RoomLink href="/store">Back to the store</RoomLink>
      </p>
    </div>
  )
}
