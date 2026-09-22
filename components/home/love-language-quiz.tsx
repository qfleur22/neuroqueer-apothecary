'use client'

import { FormEvent, useMemo, useState } from 'react'
import { GuideCta } from '@/components/home/guide-cta'
import { LoveLanguageRatingLine } from '@/components/home/love-language-rating-line'
import { RoomLink } from '@/components/home/room-link'
import { RoomSection } from '@/components/home/room-section'
import { LoveLanguageKind, LoveLanguageQuestion, LoveLanguageRating } from '@/models/love-language'
import {
  LOVE_LANGUAGE_QUESTION_COUNT,
  formatPreferredNames,
  scoreLoveLanguages,
} from '@/utils/score-love-languages'

const ratings: LoveLanguageRating[] = [1, 2, 3, 4, 5]

interface LoveLanguageQuizProps {
  kind: LoveLanguageKind
  intro: string[]
  scaleLabels: Record<LoveLanguageRating, string>
  questions: LoveLanguageQuestion[]
  reflectionPrompts: string[]
  otherQuizHref: string
  otherQuizLabel: string
}

const createEmptyAnswers = () => {
  return Array.from({ length: LOVE_LANGUAGE_QUESTION_COUNT }, () => null) as Array<
    LoveLanguageRating | null
  >
}

const getStorageKey = ({ kind }: { kind: LoveLanguageKind }) => {
  return `nqa-love-languages-${kind}`
}

