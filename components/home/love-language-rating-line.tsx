'use client'

import { KeyboardEvent, PointerEvent } from 'react'
import { LoveLanguageRating } from '@/models/love-language'

const ratings: LoveLanguageRating[] = [1, 2, 3, 4, 5]

export const LoveLanguageRatingLine = ({
  name,
  labelledBy,
  value,
  scaleLabels,
  onChange,
}: {
  name: string
  labelledBy: string
  value: LoveLanguageRating | null
  scaleLabels: Record<LoveLanguageRating, string>
  onChange: ({ rating }: { rating: LoveLanguageRating }) => void
}) => {
  const fillPercent = value ? ((value - 1) / 4) * 100 : 0

  const ratingFromClientX = ({
    clientX,
    target,
  }: {
    clientX: number
    target: HTMLElement
  }) => {
    const rect = target.getBoundingClientRect()
    const ratio = rect.width <= 0 ? 0 : (clientX - rect.left) / rect.width
    const stepped = Math.round(ratio * 4) + 1

    if (stepped < 1) {
      return 1 as LoveLanguageRating
    }

    if (stepped > 5) {
      return 5 as LoveLanguageRating
    }

    return stepped as LoveLanguageRating
  }

  const handlePointer = ({ event }: { event: PointerEvent<HTMLDivElement> }) => {
    if (event.pointerType === 'mouse' && event.buttons !== 1 && event.type !== 'pointerdown') {
      return
    }

    onChange({
      rating: ratingFromClientX({
        clientX: event.clientX,
        target: event.currentTarget,
      }),
    })
  }

  const handleKeyDown = ({ event }: { event: KeyboardEvent<HTMLDivElement> }) => {
    if (event.key === 'Home') {
      event.preventDefault()
      onChange({ rating: 1 })
      return
    }

    if (event.key === 'End') {
      event.preventDefault()
      onChange({ rating: 5 })
      return
    }

    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault()
      const next = (value ?? 0) + 1
      onChange({ rating: (next > 5 ? 5 : next) as LoveLanguageRating })
      return
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault()
      const next = (value ?? 2) - 1
      onChange({ rating: (next < 1 ? 1 : next) as LoveLanguageRating })
    }
  }

  return (
    <div className="w-full min-w-0 pt-2">
      <div
        role="slider"
        tabIndex={0}
        aria-labelledby={labelledBy}
        aria-valuemin={1}
        aria-valuemax={5}
        aria-valuenow={value ?? undefined}
        aria-valuetext={value ? `${value} — ${scaleLabels[value]}` : 'Not answered yet'}
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId)
          handlePointer({ event })
        }}
        onPointerMove={(event) => {
          if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
            return
          }

          handlePointer({ event })
        }}
        onKeyDown={(event) => {
          handleKeyDown({ event })
        }}
        className="relative h-16 w-full touch-none cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-room-gold"
      >
        <div className="pointer-events-none absolute inset-x-[1.125rem] top-[1.35rem] border-t-[3px] border-dotted border-room-brown/45" />
        <div
          className="pointer-events-none absolute left-[1.125rem] top-[1.35rem] border-t-[3px] border-dotted border-room-teal transition-[width] duration-150 ease-out"
          style={{ width: `calc((100% - 2.25rem) * ${fillPercent / 100})` }}
        />

        <div className="absolute inset-x-0 top-1 flex items-start justify-between">
          {ratings.map((rating) => {
            const isFilled = value !== null && rating <= value
            const isCurrent = value === rating

            return (
              <span
                key={rating}
                aria-hidden="true"
                className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 font-display text-sm ${
                  isCurrent
                    ? 'border-room-gold bg-room-teal text-room-gold shadow-md'
                    : isFilled
                      ? 'border-room-teal bg-room-teal text-room-gold'
                      : 'border-room-brown/40 bg-[#f7f0e6] text-room-teal'
                }`}
              >
                {rating}
              </span>
            )
          })}
        </div>
      </div>
      <p className="min-h-6 text-center font-gallery text-base text-room-brown">
        {value ? `${value} — ${scaleLabels[value]}` : 'Tap a number or drag along the line'}
      </p>
      <input type="hidden" name={name} value={value ?? ''} />
    </div>
  )
}
