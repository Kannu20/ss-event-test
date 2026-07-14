import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { ServiceLayout } from '@/components/services/ServiceLayout'
import { getCategory, getCategoryParams, servicePath } from '@/data/services'

export const dynamicParams = false

export function generateStaticParams() {
  return getCategoryParams()
}

interface PageProps {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params
  const node = getCategory(category)
  if (!node) return {}

  return generatePageMetadata({
    title: node.seo.title,
    description: node.seo.description,
    keywords: node.seo.keywords,
    ogImage: node.seo.ogImage,
    canonical: servicePath(node),
  })
}

export default async function ServiceCategoryPage({ params }: PageProps) {
  const { category } = await params
  const node = getCategory(category)
  if (!node) notFound()

  return <ServiceLayout node={node} />
}
