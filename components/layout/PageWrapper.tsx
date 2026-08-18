'use client'

import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { pageVariants } from '@/lib/animations/variants'

interface PageWrapperProps {
  children: ReactNode
}

/**
 * Wraps page content with a Framer Motion entrance fade on route change.
 *
 * IMPORTANT: this does NOT use AnimatePresence. `children` here is the
 * RSC payload streamed in by the Next.js App Router for whatever route is
 * active — it is not a plain local React tree. AnimatePresence needs to
 * control exactly when a child unmounts so it can play an exit animation
 * first, but that timing assumption conflicts with how the App Router
 * streams/suspends new route segments during client-side navigation. The
 * two lifecycles fall out of sync and the incoming page can be left stuck
 * in an unresolved state — the page renders blank and only recovers on a
 * hard refresh, because a full reload skips client-side RSC transitions
 * entirely and always re-renders from scratch.
 *
 * Fix: drop the exit animation and AnimatePresence. `key={pathname}` alone
 * forces a real React remount on every navigation, which is just a normal
 * mount — Framer Motion's `initial`/`animate` still fades the new page in,
 * but nothing needs to coordinate with the old page's removal.
 */
export function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname()

  return (
    <motion.div key={pathname} initial="initial" animate="animate" variants={pageVariants}>
      {children}
    </motion.div>
  )
}