export const LoveLanguageQuiz = ({
  kind,
  intro,
  scaleLabels,
  questions,
  reflectionPrompts,
  otherQuizHref,
  otherQuizLabel,
}: LoveLanguageQuizProps) => {
  const [answers, setAnswers] = useState<Array<LoveLanguageRating | null>>(createEmptyAnswers)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [reflections, setReflections] = useState<string[]>(() => reflectionPrompts.map(() => ''))

  const answeredCount = answers.filter((answer) => answer !== null).length
  const isComplete = answeredCount === LOVE_LANGUAGE_QUESTION_COUNT

  const scored = useMemo(() => {
    if (!hasSubmitted || !isComplete) {
      return null
    }

    return scoreLoveLanguages({
      kind,
      answers: answers as LoveLanguageRating[],
    })
  }, [answers, hasSubmitted, isComplete, kind])

  const handleSubmit = ({ event }: { event: FormEvent<HTMLFormElement> }) => {
    event.preventDefault()

    if (!isComplete) {
      return
    }

    setHasSubmitted(true)

    try {
      window.localStorage.setItem(
        getStorageKey({ kind }),
        JSON.stringify({
          answers,
          scoredAt: new Date().toISOString(),
        }),
      )
    } catch (error) {
      void error
    }

    window.requestAnimationFrame(() => {
      document.getElementById('quiz-results')?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  const handleRetake = () => {
    setAnswers(createEmptyAnswers())
    setHasSubmitted(false)
    setReflections(reflectionPrompts.map(() => ''))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const preferredLabel = scored ? formatPreferredNames({ preferred: scored.preferred }) : ''
  const preferredPercent = scored?.preferred[0]?.percent ?? 0
  const direction = kind === 'giving' ? 'giving' : 'receiving'

  return (
    <div className="space-y-8">
      {intro.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <RoomSection title="The scale">
        <ol className="space-y-1">
          {ratings.map((rating) => (
            <li key={rating}>
              <span className="font-display text-room-teal">{rating}</span>
              {' — '}
              {scaleLabels[rating]}
            </li>
          ))}
        </ol>
        <p className="italic text-room-brown">
          Don’t answer according to what you think a good friend or partner should do. Think about
          your actual {kind === 'giving' ? 'behavior' : 'experience'}.
        </p>
      </RoomSection>

      <form
        onSubmit={(event) => {
          handleSubmit({ event })
        }}
        className="space-y-6"
      >
        <p className="font-display text-room-teal" aria-live="polite">
          {answeredCount} of {LOVE_LANGUAGE_QUESTION_COUNT} answered
        </p>

        <ol className="space-y-6">
          {questions.map((question, index) => {
            const headingId = `${kind}-q${question.number}-label`

            return (
              <li key={question.number} className="min-w-0">
                <div className="rounded-md border border-room-brown/20 bg-[#efe6d6]/70 px-3 py-4 sm:px-4">
                  <p id={headingId} className="font-display text-lg leading-snug text-black">
                    {question.number}. {question.text}
                  </p>
                  <LoveLanguageRatingLine
                    name={`${kind}-q${question.number}`}
                    labelledBy={headingId}
                    value={answers[index]}
                    scaleLabels={scaleLabels}
                    onChange={({ rating }) => {
                      setAnswers((current) => {
                        const next = [...current]
                        next[index] = rating
                        return next
                      })
                    }}
                  />
                </div>
              </li>
            )
          })}
        </ol>

        {!hasSubmitted ? (
          <p className="text-center">
            <button
              type="submit"
              disabled={!isComplete}
              className="inline-flex max-w-full items-center justify-center rounded-full border-2 border-room-gold bg-room-teal px-7 py-3.5 text-center font-display text-lg text-room-gold shadow-md transition hover:bg-[#0f5c53] disabled:cursor-not-allowed disabled:opacity-50 sm:px-8 sm:py-4 sm:text-2xl"
            >
              See my {direction} profile →
            </button>
          </p>
        ) : null}
      </form>

      {scored ? (
        <section id="quiz-results" className="space-y-5" tabIndex={-1}>
          <h2 className="font-display text-3xl text-room-teal sm:text-4xl">Your results</h2>
          <p className="font-display text-2xl text-black">
            Your preferred {direction} language
            {scored.preferred.length > 1 ? 's are' : ' is'}{' '}
            <span className="text-room-teal">{preferredLabel}</span> ({preferredPercent}%).
          </p>
          <p>
            Each style is scored out of 15, then shown as a percentage of that maximum. Higher
            percentages are the ways {kind === 'giving' ? 'you most naturally give care' : 'care most clearly registers for you'}.
          </p>

          <ol className="space-y-4">
            {scored.ranked.map((result) => (
              <li key={result.style.id} className="space-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-display text-xl text-room-teal">{result.style.name}</p>
                  <p className="font-display text-black">
                    {result.percent}% · {result.raw}/15 · {result.band.title}
                  </p>
                </div>
                <div
                  className="h-3 overflow-hidden rounded-full bg-room-brown/20"
                  role="img"
                  aria-label={`${result.style.name}: ${result.percent} percent`}
                >
                  <div
                    className="h-full rounded-full bg-room-teal"
                    style={{ width: `${result.percent}%` }}
                  />
                </div>
                <p className="text-base text-black/80">{result.band.description}</p>
              </li>
            ))}
          </ol>

          <RoomSection title="Your reflection">
            <p>These prompts are just for you. Nothing is saved to an account.</p>
            {reflectionPrompts.map((prompt, index) => (
              <label key={prompt} className="block space-y-2">
                <span className="font-display text-lg text-room-teal">{prompt}</span>
                <textarea
                  value={reflections[index]}
                  onChange={(event) => {
                    const next = [...reflections]
                    next[index] = event.target.value
                    setReflections(next)
                  }}
                  rows={3}
                  className="w-full rounded-md border-2 border-room-brown/30 bg-[#f7f0e6] px-3 py-2 font-gallery text-lg text-black outline-none focus-visible:border-room-gold focus-visible:ring-2 focus-visible:ring-room-gold"
                />
              </label>
            ))}
          </RoomSection>

          <p className="text-center">
            <button
              type="button"
              onClick={handleRetake}
              className="font-display text-lg text-black underline decoration-room-gold underline-offset-4 transition hover:text-room-teal"
            >
              Retake this quiz
            </button>
          </p>

          <GuideCta href={otherQuizHref} label={otherQuizLabel} isDominant />
          <p className="text-center">
            Or return to the <RoomLink href="/love-languages">love languages overview</RoomLink>.
          </p>
        </section>
      ) : null}
    </div>
  )
}
