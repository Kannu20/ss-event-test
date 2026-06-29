'use client'

import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
  label?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-white/80 mb-2 font-sans tracking-wide"
          >
            {label}
            {props.required && <span className="text-gold ml-1">*</span>}
          </label>
        )}
        <textarea
          id={inputId}
          className={cn(
            'input-luxury w-full min-h-[120px] resize-y',
            error && 'border-red-500/60 focus:border-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-400 font-sans">{error}</p>
        )}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
