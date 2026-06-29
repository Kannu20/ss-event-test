'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string
  label?: string
  placeholder?: string
  options: { value: string; label: string }[]
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, label, placeholder, options, id, ...props }, ref) => {
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
        <div className="relative">
          <select
            id={inputId}
            ref={ref}
            className={cn(
              'input-luxury w-full appearance-none pr-10',
              !props.value && 'text-white/40',
              error && 'border-red-500/60 focus:border-red-500',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled className="bg-black-soft text-white/60">
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-black-soft text-white"
              >
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60 pointer-events-none" />
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-red-400 font-sans">{error}</p>
        )}
      </div>
    )
  }
)
Select.displayName = 'Select'

export { Select }
