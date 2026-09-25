export interface FlowchartAnswer {
  id: string
  label: string
  isRedFlag: boolean
}

export interface FlowchartQuestion {
  id: string
  prompt: string
  answers: FlowchartAnswer[]
}

export interface FlowchartSymptom {
  id: string
  system: string
  label: string
  questions: FlowchartQuestion[]
  emergencyTrigger: string
  triage: string
  mechanisms: string[]
  nextStep: string
}

export interface FlowchartDataset {
  systems: string[]
  symptoms: FlowchartSymptom[]
}

export interface FlowchartCloudItem {
  id: string
  label: string
  kind: 'symptom' | 'ailment'
  symptomId: string
  size: 'sm' | 'md' | 'lg'
}

export type FlowchartOutcome = 'pending' | 'dismissed' | 'emergency' | 'guidance'

export interface FlowchartSession {
  selectedIds: string[]
  answers: Record<string, string>
  dismissedIds: string[]
}
