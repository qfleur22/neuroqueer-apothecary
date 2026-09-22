import { StoreProduct } from '@/models/store-product'

export const storeProducts: StoreProduct[] = [
  {
    slug: 'so-you-think-youre-hypermobile',
    name: 'So, You Think You’re Hypermobile?',
    summary:
      'A practical guide to hypermobility, Ehlers-Danlos syndrome, and figuring out what the hell your body is doing.',
    href: '/store/so-you-think-youre-hypermobile',
    tagline: 'from one trans EDSer to another',
  },
  {
    slug: 'so-you-think-youre-trans',
    name: 'Transition Guide',
    summary:
      'A practical transition guide for questioning, exploring, and building a life that feels more like yours.',
    href: '/transition',
    tagline: 'from one trans person to another',
  },
  {
    slug: 'trans-representation-in-anime',
    name: 'Trans+ Representation in Anime',
    summary:
      'Explore the characters, stories, history, and wonderfully complicated relationship between anime and gender.',
    href: '/anime',
    tagline: 'a guide, a database, a panel',
  },
  {
    slug: 'trans-representation-in-anime-panel-kit',
    name: 'Trans Representation in Anime Panel Kit',
    summary:
      'A ready-to-present panel kit with the PowerPoint, presenter notes, and research spreadsheet already built.',
    href: '/anime-panel',
    tagline: 'slides, notes, research',
  },
  {
    slug: 'diy-medical-binder',
    name: 'How to Make Your Own Medical Binder',
    summary:
      'A DIY guide and blank template for turning a scattered medical history into something you can actually use at appointments.',
    href: '/diy-binder',
    tagline: 'your history, in one place',
  },
  {
    slug: 'custom-medical-binder',
    name: 'Custom Medical Binder Creation',
    summary:
      'A done-for-you service that turns your scattered medical history into an organized, usable medical binder.',
    href: '/custom-binder',
    tagline: 'you provide the records, I build the map',
  },
  {
    slug: 'care-plan',
    name: 'How to Make a Care Plan',
    summary:
      'A practical care-plan system for neurodivergence, chronic illness, disability, mental health, overwhelm, and everyday support.',
    href: '/care-plan',
    tagline: 'a manual for being you',
  },
  {
    slug: 'care-plan-workshop-kit',
    name: 'Care Plan Creation Workshop Kit',
    summary:
      'A ready-to-facilitate workshop so your community can make care plans—curriculum, prompts, and facilitation structure included.',
    href: '/care-plan-workshop',
    tagline: 'ready to facilitate',
  },
  {
    slug: 'know-your-rights',
    name: 'Know Your Rights: Bodily Autonomy, Boundaries & Consent',
    summary:
      'A practical guide to autonomy in our bodies, relationships, medical care, communities, and everyday lives.',
    href: '/consent',
    tagline: 'your body, your choice',
  },
  {
    slug: 'know-your-rights-workshop',
    name: 'Know Your Rights Workshop & Presentation Kit',
    summary:
      'A community conversation about power, safety, and reclaiming our bodies—slides and presenter notes included.',
    href: '/consent-workshop',
    tagline: 'slides, notes, ready to present',
  },
  {
    slug: 'love-languages',
    name: 'Love Languages: Giving & Receiving Quizzes',
    summary:
      'Two quizzes that map how you give love and what actually makes you feel loved—including parallel play, penguin pebbling, infodumping, support swapping, and deep pressure.',
    href: '/love-languages',
    tagline: 'most of us are multilingual',
  },
]

export const getStoreProduct = ({ slug }: { slug: string }) => {
  return storeProducts.find((product) => product.slug === slug)
}
