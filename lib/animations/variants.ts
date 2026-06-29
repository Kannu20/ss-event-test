import type { Variants, Transition } from 'framer-motion'

/* ─────────────────────────────────────────────
   Shared Transitions
   ───────────────────────────────────────────── */
export const luxuryTransition: Transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1], // ease-luxury
}

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
}

export const fastTransition: Transition = {
  duration: 0.25,
  ease: [0.25, 0.46, 0.45, 0.94],
}

/* ─────────────────────────────────────────────
   Fade Variants
   ───────────────────────────────────────────── */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: luxuryTransition },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: luxuryTransition },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: luxuryTransition },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: luxuryTransition },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: luxuryTransition },
}

/* ─────────────────────────────────────────────
   Scale Variants
   ───────────────────────────────────────────── */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: luxuryTransition },
}

export const scaleInSpring: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...springTransition, opacity: { duration: 0.3 } },
  },
}

/* ─────────────────────────────────────────────
   Stagger Container Variants
   ───────────────────────────────────────────── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

/* ─────────────────────────────────────────────
   Slide Variants (for drawers, menus)
   ───────────────────────────────────────────── */
export const slideInRight: Variants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit: { x: '100%', transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
}

export const slideInLeft: Variants = {
  hidden: { x: '-100%' },
  visible: { x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit: { x: '-100%', transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
}

export const slideInTop: Variants = {
  hidden: { y: '-100%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit: { y: '-100%', opacity: 0, transition: { duration: 0.25 } },
}

/* ─────────────────────────────────────────────
   Dropdown / Menu Variants
   ───────────────────────────────────────────── */
export const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    pointerEvents: 'none' as const,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    pointerEvents: 'auto' as const,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -4,
    scale: 0.98,
    transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
  },
}

export const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, x: '100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
}

export const menuItemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
}

/* ─────────────────────────────────────────────
   Page Transition Variants
   ───────────────────────────────────────────── */
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -4, transition: { duration: 0.2 } },
}

/* ─────────────────────────────────────────────
   Accordion / Collapse Variants
   ───────────────────────────────────────────── */
export const accordionVariants: Variants = {
  closed: { height: 0, opacity: 0 },
  open: {
    height: 'auto',
    opacity: 1,
    transition: { height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.25 } },
  },
}

/* ─────────────────────────────────────────────
   Overlay / Backdrop Variants
   ───────────────────────────────────────────── */
export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

/* ─────────────────────────────────────────────
   Card Hover (used with whileHover)
   ───────────────────────────────────────────── */
export const cardHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
}

/* ─────────────────────────────────────────────
   Image Reveal
   ───────────────────────────────────────────── */
export const imageRevealVariants: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export const imageScaleVariants: Variants = {
  hidden: { scale: 1.15 },
  visible: { scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

/* ─────────────────────────────────────────────
   Line Reveal
   ───────────────────────────────────────────── */
export const lineRevealVariants: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
}

/* ─────────────────────────────────────────────
   Number Counter
   ───────────────────────────────────────────── */
export const counterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}
