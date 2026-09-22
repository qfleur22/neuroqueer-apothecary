export type LoveLanguageKind = 'giving' | 'receiving'

export type LoveLanguageRating = 1 | 2 | 3 | 4 | 5

export interface LoveLanguageStyle {
  id: string
  name: string
}

export interface LoveLanguageQuestion {
  number: number
  text: string
}

export interface LoveLanguageBand {
  id: 'core' | 'strong' | 'situational' | 'lower'
  min: number
  max: number
  title: string
  description: string
}

export interface LoveLanguageScore {
  style: LoveLanguageStyle
  raw: number
  percent: number
  band: LoveLanguageBand
}
