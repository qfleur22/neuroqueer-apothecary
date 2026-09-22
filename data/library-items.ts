import { LibraryItem } from '@/models/library-item'

export const libraryItems: LibraryItem[] = [
  {
    slug: 'so-you-think-youre-hypermobile',
    handle: 'so-you-think-youre-hypermobile',
    title: 'So, You Think You’re Hypermobile?',
    href: '/library/so-you-think-youre-hypermobile',
    salesHref: '/store/so-you-think-youre-hypermobile',
  },
  {
    slug: 'so-you-think-youre-trans',
    handle: 'so-you-think-youre-trans',
    title: 'Transition Guide',
    href: '/library/so-you-think-youre-trans',
    salesHref: '/transition',
  },
  {
    slug: 'trans-representation-in-anime-panel-kit',
    handle: 'trans-representation-in-anime-panel-kit',
    title: 'Trans Representation in Anime Panel Kit',
    href: '/library/trans-representation-in-anime-panel-kit',
    salesHref: '/anime-panel',
  },
  {
    slug: 'trans-representation-in-anime-presentation',
    handle: 'trans-representation-in-anime-presentation',
    title: 'Trans+ Representation in Anime Presentation',
    href: '/library/trans-representation-in-anime-presentation',
    salesHref: '/anime-panel',
  },
  {
    slug: 'trans-representation-in-anime-notes',
    handle: 'trans-representation-in-anime-notes',
    title: 'Trans+ Representation in Anime Presenter Notes',
    href: '/library/trans-representation-in-anime-notes',
    salesHref: '/anime-panel',
  },
  {
    slug: 'medical-binder-guide',
    handle: 'medical-binder-guide',
    title: 'Medical Binder Guide + Template',
    href: '/library/medical-binder-guide',
    salesHref: '/diy-binder',
  },
  {
    slug: 'custom-medical-binder',
    handle: 'custom-medical-binder',
    title: 'Custom Medical Binder Creation',
    href: '/library/custom-medical-binder',
    salesHref: '/custom-binder',
  },
  {
    slug: 'care-plan-guide',
    handle: 'care-plan-guide',
    title: 'Care Plan Guide + Blank Template',
    href: '/library/care-plan-guide',
    salesHref: '/care-plan',
  },
  {
    slug: 'care-plan-workshop-kit',
    handle: 'care-plan-workshop-kit',
    title: 'Care Plan Creation Workshop Kit',
    href: '/library/care-plan-workshop-kit',
    salesHref: '/care-plan-workshop',
  },
  {
    slug: 'know-your-rights',
    handle: 'know-your-rights',
    title: 'Know Your Rights: Bodily Autonomy, Boundaries & Consent',
    href: '/library/know-your-rights',
    salesHref: '/consent',
  },
  {
    slug: 'know-your-rights-workshop',
    handle: 'know-your-rights-workshop',
    title: 'Know Your Rights Workshop & Presentation Kit',
    href: '/library/know-your-rights-workshop',
    salesHref: '/consent-workshop',
  },
]

export const getLibraryItem = ({ slug }: { slug: string }) => {
  return libraryItems.find((item) => item.slug === slug)
}

export const getLibraryItemByHandle = ({ handle }: { handle: string }) => {
  return libraryItems.find((item) => item.handle === handle)
}
