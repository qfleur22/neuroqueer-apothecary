import { ShopifyCatalogProduct } from '@/models/shopify-catalog'

export const shopifyCatalog: ShopifyCatalogProduct[] = [
  {
    handle: 'so-you-think-youre-hypermobile',
    title: 'So, You Think You’re Hypermobile?',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_HYPERMOBILE_VARIANT_ID',
    librarySlugs: ['so-you-think-youre-hypermobile'],
    salesHref: '/store/so-you-think-youre-hypermobile',
    exportPrice: '2.00',
  },
  {
    handle: 'transition-guide-now-what',
    aliasHandles: ['so-you-think-youre-trans'],
    title: 'Transition Guide: Now What?',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_TRANSITION_VARIANT_ID',
    librarySlugs: ['transition-guide-now-what'],
    salesHref: '/transition',
    exportPrice: '1.00',
  },
  {
    handle: 'trans-representation-in-anime',
    title: 'Trans+ Representation in Anime',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_ANIME_GUIDE_VARIANT_ID',
    librarySlugs: ['trans-representation-in-anime'],
    salesHref: '/anime',
    exportPrice: '2.00',
  },
  {
    handle: 'trans-representation-in-anime-panel-kit',
    title: 'Trans Representation in Anime Panel Kit',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_ANIME_KIT_VARIANT_ID',
    librarySlugs: [
      'trans-representation-in-anime-panel-kit',
      'trans-representation-in-anime-presentation',
      'trans-representation-in-anime-notes',
    ],
    salesHref: '/anime-panel',
    exportPrice: '5.00',
  },
  {
    handle: 'how-to-create-a-medical-binder',
    aliasHandles: ['medical-binder-guide', 'diy-medical-binder'],
    title: 'How to Create a Medical Binder',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_BINDER_VARIANT_ID',
    librarySlugs: ['medical-binder-guide'],
    salesHref: '/diy-binder',
    exportPrice: '0.00',
  },
  {
    handle: 'custom-medical-binder-creation',
    aliasHandles: ['custom-medical-binder'],
    title: 'Custom Medical Binder Creation',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_CUSTOM_BINDER_VARIANT_ID',
    librarySlugs: ['custom-medical-binder'],
    salesHref: '/custom-binder',
    exportPrice: '0.00',
  },
  {
    handle: 'how-to-make-a-care-plan',
    aliasHandles: ['care-plan-guide', 'care-plan'],
    title: 'How to Make a Care Plan',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_CARE_PLAN_VARIANT_ID',
    librarySlugs: ['care-plan-guide'],
    salesHref: '/care-plan',
    exportPrice: '0.00',
  },
  {
    handle: 'care-plan-creation-workshop-kit',
    aliasHandles: ['care-plan-workshop-kit'],
    title: 'Care Plan Creation Workshop Kit',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_CARE_PLAN_WORKSHOP_VARIANT_ID',
    librarySlugs: ['care-plan-workshop-kit'],
    salesHref: '/care-plan-workshop',
    exportPrice: '0.00',
  },
  {
    handle: 'know-your-rights-bodily-autonomy-boundaries-consent',
    aliasHandles: ['know-your-rights'],
    title: 'Know Your Rights: Bodily Autonomy, Boundaries & Consent',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_CONSENT_VARIANT_ID',
    librarySlugs: ['know-your-rights'],
    salesHref: '/consent',
    exportPrice: '0.00',
  },
  {
    handle: 'know-your-rights-workshop-presentation-kit',
    aliasHandles: ['know-your-rights-workshop'],
    title: 'Know Your Rights Workshop & Presentation Kit',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_CONSENT_WORKSHOP_VARIANT_ID',
    librarySlugs: ['know-your-rights-workshop'],
    salesHref: '/consent-workshop',
    exportPrice: '0.00',
  },
]

export const getShopifyCatalogProduct = ({
  handle,
}: {
  handle: string
}): ShopifyCatalogProduct | undefined => {
  return shopifyCatalog.find((product) => {
    if (product.handle === handle) {
      return true
    }
    return product.aliasHandles?.includes(handle) ?? false
  })
}

export const getShopifyCatalogProductByEnvKey = ({
  variantEnvKey,
}: {
  variantEnvKey: string
}): ShopifyCatalogProduct | undefined => {
  return shopifyCatalog.find((product) => {
    return product.variantEnvKey === variantEnvKey
  })
}
