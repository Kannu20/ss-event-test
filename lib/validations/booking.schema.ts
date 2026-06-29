import { z } from 'zod'

export const bookingStep1Schema = z.object({
  eventType: z.enum(
    ['wedding', 'corporate', 'social', 'entertainment', 'production'],
    { required_error: 'Please select an event type' }
  ),
})

export const bookingStep2Schema = z.object({
  eventDate: z
    .string()
    .min(1, 'Please select an event date'),

  venue: z.string().optional(),

  guestCount: z.string().optional(),

  city: z
    .string()
    .min(2, 'Please enter the event city')
    .max(100, 'City name is too long')
    .trim(),
})

export const bookingStep3Schema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long')
    .trim(),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number')
    .trim(),

  email: z
    .string()
    .email('Please enter a valid email address')
    .toLowerCase()
    .trim(),
})

export const bookingStep4Schema = z.object({
  message: z
    .string()
    .max(1000, 'Message must be less than 1000 characters')
    .optional(),

  budget: z
    .enum(['under-1l', '1l-3l', '3l-5l', '5l-10l', 'above-10l', 'prefer-not'])
    .optional(),
})

export const fullBookingSchema = bookingStep1Schema
  .merge(bookingStep2Schema)
  .merge(bookingStep3Schema)
  .merge(bookingStep4Schema)

export type BookingStep1Values = z.infer<typeof bookingStep1Schema>
export type BookingStep2Values = z.infer<typeof bookingStep2Schema>
export type BookingStep3Values = z.infer<typeof bookingStep3Schema>
export type BookingStep4Values = z.infer<typeof bookingStep4Schema>
export type FullBookingValues = z.infer<typeof fullBookingSchema>

export const budgetOptions = [
  { value: 'under-1l', label: 'Under ₹1 Lakh' },
  { value: '1l-3l', label: '₹1 Lakh – ₹3 Lakhs' },
  { value: '3l-5l', label: '₹3 Lakhs – ₹5 Lakhs' },
  { value: '5l-10l', label: '₹5 Lakhs – ₹10 Lakhs' },
  { value: 'above-10l', label: 'Above ₹10 Lakhs' },
  { value: 'prefer-not', label: 'Prefer not to say' },
]

export const guestCountOptions = [
  { value: 'under-50', label: 'Under 50' },
  { value: '50-100', label: '50 – 100' },
  { value: '100-250', label: '100 – 250' },
  { value: '250-500', label: '250 – 500' },
  { value: '500-1000', label: '500 – 1,000' },
  { value: 'above-1000', label: '1,000+' },
]
