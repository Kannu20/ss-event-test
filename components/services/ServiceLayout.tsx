import { PageHero } from '@/components/common/PageHero'
import { JsonLd } from '@/components/common/JsonLd'
import { BookingCTAStrip } from '@/components/sections/BookingCTAStrip'
import { ContactSection } from '@/components/sections/ContactSection'
import { breadcrumbSchema, serviceSchema, faqPageSchema } from '@/lib/seo/schema'
import { servicePath, type ServiceNode } from '@/data/services'
import { ServiceIntro } from './ServiceIntro'
import { ServiceChildrenGrid } from './ServiceChildrenGrid'
import { ServiceFeatures } from './ServiceFeatures'
import { ServiceWhyChoose } from './ServiceWhyChoose'
import { ServiceTimeline } from './ServiceTimeline'
import { MediaGallery } from './media/MediaGallery'
import { ServiceFAQ } from './ServiceFAQ'
import type { BreadcrumbItem } from '@/types'

interface ServiceLayoutProps {
  node: ServiceNode
}

/**
 * Composes a full service page (category or sub-service) from a single data node.
 * Section order matches the required content spec:
 * Hero → Breadcrumb → Intro → (Sub-services) → Services Included →
 * Why Choose → Event Flow → Gallery → FAQ → CTA → Contact.
 */
export function ServiceLayout({ node }: ServiceLayoutProps) {
  const isChild = Boolean(node.parentSlug)
  const path = servicePath(node)

  // Breadcrumb trail (Home is prepended by PageHero / breadcrumbSchema)
  const heroBreadcrumbs: BreadcrumbItem[] = [
    { label: 'Services', href: '/services' },
    ...(isChild && node.categoryTitle && node.parentSlug
      ? [{ label: node.categoryTitle, href: `/services/${node.parentSlug}` }]
      : []),
    { label: node.title },
  ]

  const schemaTrail = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    ...(isChild && node.categoryTitle && node.parentSlug
      ? [{ name: node.categoryTitle, url: `/services/${node.parentSlug}` }]
      : []),
    { name: node.title, url: path },
  ]

  return (
    <>
      <JsonLd data={breadcrumbSchema(schemaTrail)} />
      <JsonLd data={serviceSchema(node.title, node.seo.description, path)} />
      <JsonLd data={faqPageSchema(node.faqs)} />

      <PageHero
        title={node.title}
        subtitle={node.subtitle}
        tag={node.tag}
        image={node.heroImage}
        size="lg"
        breadcrumbs={heroBreadcrumbs}
      />

      <ServiceIntro
        label={node.intro.label}
        heading={node.intro.heading}
        highlight={node.intro.highlight}
        paragraphs={node.intro.paragraphs}
        image={node.heroImage}
        imageAlt={node.title}
        serviceName={node.title}
      />

      {node.children && node.children.length > 0 && (
        <ServiceChildrenGrid categoryTitle={node.title} items={node.children} />
      )}

      <ServiceFeatures
        heading={node.features.heading}
        highlight={node.features.highlight}
        items={node.features.items}
      />

      <ServiceWhyChoose
        heading={node.reasons.heading}
        highlight={node.reasons.highlight}
        items={node.reasons.items}
      />

      <ServiceTimeline
        heading={node.flow.heading}
        highlight={node.flow.highlight}
        steps={node.flow.steps}
      />

      <MediaGallery
        heading={node.gallery.heading}
        highlight={node.gallery.highlight}
        media={node.gallery.media}
      />

      <ServiceFAQ serviceName={node.title} faqs={node.faqs} />

      <BookingCTAStrip title={node.cta.title} subtitle={node.cta.subtitle} />

      <ContactSection />
    </>
  )
}
