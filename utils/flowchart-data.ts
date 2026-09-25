import flowchartJson from '@/data/flowchart.json'
import {
  FlowchartCloudItem,
  FlowchartDataset,
  FlowchartQuestion,
  FlowchartSession,
  FlowchartSymptom,
} from '@/models/flowchart'

export const flowchartData = flowchartJson as FlowchartDataset

export const flowchartSymptomsById: Record<string, FlowchartSymptom> = Object.fromEntries(
  flowchartData.symptoms.map((symptom) => [symptom.id, symptom]),
)

export const emptyFlowchartSession = (): FlowchartSession => {
  return {
    selectedIds: [],
    answers: {},
    dismissedIds: [],
  }
}

export const getSymptomsForSystem = ({ system }: { system: string }): FlowchartSymptom[] => {
  return flowchartData.symptoms.filter((symptom) => {
    return symptom.system === system
  })
}

export const getCloudItemsForSystem = ({ system }: { system: string }): FlowchartCloudItem[] => {
  const symptoms = getSymptomsForSystem({ system })
  const items: FlowchartCloudItem[] = []
  const seen = new Set<string>()
  const sizes: Array<FlowchartCloudItem['size']> = ['lg', 'md', 'sm']

  symptoms.forEach((symptom, index) => {
    items.push({
      id: symptom.id,
      label: symptom.label,
      kind: 'symptom',
      symptomId: symptom.id,
      size: sizes[index % sizes.length],
    })
    seen.add(symptom.label.toLowerCase())
  })

  symptoms.forEach((symptom) => {
    symptom.mechanisms.forEach((mechanism, index) => {
      const key = mechanism.toLowerCase()
      if (seen.has(key)) {
        return
      }
      seen.add(key)
      items.push({
        id: `${symptom.id}-ailment-${index}`,
        label: mechanism,
        kind: 'ailment',
        symptomId: symptom.id,
        size: index % 2 === 0 ? 'sm' : 'md',
      })
    })
  })

  return items
}

export const getQuestionById = ({
  questionId,
}: {
  questionId: string
}): FlowchartQuestion | undefined => {
  for (const symptom of flowchartData.symptoms) {
    const match = symptom.questions.find((question) => {
      return question.id === questionId
    })
    if (match) {
      return match
    }
  }
  return undefined
}

export const getVisibleQuestionCount = ({
  symptom,
  answers,
}: {
  symptom: FlowchartSymptom
  answers: Record<string, string>
}): number => {
  let visible = 1
  for (let index = 0; index < symptom.questions.length; index += 1) {
    const question = symptom.questions[index]
    const answerId = answers[question.id]
    if (!answerId) {
      return visible
    }
    const answer = question.answers.find((option) => {
      return option.id === answerId
    })
    if (answer?.isRedFlag) {
      return index + 1
    }
    if (index < symptom.questions.length - 1) {
      visible = index + 2
    }
  }
  return visible
}

export const isSymptomFinished = ({
  symptom,
  session,
}: {
  symptom: FlowchartSymptom
  session: FlowchartSession
}): boolean => {
  if (session.dismissedIds.includes(symptom.id)) {
    return true
  }
  const visibleCount = getVisibleQuestionCount({
    symptom,
    answers: session.answers,
  })
  const lastVisible = symptom.questions[visibleCount - 1]
  if (!lastVisible) {
    return false
  }
  const answerId = session.answers[lastVisible.id]
  if (!answerId) {
    return false
  }
  const answer = lastVisible.answers.find((option) => {
    return option.id === answerId
  })
  if (answer?.isRedFlag) {
    return true
  }
  return visibleCount === symptom.questions.length
}

export const getUnfinishedSymptoms = ({
  session,
}: {
  session: FlowchartSession
}): FlowchartSymptom[] => {
  return session.selectedIds
    .map((id) => {
      return flowchartSymptomsById[id]
    })
    .filter((symptom): symptom is FlowchartSymptom => {
      return Boolean(symptom) && !isSymptomFinished({ symptom, session })
    })
}

export const hasEmergencyAnswer = ({
  symptom,
  answers,
}: {
  symptom: FlowchartSymptom
  answers: Record<string, string>
}): boolean => {
  return symptom.questions.some((question) => {
    const answerId = answers[question.id]
    if (!answerId) {
      return false
    }
    return question.answers.some((option) => {
      return option.id === answerId && option.isRedFlag
    })
  })
}
