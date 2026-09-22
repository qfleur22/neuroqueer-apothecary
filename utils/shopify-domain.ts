export const getShopifyStoreDomain = () => {
  return (process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN ?? '')
    .replace(/^https?:\/\//, '')
    .replace(/\/$/, '')
}

export const isShopifyCustomerAuthConfigured = () => {
  return Boolean(getShopifyStoreDomain() && process.env.SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID)
}
