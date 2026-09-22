import {
  LoveLanguageBand,
  LoveLanguageKind,
  LoveLanguageQuestion,
  LoveLanguageRating,
  LoveLanguageStyle,
} from '@/models/love-language'

export const loveLanguageStyles: LoveLanguageStyle[] = [
  { id: 'activity', name: 'Activity' },
  { id: 'appreciation', name: 'Appreciation' },
  { id: 'emotional', name: 'Emotional' },
  { id: 'financial', name: 'Financial' },
  { id: 'intellectual', name: 'Intellectual' },
  { id: 'physical', name: 'Physical' },
  { id: 'practical', name: 'Practical' },
  { id: 'parallel-play', name: 'Parallel Play' },
  { id: 'penguin-pebbling', name: 'Penguin Pebbling' },
  { id: 'infodumping', name: 'Infodumping' },
  { id: 'support-swapping', name: 'Support Swapping' },
  { id: 'deep-pressure', name: 'Deep Pressure' },
]

export const givingScaleLabels: Record<LoveLanguageRating, string> = {
  1: 'Not like me',
  2: 'A little like me',
  3: 'Sometimes like me',
  4: 'Very much like me',
  5: 'Extremely like me / I do this constantly',
}

export const receivingScaleLabels: Record<LoveLanguageRating, string> = {
  1: 'Not meaningful to me',
  2: 'A little meaningful',
  3: 'Somewhat meaningful',
  4: 'Very meaningful',
  5: 'Extremely meaningful / this strongly makes me feel loved',
}

export const givingBands: LoveLanguageBand[] = [
  {
    id: 'core',
    min: 13,
    max: 15,
    title: 'Core Giving Style',
    description: 'This is probably one of the ways you most instinctively communicate care.',
  },
  {
    id: 'strong',
    min: 10,
    max: 12,
    title: 'Strong Giving Style',
    description: 'This is an important part of how you tend to care for people.',
  },
  {
    id: 'situational',
    min: 7,
    max: 9,
    title: 'Situational Giving Style',
    description: 'You use this form of care, but it may depend heavily on the relationship or circumstances.',
  },
  {
    id: 'lower',
    min: 3,
    max: 6,
    title: 'Less-Natural Giving Style',
    description:
      'This probably isn’t one of your automatic ways of expressing affection. You may still intentionally use it when it’s meaningful to someone you love.',
  },
]

export const receivingBands: LoveLanguageBand[] = [
  {
    id: 'core',
    min: 13,
    max: 15,
    title: 'Core Receiving Style',
    description: 'This is likely one of the clearest ways that care registers as care for you.',
  },
  {
    id: 'strong',
    min: 10,
    max: 12,
    title: 'Strong Receiving Style',
    description: 'This form of connection is meaningful and probably contributes substantially to feeling loved.',
  },
  {
    id: 'situational',
    min: 7,
    max: 9,
    title: 'Situational Receiving Style',
    description: 'You may enjoy this depending on the person, context, energy level, or circumstances.',
  },
  {
    id: 'lower',
    min: 3,
    max: 6,
    title: 'Lower-Priority Receiving Style',
    description:
      'This isn’t usually one of the main things that makes you experience connection. That doesn’t necessarily mean you dislike it.',
  },
]

