const storeDomain = (process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN ?? '')
  .replace(/^https?:\/\//, '')
  .replace(/\/$/, '')

const mailtoPurchase = ({ subject }: { subject: string }) => {
  return `mailto:quinndelafleur@gmail.com?subject=${encodeURIComponent(subject)}`
}

export const parseShopifyVariantId = ({ variantId }: { variantId: string }) => {
  const trimmed = variantId.trim()

  if (!trimmed) {
    return ''
  }

  const gidMatch = trimmed.match(/ProductVariant\/(\d+)/)
  if (gidMatch) {
    return gidMatch[1]
  }

  const queryMatch = trimmed.match(/[?&]variant=(\d+)/)
  if (queryMatch) {
    return queryMatch[1]
  }

  if (/^\d+$/.test(trimmed)) {
    return trimmed
  }

  return ''
}

export const getShopifyCheckoutHref = ({ variantId }: { variantId: string }) => {
  const numericVariantId = parseShopifyVariantId({ variantId })

  if (!storeDomain || !numericVariantId) {
    return null
  }

  return `https://${storeDomain}/cart/${numericVariantId}:1?checkout`
}

const purchaseHref = ({ variantId, subject }: { variantId: string; subject: string }) => {
  return getShopifyCheckoutHref({ variantId }) ?? mailtoPurchase({ subject })
}

const isConfiguredStorefront = () => {
  return Boolean(storeDomain) && !storeDomain.startsWith('your-store')
}

export const getShopifyProductHref = ({
  handle,
  fallback,
}: {
  handle: string
  fallback: string
}) => {
  if (!isConfiguredStorefront()) {
    return fallback
  }

  return `https://${storeDomain}/products/${handle}`
}

export const getHypermobileStoreItemHref = () => {
  return getShopifyProductHref({
    handle: 'so-you-think-youre-hypermobile',
    fallback: '/store/so-you-think-youre-hypermobile',
  })
}

export const getHypermobileGuideHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_HYPERMOBILE_VARIANT_ID ?? '',
    subject: 'So, You Think You’re Hypermobile',
  })
}

export const getTransitionGuideHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_TRANSITION_VARIANT_ID ?? '',
    subject: 'Transition Guide',
  })
}

export const getAnimeKitHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_ANIME_KIT_VARIANT_ID ?? '',
    subject: 'Trans+ Representation in Anime panel kit',
  })
}

export const getAnimePresentationHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_ANIME_PRESENTATION_VARIANT_ID ?? '',
    subject: 'Trans+ Representation in Anime presentation',
  })
}

export const getAnimeNotesHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_ANIME_NOTES_VARIANT_ID ?? '',
    subject: 'Trans+ Representation in Anime presenter notes',
  })
}

export const getBinderGuideHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_BINDER_VARIANT_ID ?? '',
    subject: 'Medical Binder Guide + Template',
  })
}

export const getCustomBinderHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_CUSTOM_BINDER_VARIANT_ID ?? '',
    subject: 'Custom Medical Binder Creation',
  })
}

export const getCarePlanGuideHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_CARE_PLAN_VARIANT_ID ?? '',
    subject: 'Care Plan Guide + Blank Template',
  })
}

export const getCarePlanWorkshopHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_CARE_PLAN_WORKSHOP_VARIANT_ID ?? '',
    subject: 'Care Plan Creation Workshop Kit',
  })
}

export const getConsentGuideHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_CONSENT_VARIANT_ID ?? '',
    subject: 'Know Your Rights: Bodily Autonomy, Boundaries & Consent',
  })
}

export const getConsentWorkshopHref = () => {
  return purchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_CONSENT_WORKSHOP_VARIANT_ID ?? '',
    subject: 'Know Your Rights Workshop & Presentation Kit',
  })
}
