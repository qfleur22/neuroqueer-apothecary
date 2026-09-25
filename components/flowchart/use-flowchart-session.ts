'use client'

import { useCallback, useEffect, useState } from 'react'
import { FlowchartSession } from '@/models/flowchart'
import { emptyFlowchartSession } from '@/utils/flowchart-data'
import { readFlowchartSession, writeFlowchartSession } from '@/utils/flowchart-session'

export const useFlowchartSession = () => {
  const [session, setSession] = useState<FlowchartSession>(emptyFlowchartSession)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setSession(readFlowchartSession())
    setIsReady(true)
  }, [])

  const updateSession = useCallback((next: FlowchartSession | ((current: FlowchartSession) => FlowchartSession)) => {
    setSession((current) => {
      const resolved = typeof next === 'function' ? next(current) : next
      writeFlowchartSession({ session: resolved })
      return resolved
    })
  }, [])

  return { session, updateSession, isReady }
}
