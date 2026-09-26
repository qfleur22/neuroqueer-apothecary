import { SiteMapSection } from '@/models/site-map'

const HERBALISM_HREF =
  'https://docs.google.com/document/d/1qabSHxZLsznSrTdi7WFVSe-Am-ZjY53MOYj9PHRYaV8/edit?tab=t.0'

export const siteMapSections: SiteMapSection[] = [
  {
    id: 'start-here',
    title: '🏠 Start Here',
    entries: [
      {
        title: 'Home',
        description:
          'The front door to Neuroqueer Apothecary and a starting point for exploring resources, education, tools, and coaching.',
        href: '/',
        cta: 'Visit Home →',
      },
      {
        title: 'About Neuroqueer Apothecary',
        description:
          'Learn what Neuroqueer Apothecary is, who it’s for, and the values behind making complex information more accessible.',
        href: '/about',
        cta: 'About NQA →',
      },
      {
        title: 'How NQA Works',
        description:
          'What a purchase includes, why resources live on the site instead of as static PDFs, and how coaching is navigational support rather than clinical care.',
        href: '/how-nqa-works',
        cta: 'What Does This Get Me? →',
      },
      {
        title: 'About Quinn',
        description:
          'Meet Quinn Fleur and learn about the lived experience, community work, education, and resource-building behind Neuroqueer Apothecary.',
        href: '/about#quinn',
        cta: 'Meet Quinn →',
      },
      {
        title: 'Resource Library',
        description:
          'Browse Neuroqueer Apothecary’s growing collection of guides, tools, worksheets, quizzes, and educational resources.',
        href: '/resources',
        cta: 'Explore Resources →',
      },
      {
        title: 'Store',
        description:
          'Find downloadable guides, workshop kits, templates, educational materials, and other NQA resources.',
        href: '/store',
        cta: 'Visit the Store →',
      },
      {
        title: 'Your Profile',
        description:
          'See the Shopify account you signed in with, the resources that purchase unlocked, and quiz results saved in this browser.',
        href: '/profile',
        cta: 'Open Your Profile →',
      },
      {
        title: 'Your Library',
        description:
          'Open only the guides and kits attached to your Shopify purchases.',
        href: '/library',
        cta: 'Open Your Library →',
      },
    ],
  },
  {
    id: 'disability',
    title: '🦓 Disability, Chronic Illness & Healthcare',
    entries: [
      {
        title: 'So, You Think You’re Hypermobile?',
        description:
          'A trans- and neurodivergent-friendly guide to hypermobility, EDS, associated conditions, symptoms, evaluation, and figuring out where to go next.',
        href: '/store/so-you-think-youre-hypermobile',
        cta: 'Explore the Hypermobility Guide →',
      },
      {
        title: 'Quinn’s EDS & Disability Story',
        description:
          'Read about Quinn’s experience with hypermobility, EDS, disability, diagnosis, and navigating complex healthcare.',
        href: '/eds',
        cta: 'Read Quinn’s Story →',
      },
      {
        title: 'How to Create a Medical Binder',
        description:
          'Learn how to organize diagnoses, symptoms, medications, testing, providers, surgeries, timelines, and medical records into something clinicians can actually navigate.',
        href: '/diy-binder',
        cta: 'Create Your Medical Binder →',
      },
      {
        title: 'Custom Medical Binder Creation',
        description:
          'Get personalized help transforming scattered medical information and records into an organized, specialist-friendly medical binder.',
        href: '/custom-binder',
        cta: 'Explore Custom Binder Creation →',
      },
      {
        title: 'Medical Binder Coaching',
        description:
          'Work with Quinn to determine what belongs in your binder, organize complicated information, identify gaps, and prepare it for real-world appointments.',
        href: '/coaching#medical-binder',
        cta: 'Explore Medical Binder Coaching →',
      },
      {
        title: 'EDS / Hypermobility Roadmapping',
        description:
          'Get help figuring out possible next steps, specialists, evaluations, symptom areas, resources, and questions when navigating hypermobility or EDS care.',
        href: '/coaching#eds-roadmapping',
        cta: 'Explore EDS Roadmapping →',
      },
      {
        title: 'Resource Navigation: Charlotte & Beyond',
        description:
          'Get personalized help locating providers, community resources, services, organizations, and other supports that fit your needs.',
        href: '/coaching#resource-navigation',
        cta: 'Explore Resource Navigation →',
      },
      {
        title: 'Herbal Remedies Basics',
        description:
          'Learn the foundations of teas, tinctures, infused oils, menstrua, preservation, energetics, bioregional herbalism, and mindful wildcrafting.',
        href: HERBALISM_HREF,
        cta: 'Explore Herbal Remedies →',
      },
    ],
  },
  {
    id: 'care',
    title: '🌱 Care, Accessibility & Self-Support',
    entries: [
      {
        title: 'How to Make a Care Plan',
        description:
          'Create a personalized guide to your communication, needs, distress levels, supports, boundaries, comfort strategies, and crisis considerations.',
        href: '/care-plan',
        cta: 'Make a Care Plan →',
      },
      {
        title: 'Care Plan Creation Workshop Kit',
        description:
          'Use the NQA care-planning framework to facilitate an individual, peer, community, or organizational care-plan workshop.',
        href: '/care-plan-workshop',
        cta: 'Explore the Workshop Kit →',
      },
      {
        title: 'Care Menu Builder',
        description:
          'Find care and regulation activities based on the time, energy, spoons, type of rest, desired effect, accessibility needs, and capacity you actually have right now.',
        href: '/care-plan',
        cta: 'Build a Care Menu →',
      },
      {
        title: 'Sleep Hygiene',
        description:
          'Explore sleep barriers, routines, rest, and realistic sleep-support strategies through a neurodivergent- and disability-conscious lens.',
        href: '/care-plan',
        cta: 'Explore Sleep Hygiene →',
      },
    ],
  },
  {
    id: 'trans',
    title: '🏳️‍⚧️ Trans & Gender',
    entries: [
      {
        title: 'Transition Guide: Now What?',
        description:
          'A community-centered guide to questioning gender and exploring social transition, HRT, surgery, healthcare, legal changes, presentation, and the enormous range of possibilities that can make up a transition.',
        href: '/transition',
        cta: 'Explore Transition Guide: Now What? →',
      },
      {
        title: 'Charlotte Trans Resources',
        description:
          'Find trans-affirming healthcare providers, community organizations, support networks, and other resources in Charlotte and surrounding areas.',
        href: '/charlotte',
        cta: 'Explore Charlotte Resources →',
      },
      {
        title: 'DIY HRT & Harm Reduction',
        description:
          'Learn about HRT access, laboratory monitoring, medication considerations, and harm-reduction approaches when traditional healthcare access is limited.',
        href: '/transition',
        cta: 'Explore HRT Resources →',
      },
      {
        title: 'Trans Voice Resources',
        description:
          'Find affirming voice-training, speech therapy, and other resources for exploring your voice on your own terms.',
        href: '/transition',
        cta: 'Explore Voice Resources →',
      },
      {
        title: 'Queer Sex, Consent & Bodily Autonomy',
        description:
          'A trans- and neurodivergent-informed toolkit for bodily autonomy, boundaries, consent, communication, safer sex, and intimacy, with a companion worksheet.',
        href: '/bodily-autonomy',
        cta: 'Explore the Guide →',
      },
      {
        title: 'Know Your Rights: Bodily Autonomy, Boundaries & Consent',
        description:
          'Explore practical tools for understanding bodily autonomy, boundaries, consent, healthcare interactions, and self-advocacy.',
        href: '/consent',
        cta: 'Know Your Rights →',
      },
      {
        title: 'Know Your Rights Workshop',
        description:
          'Bring bodily autonomy, consent, boundaries, and self-advocacy into an interactive educational or community workshop.',
        href: '/consent-workshop',
        cta: 'Explore the Workshop →',
      },
    ],
  },
  {
    id: 'relationships',
    title: '💖 Relationships & Connection',
    entries: [
      {
        title: 'Love Languages: Mapping How We Give & Receive Care',
        description:
          'Explore twelve ways people may communicate and experience care, including seven modern connection styles and five neurodivergent love languages.',
        href: '/love-languages',
        cta: 'Explore Love Languages →',
      },
      {
        title: 'Giving Love Language Quiz',
        description:
          'Discover the ways you naturally communicate affection, support, attention, and connection to people you care about.',
        href: '/love-languages/giving',
        cta: 'Take the Giving Quiz →',
      },
      {
        title: 'Receiving Love Language Quiz',
        description:
          'Discover which forms of affection, support, attention, and connection most reliably register as love for you.',
        href: '/love-languages/receiving',
        cta: 'Take the Receiving Quiz →',
      },
      {
        title: 'Queer Sex, Consent & Bodily Autonomy',
        description:
          'Practice bodily autonomy, consent, communication, and boundaries—whether or not sex is part of the picture.',
        href: '/bodily-autonomy',
        cta: 'Explore Bodily Autonomy →',
      },
      {
        title: 'Love Language Coaching',
        description:
          'Work with Quinn to interpret your giving and receiving profiles and turn abstract needs into specific, realistic, consent-based ways of building connection.',
        href: '/coaching#love-language-coaching',
        cta: 'Explore Love Language Coaching →',
      },
      {
        title: 'Relationship-Specific Love Language Profile',
        description:
          'Explore how your giving and receiving styles change when you’re thinking specifically about a partner, friend, roommate, family member, or other important relationship.',
        href: '/love-languages',
        cta: 'Build a Relationship Profile →',
      },
      {
        title: 'Love Language Comparison',
        description:
          'Compare two people’s profiles to explore overlaps, mismatches, unrecognized expressions of care, and opportunities for connection.',
        href: '/love-languages',
        cta: 'Compare Your Profiles →',
      },
    ],
  },
  {
    id: 'neurodivergence',
    title: '🧠 Autism, ADHD & Neurodivergence',
    entries: [
      {
        title: 'Neurodivergent Love Languages',
        description:
          'Explore Parallel Play, Penguin Pebbling, Infodumping, Support Swapping, and Deep Pressure as community-created ways of talking about connection.',
        href: '/love-languages',
        cta: 'Explore Neurodivergent Love Languages →',
      },
      {
        title: 'Neurodivergent Relationships',
        description:
          'Explore communication, sensory needs, executive functioning, regulation, capacity, and connection in neurodivergent relationships.',
        href: '/love-languages',
        cta: 'Explore Neurodivergent Relationships →',
      },
      {
        title: 'Executive Function & Support Swapping',
        description:
          'Find practical approaches to task initiation, body doubling, reminders, fluctuating capacity, shared responsibilities, and collaborative support.',
        href: '/love-languages',
        cta: 'Explore Support Swapping →',
      },
    ],
  },
  {
    id: 'food',
    title: '🍓 Food, ARFID & GI Support',
    entries: [
      {
        title: 'ARFID Resources',
        description:
          'Explore nonjudgmental resources for restrictive eating, sensory barriers, executive-function challenges, safe foods, and finding appropriate support.',
        href: '/resources',
        cta: 'Explore ARFID Resources →',
      },
      {
        title: 'Low-FODMAP Resources',
        description:
          'Understand and navigate the low-FODMAP process while keeping the focus on personalization rather than unnecessary permanent restriction.',
        href: '/resources',
        cta: 'Explore Low-FODMAP →',
      },
      {
        title: 'Food, Sensory Needs & Neurodivergence',
        description:
          'Explore how sensory processing, predictability, executive functioning, interoception, and neurodivergence can affect food and eating.',
        href: '/resources',
        cta: 'Explore Food & Neurodivergence →',
      },
    ],
  },
  {
    id: 'anime',
    title: '🎬 Anime, Media & Education',
    entries: [
      {
        title: 'Trans+ Representation in Anime',
        description:
          'Explore trans, gender-diverse, and gender-nonconforming anime representation through agency, respect, community, depth, intersectionality, and context.',
        href: '/anime',
        cta: 'Explore Trans+ Anime →',
      },
      {
        title: 'Trans Representation in Anime Panel Kit',
        description:
          'Get a ready-to-use framework, research, examples, discussion prompts, and materials for presenting a panel on trans representation in anime.',
        href: '/anime-panel',
        cta: 'Get the Panel Kit →',
      },
      {
        title: 'Workshops & Panels',
        description:
          'Explore available NQA workshops, convention panels, community education, presentations, and facilitated discussions.',
        href: '/coaching#workshops',
        cta: 'Explore Workshops & Panels →',
      },
      {
        title: 'Custom Workshop / Panel Development',
        description:
          'Work with Quinn to build educational programming around neurodivergence, disability, transness, relationships, care planning, media, or another area of expertise.',
        href: '/coaching#custom',
        cta: 'Create a Workshop or Panel →',
      },
    ],
  },
  {
    id: 'shop',
    title: '🛍️ Shop & Resource Library',
    entries: [
      {
        title: 'Resource Library',
        description:
          'Browse guides, educational resources, worksheets, interactive tools, and other materials from across Neuroqueer Apothecary.',
        href: '/resources',
        cta: 'Browse All Resources →',
      },
      {
        title: 'Store',
        description:
          'Shop downloadable guides, templates, workshop materials, educational resources, and other NQA creations.',
        href: '/store',
        cta: 'Shop Neuroqueer Apothecary →',
      },
      {
        title: 'Free Resources',
        description: 'Find guides, tools, and information that are freely available to use, save, and share.',
        href: '/resources',
        cta: 'Browse Free Resources →',
      },
      {
        title: 'Quizzes & Assessments',
        description:
          'Explore interactive self-reflection tools designed to help put language around your experiences, needs, relationships, and patterns.',
        href: '/love-languages',
        cta: 'Take a Quiz →',
      },
      {
        title: 'Workshop Kits',
        description:
          'Find facilitator-ready resources for community groups, organizations, conventions, peer-support spaces, and educational programs.',
        href: '/store',
        cta: 'Browse Workshop Kits →',
      },
    ],
  },
  {
    id: 'coaching',
    title: '💬 Coaching & Consults',
    entries: [
      {
        title: 'Coaching & Consults',
        description:
          'Explore one-on-one support for navigating information, building resources, understanding your needs, and figuring out where to go next.',
        href: '/coaching',
        cta: 'Explore Coaching →',
      },
      {
        title: 'Free 15-Minute Consult',
        description:
          'Tell Quinn what you’re working through ahead of time and he’ll arrive with information, immediate resources, and possible directions for your care, idea, panel, project, or plan.',
        href: '/coaching#book',
        cta: 'Book a Free Consult →',
      },
      {
        title: 'Medical Binder Coaching',
        description:
          'Get help making your medical history understandable, navigable, and useful in actual healthcare appointments.',
        href: '/coaching#medical-binder',
        cta: 'Medical Binder Coaching →',
      },
      {
        title: 'EDS Roadmapping',
        description:
          'Map out questions, resources, specialties, and possible next steps for navigating hypermobility and EDS care.',
        href: '/coaching#eds-roadmapping',
        cta: 'EDS Roadmapping →',
      },
      {
        title: 'Resource Navigation',
        description:
          'Get help finding providers, programs, organizations, community resources, and services in Charlotte and beyond.',
        href: '/coaching#resource-navigation',
        cta: 'Resource Navigation →',
      },
      {
        title: 'Love Language Coaching',
        description:
          'Explore how you give and receive care, how those patterns change between relationships, and how to communicate what connection actually looks like for you.',
        href: '/coaching#love-language-coaching',
        cta: 'Love Language Coaching →',
      },
      {
        title: 'Custom Coaching',
        description:
          'Have something that doesn’t fit neatly into a category? Bring your care question, resource problem, workshop idea, project, or plan and figure out the next steps with Quinn.',
        href: '/coaching#custom-session',
        cta: 'Explore Custom Coaching →',
      },
    ],
  },
]
