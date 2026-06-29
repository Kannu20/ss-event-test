'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      'border border-white/10 rounded-lg overflow-hidden transition-colors duration-300',
      'data-[state=open]:border-gold/40',
      className
    )}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between px-6 py-5',
        'text-left font-sans font-medium text-white/90 text-base md:text-lg',
        'transition-all duration-300 cursor-pointer',
        'hover:text-gold',
        'data-[state=open]:text-gold',
        '[&[data-state=open]_.plus-icon]:hidden',
        '[&[data-state=open]_.minus-icon]:block',
        '[&[data-state=closed]_.plus-icon]:block',
        '[&[data-state=closed]_.minus-icon]:hidden',
        className
      )}
      {...props}
    >
      {children}
      <span className="ml-4 flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-gold/30 text-gold transition-all duration-300">
        <Plus className="plus-icon w-3.5 h-3.5" />
        <Minus className="minus-icon w-3.5 h-3.5 hidden" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('px-6 pb-5 pt-0 text-white/65 font-sans leading-relaxed text-sm md:text-base', className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
