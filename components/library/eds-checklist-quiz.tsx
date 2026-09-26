'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { GuideCta } from '@/components/home/guide-cta'
import { LearnMoreSection } from '@/components/home/learn-more-section'
import { LoveLanguageRatingLine } from '@/components/home/love-language-rating-line'
import { RoomLink } from '@/components/home/room-link'
import { BulletList, RoomSection } from '@/components/home/room-section'
import {
  edsChecklistNoteItems,
  edsChecklistPromptItems,
  edsChecklistRatingItems,
  edsChecklistScaleLabels,
  edsChecklistSections,
} from '@/data/eds-checklist'
import { EdsChecklistRating } from '@/models/eds-checklist'

const STORAGE_KEY = 'nqa-eds-checklist'
const ratings: EdsChecklistRating[] = [1, 2, 3, 4, 5]

interface StoredChecklist {
  ratings?: Record<string, EdsChecklistRating>
  notes?: Record<string, string>
  prompts?: Record<string, string>
  scoredAt?: string
}

const isChecklistRating = (value: unknown): value is EdsChecklistRating => {
  return value === 1 || value === 2 || value === 3 || value === 4 || value === 5
}

const createEmptyRatings = () => {
  return Object.fromEntries(edsChecklistRatingItems.map((item) => [item.id, null])) as Record<
    string,
    EdsChecklistRating | null
  >
}

const createEmptyNotes = () => {
  return Object.fromEntries(edsChecklistNoteItems.map((item) => [item.id, ''])) as Record<
    string,
    string
  >
}

const createEmptyPrompts = () => {
  return Object.fromEntries(edsChecklistPromptItems.map((item) => [item.id, ''])) as Record<
    string,
    string
  >
}

const findSectionTitle = ({ itemId }: { itemId: string }) => {
  const found = edsChecklistSections.find((checklistSection) => {
    return checklistSection.items.some((item) => item.id === itemId)
  })

  return found?.title ?? 'Checklist'
}

