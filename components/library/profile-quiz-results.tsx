'use client'

import { useEffect, useState } from 'react'
import { RoomLink } from '@/components/home/room-link'
import { BulletList, RoomSection } from '@/components/home/room-section'
import { edsChecklistScaleLabels } from '@/data/eds-checklist'
import { LoveLanguageKind, LoveLanguageRating } from '@/models/love-language'
import { EdsChecklistRating } from '@/models/eds-checklist'
import { readFlowchartSession } from '@/utils/flowchart-session'
import {
  LOVE_LANGUAGE_QUESTION_COUNT,
  formatPreferredNames,
  scoreLoveLanguages,
} from '@/utils/score-love-languages'

interface LoveLanguageSnapshot {
  kind: LoveLanguageKind
  preferred: string
  top: string[]
  scoredAt?: string
}

interface ChecklistSnapshot {
  rated: number
  counts: Partial<Record<EdsChecklistRating, number>>
  noteCount: number
  scoredAt?: string
}

interface QuizSnapshots {
  giving: LoveLanguageSnapshot | null
  receiving: LoveLanguageSnapshot | null
  checklist: ChecklistSnapshot | null
  flowchartInProgress: boolean
}

const isLoveLanguageRating = (value: unknown): value is LoveLanguageRating => {
  return value === 1 || value === 2 || value === 3 || value === 4 || value === 5
}

const isChecklistRating = (value: unknown): value is EdsChecklistRating => {
  return value === 1 || value === 2 || value === 3 || value === 4 || value === 5
}

const readLoveLanguageSnapshot = ({ kind }: { kind: LoveLanguageKind }) => {
  try {
    const raw = window.localStorage.getItem(`nqa-love-languages-${kind}`)

    if (!raw) {
      return null
    }

    const parsed = JSON.parse(raw) as { answers?: unknown; scoredAt?: unknown }

    if (!Array.isArray(parsed.answers) || parsed.answers.length !== LOVE_LANGUAGE_QUESTION_COUNT) {
      return null
    }

    if (!parsed.answers.every((answer) => isLoveLanguageRating(answer))) {
      return null
    }

    const scored = scoreLoveLanguages({
      kind,
      answers: parsed.answers,
    })

    return {
      kind,
      preferred: formatPreferredNames({ preferred: scored.preferred }),
      top: scored.ranked.slice(0, 3).map((result) => {
        return `${result.style.name} · ${result.percent}%`
      }),
      scoredAt: typeof parsed.scoredAt === 'string' ? parsed.scoredAt : undefined,
    }
  } catch (error) {
    void error
    return null
  }
}

const readChecklistSnapshot = () => {
  try {
    const raw = window.localStorage.getItem('nqa-eds-checklist')

    if (!raw) {
      return null
    }

    const parsed = JSON.parse(raw) as {
      ratings?: unknown
      notes?: unknown
      scoredAt?: unknown
    }

    if (!parsed.ratings || typeof parsed.ratings !== 'object' || Array.isArray(parsed.ratings)) {
      return null
    }

    const counts: Partial<Record<EdsChecklistRating, number>> = {}
    let rated = 0

    Object.values(parsed.ratings).forEach((value) => {
      if (!isChecklistRating(value)) {
        return
      }

      rated += 1
      counts[value] = (counts[value] ?? 0) + 1
    })

    if (rated === 0) {
      return null
    }

    const notes =
      parsed.notes && typeof parsed.notes === 'object' && !Array.isArray(parsed.notes)
        ? Object.values(parsed.notes).filter((value) => typeof value === 'string' && value.trim())
        : []

    return {
      rated,
      counts,
      noteCount: notes.length,
      scoredAt: typeof parsed.scoredAt === 'string' ? parsed.scoredAt : undefined,
    }
  } catch (error) {
    void error
    return null
  }
}

