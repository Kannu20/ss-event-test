import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
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

  eventType: z.enum(
    ['wedding', 'corporate', 'social', 'entertainment', 'production', 'other'],
    { required_error: 'Please select an event type' }
  ),

  eventDate: z.string().optional(),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .trim(),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
