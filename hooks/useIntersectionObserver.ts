'use client'

import { useState, useEffect, useRef, type RefObject } from 'react'

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

/**
 * Hook to observe when an element enters/exits the viewport.
 * @param options - IntersectionObserver options + freezeOnceVisible
 * @returns [ref, isIntersecting, entry]
 */
export function useIntersectionObserver<T extends Element = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
): [RefObject<T | null>, boolean, IntersectionObserverEntry | null] {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false,
  } = options

  const ref = useRef<T>(null)
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)
  const frozen = entry?.isIntersecting && freezeOnceVisible

  useEffect(() => {
    const node = ref.current
    if (!node || frozen) return

    const observer = new IntersectionObserver(
      ([observerEntry]) => setEntry(observerEntry),
      { threshold, root, rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, root, rootMargin, frozen])

  const isIntersecting = !!entry?.isIntersecting

  return [ref, isIntersecting, entry]
}

/**
 * Simplified hook — just returns isVisible boolean
 */
export function useIsVisible(
  threshold = 0.1,
  freezeOnceVisible = true
): [RefObject<HTMLDivElement | null>, boolean] {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({
    threshold,
    freezeOnceVisible,
    rootMargin: '0px 0px -50px 0px',
  })
  return [ref, isIntersecting]
}
