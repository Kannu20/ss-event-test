import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema } from '@/lib/seo/schema'
import { BookingCTAStrip } from '@/components/sections/BookingCTAStrip'
import { Badge } from '@/components/ui/Badge'
import { blogPosts } from '@/lib/constants/blog'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: 'Post Not Found | Anchor Shubham Khandelwal  Blog' }
  return {
    title: `${post.title} | Anchor Shubham Khandelwal  Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage, width: 1200, height: 630 }],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3)

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: post.title, url: `/blog/${post.slug}` },
      ])} />

      <article className="min-h-screen bg-black pt-24">
        {/* Hero */}
        <div className="relative h-72 md:h-96 lg:h-[480px] mb-0">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-10">
            <div className="max-w-3xl">
              <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-sans mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              <Badge variant="gold" className="mb-3">{post.category}</Badge>
              <h1 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Article */}
            <div className="lg:col-span-3">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 pb-8 mb-8 border-b border-white/10 text-white/50 text-sm font-sans">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-black-mid">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-white text-xs font-medium">{post.author.name}</div>
                    <div className="text-white/40 text-xs">{post.author.role}</div>
                  </div>
                </div>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-xs border border-white/10 rounded-full px-2.5 py-0.5">
                      <Tag className="w-2.5 h-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="prose prose-invert prose-lg max-w-none
                prose-headings:font-display prose-headings:text-white prose-headings:font-bold
                prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:text-gold/80
                prose-p:text-white/70 prose-p:leading-relaxed prose-p:font-sans
                prose-a:text-gold prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white prose-strong:font-semibold
                prose-li:text-white/70 prose-li:font-sans
                prose-hr:border-white/10
              ">
                {post.content.split('\n').map((line, i) => {
                  if (line.startsWith('# ')) {
                    return <h1 key={i}>{line.slice(2)}</h1>
                  }
                  if (line.startsWith('## ')) {
                    return <h2 key={i}>{line.slice(3)}</h2>
                  }
                  if (line.startsWith('### ')) {
                    return <h3 key={i}>{line.slice(4)}</h3>
                  }
                  if (line.startsWith('---')) {
                    return <hr key={i} />
                  }
                  if (line.startsWith('- ')) {
                    return <li key={i}>{line.slice(2)}</li>
                  }
                  if (line.trim() === '') {
                    return <br key={i} />
                  }
                  return <p key={i}>{line}</p>
                })}
              </div>

              {/* Share / CTA */}
              <div className="mt-12 p-6 bg-black-mid/50 border border-gold/20 rounded-2xl text-center">
                <p className="font-sans text-white/70 mb-4">Ready to plan your event with Anchor Shubham Khandelwal ?</p>
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-2 bg-gold text-black font-sans font-semibold px-6 py-3 rounded-full hover:bg-gold-light transition-colors"
                >
                  Book a Free Consultation
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Author */}
                <div className="bg-black-mid/50 border border-white/5 rounded-xl p-5">
                  <h4 className="font-sans font-semibold text-white text-sm mb-3">About the Author</h4>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-black-light flex-shrink-0">
                      <Image src={post.author.avatar} alt={post.author.name} width={48} height={48} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-white font-sans font-medium text-sm">{post.author.name}</div>
                      <div className="text-white/40 text-xs font-sans">{post.author.role}</div>
                    </div>
                  </div>
                </div>

                {/* Related posts */}
                {related.length > 0 && (
                  <div className="bg-black-mid/50 border border-white/5 rounded-xl p-5">
                    <h4 className="font-sans font-semibold text-white text-sm mb-4">Related Articles</h4>
                    <div className="space-y-4">
                      {related.map((r) => (
                        <Link key={r.id} href={`/blog/${r.slug}`} className="flex gap-3 group">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <Image src={r.coverImage} alt={r.title} fill className="object-cover" sizes="64px" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-xs font-sans font-medium line-clamp-2 group-hover:text-gold transition-colors">{r.title}</p>
                            <p className="text-white/35 text-xs font-sans mt-1">{r.readTime}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </article>

      <BookingCTAStrip />
    </>
  )
}
