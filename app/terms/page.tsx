import type { Metadata } from 'next'
import { PageHero } from '@/components/common/PageHero'

export const metadata: Metadata = {
  title: 'Terms of Service | Artist Shubham Khandelwal ',
  description: 'Terms and conditions for using Artist Shubham Khandelwal  services and website.',
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services."
        tag="Legal"
        size="sm"
        breadcrumbs={[{ label: 'Terms of Service' }]}
      />
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-invert prose-lg max-w-none
            prose-headings:font-display prose-headings:text-white prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-white/65 prose-p:leading-relaxed prose-p:font-sans
            prose-li:text-white/65 prose-li:font-sans
          ">
            <p className="text-white/40 text-sm font-sans">Last updated: January 2025</p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using Artist Shubham Khandelwal &apos;s website and services, you agree to be bound by these Terms of Service.
              If you disagree with any part of these terms, you may not access our services.
            </p>

            <h2>2. Services</h2>
            <p>
              Artist Shubham Khandelwal  provides professional event management services including wedding planning, corporate events,
              social events, entertainment services, and production setup. The specific services, pricing, and scope
              for each engagement will be outlined in a separate service agreement.
            </p>

            <h2>3. Bookings and Payments</h2>
            <p>
              All bookings are subject to availability and confirmation by Artist Shubham Khandelwal . A booking is confirmed only upon
              receipt of the agreed deposit. Payment terms, refund policies, and cancellation terms will be detailed
              in your individual service agreement.
            </p>

            <h2>4. Cancellation Policy</h2>
            <p>
              Cancellation terms vary by event type and booking timeline. General guidelines:
            </p>
            <ul>
              <li>Cancellations more than 90 days before the event: 50% refund of deposit</li>
              <li>Cancellations 30–90 days before the event: 25% refund of deposit</li>
              <li>Cancellations less than 30 days before the event: No refund of deposit</li>
            </ul>
            <p>Specific terms will be outlined in your service agreement.</p>

            <h2>5. Limitation of Liability</h2>
            <p>
              Artist Shubham Khandelwal  shall not be liable for any indirect, incidental, or consequential damages arising from the use
              of our services. In the event of circumstances beyond our control (force majeure), Artist Shubham Khandelwal  will work with
              clients to reschedule or find alternative solutions.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              All content on this website — including images, text, logos, and designs — is the property of Artist Shubham Khandelwal 
              and protected by applicable intellectual property laws. You may not reproduce or distribute any content
              without prior written permission.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              Artist Shubham Khandelwal  reserves the right to modify these terms at any time. Continued use of our services after
              changes constitutes acceptance of the revised terms.
            </p>

            <h2>8. Contact</h2>
            <p>
              For any questions regarding these terms, contact us at{' '}
              <a href="mailto:legal@ssevent.in" className="text-gold">legal@ssevent.in</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