export const givingQuestions: LoveLanguageQuestion[] = [
  {
    number: 1,
    text: 'When I care about someone, I want to make plans for things we can experience together.',
  },
  {
    number: 2,
    text: 'I regularly tell people I care about the specific things I admire or appreciate about them.',
  },
  {
    number: 3,
    text: 'When someone I love is struggling, my instinct is to listen, understand what they’re feeling, and stay emotionally present with them.',
  },
  {
    number: 4,
    text: 'When I have the resources, I enjoy paying for things, treating someone, sharing what I have, or buying things that make their life easier.',
  },
  {
    number: 5,
    text: 'I show interest in someone by asking what they think and engaging deeply with their ideas.',
  },
  {
    number: 6,
    text: 'When it’s welcome, I naturally express affection through hugs, cuddling, holding hands, leaning against someone, kisses, or other physical closeness.',
  },
  {
    number: 7,
    text: 'If someone I care about is busy or stressed, I often look for a concrete task I can take care of for them.',
  },
  {
    number: 8,
    text: 'I like spending time near people I care about even when we’re doing completely separate things.',
  },
  {
    number: 9,
    text: 'I frequently send people memes, videos, songs, screenshots, links, snacks, tiny gifts, or random objects because they reminded me of them.',
  },
  {
    number: 10,
    text: 'Sharing something I’m fascinated by in great detail is one way I invite people into my world.',
  },
  {
    number: 11,
    text: 'I naturally adjust responsibilities based on who has more energy or capacity that day.',
  },
  {
    number: 12,
    text: 'When someone I care about enjoys it, I like offering firm hugs, squeezes, weight, or other grounding physical contact.',
  },
  {
    number: 13,
    text: 'I frequently suggest games, trips, projects, restaurants, events, hobbies, or other things we could do together.',
  },
  {
    number: 14,
    text: 'I make an effort to recognize people’s accomplishments, effort, growth, or qualities out loud.',
  },
  {
    number: 15,
    text: 'I check in on people’s emotional worlds rather than only asking what they’ve been doing.',
  },
  {
    number: 16,
    text: 'Sharing food, transportation, household resources, money, or other material resources feels like a natural part of caring for people.',
  },
  {
    number: 17,
    text: 'I send people articles, questions, theories, books, videos, or ideas because I want to know what they think.',
  },
  {
    number: 18,
    text: 'I naturally reach for affectionate physical contact with people I’m close to when I know they welcome it.',
  },
  {
    number: 19,
    text: 'I often show love by cooking, cleaning, driving, fixing, organizing, running errands, or otherwise making someone’s day easier.',
  },
  {
    number: 20,
    text: 'I don’t need constant conversation to enjoy someone’s company. I’m happy simply existing in the same space.',
  },
  {
    number: 21,
    text: 'If I find something small that feels very them, I want to bring it back to them.',
  },
  {
    number: 22,
    text: 'When someone shows interest in one of my passions, I want to tell them everything about it.',
  },
  {
    number: 23,
    text: 'When someone is out of spoons, I look for things I can temporarily carry for them.',
  },
  {
    number: 24,
    text: 'I like being able to help someone regulate or settle through the kinds of firm, predictable physical contact they enjoy.',
  },
  {
    number: 25,
    text: 'Some of my favorite ways to build relationships involve creating memories together.',
  },
  {
    number: 26,
    text: 'I frequently say things like “I’m proud of you,” “I appreciate you,” or “I noticed how hard you worked.”',
  },
  {
    number: 27,
    text: 'When someone shares something vulnerable, I try to make it safe for them to keep sharing.',
  },
  {
    number: 28,
    text: 'I sometimes spend money specifically because I know it can create comfort, access, security, or joy for someone I love.',
  },
  {
    number: 29,
    text: 'Teaching each other things and exploring ideas together is one way I build intimacy.',
  },
  {
    number: 30,
    text: 'Small affectionate touches throughout the day are one of the ways I communicate closeness.',
  },
  {
    number: 31,
    text: 'When I notice something needs doing, I prefer to actually do something rather than only say “let me know if you need anything.”',
  },
  {
    number: 32,
    text: 'Being quietly occupied beside someone can feel like actively spending time with them.',
  },
  {
    number: 33,
    text: 'My messages to people I love frequently amount to some version of “LOOK AT THIS. IT MADE ME THINK OF YOU.”',
  },
  {
    number: 34,
    text: 'Sharing my niche interests, elaborate theories, favorite facts, or current obsession is something I do more with people I trust.',
  },
  {
    number: 35,
    text: 'I offer reminders, body doubling, task-starting help, transportation, planning help, or other executive-function support when someone wants it.',
  },
  {
    number: 36,
    text: 'Firm physical reassurance can be one of the ways I communicate “you’re safe with me.”',
  },
]

