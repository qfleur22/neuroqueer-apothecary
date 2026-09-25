import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const API_VERSION = '2025-10'
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const ENV_LOCAL_PATH = resolve(ROOT, '.env.local')
const ENV_PATH = resolve(ROOT, '.env')

const catalog = [
  {
    envKey: 'NEXT_PUBLIC_SHOPIFY_HYPERMOBILE_VARIANT_ID',
    handle: 'so-you-think-youre-hypermobile',
    title: 'So, You Think You’re Hypermobile?',
    description:
      'A practical guide to hypermobility, Ehlers-Danlos syndrome, and figuring out what the hell your body is doing.',
    productType: 'Digital guide',
    sku: 'NQA-HYPERMOBILE',
  },
  {
    envKey: 'NEXT_PUBLIC_SHOPIFY_TRANSITION_VARIANT_ID',
    handle: 'transition-guide-now-what',
    previousHandles: ['so-you-think-youre-trans'],
    title: 'Transition Guide: Now What?',
    description:
      'A practical transition guide for questioning, exploring, and building a life that feels more like yours.',
    productType: 'Digital guide',
    sku: 'NQA-TRANSITION',
  },
  {
    envKey: 'NEXT_PUBLIC_SHOPIFY_ANIME_GUIDE_VARIANT_ID',
    handle: 'trans-representation-in-anime',
    title: 'Trans+ Representation in Anime',
    description:
      'Explore the characters, stories, history, and wonderfully complicated relationship between anime and gender.',
    productType: 'Digital guide',
    sku: 'NQA-ANIME',
  },
  {
    envKey: 'NEXT_PUBLIC_SHOPIFY_ANIME_KIT_VARIANT_ID',
    handle: 'trans-representation-in-anime-panel-kit',
    title: 'Trans Representation in Anime Panel Kit',
    description:
      'A ready-to-present panel kit with the PowerPoint, presenter notes, and research spreadsheet already built.',
    productType: 'Workshop kit',
    sku: 'NQA-ANIME-KIT',
  },
  {
    envKey: 'NEXT_PUBLIC_SHOPIFY_BINDER_VARIANT_ID',
    handle: 'how-to-create-a-medical-binder',
    previousHandles: ['medical-binder-guide'],
    title: 'How to Create a Medical Binder',
    description:
      'Build a medical binder that helps you explain years of symptoms, diagnoses, medications, testing, and treatment.',
    productType: 'Digital guide',
    sku: 'NQA-BINDER',
  },
  {
    envKey: 'NEXT_PUBLIC_SHOPIFY_CUSTOM_BINDER_VARIANT_ID',
    handle: 'custom-medical-binder-creation',
    previousHandles: ['custom-medical-binder'],
    title: 'Custom Medical Binder Creation',
    description:
      'A done-for-you service that turns your scattered medical history into an organized, usable medical binder.',
    productType: 'Service',
    sku: 'NQA-CUSTOM-BINDER',
  },
  {
    envKey: 'NEXT_PUBLIC_SHOPIFY_CARE_PLAN_VARIANT_ID',
    handle: 'how-to-make-a-care-plan',
    previousHandles: ['care-plan-guide'],
    title: 'How to Make a Care Plan',
    description:
      'A practical care-plan system for neurodivergence, chronic illness, disability, mental health, overwhelm, and everyday support.',
    productType: 'Digital guide',
    sku: 'NQA-CARE-PLAN',
  },
  {
    envKey: 'NEXT_PUBLIC_SHOPIFY_CARE_PLAN_WORKSHOP_VARIANT_ID',
    handle: 'care-plan-creation-workshop-kit',
    previousHandles: ['care-plan-workshop-kit'],
    title: 'Care Plan Creation Workshop Kit',
    description:
      'A ready-to-facilitate workshop so your community can make care plans—curriculum, prompts, and facilitation structure included.',
    productType: 'Workshop kit',
    sku: 'NQA-CARE-PLAN-KIT',
  },
  {
    envKey: 'NEXT_PUBLIC_SHOPIFY_CONSENT_VARIANT_ID',
    handle: 'know-your-rights-bodily-autonomy-boundaries-consent',
    previousHandles: ['know-your-rights'],
    title: 'Know Your Rights: Bodily Autonomy, Boundaries & Consent',
    description:
      'A practical guide to autonomy in our bodies, relationships, medical care, communities, and everyday lives.',
    productType: 'Digital guide',
    sku: 'NQA-CONSENT',
  },
  {
    envKey: 'NEXT_PUBLIC_SHOPIFY_CONSENT_WORKSHOP_VARIANT_ID',
    handle: 'know-your-rights-workshop-presentation-kit',
    previousHandles: ['know-your-rights-workshop'],
    title: 'Know Your Rights Workshop & Presentation Kit',
    description:
      'A community conversation about power, safety, and reclaiming our bodies—slides and presenter notes included.',
    productType: 'Workshop kit',
    sku: 'NQA-CONSENT-KIT',
  },
]

