import { LibraryItem } from '@/models/library-item'
import { shopifyCatalog } from '@/data/shopify-catalog'

const titlesBySlug: Record<string, string> = {
  'so-you-think-youre-hypermobile': 'So, You Think You’re Hypermobile?',
  'eds-checklist': 'Hypermobility / EDS Symptom Checklist',
  'transition-guide-now-what': 'Transition Guide: Now What?',
  'trans-representation-in-anime': 'Trans+ Representation in Anime',
  'trans-representation-in-anime-panel-kit': 'Trans Representation in Anime Panel Kit',
  'trans-representation-in-anime-presentation': 'Trans+ Representation in Anime Presentation',
  'trans-representation-in-anime-notes': 'Trans+ Representation in Anime Presenter Notes',
  'medical-binder-guide': 'How to Create a Medical Binder',
  'custom-medical-binder': 'Custom Medical Binder Creation',
  'care-plan-guide': 'How to Make a Care Plan',
  'care-plan-workshop-kit': 'Care Plan Creation Workshop Kit',
  'know-your-rights': 'Know Your Rights: Bodily Autonomy, Boundaries & Consent',
  'know-your-rights-workshop': 'Know Your Rights Workshop & Presentation Kit',
  'queer-sex-bodily-autonomy': 'Queer Sex, Consent & Bodily Autonomy',
  'boundaries-consent-red-flags-worksheet': 'Boundaries, Consent & Red Flags Worksheet',
}

const extraAliasTitles: Record<string, string[]> = {
  'transition-guide-now-what': ['Transition Guide'],
  'medical-binder-guide': ['Medical Binder Guide + Template', 'How to Make Your Own Medical Binder'],
  'care-plan-guide': ['Care Plan Guide + Blank Template'],
  'queer-sex-bodily-autonomy': ['Queer Sex & Bodily Autonomy Guide', 'Queer sex and bodily autonomy guide'],
}

export const libraryItems: LibraryItem[] = shopifyCatalog.flatMap((product) => {
  return product.librarySlugs.map((slug) => {
    return {
      slug,
      handle: product.handle,
      title: titlesBySlug[slug] ?? product.title,
      href: `/library/${slug}`,
      salesHref: product.salesHref,
      aliasHandles: product.aliasHandles,
      aliasTitles: extraAliasTitles[slug],
    }
  })
})

export const getLibraryItem = ({ slug }: { slug: string }) => {
  return libraryItems.find((item) => item.slug === slug)
}

export const getLibraryItemsByHandle = ({ handle }: { handle: string }) => {
  return libraryItems.filter((item) => {
    if (item.handle === handle) {
      return true
    }
    return item.aliasHandles?.includes(handle) ?? false
  })
}

export const getLibraryItemByHandle = ({ handle }: { handle: string }) => {
  return getLibraryItemsByHandle({ handle })[0]
}
