/**
 * JsonLd component — injects structured data (JSON-LD) into the page head.
 * Use inside page components to provide schema.org markup to search engines.
 *
 * @example
 * import { JsonLd } from '@/components/common/JsonLd'
 * import { localBusinessSchema } from '@/lib/seo/schema'
 *
 * export default function ContactPage() {
 *   return (
 *     <>
 *       <JsonLd data={localBusinessSchema()} />
 *       ...
 *     </>
 *   )
 * }
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