export const receivingQuestions: LoveLanguageQuestion[] = [
  {
    number: 1,
    text: 'I feel especially connected when someone makes plans to experience something with me.',
  },
  {
    number: 2,
    text: 'Hearing specifically what someone appreciates or admires about me makes me feel loved.',
  },
  {
    number: 3,
    text: 'When I’m struggling, someone staying emotionally present and genuinely trying to understand me makes me feel cared for.',
  },
  {
    number: 4,
    text: 'I feel cared for when someone willingly shares money or resources to make my life easier, safer, or more enjoyable.',
  },
  {
    number: 5,
    text: 'Deep conversations where someone genuinely engages with my thoughts make me feel close to them.',
  },
  {
    number: 6,
    text: 'Welcome physical affection—such as cuddling, holding hands, leaning against each other, hugs, or kisses—makes me feel connected.',
  },
  {
    number: 7,
    text: 'Someone taking care of an annoying or difficult task for me can feel deeply loving.',
  },
  {
    number: 8,
    text: 'I feel close to someone when we can comfortably share space without needing to constantly interact.',
  },
  {
    number: 9,
    text: 'Receiving a meme, song, tiny object, snack, screenshot, or other “this made me think of you” gesture can make my entire day.',
  },
  {
    number: 10,
    text: 'When someone genuinely listens to me explain something I’m passionate about, I feel accepted and understood.',
  },
  {
    number: 11,
    text: 'I feel cared for when someone recognizes that I’m low on capacity and willingly helps carry something.',
  },
  {
    number: 12,
    text: 'When I want it, firm or grounding physical contact can create a particularly strong feeling of safety and connection.',
  },
  {
    number: 13,
    text: 'Going somewhere, trying something, making something, playing something, or having an experience together makes me feel close to people.',
  },
  {
    number: 14,
    text: 'Being explicitly recognized for my effort, growth, qualities, or accomplishments matters to me.',
  },
  {
    number: 15,
    text: 'I value people who can sit with my difficult emotions without immediately fixing, minimizing, or escaping them.',
  },
  {
    number: 16,
    text: 'Someone buying dinner, sharing supplies, covering an expense, giving me something useful, or otherwise sharing resources can communicate care strongly to me.',
  },
  {
    number: 17,
    text: 'I feel connected when someone is curious about my opinions and wants to explore ideas with me.',
  },
  {
    number: 18,
    text: 'Regular affectionate physical contact helps maintain my sense of connection with someone.',
  },
  {
    number: 19,
    text: 'Someone cooking, cleaning, driving, fixing, organizing, making a call, or handling an errand for me can make me feel very supported.',
  },
  {
    number: 20,
    text: 'Quietly doing separate things beside someone can feel just as intimate as actively doing something together.',
  },
  {
    number: 21,
    text: 'Small things someone collected or saved specifically because they thought of me feel particularly meaningful.',
  },
  {
    number: 22,
    text: 'Someone willingly entering my special interest, hobby, elaborate theory, collection, or current obsession makes me feel trusted and accepted.',
  },
  {
    number: 23,
    text: 'I feel secure in relationships where responsibilities can change depending on each person’s capacity.',
  },
  {
    number: 24,
    text: 'When I’m overwhelmed, the right kind of firm or sustained pressure can sometimes feel more comforting than words.',
  },
  {
    number: 25,
    text: 'Looking back on things we’ve experienced together strengthens my feeling of connection with someone.',
  },
  {
    number: 26,
    text: 'Statements like “I’m proud of you,” “I appreciate you,” or “I noticed what you did” have a strong emotional impact on me.',
  },
  {
    number: 27,
    text: 'I feel safest with people who make genuine room for my emotional experience.',
  },
  {
    number: 28,
    text: 'Someone choosing to use their resources to care for me can make me feel valued and considered.',
  },
  {
    number: 29,
    text: 'Being able to spend hours discussing a question, story, theory, subject, or idea can feel intimate.',
  },
  {
    number: 30,
    text: 'When I go a long time without affectionate touch from someone I’m normally physically close with, I notice its absence.',
  },
  {
    number: 31,
    text: 'Someone noticing what needs to be done and handling it without requiring me to manage the entire process makes me feel cared for.',
  },
  {
    number: 32,
    text: 'I love relationships where silence is comfortable and neither of us has to entertain the other person.',
  },
  {
    number: 33,
    text: '“I saw this and immediately thought of you” is one of my favorite things to hear.',
  },
  {
    number: 34,
    text: 'When someone is excited to listen to me talk at length about something I love, I feel closer to them.',
  },
  {
    number: 35,
    text: 'Body doubling, reminders, help getting started, task support, or someone asking “what can I take off your plate?” can make me feel deeply supported.',
  },
  {
    number: 36,
    text: 'Firm hugs, squeezes, weight, or other welcome grounding pressure can give me a kind of connection that ordinary light touch doesn’t.',
  },
]

export const givingReflectionPrompts = [
  'My strongest giving styles are:',
  'I tend to show people I love them by:',
  'Something I do as an expression of love that people sometimes don’t recognize as love is:',
  'I express love differently depending on the relationship when:',
  'A way of expressing love I’d like to practice more intentionally is:',
]

export const receivingReflectionPrompts = [
  'The things that most reliably make me feel loved are:',
  'Things people sometimes do for me as expressions of love that don’t register very strongly for me are:',
  'Something I wish people understood about how I receive care is:',
  'My needs change when I’m stressed, overwhelmed, sick, burned out, or low on capacity in these ways:',
  'In this particular relationship, I especially want more:',
  'I especially want less:',
  'One concrete thing this person could do that would help me feel connected is:',
  'One concrete thing I can ask them about their own connection needs is:',
]

export const getLoveLanguageBands = ({ kind }: { kind: LoveLanguageKind }) => {
  if (kind === 'giving') {
    return givingBands
  }

  return receivingBands
}
