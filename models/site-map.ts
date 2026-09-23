export interface SiteMapEntry {
  title: string
  description: string
  href: string
  cta: string
}

export interface SiteMapSection {
  id: string
  title: string
  entries: SiteMapEntry[]
}
