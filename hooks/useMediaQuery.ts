'use client'

import { useState, useEffect } from 'react'

const breakpoints = {
  xs: '(min-width: 375px)',
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1400px)',
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
  touch: '(pointer: coarse)',
  fine: '(pointer: fine)',
} as const

type Breakpoint = keyof typeof breakpoints

/**
 * Hook to check if a CSS media query matches.
 * SSR-safe: returns false on the server.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [query])

  return matches
}

/**
 * Hook to check a named breakpoint
 */
export function useBreakpoint(breakpoint: Breakpoint): boolean {
  return useMediaQuery(breakpoints[breakpoint])
}

/**
 * Convenience hooks
 */
export const useIsMobile = () => useMediaQuery('(max-width: 767px)')
export const useIsTablet = () => useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)')
export const useReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)')
export const useTouchDevice = () => useMediaQuery('(pointer: coarse)')