const parseEnvFile = ({ filePath }) => {
  if (!existsSync(filePath)) {
    return {}
  }

  const values = {}

  for (const line of readFileSync(filePath, 'utf8').split('\n')) {
    const trimmed = line.trim()

    if (!trimmed || trimmed.startsWith('#')) {
      continue
    }

    const separatorIndex = trimmed.indexOf('=')

    if (separatorIndex === -1) {
      continue
    }

    const key = trimmed.slice(0, separatorIndex).trim()
    let value = trimmed.slice(separatorIndex + 1).trim()

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }

    values[key] = value
  }

  return values
}

const upsertEnvFile = ({ filePath, updates }) => {
  const current = existsSync(filePath) ? readFileSync(filePath, 'utf8') : ''
  const lines = current.length > 0 ? current.split('\n') : []
  const seen = new Set()

  const nextLines = lines.map((line) => {
    if (line.startsWith('#') || !line.includes('=')) {
      return line
    }

    const key = line.slice(0, line.indexOf('=')).trim()

    if (!(key in updates)) {
      return line
    }

    seen.add(key)
    return `${key}=${updates[key]}`
  })

  for (const [key, value] of Object.entries(updates)) {
    if (!seen.has(key)) {
      nextLines.push(`${key}=${value}`)
    }
  }

  writeFileSync(filePath, `${nextLines.join('\n').replace(/\n*$/, '')}\n`)
}

const normalizeStoreDomain = ({ value }) => {
  return value.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

const shopHostname = ({ storeDomain }) => {
  if (storeDomain.endsWith('.myshopify.com')) {
    return storeDomain
  }

  return `${storeDomain}.myshopify.com`
}

const env = {
  ...parseEnvFile({ filePath: ENV_PATH }),
  ...parseEnvFile({ filePath: ENV_LOCAL_PATH }),
  ...process.env,
}

const storeDomain = normalizeStoreDomain({
  value: env.NEXT_PUBLIC_SHOPIFY_DOMAIN || env.SHOPIFY_SHOP || '',
})

const printSetupHelp = () => {
  console.error(`Shopify credentials are missing.

1. Create a store at https://admin.shopify.com
2. In the Dev Dashboard (https://dev.shopify.com/dashboard), create an app
   for this store with write_products (and read_products)
3. Install the app on the store
4. Put these in .env.local:

   NEXT_PUBLIC_SHOPIFY_DOMAIN=your-store.myshopify.com
   SHOPIFY_CLIENT_ID=
   SHOPIFY_CLIENT_SECRET=

5. Run: npm run setup:shopify

If you already have a legacy Admin API token, you can use SHOPIFY_ADMIN_ACCESS_TOKEN instead of the client id/secret.
`)
}

const getAccessToken = async ({ hostname }) => {
  if (env.SHOPIFY_ADMIN_ACCESS_TOKEN) {
    return env.SHOPIFY_ADMIN_ACCESS_TOKEN
  }

  const clientId = env.SHOPIFY_CLIENT_ID
  const clientSecret = env.SHOPIFY_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    return null
  }

  const response = await fetch(`https://${hostname}/admin/oauth/access_token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    }),
  })

  const payload = await response.json()

  if (!response.ok || !payload.access_token) {
    throw new Error(
      `Token request failed (${response.status}): ${JSON.stringify(payload)}`,
    )
  }

  return payload.access_token
}

const shopifyGraphql = async ({ hostname, token, query, variables }) => {
  const response = await fetch(
    `https://${hostname}/admin/api/${API_VERSION}/graphql.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': token,
      },
      body: JSON.stringify({ query, variables }),
    },
  )

  const payload = await response.json()

  if (!response.ok) {
    throw new Error(`GraphQL HTTP ${response.status}: ${JSON.stringify(payload)}`)
  }

  if (payload.errors?.length) {
    throw new Error(`GraphQL errors: ${JSON.stringify(payload.errors)}`)
  }

  return payload.data
}

const findProduct = async ({ hostname, token, handle }) => {
  const data = await shopifyGraphql({
    hostname,
    token,
    query: `
      query FindProduct($query: String!) {
        products(first: 1, query: $query) {
          nodes {
            id
            handle
            variants(first: 1) {
              nodes {
                id
                legacyResourceId
              }
            }
          }
        }
      }
    `,
    variables: { query: `handle:${handle}` },
  })

  return data.products.nodes[0] ?? null
}

