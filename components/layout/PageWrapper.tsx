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
 */
export function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
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
