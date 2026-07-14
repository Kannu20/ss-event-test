import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { ServiceLayout } from '@/components/services/ServiceLayout'
import { getService, getServiceParams, servicePath } from '@/data/services'

export const dynamicParams = false

export function generateStaticParams() {
  return getServiceParams()
}

interface PageProps {
  params: Promise<{ category: string; service: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, service } = await params
  const node = getService(category, service)
  if (!node) return {}

  return generatePageMetadata({
    title: node.seo.title,
    description: node.seo.description,
    keywords: node.seo.keywords,
    ogImage: node.seo.ogImage,
    canonical: servicePath(node),
  })
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { category, service } = await params
  const node = getService(category, service)
  if (!node) notFound()

  return <ServiceLayout node={node} />
}
