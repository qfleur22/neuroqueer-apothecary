'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useFlowchartSession } from '@/components/flowchart/use-flowchart-session'
import { FlowchartQuestion, FlowchartSymptom } from '@/models/flowchart'
import {
  flowchartSymptomsById,
  getUnfinishedSymptoms,
  getVisibleQuestionCount,
  hasEmergencyAnswer,
  isSymptomFinished,
} from '@/utils/flowchart-data'

export const FlowchartFeeling = () => {
  const router = useRouter()
  const { session, updateSession, isReady } = useFlowchartSession()
  const [showErrors, setShowErrors] = useState(false)

  const selected = session.selectedIds
    .map((id) => {
      return flowchartSymptomsById[id]
    })
    .filter((symptom): symptom is FlowchartSymptom => {
      return Boolean(symptom)
    })

  useEffect(() => {
    if (!isReady) {
      return
    }
    if (selected.length === 0) {
      router.replace('/flowchart')
    }
  }, [isReady, router, selected.length])

  const unfinished = getUnfinishedSymptoms({ session })
  const canContinue = unfinished.length === 0 && selected.length > 0

  const goNext = () => {
    if (!canContinue) {
      setShowErrors(true)
      const first = unfinished[0]
      if (first) {
        const node = document.getElementById(`feeling-${first.id}`)
        node?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      return
    }
    router.push('/flowchart/guidance')
  }

  if (!isReady || selected.length === 0) {
    return <p>Loading your selected symptoms…</p>
  }

  return (
    <div className="space-y-6">
      <p>
        Answer the follow-up questions for each selected symptom. The next question appears in this
        same section. You can dismiss a symptom with the X if it no longer applies.
      </p>

      {selected.map((symptom) => (
        <FeelingSection
          key={symptom.id}
          symptom={symptom}
          showErrors={showErrors}
          isDismissed={session.dismissedIds.includes(symptom.id)}
          answers={session.answers}
          onDismiss={() => {
            updateSession((current) => {
              return {
                ...current,
                dismissedIds: current.dismissedIds.includes(symptom.id)
                  ? current.dismissedIds
                  : [...current.dismissedIds, symptom.id],
              }
            })
          }}
          onAnswer={({ questionId, answerId }) => {
            updateSession((current) => {
              return {
                ...current,
                dismissedIds: current.dismissedIds.filter((id) => {
                  return id !== symptom.id
                }),
                answers: {
                  ...current.answers,
                  [questionId]: answerId,
                },
              }
            })
          }}
        />
      ))}

      <section className="space-y-4 border-t-4 border-room-gold pt-8">
        <h2 className="font-display text-3xl text-room-teal sm:text-4xl">What to do about it</h2>
        <p>
          When every symptom has been answered or dismissed, Next lights up and takes you to
          guidance.
        </p>
        {showErrors && !canContinue ? (
          <p className="text-center font-display text-lg text-red-700" role="alert">
            Please answer or dismiss
          </p>
        ) : null}
        <p className="text-center">
          <button
            type="button"
            onClick={goNext}
            className={`site-btn site-btn-lg ${canContinue ? '' : 'site-btn-muted'}`}
            aria-disabled={!canContinue}
          >
            Next →
          </button>
        </p>
      </section>
    </div>
  )
}

const FeelingSection = ({
  symptom,
  answers,
  isDismissed,
  showErrors,
  onDismiss,
  onAnswer,
}: {
  symptom: FlowchartSymptom
  answers: Record<string, string>
  isDismissed: boolean
  showErrors: boolean
  onDismiss: () => void
  onAnswer: ({ questionId, answerId }: { questionId: string; answerId: string }) => void
}) => {
  const visibleCount = getVisibleQuestionCount({ symptom, answers })
  const isFinished = isSymptomFinished({
    symptom,
    session: { selectedIds: [symptom.id], answers, dismissedIds: isDismissed ? [symptom.id] : [] },
  })
  const needsWarning = showErrors && !isFinished
  const visibleQuestions = symptom.questions.slice(0, visibleCount)
  const isEmergency = hasEmergencyAnswer({ symptom, answers })

  return (
    <section
      id={`feeling-${symptom.id}`}
      className="space-y-4 rounded-md border border-room-teal/40 bg-room-teal/10 p-4 sm:p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-sm uppercase tracking-wide text-room-brown">{symptom.system}</p>
          <h2 className="font-display text-2xl text-room-teal sm:text-3xl">{symptom.label}</h2>
        </div>
        <button
          type="button"
          onClick={onDismiss}
          className="flowchart-dismiss"
          aria-label={`Dismiss ${symptom.label}`}
        >
          ×
        </button>
      </div>

      {isDismissed ? (
        <p className="font-gallery text-base text-room-brown">This symptom was dismissed.</p>
      ) : (
        <>
          {visibleQuestions.map((question, index) => (
            <QuestionBlock
              key={question.id}
              question={question}
              index={index}
              selectedAnswerId={answers[question.id]}
              showWarning={needsWarning && !answers[question.id] && index === visibleCount - 1}
              onAnswer={({ answerId }) => {
                onAnswer({ questionId: question.id, answerId })
              }}
            />
          ))}

          {isEmergency ? (
            <div className="rounded-md border-2 border-red-700 bg-red-50 px-4 py-4 text-red-900">
              <p className="font-display text-xl">Seek emergency or immediate treatment</p>
              <p className="mt-2">{symptom.emergencyTrigger}</p>
              <p className="mt-2">
                Stop the educational flow here. New severe symptoms should not be assumed to be EDS.
              </p>
            </div>
          ) : null}

          {isFinished && !isEmergency ? (
            <p className="font-display text-base text-room-teal">
              Questions for this symptom are complete. Next will gather what to do about it.
            </p>
          ) : null}
        </>
      )}
    </section>
  )
}

const QuestionBlock = ({
  question,
  index,
  selectedAnswerId,
  showWarning,
  onAnswer,
}: {
  question: FlowchartQuestion
  index: number
  selectedAnswerId?: string
  showWarning: boolean
  onAnswer: ({ answerId }: { answerId: string }) => void
}) => {
  const toneClass = index % 2 === 0 ? 'flowchart-question-even' : 'flowchart-question-odd'

  return (
    <div className={`flowchart-question ${toneClass} ${showWarning ? 'flowchart-question-warn' : ''}`}>
      {showWarning ? (
        <p className="mb-2 flex items-center gap-2 font-display text-base text-red-700" role="alert">
          <span aria-hidden="true" className="text-xl font-bold">
            !
          </span>
          Please answer or dismiss
        </p>
      ) : null}
      <p className="font-display text-lg text-black sm:text-xl">{question.prompt}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {question.answers.map((answer) => {
          const isSelected = selectedAnswerId === answer.id
          return (
            <button
              key={answer.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => {
                onAnswer({ answerId: answer.id })
              }}
              className={isSelected ? 'site-btn site-btn-sm' : 'site-btn-outline site-btn-sm'}
            >
              {answer.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
