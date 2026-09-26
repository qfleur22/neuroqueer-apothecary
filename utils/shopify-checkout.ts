import { getShopifyCatalogProduct, getShopifyCatalogProductByEnvKey } from '@/data/shopify-catalog'

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

const isConfiguredStorefront = () => {
  return Boolean(storeDomain) && !storeDomain.startsWith('your-store')
}

export const getShopifyCheckoutHref = ({ variantId }: { variantId: string }) => {
  const numericVariantId = parseShopifyVariantId({ variantId })

  if (!isConfiguredStorefront() || !numericVariantId) {
    return null
  }

  return `https://${storeDomain}/cart/${numericVariantId}:1?checkout`
}

const purchaseHref = ({ variantId, subject }: { variantId: string; subject: string }) => {
  return getShopifyCheckoutHref({ variantId }) ?? mailtoPurchase({ subject })
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

const catalogPurchaseHref = ({
  variantId,
  variantEnvKey,
}: {
  variantId: string
  variantEnvKey: string
}) => {
  const product = getShopifyCatalogProductByEnvKey({ variantEnvKey })

  return purchaseHref({
    variantId,
    subject: product?.title ?? 'Neuroqueer Apothecary resource',
  })
}

export const getCatalogProductHref = ({
  handle,
  fallback,
}: {
  handle: string
  fallback: string
}) => {
  const product = getShopifyCatalogProduct({ handle })

  return getShopifyProductHref({
    handle: product?.handle ?? handle,
    fallback,
  })
}

export const getHypermobileStoreItemHref = () => {
  return getCatalogProductHref({
    handle: 'so-you-think-youre-hypermobile',
    fallback: '/store/so-you-think-youre-hypermobile',
  })
}

export const getHypermobileGuideHref = () => {
  return catalogPurchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_HYPERMOBILE_VARIANT_ID ?? '',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_HYPERMOBILE_VARIANT_ID',
  })
}

export const getTransitionGuideHref = () => {
  return catalogPurchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_TRANSITION_VARIANT_ID ?? '',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_TRANSITION_VARIANT_ID',
  })
}

export const getAnimeGuideHref = () => {
  return catalogPurchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_ANIME_GUIDE_VARIANT_ID ?? '',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_ANIME_GUIDE_VARIANT_ID',
  })
}

export const getAnimeKitHref = () => {
  return catalogPurchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_ANIME_KIT_VARIANT_ID ?? '',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_ANIME_KIT_VARIANT_ID',
  })
}

export const getAnimePresentationHref = () => {
  return getAnimeKitHref()
}

export const getAnimeNotesHref = () => {
  return getAnimeKitHref()
}

export const getBinderGuideHref = () => {
  return catalogPurchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_BINDER_VARIANT_ID ?? '',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_BINDER_VARIANT_ID',
  })
}

export const getCustomBinderHref = () => {
  return catalogPurchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_CUSTOM_BINDER_VARIANT_ID ?? '',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_CUSTOM_BINDER_VARIANT_ID',
  })
}

export const getCarePlanGuideHref = () => {
  return catalogPurchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_CARE_PLAN_VARIANT_ID ?? '',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_CARE_PLAN_VARIANT_ID',
  })
}

export const getCarePlanWorkshopHref = () => {
  return catalogPurchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_CARE_PLAN_WORKSHOP_VARIANT_ID ?? '',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_CARE_PLAN_WORKSHOP_VARIANT_ID',
  })
}

export const getConsentGuideHref = () => {
  return catalogPurchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_CONSENT_VARIANT_ID ?? '',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_CONSENT_VARIANT_ID',
  })
}

export const getConsentWorkshopHref = () => {
  return catalogPurchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_CONSENT_WORKSHOP_VARIANT_ID ?? '',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_CONSENT_WORKSHOP_VARIANT_ID',
  })
}

export const getBodilyAutonomyGuideHref = () => {
  return catalogPurchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_BODILY_AUTONOMY_VARIANT_ID ?? '',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_BODILY_AUTONOMY_VARIANT_ID',
  })
}

export const getBoundariesWorksheetHref = () => {
  return catalogPurchaseHref({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_BOUNDARIES_WORKSHEET_VARIANT_ID ?? '',
    variantEnvKey: 'NEXT_PUBLIC_SHOPIFY_BOUNDARIES_WORKSHEET_VARIANT_ID',
  })
}

export const getBodilyAutonomyBundleHref = () => {
  const guideId = parseShopifyVariantId({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_BODILY_AUTONOMY_VARIANT_ID ?? '',
  })
  const worksheetId = parseShopifyVariantId({
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_BOUNDARIES_WORKSHEET_VARIANT_ID ?? '',
  })

  if (isConfiguredStorefront() && guideId && worksheetId) {
    return `https://${storeDomain}/cart/${guideId}:1,${worksheetId}:1?checkout`
  }

  return mailtoPurchase({
    subject: 'Queer Sex & Bodily Autonomy Guide + Boundaries Worksheet',
  })
}
