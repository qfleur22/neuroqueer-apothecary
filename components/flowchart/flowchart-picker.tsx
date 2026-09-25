'use client'

import { useRouter } from 'next/navigation'
import { LearnMoreSection } from '@/components/home/learn-more-section'
import { useFlowchartSession } from '@/components/flowchart/use-flowchart-session'
import { flowchartData, getCloudItemsForSystem } from '@/utils/flowchart-data'

export const FlowchartPicker = () => {
  const router = useRouter()
  const { session, updateSession } = useFlowchartSession()
  const hasSelection = session.selectedIds.length > 0

  const toggleSymptom = ({ symptomId }: { symptomId: string }) => {
    updateSession((current) => {
      const isSelected = current.selectedIds.includes(symptomId)
      return {
        ...current,
        selectedIds: isSelected
          ? current.selectedIds.filter((id) => {
              return id !== symptomId
            })
          : [...current.selectedIds, symptomId],
        dismissedIds: current.dismissedIds.filter((id) => {
          return id !== symptomId
        }),
      }
    })
  }

  const goNext = () => {
    if (!hasSelection) {
      return
    }
    router.push('/flowchart/feeling')
  }

  return (
    <div className="space-y-6">
      <p>
        This is a symptom-navigation tool for people living with EDS/HSD. It helps organize what you
        are feeling right now and points toward safer next steps. It does not diagnose the cause of
        a symptom.
      </p>
      <p>
        New, sudden, severe, rapidly worsening, or dramatically different symptoms should not be
        assumed to be “just EDS.” Vascular EDS has a different emergency risk profile: known or
        suspected vEDS should trigger a lower threshold for sudden unexplained chest, abdominal,
        flank, back, or neck pain.
      </p>
      <p>
        Open a body-system section and tap anything that matches. The cloud includes both symptoms
        and related ailments people in the EDS realm sometimes deal with. Historical features such
        as Beighton scores, childhood flexibility, or family history are intentionally not part of
        this flowchart.
      </p>

      {flowchartData.systems.map((system) => (
        <LearnMoreSection key={system} id={systemToId({ system })} title={system}>
          <div className="flowchart-cloud">
            {getCloudItemsForSystem({ system }).map((item) => {
              const isSelected = session.selectedIds.includes(item.symptomId)
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => {
                    toggleSymptom({ symptomId: item.symptomId })
                  }}
                  className={`site-btn-outline flowchart-cloud-${item.size}`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </LearnMoreSection>
      ))}

      <section className="space-y-4 border-t-4 border-room-gold pt-8">
        <h2 className="font-display text-3xl text-room-teal sm:text-4xl">What to do about it</h2>
        <p>
          After you choose what you are feeling, Next asks a few follow-up questions and then offers
          triage-style guidance. Emergency or red-flag answers stop the educational flow and point
          you toward urgent care instead of narrowing a diagnosis.
        </p>
        <p className="text-center">
          <button
            type="button"
            onClick={goNext}
            disabled={!hasSelection}
            className={`site-btn site-btn-lg ${hasSelection ? '' : 'site-btn-muted'}`}
          >
            Next →
          </button>
        </p>
        {!hasSelection ? (
          <p className="text-center font-display text-base text-room-brown">
            Select at least one symptom or ailment to continue.
          </p>
        ) : null}
      </section>
    </div>
  )
}

const systemToId = ({ system }: { system: string }) => {
  return system
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
