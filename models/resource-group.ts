export interface ResourceItem {
  name: string
  description?: string
  href?: string
  showDollar?: boolean
  contacts?: Array<{
    label: string
    href: string
  }>
}

export interface ResourceGroup {
  id: string
  title: string
  items: ResourceItem[]
  href?: string
  cta?: string
}