export const EdsChecklistQuiz = () => {
  const [answers, setAnswers] = useState<Record<string, EdsChecklistRating | null>>(createEmptyRatings)
  const [notes, setNotes] = useState<Record<string, string>>(createEmptyNotes)
  const [prompts, setPrompts] = useState<Record<string, string>>(createEmptyPrompts)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)

      if (!raw) {
        return
      }

      const parsed = JSON.parse(raw) as StoredChecklist
      const nextAnswers = createEmptyRatings()
      const nextNotes = createEmptyNotes()
      const nextPrompts = createEmptyPrompts()

      Object.entries(parsed.ratings ?? {}).forEach(([id, rating]) => {
        if (id in nextAnswers && isChecklistRating(rating)) {
          nextAnswers[id] = rating
        }
      })

      Object.entries(parsed.notes ?? {}).forEach(([id, value]) => {
        if (id in nextNotes && typeof value === 'string') {
          nextNotes[id] = value
        }
      })

      Object.entries(parsed.prompts ?? {}).forEach(([id, value]) => {
        if (id in nextPrompts && typeof value === 'string') {
          nextPrompts[id] = value
        }
      })

      setAnswers(nextAnswers)
      setNotes(nextNotes)
      setPrompts(nextPrompts)
    } catch (error) {
      void error
    }
  }, [])

  const answeredCount = Object.values(answers).filter((answer) => answer !== null).length
  const totalCount = edsChecklistRatingItems.length

  const summary = useMemo(() => {
    if (!hasSubmitted) {
      return null
    }

    const grouped: Record<Exclude<EdsChecklistRating, 1>, string[]> = {
      5: [],
      4: [],
      3: [],
      2: [],
    }

    edsChecklistRatingItems.forEach((item) => {
      const rating = answers[item.id]

      if (rating && rating !== 1) {
        grouped[rating].push(`${item.text} (${findSectionTitle({ itemId: item.id })})`)
      }
    })

    const filledNotes = edsChecklistNoteItems
      .map((item) => {
        return {
          label: item.text,
          value: notes[item.id]?.trim() ?? '',
        }
      })
      .filter((item) => item.value.length > 0)

    const filledPrompts = edsChecklistPromptItems
      .map((item) => {
        return {
          label: item.text,
          value: prompts[item.id]?.trim() ?? '',
        }
      })
      .filter((item) => item.value.length > 0)

    return { grouped, filledNotes, filledPrompts }
  }, [answers, hasSubmitted, notes, prompts])

  const handleSubmit = ({ event }: { event: FormEvent<HTMLFormElement> }) => {
    event.preventDefault()
    setHasSubmitted(true)

    try {
      const storedRatings = Object.fromEntries(
        Object.entries(answers).filter((entry) => entry[1] !== null),
      ) as Record<string, EdsChecklistRating>

      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          ratings: storedRatings,
          notes,
          prompts,
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
    setAnswers(createEmptyRatings())
    setNotes(createEmptyNotes())
    setPrompts(createEmptyPrompts())
    setHasSubmitted(false)

    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch (error) {
      void error
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="space-y-8">
      <p>
        Check anything that applies now or has applied in the past. For important symptoms, add the
        age they began, how often they occur, what triggers them, and how they affect daily life in
        the note fields.
      </p>
      <p>
        A marked item does not necessarily mean it is caused by EDS. This checklist is intended to
        organize symptoms and identify areas worth discussing with a clinician.
      </p>

      <RoomSection title="The scale">
        <ol className="space-y-1">
          {ratings.map((rating) => (
            <li key={rating}>
              <span className="font-display text-room-teal">{rating}</span>
              {' — '}
              {edsChecklistScaleLabels[rating]}
            </li>
          ))}
        </ol>
        <p className="italic text-room-brown">
          Don’t answer according to what you think a “good patient” should report. Think about your
          actual body, including childhood if you remember it. Skip anything you do not want to
          answer.
        </p>
      </RoomSection>

      <form
        onSubmit={(event) => {
          handleSubmit({ event })
        }}
        className="space-y-6"
      >
        <p className="font-display text-room-teal" aria-live="polite">
          {answeredCount} of {totalCount} rated
        </p>

        {edsChecklistSections.map((checklistSection, sectionIndex) => (
          <LearnMoreSection
            key={checklistSection.id}
            id={checklistSection.id}
            title={checklistSection.title}
            defaultOpen={sectionIndex === 0}
          >
            {checklistSection.intro ? <p>{checklistSection.intro}</p> : null}

            <ol className="space-y-6">
              {checklistSection.items.map((item, itemIndex) => {
                const headingId = `${item.id}-label`

                if (item.kind === 'note' || item.kind === 'prompt') {
                  return (
                    <li key={item.id} className="min-w-0">
                      <label className="block space-y-2 rounded-md border border-room-brown/20 bg-[#efe6d6]/70 px-3 py-4 sm:px-4">
                        <span id={headingId} className="font-display text-lg leading-snug text-black">
                          {item.text}
                        </span>
                        {item.kind === 'note' ? (
                          <input
                            type="text"
                            value={notes[item.id] ?? ''}
                            onChange={(event) => {
                              setNotes((current) => {
                                return {
                                  ...current,
                                  [item.id]: event.target.value,
                                }
                              })
                            }}
                            className="w-full rounded-md border-2 border-room-brown/30 bg-[#f7f0e6] px-3 py-2 font-gallery text-lg text-black outline-none focus-visible:border-room-gold focus-visible:ring-2 focus-visible:ring-room-gold"
                          />
                        ) : (
                          <textarea
                            value={prompts[item.id] ?? ''}
                            onChange={(event) => {
                              setPrompts((current) => {
                                return {
                                  ...current,
                                  [item.id]: event.target.value,
                                }
                              })
                            }}
                            rows={4}
                            className="w-full rounded-md border-2 border-room-brown/30 bg-[#f7f0e6] px-3 py-2 font-gallery text-lg text-black outline-none focus-visible:border-room-gold focus-visible:ring-2 focus-visible:ring-room-gold"
                          />
                        )}
                      </label>
                    </li>
                  )
                }

                return (
                  <li key={item.id} className="min-w-0">
                    <div className="rounded-md border border-room-brown/20 bg-[#efe6d6]/70 px-3 py-4 sm:px-4">
                      <p id={headingId} className="font-display text-lg leading-snug text-black">
                        {itemIndex + 1}. {item.text}
                      </p>
                      <LoveLanguageRatingLine
                        name={item.id}
                        labelledBy={headingId}
                        value={answers[item.id]}
                        scaleLabels={edsChecklistScaleLabels}
                        onChange={({ rating }) => {
                          setAnswers((current) => {
                            return {
                              ...current,
                              [item.id]: rating,
                            }
                          })
                        }}
                      />
                    </div>
                  </li>
                )
              })}
            </ol>
          </LearnMoreSection>
        ))}

        {!hasSubmitted ? (
          <p className="text-center">
            <button type="submit" className="site-btn site-btn-lg">
              See my checklist summary →
            </button>
          </p>
        ) : null}
      </form>

      {summary ? (
        <section id="quiz-results" className="space-y-5" tabIndex={-1}>
          <h2 className="font-display text-3xl text-room-teal sm:text-4xl">Your checklist summary</h2>
          <p>
            This is a snapshot of what you marked, not a diagnosis. Bring the patterns that stand
            out to a clinician who understands connective-tissue disorders.
          </p>

          {([5, 4, 3, 2] as const).map((rating) => {
            const items = summary.grouped[rating]

            if (items.length === 0) {
              return null
            }

            return (
              <RoomSection key={rating} title={`${edsChecklistScaleLabels[rating]} (${items.length})`}>
                <BulletList items={items} />
              </RoomSection>
            )
          })}

          {summary.filledNotes.length > 0 ? (
            <RoomSection title="Your notes">
              {summary.filledNotes.map((item) => (
                <p key={item.label}>
                  <span className="font-display text-room-teal">{item.label}:</span> {item.value}
                </p>
              ))}
            </RoomSection>
          ) : null}

          {summary.filledPrompts.length > 0 ? (
            <RoomSection title="Your reflections">
              {summary.filledPrompts.map((item) => (
                <p key={item.label}>
                  <span className="font-display text-room-teal">{item.label}</span>
                  <br />
                  {item.value}
                </p>
              ))}
            </RoomSection>
          ) : null}

          {summary.grouped[5].length === 0 &&
          summary.grouped[4].length === 0 &&
          summary.grouped[3].length === 0 &&
          summary.grouped[2].length === 0 &&
          summary.filledNotes.length === 0 &&
          summary.filledPrompts.length === 0 ? (
            <p>Nothing above “doesn’t apply” was marked yet. You can go back and add more.</p>
          ) : null}

          <p className="text-center">
            <button
              type="button"
              onClick={handleRetake}
              className="font-display text-lg text-black underline decoration-room-gold underline-offset-4 transition hover:text-room-teal"
            >
              Clear and retake this checklist
            </button>
          </p>

          <GuideCta
            href="/library/so-you-think-youre-hypermobile"
            label="Back to the Hypermobile guide →"
            isDominant
          />
          <p className="text-center">
            Or return to <RoomLink href="/library">your library</RoomLink>.
          </p>
        </section>
      ) : null}
    </div>
  )
}
