'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { scaleIn, overlayVariants } from '@/lib/animations/variants'

interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
  /** Size of the modal dialog */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  /** Whether to show the close button */
  showClose?: boolean
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-[95vw] max-h-[95vh]',
}

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  className,
  size = 'md',
  showClose = true,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            {/* Backdrop */}
            <Dialog.Overlay asChild>
              <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              />
            </Dialog.Overlay>

            {/* Content */}
            <Dialog.Content asChild>
              <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className={cn(
                  'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
                  'w-full bg-black-soft border border-black-light rounded-xl shadow-elevated',
                  'focus:outline-none overflow-hidden',
                  sizeClasses[size],
                  className
                )}
              >
                {/* Gold top accent */}
                <div className="h-px w-full bg-gold-gradient" />

                {/* Header */}
                {(title || showClose) && (
                  <div className="flex items-start justify-between px-6 py-5 border-b border-black-light">
                    <div>
                      {title && (
                        <Dialog.Title className="font-display text-xl font-semibold text-white">
                          {title}
                        </Dialog.Title>
                      )}
                      {description && (
                        <Dialog.Description className="mt-1 font-sans text-sm text-gray-400">
                          {description}
                        </Dialog.Description>
                      )}
                    </div>
                    {showClose && (
                      <Dialog.Close className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-black-light transition-all duration-200 ml-4 flex-shrink-0">
                        <X className="w-4 h-4" />
                        <span className="sr-only">Close</span>
                      </Dialog.Close>
                    )}
                  </div>
                )}

                {/* Body */}
                <div className="overflow-y-auto">{children}</div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}

export const ModalTrigger = Dialog.Trigger
