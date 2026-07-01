import type { Metadata } from 'next'
import { PageHero } from '@/components/common/PageHero'

export const metadata: Metadata = {
  title: 'Privacy Policy | Anchor Shubham Khandelwal ',
  description: 'Privacy policy for Anchor Shubham Khandelwal  — how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        tag="Legal"
        size="sm"
        breadcrumbs={[{ label: 'Privacy Policy' }]}
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

            <h2>1. Information We Collect</h2>
            <p>
              Anchor Shubham Khandelwal  collects personal information that you voluntarily provide to us when you fill out our contact forms,
              book a consultation, or interact with our website. This may include your name, phone number, email address,
              event details, and any other information you choose to share.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide event management services</li>
              <li>Contact you about your event consultation or booking</li>
              <li>Send you relevant information about our services (with your consent)</li>
              <li>Improve our website and services</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
              except as necessary to provide our services (such as sharing with vendors and partners involved in your event).
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. Our website uses SSL encryption for all data transmission.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through
              your browser settings, though this may affect some website functionality.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have questions about this privacy policy or how we handle your data, please contact us at{' '}
              <a href="mailto:privacy@ssevent.in" className="text-gold">privacy@ssevent.in</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