const formatTakenAt = ({ value }: { value?: string }) => {
  if (!value) {
    return null
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return null
  }

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export const ProfileQuizResults = () => {
  const [snapshots, setSnapshots] = useState<QuizSnapshots | null>(null)

  useEffect(() => {
    const flowchart = readFlowchartSession()

    setSnapshots({
      giving: readLoveLanguageSnapshot({ kind: 'giving' }),
      receiving: readLoveLanguageSnapshot({ kind: 'receiving' }),
      checklist: readChecklistSnapshot(),
      flowchartInProgress: flowchart.selectedIds.length > 0,
    })
  }, [])

  if (!snapshots) {
    return <p>Looking for quizzes saved in this browser…</p>
  }

  const hasAny =
    Boolean(snapshots.giving) ||
    Boolean(snapshots.receiving) ||
    Boolean(snapshots.checklist) ||
    snapshots.flowchartInProgress

  return (
    <div className="space-y-5">
      <p>
        Quiz answers stay in this browser so they are not stored on Shopify. Take a quiz on another
        device and it will not show up here.
      </p>

      {!hasAny ? (
        <p>
          No quiz results on this device yet. You can take the{' '}
          <RoomLink href="/love-languages/giving">giving</RoomLink> and{' '}
          <RoomLink href="/love-languages/receiving">receiving</RoomLink> love language quizzes, or
          open the <RoomLink href="/flowchart">symptom flowchart</RoomLink>.
        </p>
      ) : null}

      {snapshots.giving ? (
        <RoomSection title="How you give love">
          <p>
            Preferred language{snapshots.giving.preferred.includes(' and ') ? 's' : ''}:{' '}
            <span className="font-display text-room-teal">{snapshots.giving.preferred}</span>
          </p>
          <BulletList items={snapshots.giving.top} />
          {formatTakenAt({ value: snapshots.giving.scoredAt }) ? (
            <p className="text-base text-room-brown">
              Saved {formatTakenAt({ value: snapshots.giving.scoredAt })}
            </p>
          ) : null}
          <p>
            <RoomLink href="/love-languages/giving">Retake the giving quiz</RoomLink>
          </p>
        </RoomSection>
      ) : null}

      {snapshots.receiving ? (
        <RoomSection title="How you receive love">
          <p>
            Preferred language{snapshots.receiving.preferred.includes(' and ') ? 's' : ''}:{' '}
            <span className="font-display text-room-teal">{snapshots.receiving.preferred}</span>
          </p>
          <BulletList items={snapshots.receiving.top} />
          {formatTakenAt({ value: snapshots.receiving.scoredAt }) ? (
            <p className="text-base text-room-brown">
              Saved {formatTakenAt({ value: snapshots.receiving.scoredAt })}
            </p>
          ) : null}
          <p>
            <RoomLink href="/love-languages/receiving">Retake the receiving quiz</RoomLink>
          </p>
        </RoomSection>
      ) : null}

      {snapshots.checklist ? (
        <RoomSection title="EDS symptom checklist">
          <p>{snapshots.checklist.rated} items rated on this device.</p>
          <BulletList
            items={([5, 4, 3, 2] as const)
              .filter((rating) => (snapshots.checklist?.counts[rating] ?? 0) > 0)
              .map((rating) => {
                return `${edsChecklistScaleLabels[rating]} · ${snapshots.checklist?.counts[rating]}`
              })}
          />
          {snapshots.checklist.noteCount > 0 ? (
            <p>{snapshots.checklist.noteCount} note{snapshots.checklist.noteCount === 1 ? '' : 's'} saved.</p>
          ) : null}
          {formatTakenAt({ value: snapshots.checklist.scoredAt }) ? (
            <p className="text-base text-room-brown">
              Saved {formatTakenAt({ value: snapshots.checklist.scoredAt })}
            </p>
          ) : null}
          <p>
            <RoomLink href="/library/eds-checklist">Open the full checklist</RoomLink>
          </p>
        </RoomSection>
      ) : null}

      {snapshots.flowchartInProgress ? (
        <RoomSection title="Symptom flowchart">
          <p>You have a flowchart session started in this tab.</p>
          <p>
            <RoomLink href="/flowchart">Return to the flowchart</RoomLink>
          </p>
        </RoomSection>
      ) : null}

      {hasAny && (!snapshots.giving || !snapshots.receiving) ? (
        <p>
          Still to take:{' '}
          {!snapshots.giving ? <RoomLink href="/love-languages/giving">giving love</RoomLink> : null}
          {!snapshots.giving && !snapshots.receiving ? ' · ' : null}
          {!snapshots.receiving ? (
            <RoomLink href="/love-languages/receiving">receiving love</RoomLink>
          ) : null}
          .
        </p>
      ) : null}
    </div>
  )
}
