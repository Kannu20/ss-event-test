'use client'

import { type ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

/**
 * Global client-side providers wrapper.
 * Add context providers here as needed (theme, toast, auth, etc.)
 */
export function Providers({ children }: ProvidersProps) {
  return <>{children}</>
}
