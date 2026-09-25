'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useFlowchartSession } from '@/components/flowchart/use-flowchart-session'
import { FlowchartSymptom } from '@/models/flowchart'
import { flowchartSymptomsById, hasEmergencyAnswer } from '@/utils/flowchart-data'

export const FlowchartGuidance = () => {
  const router = useRouter()
  const { session, isReady } = useFlowchartSession()

  const selected = session.selectedIds
    .map((id) => {
      return flowchartSymptomsById[id]
    })
    .filter((symptom): symptom is FlowchartSymptom => {
      return Boolean(symptom) && !session.dismissedIds.includes(symptom.id)
    })

  useEffect(() => {
    if (!isReady) {
      return
    }
    if (session.selectedIds.length === 0) {
      router.replace('/flowchart')
    }
  }, [isReady, router, session.selectedIds.length])

  if (!isReady) {
    return <p>Loading guidance…</p>
  }

  const emergencies = selected.filter((symptom) => {
    return hasEmergencyAnswer({ symptom, answers: session.answers })
  })
  const others = selected.filter((symptom) => {
    return !hasEmergencyAnswer({ symptom, answers: session.answers })
  })

  return (
    <div className="space-y-6">
      <p>
        This is educational navigation, not a diagnosis. Use “could be related to,” “associated
        with,” or “consider” rather than treating any mechanism as a confirmed cause.
      </p>

      {emergencies.length > 0 ? (
        <section className="space-y-4 rounded-md border-2 border-red-700 bg-red-50 px-4 py-5 text-red-900">
          <h2 className="font-display text-2xl sm:text-3xl">Emergency / immediate treatment</h2>
          <p>
            One or more of your answers matched a red-flag pattern. Seek emergency medical
            evaluation now. Do not keep using this flowchart to narrow an EDS-related explanation.
          </p>
          {emergencies.map((symptom) => (
            <article key={symptom.id} className="space-y-2">
              <h3 className="font-display text-xl">{symptom.label}</h3>
              <p>{symptom.emergencyTrigger}</p>
            </article>
          ))}
        </section>
      ) : null}

      {others.map((symptom) => (
        <section
          key={symptom.id}
          className="space-y-3 rounded-md border border-room-teal/40 bg-white px-4 py-5"
        >
          <p className="font-display text-sm uppercase tracking-wide text-room-brown">{symptom.system}</p>
          <h2 className="font-display text-2xl text-room-teal sm:text-3xl">{symptom.label}</h2>
          <p>
            <span className="font-display text-room-teal">Suggested triage: </span>
            {symptom.triage}
          </p>
          {symptom.mechanisms.length > 0 ? (
            <div>
              <p className="font-display text-lg text-room-teal">Mechanisms to consider</p>
              <ul className="guide-list mt-2">
                {symptom.mechanisms.map((mechanism) => (
                  <li key={mechanism}>{mechanism}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <p>
            <span className="font-display text-room-teal">Suggested next step: </span>
            {symptom.nextStep}
          </p>
        </section>
      ))}

      {selected.length === 0 ? (
        <p>Every selected symptom was dismissed. You can start again if something still needs attention.</p>
      ) : null}

      <p>
        Known or suspected vascular EDS should use a lower threshold for sudden unexplained chest,
        abdominal, flank, back, or neck pain. Those vascular emergencies are not typical of hEDS.
      </p>

      <p className="text-center">
        <Link href="/flowchart" className="site-btn site-btn-md">
          Start over →
        </Link>
      </p>
    </div>
  )
}
