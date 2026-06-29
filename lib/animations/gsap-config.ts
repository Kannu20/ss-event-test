'use client'

/**
 * GSAP Configuration & Plugin Registration
 * Always import this before using GSAP in components.
 * Only runs client-side.
 */

let isInitialized = false

export async function initGSAP() {
  if (typeof window === 'undefined' || isInitialized) return

  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  const { ScrollToPlugin } = await import('gsap/ScrollToPlugin')

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  // Global GSAP defaults
  gsap.defaults({
    ease: 'power3.out',
    duration: 0.8,
  })

  // ScrollTrigger defaults
  ScrollTrigger.defaults({
    toggleActions: 'play none none none',
    start: 'top 85%',
  })

  isInitialized = true

  return { gsap, ScrollTrigger }
}

/**
 * Preset animation configs for common patterns
 */
export const gsapPresets = {
  /** Fade up reveal — standard section entry */
  fadeUp: {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
  },

  /** Hero text reveal — split line by line */
  heroReveal: {
    from: { opacity: 0, y: 80 },
    to: { opacity: 1, y: 0, duration: 1, ease: 'power4.out', stagger: 0.1 },
  },

  /** Image parallax — subtle vertical movement on scroll */
  imageParallax: {
    from: { yPercent: -10 },
    to: { yPercent: 10 },
  },

  /** Counter roll-up animation */
  counter: {
    duration: 2,
    ease: 'power2.out',
  },

  /** Card stagger entry */
  cardStagger: {
    from: { opacity: 0, y: 40, scale: 0.97 },
    to: { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1 },
  },

  /** Horizontal marquee */
  marquee: {
    xPercent: -50,
    repeat: -1,
    duration: 30,
    ease: 'none',
  },
} as const

/**
 * Create a GSAP context with cleanup
 * Use inside useEffect with the container ref
 */
export function createGSAPContext(
  container: Element | null,
  callback: (gsap: typeof import('gsap').gsap) => (() => void) | void
) {
  if (!container || typeof window === 'undefined') return

  initGSAP().then((result) => {
    if (!result || !result.gsap) return
    const ctx = result.gsap.context(() => callback(result.gsap), container)
    return () => ctx.revert()
  })
}