const createProduct = async ({ hostname, token, item }) => {
  const data = await shopifyGraphql({
    hostname,
    token,
    query: `
      mutation CreateProduct($product: ProductCreateInput!) {
        productCreate(product: $product) {
          product {
            id
            handle
            variants(first: 1) {
              nodes {
                id
                legacyResourceId
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `,
    variables: {
      product: {
        title: item.title,
        handle: item.handle,
        descriptionHtml: `<p>${item.description}</p>`,
        vendor: 'Neuroqueer Apothecary',
        productType: item.productType,
        status: 'ACTIVE',
        tags: ['neuroqueer-apothecary'],
      },
    },
  })

  if (data.productCreate.userErrors.length > 0) {
    throw new Error(
      `productCreate failed for ${item.handle}: ${JSON.stringify(data.productCreate.userErrors)}`,
    )
  }

  return data.productCreate.product
}

const configureVariant = async ({ hostname, token, productId, variantId, sku }) => {
  const data = await shopifyGraphql({
    hostname,
    token,
    query: `
      mutation UpdateVariant($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
        productVariantsBulkUpdate(productId: $productId, variants: $variants) {
          productVariants {
            id
            legacyResourceId
          }
          userErrors {
            field
            message
          }
        }
      }
    `,
    variables: {
      productId,
      variants: [
        {
          id: variantId,
          inventoryPolicy: 'CONTINUE',
          inventoryItem: {
            sku,
            tracked: false,
            requiresShipping: false,
          },
        },
      ],
    },
  })

  if (data.productVariantsBulkUpdate.userErrors.length > 0) {
    throw new Error(
      `variant update failed: ${JSON.stringify(data.productVariantsBulkUpdate.userErrors)}`,
    )
  }

  return data.productVariantsBulkUpdate.productVariants[0]
}

const publishToOnlineStore = async ({ hostname, token, productId }) => {
  try {
    const publications = await shopifyGraphql({
      hostname,
      token,
      query: `
        query Publications {
          publications(first: 20) {
            nodes {
              id
              name
            }
          }
        }
      `,
    })

    const onlineStore = publications.publications.nodes.find((publication) => {
      return publication.name === 'Online Store'
    })

    if (!onlineStore) {
      return
    }

    const data = await shopifyGraphql({
      hostname,
      token,
      query: `
        mutation Publish($id: ID!, $input: [PublicationInput!]!) {
          publishablePublish(id: $id, input: $input) {
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: {
        id: productId,
        input: [{ publicationId: onlineStore.id }],
      },
    })

    if (data.publishablePublish.userErrors.length > 0) {
      console.warn(
        `Could not publish ${productId}: ${JSON.stringify(data.publishablePublish.userErrors)}`,
      )
    }
  } catch (error) {
    console.warn(
      `Skipping Online Store publish (${error instanceof Error ? error.message : error}).`,
    )
  }
}

const main = async () => {
  if (!storeDomain || storeDomain === 'your-store.myshopify.com') {
    printSetupHelp()
    process.exitCode = 1
    return
  }

  const hostname = shopHostname({ storeDomain })
  const token = await getAccessToken({ hostname })

  if (!token) {
    printSetupHelp()
    process.exitCode = 1
    return
  }

  const envUpdates = {
    NEXT_PUBLIC_SHOPIFY_DOMAIN: hostname,
  }

  for (const item of catalog) {
    let product = await findProduct({ hostname, token, handle: item.handle })

    if (!product && item.previousHandles) {
      for (const previousHandle of item.previousHandles) {
        product = await findProduct({ hostname, token, handle: previousHandle })
        if (product) {
          break
        }
      }
    }

    const existed = Boolean(product)

    if (!product) {
      product = await createProduct({ hostname, token, item })
    }

    const variant = product.variants.nodes[0]

    if (!variant) {
      throw new Error(`No variant returned for ${item.handle}`)
    }

    const updated = await configureVariant({
      hostname,
      token,
      productId: product.id,
      variantId: variant.id,
      sku: item.sku,
    })

    await publishToOnlineStore({ hostname, token, productId: product.id })

    const numericId = updated.legacyResourceId || variant.legacyResourceId
    envUpdates[item.envKey] = String(numericId)

    console.log(
      `${existed ? 'updated' : 'created'} ${item.handle} → variant ${numericId}`,
    )
  }

  upsertEnvFile({ filePath: ENV_LOCAL_PATH, updates: envUpdates })

  console.log(`\nWrote ${Object.keys(envUpdates).length} values to .env.local`)
  console.log('Restart `npm run dev` so Next.js picks up the new env.')
  console.log('Set prices and attach digital files in Shopify admin, then add the same NEXT_PUBLIC_SHOPIFY_* values to your host’s build env.')
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
