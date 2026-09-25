import { FlowchartSession } from '@/models/flowchart'
import { emptyFlowchartSession } from '@/utils/flowchart-data'

export const FLOWCHART_SESSION_KEY = 'nqa-flowchart-session'

export const readFlowchartSession = (): FlowchartSession => {
  if (typeof window === 'undefined') {
    return emptyFlowchartSession()
  }

  try {
    const raw = window.sessionStorage.getItem(FLOWCHART_SESSION_KEY)
    if (!raw) {
      return emptyFlowchartSession()
    }
    const parsed: unknown = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') {
      return emptyFlowchartSession()
    }
    const record = parsed as Partial<FlowchartSession>
    return {
      selectedIds: Array.isArray(record.selectedIds) ? record.selectedIds.filter((id) => typeof id === 'string') : [],
      answers:
        record.answers && typeof record.answers === 'object' && !Array.isArray(record.answers)
          ? Object.fromEntries(
              Object.entries(record.answers).filter((entry) => {
                return typeof entry[0] === 'string' && typeof entry[1] === 'string'
              }),
            )
          : {},
      dismissedIds: Array.isArray(record.dismissedIds)
        ? record.dismissedIds.filter((id) => typeof id === 'string')
        : [],
    }
  } catch (error) {
    console.error(error)
    return emptyFlowchartSession()
  }
}

export const writeFlowchartSession = ({ session }: { session: FlowchartSession }) => {
  if (typeof window === 'undefined') {
    return
  }
  window.sessionStorage.setItem(FLOWCHART_SESSION_KEY, JSON.stringify(session))
}
