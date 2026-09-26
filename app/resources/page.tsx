import type { Metadata } from 'next'
import { RoomPage, WallCard } from '@/components/home/room-page'
import { ResourceSections } from '@/components/home/resource-sections'
import { ResourceGroup } from '@/models/resource-group'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Herbalism, disability, trans, relationship, and Charlotte resources from the Neuroqueer Apothecary.',
}

const groups: ResourceGroup[] = [
  {
    id: 'herbalism',
    title: 'Herbalism things',
    items: [
      {
        name: 'Herbalism notes',
        href: 'https://docs.google.com/document/d/1qabSHxZLsznSrTdi7WFVSe-Am-ZjY53MOYj9PHRYaV8/edit?tab=t.0',
        description: 'A living document of herbal notes, references, and practice.',
      },
    ],
  },
  {
    id: 'charlotte',
    title: 'Charlotte things',
    href: '/charlotte',
    cta: '→',
    items: [
      {
        name: 'Charlotte resource guide',
        href: '/charlotte',
        description:
          'Healthcare, food, housing, clothing, funding, social groups, friendly shops, and more — gathered in one room for folks in Charlotte.',
      },
      {
        name: 'Charlotte food bank list',
        href: 'https://docs.google.com/spreadsheets/d/1JJEE7FSAIjQl46QESpXExwSQr0J_SUbRFqi37jOuY9Q/edit?usp=sharing',
        description: 'A Charlotte-area food pantry and free-food spreadsheet.',
      },
    ],
  },
  {
    id: 'trans',
    title: 'Trans things',
    items: [
      {
        name: 'Transition Guide: Now What?',
        href: '/transition',
        description:
          'A practical transition guide for questioning, exploring, and building a life that feels more like yours.',
        showDollar: true,
      },
      {
        name: 'Trans+ Representation in Anime',
        href: '/anime',
        description:
          'Explore the characters, stories, history, and wonderfully complicated relationship between anime and gender.',
        showDollar: true,
      },
      {
        name: 'Trans Representation in Anime Panel Kit',
        href: '/anime-panel',
        description:
          'A ready-to-present panel kit with the PowerPoint, presenter notes, and research spreadsheet already built.',
        showDollar: true,
      },
      {
        name: 'Queer Sex, Consent & Bodily Autonomy',
        href: '/bodily-autonomy',
        description:
          'A trans- and neurodivergent-informed toolkit for bodily autonomy, boundaries, consent, communication, safer sex, and intimacy—plus a companion worksheet.',
        showDollar: true,
      },
      {
        name: 'Know your rights, boundaries, and consent',
        href: '/consent',
        description: 'A primer on rights, boundaries, and consent.',
      },
    ],
  },
  {
    id: 'relationships',
    title: 'Relationship things',
    href: '/love-languages',
    cta: '→',
    items: [
      {
        name: 'Love languages',
        href: '/love-languages',
        description:
          'Twelve ways people may communicate and experience care, including seven modern connection styles and five neurodivergent love languages.',
      },
      {
        name: 'Giving love language quiz',
        href: '/love-languages/giving',
        description:
          'Discover the ways you naturally communicate affection, support, attention, and connection.',
      },
      {
        name: 'Receiving love language quiz',
        href: '/love-languages/receiving',
        description:
          'Discover which forms of affection, support, attention, and connection most reliably register as love for you.',
      },
      {
        name: 'Love language coaching',
        href: '/coaching#love-language-coaching',
        description:
          'Work with Quinn to turn giving and receiving profiles into specific, realistic, consent-based ways of building connection.',
      },
      {
        name: 'Queer Sex, Consent & Bodily Autonomy',
        href: '/bodily-autonomy',
        description:
          'A bodily autonomy and communication resource first—useful whether you are sexually active, exploring kink, or practicing boundaries.',
        showDollar: true,
      },
    ],
  },
  {
    id: 'disability',
    title: 'Disability things',
    items: [
      {
        name: 'Symptom flowchart',
        href: '/flowchart',
        description:
          'A symptom-navigation tool for people with EDS/HSD. Choose what you are feeling right now and get safer next-step guidance. This does not diagnose a cause.',
      },
      {
        name: 'So, You Think You’re Hypermobile?',
        href: '/store/so-you-think-youre-hypermobile',
        description:
          'A practical guide to hypermobility, Ehlers-Danlos syndrome, and figuring out what the hell your body is doing.',
        showDollar: true,
      },
      {
        name: 'How to Make Your Own Medical Binder',
        href: '/diy-binder',
        description:
          'A DIY guide and blank template for turning a scattered medical history into something you can actually use at appointments.',
        showDollar: true,
      },
      {
        name: 'Custom Medical Binder Creation',
        href: '/custom-binder',
        description:
          'A done-for-you service that turns your scattered medical history into an organized, usable medical binder.',
        showDollar: true,
      },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <RoomPage>
      <WallCard title="Resources" wide>
        <p>A handful of guides and notes from the Neuroqueer Apothecary.</p>
        <ResourceSections groups={groups} />
      </WallCard>
    </RoomPage>
  )
}
