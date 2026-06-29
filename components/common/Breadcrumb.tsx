import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  /** Light variant for use on light backgrounds */
  light?: boolean
}

/**
 * Breadcrumb navigation component with schema.org markup.
 * Last item is always the current page (non-linked).
 */
export function Breadcrumb({ items, className, light = false }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center gap-1.5', className)}
    >
      <ol
        className="flex flex-wrap items-center gap-1"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {/* Home */}
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="flex items-center"
        >
          <Link
            href="/"
            itemProp="item"
            className={cn(
              'flex items-center transition-colors duration-200',
              light
                ? 'text-gray-500 hover:text-gray-800'
                : 'text-gray-500 hover:text-gold'
            )}
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5" />
            <span itemProp="name" className="sr-only">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, index) => {
          const position = index + 2
          const isLast = index === items.length - 1

          return (
            <li
              key={item.label}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-1"
            >
              <ChevronRight
                className={cn(
                  'w-3 h-3 flex-shrink-0',
                  light ? 'text-gray-400' : 'text-gray-600'
                )}
              />
              {isLast || !item.href ? (
                <span
                  itemProp="name"
                  className={cn(
                    'font-sans text-xs',
                    light ? 'text-gray-800' : 'text-gray-300'
                  )}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  itemProp="item"
                  className={cn(
                    'font-sans text-xs transition-colors duration-200',
                    light ? 'text-gray-500 hover:text-gray-800' : 'text-gray-500 hover:text-gold'
                  )}
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={position.toString()} />
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
