'use client'

import { type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { pageVariants } from '@/lib/animations/variants'

interface PageWrapperProps {
  children: ReactNode
}

/**
 * Wraps page content with Framer Motion page transition.
 * Smooth fade + slight y-shift between route changes.
 *
 * Note: intentionally NOT using mode="wait" here. That mode forces the
 * incoming page to sit blank until the outgoing page's exit animation
 * fully finishes (~200ms), adding a dead pause to every navigation.
 * Default (sync) mode lets the new page mount and animate in immediately
 * while the old one fades out underneath it — same visual effect, no stall.
 */
export function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
