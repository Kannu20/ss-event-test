import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema } from '@/lib/seo/schema'
import { PageHero } from '@/components/common/PageHero'
import { BookingCTAStrip } from '@/components/sections/BookingCTAStrip'
import { Badge } from '@/components/ui/Badge'
import { blogPosts, blogCategories } from '@/lib/constants/blog'

export const metadata: Metadata = {
  title: 'Blog | Artist Shubham Khandelwal',
  description: 'Insights on wedding anchoring, sangeet hosting, corporate emceeing and live entertainment — from Artist Shubham Khandelwal.',
  openGraph: {
    title: 'Blog | Artist Shubham Khandelwal',
    description: 'Expert tips, trends and guides for weddings, corporate events, and celebrations.',
  },
}

const featured = blogPosts.find((p) => p.featured)
const rest = blogPosts.filter((p) => !p.featured)

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }])} />

      <PageHero
        title="Event Planning Blog"
        subtitle="Expert insights, planning tips, trend reports and behind-the-scenes stories from India's premier event management team."
        tag="Blog"
        image="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&h=800&fit=crop&q=80"
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          {/* Featured post */}
          {featured && (
            <div className="mb-14">
              <Link href={`/blog/${featured.slug}`} className="group block">
                <div className="grid lg:grid-cols-2 gap-8 bg-black-mid/50 border border-white/5 rounded-2xl overflow-hidden hover:border-gold/20 transition-colors duration-300">
                  <div className="relative h-64 lg:h-auto min-h-[280px] overflow-hidden">
                    <Image
                      src={featured.coverImage}
                      alt={featured.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="gold">Featured</Badge>
                      <span className="text-white/40 text-xs font-sans">{featured.category}</span>
                    </div>
                    <h2 className="font-display font-bold text-white text-3xl leading-tight mb-3 group-hover:text-gold transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-white/60 font-sans leading-relaxed mb-6">{featured.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-white/40 text-sm font-sans">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(featured.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {featured.readTime}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-gold text-sm font-accent font-semibold group-hover:gap-3 transition-all">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-black-mid/50 border border-white/5 rounded-2xl overflow-hidden hover:border-gold/20 transition-colors duration-300 h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="dark" className="text-xs">{post.category}</Badge>
                      <span className="text-white/30 text-xs font-sans">{post.readTime}</span>
                    </div>
                    <h3 className="font-display font-bold text-white text-xl leading-tight mb-2 group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/55 font-sans text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div>
                        <div className="text-white/70 text-xs font-sans font-medium">{post.author.name}</div>
                        <div className="text-white/30 text-xs font-sans">{new Date(post.publishedAt).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* <BookingCTAStrip /> */}
    </>
  )
}
