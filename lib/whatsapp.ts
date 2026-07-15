/**
 * Central WhatsApp helper — single source of truth for building and opening
 * WhatsApp deep links from the site's forms. Both the multi-step Booking
 * Consultation form and the Contact form use these helpers, so there is no
 * duplicated message-formatting logic anywhere in the project.
 */

import {
  budgetOptions,
  guestCountOptions,
  type FullBookingValues,
} from '@/lib/validations/booking.schema'
import type { ContactFormValues } from '@/lib/validations/contact.schema'

/** Business WhatsApp number (digits only, incl. country code). Env-driven. */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919057526202'

const NOT_PROVIDED = 'Not provided'
const DIVIDER = '━━━━━━━━━━━━━━━━━━━━━━'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

/** Human-readable labels for the event-type enum used across both forms. */
const EVENT_TYPE_LABELS: Record<string, string> = {
  wedding: 'Wedding Events',
  corporate: 'Corporate Events',
  social: 'Social Events',
  entertainment: 'Entertainment',
  production: 'Production',
  other: 'Other',
}

/** Returns the trimmed value, or "Not provided" when empty/undefined. */
function orNotProvided(value?: string | null): string {
  const v = value?.trim()
  return v ? v : NOT_PROVIDED
}

/** Looks up an option label by value, falling back gracefully. */
function labelFor(
  options: ReadonlyArray<{ value: string; label: string }>,
  value?: string,
): string {
  if (!value) return NOT_PROVIDED
  return options.find((o) => o.value === value)?.label ?? value
}

function eventTypeLabel(value?: string): string {
  if (!value) return NOT_PROVIDED
  return EVENT_TYPE_LABELS[value] ?? value
}

/** Formats an Indian 10-digit mobile as "+91 9876543210"; passes others through. */
function formatPhone(phone?: string): string {
  const v = phone?.trim()
  if (!v) return NOT_PROVIDED
  return /^\d{10}$/.test(v) ? `+91 ${v}` : v
}

/** Formats an ISO date (YYYY-MM-DD) as "20 August 2026". */
function formatDate(value?: string): string {
  const v = value?.trim()
  if (!v) return NOT_PROVIDED
  const [y, m, d] = v.split('-').map(Number)
  if (!y || !m || !d || m < 1 || m > 12) return v
  return `${d} ${MONTHS[m - 1]} ${y}`
}

/**
 * Builds the complete Booking Consultation WhatsApp message. Every field the
 * multi-step form collects is included; empty fields show "Not provided".
 */
export function buildBookingWhatsappMessage(
  data: Partial<FullBookingValues>,
): string {
  return [
    '🎤 New Booking Enquiry',
    '',
    DIVIDER,
    '',
    '👤 Personal Details',
    '',
    `• Name: ${orNotProvided(data.name)}`,
    `• Email: ${orNotProvided(data.email)}`,
    `• Phone: ${formatPhone(data.phone)}`,
    '',
    DIVIDER,
    '',
    '🎉 Event Details',
    '',
    `• Event Type: ${eventTypeLabel(data.eventType)}`,
    `• Event Date: ${formatDate(data.eventDate)}`,
    `• Venue: ${orNotProvided(data.venue)}`,
    `• City: ${orNotProvided(data.city)}`,
    `• Guests: ${labelFor(guestCountOptions, data.guestCount)}`,
    '',
    DIVIDER,
    '',
    '💰 Budget',
    '',
    labelFor(budgetOptions, data.budget),
    '',
    DIVIDER,
    '',
    '📝 Additional Requirements',
    '',
    orNotProvided(data.message),
    '',
    DIVIDER,
    '',
    'Submitted from Website',
  ].join('\n')
}

/**
 * Builds the complete Contact form WhatsApp message with every field included.
 */
export function buildContactWhatsappMessage(data: ContactFormValues): string {
  return [
    '📩 New Contact Enquiry',
    '',
    DIVIDER,
    '',
    '👤 Personal Details',
    '',
    `• Name: ${orNotProvided(data.name)}`,
    `• Email: ${orNotProvided(data.email)}`,
    `• Phone: ${formatPhone(data.phone)}`,
    '',
    DIVIDER,
    '',
    '🎉 Event Details',
    '',
    `• Event Type: ${eventTypeLabel(data.eventType)}`,
    `• Event Date: ${formatDate(data.eventDate)}`,
    '',
    DIVIDER,
    '',
    '📝 Message',
    '',
    orNotProvided(data.message),
    '',
    DIVIDER,
    '',
    'Submitted from Website',
  ].join('\n')
}

/** Builds a wa.me deep link for a pre-formatted message. */
export function buildWhatsappUrl(
  message: string,
  phone: string = WHATSAPP_NUMBER,
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

/** Opens WhatsApp in a new tab with the given pre-formatted message. */
export function openWhatsapp(
  message: string,
  phone: string = WHATSAPP_NUMBER,
): void {
  if (typeof window === 'undefined') return
  window.open(buildWhatsappUrl(message, phone), '_blank', 'noopener,noreferrer')
}
