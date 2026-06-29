'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormValues as ContactFormData } from '@/lib/validations/contact.schema'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/Button'
import { CheckCircle, AlertCircle } from 'lucide-react'

const eventTypeOptions = [
  { value: 'wedding', label: 'Wedding Events' },
  { value: 'corporate', label: 'Corporate Events' },
  { value: 'social', label: 'Social Events' },
  { value: 'entertainment', label: 'Entertainment Services' },
  { value: 'production', label: 'Production Setup' },
  { value: 'other', label: 'Other' },
]

interface ContactFormProps {
  compact?: boolean
}

export function ContactForm({ compact = false }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="font-sans font-semibold text-white text-xl mb-2">Message Received!</h3>
        <p className="text-white/60 font-sans text-sm max-w-sm">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-gold text-sm font-sans hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {status === 'error' && (
        <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400 text-sm font-sans">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <div className={compact ? '' : 'grid md:grid-cols-2 gap-4'}>
        <Input
          label="Your Name"
          placeholder="Rahul Sharma"
          required
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+91 98765 43210"
          required
          error={errors.phone?.message}
          {...register('phone')}
        />
      </div>

      <Input
        label="Email Address"
        type="email"
        placeholder="rahul@example.com"
        error={errors.email?.message}
        {...register('email')}
      />

      <Select
        label="Event Type"
        placeholder="Select event type..."
        required
        options={eventTypeOptions}
        error={errors.eventType?.message}
        {...register('eventType')}
      />

      <Input
        label="Expected Event Date"
        type="date"
        error={errors.eventDate?.message}
        {...register('eventDate')}
      />

      <Textarea
        label="Tell Us About Your Event"
        placeholder="Share details about your vision, expected guests, venue preferences, and anything else you'd like us to know..."
        required
        rows={compact ? 3 : 5}
        error={errors.message?.message}
        {...register('message')}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={status === 'loading'}
        className="w-full"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-white/30 text-xs font-sans text-center">
        We respond within 24 hours. Your information is kept private.
      </p>
    </form>
  )
}
