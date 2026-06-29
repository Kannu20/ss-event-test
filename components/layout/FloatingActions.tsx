'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { useIsScrolled } from '@/hooks/useScrollTrigger'
import { useIsMobile } from '@/hooks/useMediaQuery'

const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER ?? ''
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''

/**
 * Floating WhatsApp + Call action buttons.
 * - Desktop: stacked in bottom-right corner, appear after 100px scroll
 * - Mobile: sticky bottom bar always visible
 */
export function FloatingActions() {
  const isScrolled = useIsScrolled(100)
  const isMobile = useIsMobile()

  // Mobile sticky bottom bar
  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 flex h-14 border-t border-black-light bg-black-soft/95 backdrop-blur-xl lg:hidden">
        <a
          href={`tel:${phoneNumber}`}
          className="flex flex-1 items-center justify-center gap-2 font-sans text-sm font-medium text-gray-200 hover:text-gold hover:bg-black-mid transition-all duration-200"
          aria-label="Call us"
        >
          <Phone className="w-4 h-4 text-gold" />
          Call Now
        </a>
        <div className="w-px bg-black-light" />
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in SS Event services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 bg-[#25D366]/10 font-sans text-sm font-medium text-[#25D366] hover:bg-[#25D366]/20 transition-all duration-200"
          aria-label="WhatsApp us"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    )
  }

  // Desktop floating buttons
  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 right-6 z-40 hidden lg:flex flex-col items-center gap-3"
        >
          {/* Call button */}
          <motion.a
            href={`tel:${phoneNumber}`}
            aria-label="Call us"
            title="Call Now"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              'w-12 h-12 rounded-full flex items-center justify-center',
              'bg-gold text-black shadow-gold-md',
              'hover:bg-gold-light hover:shadow-gold-lg',
              'transition-all duration-300'
            )}
          >
            <Phone className="w-5 h-5" />
          </motion.a>

          {/* WhatsApp button with pulse ring */}
          <div className="relative">
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
            <span className="absolute inset-1 rounded-full bg-[#25D366]/20 animate-pulse" />

            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in SS Event services.`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp us"
              title="WhatsApp"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'relative w-14 h-14 rounded-full flex items-center justify-center',
                'bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)]',
                'hover:bg-[#22c35e] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)]',
                'transition-all duration-300 z-10'
              )}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
