'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import {
  bookingStep1Schema,
  bookingStep2Schema,
  bookingStep3Schema,
  bookingStep4Schema,
  fullBookingSchema,
  budgetOptions,
  guestCountOptions,
  type BookingStep1Values,
  type BookingStep2Values,
  type BookingStep3Values,
  type BookingStep4Values,
  type FullBookingValues,
} from '@/lib/validations/booking.schema'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/Button'
import { CheckCircle, AlertCircle, ChevronRight, ChevronLeft, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

const EVENT_TYPES = [
  { id: 'wedding', label: 'Wedding Events', emoji: '💍', description: 'Full wedding planning & ceremonies' },
  { id: 'corporate', label: 'Corporate Events', emoji: '🏢', description: 'Conferences, launches & galas' },
  { id: 'social', label: 'Social Events', emoji: '🎉', description: 'Birthdays, anniversaries & more' },
  { id: 'entertainment', label: 'Entertainment', emoji: '🎭', description: 'Artists, anchors & live performances' },
  { id: 'production', label: 'Production Setup', emoji: '🎬', description: 'Stage, AV, photography & video' },
]

const STEPS = ['Event Type', 'Event Details', 'Your Info', 'Requirements']

type AllData = Partial<FullBookingValues>

export function BookingForm() {
  const [step, setStep] = useState(0)
  const [allData, setAllData] = useState<AllData>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [selectedType, setSelectedType] = useState<string>('')

  // Step 1
  const step1 = useForm<BookingStep1Values>({ resolver: zodResolver(bookingStep1Schema) })
  // Step 2
  const step2 = useForm<BookingStep2Values>({ resolver: zodResolver(bookingStep2Schema) })
  // Step 3
  const step3 = useForm<BookingStep3Values>({ resolver: zodResolver(bookingStep3Schema) })
  // Step 4
  const step4 = useForm<BookingStep4Values>({ resolver: zodResolver(bookingStep4Schema) })

  const advanceStep = (data: Partial<AllData>) => {
    setAllData((prev) => ({ ...prev, ...data }))
    setStep((s) => s + 1)
  }

  const handleStep1 = step1.handleSubmit((data) => {
    advanceStep(data)
  })

  const handleStep2 = step2.handleSubmit((data) => {
    advanceStep(data)
  })

  const handleStep3 = step3.handleSubmit((data) => {
    advanceStep(data)
  })

  const handleStep4 = step4.handleSubmit(async (data) => {
    const fullData = { ...allData, ...data } as FullBookingValues
    setStatus('loading')
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fullData),
      })
      if (res.ok) {
        setStatus('success')
        setStep(4)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  })

  if (step === 4 && status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-gold" />
        </div>
        <h3 className="font-display font-bold text-white text-3xl mb-3">You&apos;re All Set!</h3>
        <p className="text-white/60 font-sans max-w-md mb-2">
          Thank you, <strong className="text-white">{allData.name}</strong>! Your consultation request has been received.
        </p>
        <p className="text-white/50 font-sans text-sm mb-8">
          Our team will call you on <strong className="text-white/70">{allData.phone}</strong> within 24 hours.
        </p>
        <div className="bg-black-mid/60 border border-white/5 rounded-xl p-5 text-left max-w-sm w-full space-y-2 mb-8">
          <div className="flex justify-between text-sm">
            <span className="text-white/40 font-sans">Event Type</span>
            <span className="text-white font-sans capitalize">{allData.eventType}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-white/40 font-sans">Event Date</span>
            <span className="text-white font-sans">{allData.eventDate || 'TBD'}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-white/40 font-sans">City</span>
            <span className="text-white font-sans">{allData.city}</span>
          </div>
        </div>
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210'}?text=Hi, I just submitted a consultation request. My name is ${allData.name}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 text-sm font-sans hover:underline"
        >
          Also send us a WhatsApp message →
        </a>
      </motion.div>
    )
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-3">
          {STEPS.map((label, i) => (
            <div
              key={label}
              className={cn(
                'flex flex-col items-center gap-1.5 flex-1',
                i < step ? 'text-gold' : i === step ? 'text-white' : 'text-white/25'
              )}
            >
              <div
                className={cn(
                  'w-7 h-7 rounded-full flex items-center justify-center text-xs font-accent font-bold border transition-all duration-300',
                  i < step
                    ? 'bg-gold border-gold text-black'
                    : i === step
                    ? 'bg-transparent border-gold text-gold'
                    : 'bg-transparent border-white/15 text-white/25'
                )}
              >
                {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
              </div>
              <span className="text-xs font-sans hidden sm:block">{label}</span>
            </div>
          ))}
        </div>
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gold-mid to-gold rounded-full transition-all duration-500"
            style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Step 0 — Event Type */}
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-display font-bold text-white text-2xl mb-2">What type of event?</h2>
            <p className="text-white/50 font-sans text-sm mb-6">Select the category that best describes your event.</p>
            <form onSubmit={handleStep1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {EVENT_TYPES.map((type) => (
                  <label
                    key={type.id}
                    className={cn(
                      'flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200',
                      selectedType === type.id
                        ? 'border-gold/50 bg-gold/5'
                        : 'border-white/10 hover:border-white/20 bg-black-mid/30'
                    )}
                  >
                    <input
                      type="radio"
                      className="sr-only"
                      value={type.id}
                      {...step1.register('eventType')}
                      onChange={(e) => {
                        setSelectedType(e.target.value)
                        step1.setValue('eventType', e.target.value as BookingStep1Values['eventType'])
                      }}
                    />
                    <span className="text-2xl flex-shrink-0">{type.emoji}</span>
                    <div>
                      <div className="font-sans font-medium text-white text-sm">{type.label}</div>
                      <div className="text-white/40 text-xs font-sans mt-0.5">{type.description}</div>
                    </div>
                    <div className={cn(
                      'ml-auto w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all',
                      selectedType === type.id ? 'border-gold bg-gold scale-110' : 'border-white/20'
                    )} />
                  </label>
                ))}
              </div>
              {step1.formState.errors.eventType && (
                <p className="text-red-400 text-sm font-sans mb-4">{step1.formState.errors.eventType.message}</p>
              )}
              <Button type="submit" variant="primary" size="lg" className="w-full" rightIcon={<ChevronRight className="w-4 h-4" />}>
                Continue
              </Button>
            </form>
          </motion.div>
        )}

        {/* Step 1 — Event Details */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-display font-bold text-white text-2xl mb-2">Event Details</h2>
            <p className="text-white/50 font-sans text-sm mb-6">Help us understand your event better.</p>
            <form onSubmit={handleStep2} className="space-y-4">
              <Input
                label="Expected Event Date"
                type="date"
                required
                error={step2.formState.errors.eventDate?.message}
                {...step2.register('eventDate')}
              />
              <Input
                label="Event City"
                placeholder="e.g. Jaipur"
                required
                error={step2.formState.errors.city?.message}
                {...step2.register('city')}
              />
              <Input
                label="Venue (if selected)"
                placeholder="e.g. Taj Hotel, or leave blank"
                error={step2.formState.errors.venue?.message}
                {...step2.register('venue')}
              />
              <Select
                label="Expected Guest Count"
                placeholder="Select guest count..."
                options={guestCountOptions}
                {...step2.register('guestCount')}
              />
              <div className="flex gap-3 pt-2">
                <Button type="button" variant="ghost" size="lg" className="flex-1" leftIcon={<ChevronLeft className="w-4 h-4" />} onClick={() => setStep(0)}>
                  Back
                </Button>
                <Button type="submit" variant="primary" size="lg" className="flex-1" rightIcon={<ChevronRight className="w-4 h-4" />}>
                  Continue
                </Button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Step 2 — Personal Info */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-display font-bold text-white text-2xl mb-2">Your Contact Info</h2>
            <p className="text-white/50 font-sans text-sm mb-6">How should we reach you?</p>
            <form onSubmit={handleStep3} className="space-y-4">
              <Input
                label="Full Name"
                placeholder="Rahul Sharma"
                required
                error={step3.formState.errors.name?.message}
                {...step3.register('name')}
              />
              <Input
                label="Mobile Number"
                type="tel"
                placeholder="9876543210"
                required
                error={step3.formState.errors.phone?.message}
                {...step3.register('phone')}
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="rahul@example.com"
                required
                error={step3.formState.errors.email?.message}
                {...step3.register('email')}
              />
              <div className="flex gap-3 pt-2">
                <Button type="button" variant="ghost" size="lg" className="flex-1" leftIcon={<ChevronLeft className="w-4 h-4" />} onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button type="submit" variant="primary" size="lg" className="flex-1" rightIcon={<ChevronRight className="w-4 h-4" />}>
                  Continue
                </Button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Step 3 — Requirements */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-display font-bold text-white text-2xl mb-2">Special Requirements</h2>
            <p className="text-white/50 font-sans text-sm mb-6">Almost done! Any final details?</p>
            <form onSubmit={handleStep4} className="space-y-4">
              <Select
                label="Estimated Budget"
                placeholder="Select budget range..."
                options={budgetOptions}
                {...step4.register('budget')}
              />
              <Textarea
                label="Additional Requirements"
                placeholder="Tell us anything specific — theme, dietary needs, accessibility, special requests, etc."
                rows={4}
                {...step4.register('message')}
              />
              {status === 'error' && (
                <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400 text-sm font-sans">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  Something went wrong. Please try again.
                </div>
              )}
              <div className="flex gap-3 pt-2">
                <Button type="button" variant="ghost" size="lg" className="flex-1" leftIcon={<ChevronLeft className="w-4 h-4" />} onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="flex-1"
                  loading={status === 'loading'}
                  leftIcon={status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : undefined}
                >
                  {status === 'loading' ? 'Submitting...' : 'Book Consultation'}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
