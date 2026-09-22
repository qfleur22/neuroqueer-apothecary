import { LoveLanguageKind, LoveLanguageRating, LoveLanguageScore } from '@/models/love-language'
import { getLoveLanguageBands, loveLanguageStyles } from '@/data/love-languages'

export const LOVE_LANGUAGE_MAX_SCORE = 15
export const LOVE_LANGUAGE_QUESTION_COUNT = 36

const getBand = ({ kind, raw }: { kind: LoveLanguageKind; raw: number }) => {
  const bands = getLoveLanguageBands({ kind })
  const match = bands.find((band) => raw >= band.min && raw <= band.max)

  if (match) {
    return match
  }

  return bands[bands.length - 1]
}

export const scoreLoveLanguages = ({
  kind,
  answers,
}: {
  kind: LoveLanguageKind
  answers: LoveLanguageRating[]
}): { ranked: LoveLanguageScore[]; preferred: LoveLanguageScore[] } => {
  const ranked = loveLanguageStyles
    .map((style, styleIndex) => {
      const raw = answers[styleIndex] + answers[styleIndex + 12] + answers[styleIndex + 24]
      const percent = Math.round((raw / LOVE_LANGUAGE_MAX_SCORE) * 100)

      return {
        style,
        raw,
        percent,
        band: getBand({ kind, raw }),
      }
    })
    .sort((left, right) => {
      if (right.raw !== left.raw) {
        return right.raw - left.raw
      }

      return left.style.name.localeCompare(right.style.name)
    })

  const topScore = ranked[0]?.raw ?? 0
  const preferred = ranked.filter((result) => result.raw === topScore)

  return { ranked, preferred }
}

export const formatPreferredNames = ({ preferred }: { preferred: LoveLanguageScore[] }) => {
  if (preferred.length === 0) {
    return ''
  }

  if (preferred.length === 1) {
    return preferred[0].style.name
  }

  if (preferred.length === 2) {
    return `${preferred[0].style.name} and ${preferred[1].style.name}`
  }

  const leading = preferred.slice(0, -1).map((result) => result.style.name)
  const last = preferred[preferred.length - 1].style.name

  return `${leading.join(', ')}, and ${last}`
}
