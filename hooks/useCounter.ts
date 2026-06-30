'use client'

import { useState, useEffect, useRef } from 'react'
import { useReducedMotion } from './useMediaQuery'

interface UseCounterOptions {
  start?: number
  end: number
  duration?: number
  delay?: number
  easing?: (t: number) => number
}

/**
 * Animates a number from start to end over a duration.
 * Respects prefers-reduced-motion.
 */
export function useCounter({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  easing = easeOutExpo,
}: UseCounterOptions): number {
  const [count, setCount] = useState(start)
  const prefersReducedMotion = useReducedMotion()
  const rafRef = useRef<number>(0)
  const startTimeRef = useRef<number | null>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(end)
      return
    }

    const delayTimer = setTimeout(() => {
      startedRef.current = true

      const animate = (timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp

        const elapsed = timestamp - startTimeRef.current
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = easing(progress)
        const current = Math.round(start + (end - start) * easedProgress)

        setCount(current)

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate)
        }
      }

      rafRef.current = requestAnimationFrame(animate)
    }, delay)

    return () => {
      clearTimeout(delayTimer)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      startTimeRef.current = null
    }
  }, [start, end, duration, delay, prefersReducedMotion])

  return count
}

/* ─── Easing functions ──────────────────────── */

export function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export function linear(t: number): number {
  return t
}
