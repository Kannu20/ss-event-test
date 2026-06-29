import { NextResponse } from 'next/server'
import { fullBookingSchema } from '@/lib/validations/booking.schema'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = fullBookingSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid booking data', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const data = parsed.data

    console.log('[Booking Consultation Submission]', {
      ...data,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with your preferred email/CRM service
    // Example with Resend:
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'booking@ssevent.in',
    //   to: process.env.NEXT_PUBLIC_EMAIL!,
    //   subject: `New Consultation: ${data.name} — ${data.eventType} in ${data.city}`,
    //   html: `
    //     <h2>New Consultation Request</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Phone:</strong> ${data.phone}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Event Type:</strong> ${data.eventType}</p>
    //     <p><strong>Event Date:</strong> ${data.eventDate}</p>
    //     <p><strong>City:</strong> ${data.city}</p>
    //     <p><strong>Guests:</strong> ${data.guestCount || 'Not specified'}</p>
    //     <p><strong>Budget:</strong> ${data.budget || 'Not specified'}</p>
    //     <p><strong>Message:</strong> ${data.message || 'None'}</p>
    //   `,
    // })

    return NextResponse.json(
      {
        success: true,
        message: 'Consultation request received. Our team will contact you within 24 hours.',
        data: {
          name: data.name,
          phone: data.phone,
          eventType: data.eventType,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Booking API Error]', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
