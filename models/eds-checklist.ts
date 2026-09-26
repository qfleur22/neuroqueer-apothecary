export type EdsChecklistRating = 1 | 2 | 3 | 4 | 5

export type EdsChecklistItemKind = 'rating' | 'note' | 'prompt'

export interface EdsChecklistItem {
  id: string
  text: string
  kind: EdsChecklistItemKind
}

export interface EdsChecklistSection {
  id: string
  title: string
  intro?: string
  items: EdsChecklistItem[]
}
