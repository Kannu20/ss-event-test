'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/Button'
import { CheckCircle } from 'lucide-react'

const inquirySchema = z.object({
  name: z.string().min(2, 'Name required').trim(),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter valid 10-digit mobile number').trim(),
  eventType: z.string().min(1, 'Please select event type'),
})

type InquiryValues = z.infer<typeof inquirySchema>

const eventTypeOptions = [
  { value: 'wedding', label: 'Wedding Events' },
  { value: 'corporate', label: 'Corporate Events' },
  { value: 'social', label: 'Social Events' },
  { value: 'entertainment', label: 'Entertainment' },
]

interface InquiryFormProps {
  onSuccess?: () => void
}

export function InquiryForm({ onSuccess }: InquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const { register, handleSubmit, formState: { errors } } = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
  })

  const onSubmit = async (data: InquiryValues) => {
    setStatus('loading')
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, message: 'Quick inquiry from website' }),
      })
      setStatus('success')
      onSuccess?.()
    } catch {
      setStatus('loading')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 py-4 text-center">
        <CheckCircle className="w-10 h-10 text-gold" />
        <p className="text-white font-sans font-medium">Got it! We&apos;ll call you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <Input
        placeholder="Your Name"
        required
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        type="tel"
        placeholder="Mobile Number (10 digits)"
        required
        error={errors.phone?.message}
        {...register('phone')}
      />
      <Select
        placeholder="Select Event Type"
        required
        options={eventTypeOptions}
        error={errors.eventType?.message}
        {...register('eventType')}
      />
      <Button type="submit" variant="primary" size="lg" loading={status === 'loading'} className="w-full">
        {status === 'loading' ? 'Sending...' : 'Get Free Quote'}
      </Button>
    </form>
  )
}
