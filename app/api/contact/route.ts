import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations/contact.schema'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactFormSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const data = parsed.data

    // Log for development — replace with email service (Resend, SendGrid, etc.)
    console.log('[Contact Form Submission]', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      eventType: data.eventType,
      eventDate: data.eventDate,
      message: data.message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Send email via Resend:
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'website@ssevent.in',
    //   to: process.env.NEXT_PUBLIC_EMAIL!,
    //   subject: `New Contact: ${data.name} — ${data.eventType}`,
    //   html: `<p>${JSON.stringify(data, null, 2)}</p>`,
    // })

    // TODO: Send WhatsApp notification via Twilio or Meta Cloud API

    return NextResponse.json(
      { success: true, message: 'Your message has been received. We will contact you within 24 hours.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Contact API Error]', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
