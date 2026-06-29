'use client'

import { useState, useEffect } from 'react'

interface UseScrollTriggerOptions {
  threshold?: number
  direction?: 'up' | 'down' | 'both'
}

/**
 * Returns whether the page has scrolled past a threshold.
 * Optionally tracks scroll direction.
 */
export function useScrollTrigger({
  threshold = 100,
  direction = 'both',
}: UseScrollTriggerOptions = {}) {
  const [triggered, setTriggered] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
  const [scrollY, setScrollY] = useState(0)
  const lastScrollY = useState(0)[0]

  useEffect(() => {
    let ticking = false
    let lastY = window.scrollY

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentY = window.scrollY
          const dir: 'up' | 'down' = currentY > lastY ? 'down' : 'up'

          setScrollY(currentY)
          setScrollDirection(dir)
          setTriggered(currentY > threshold)

          lastY = currentY
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  const isScrolledDown = direction === 'down' ? triggered && scrollDirection === 'down' : triggered
  const isScrolledUp = direction === 'up' ? triggered && scrollDirection === 'up' : triggered

  return {
    triggered,
    scrollY,
    scrollDirection,
    isScrolledDown,
    isScrolledUp,
  }
}

/**
 * Simple hook: returns true when scrolled past threshold
 */
export function useIsScrolled(threshold = 80): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}

/**
 * Returns normalized scroll progress 0–1 for the full page
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop || document.body.scrollTop
      const maxScroll = el.scrollHeight - el.clientHeight
      setProgress(maxScroll > 0 ? scrolled / maxScroll : 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}
