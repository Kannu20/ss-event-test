'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Clock, X } from 'lucide-react'
import { FilterTabs } from '@/components/common/FilterTabs'
import { Badge } from '@/components/ui/Badge'
import { videos, videoCategories } from '@/lib/constants/videos'

export function VideosGrid() {
  const [active, setActive] = useState('all')
  const [playing, setPlaying] = useState<string | null>(null)

  const filtered = active === 'all'
    ? videos
    : videos.filter((v) => v.category === active)

  const featuredVideo = videos.find((v) => v.featured)

  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto px-4">
        {/* Featured video */}
        {featuredVideo && (
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden aspect-video max-w-4xl mx-auto shadow-gold-lg">
              {playing === featuredVideo.id ? (
                <video
                  src={featuredVideo.video}
                  title={featuredVideo.title}
                  poster={featuredVideo.thumbnail}
                  className="w-full h-full object-cover bg-black"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <>
                  <Image
                    src={featuredVideo.thumbnail}
                    alt={featuredVideo.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 896px"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <Badge variant="gold" className="mb-3">Featured Showreel</Badge>
                    <h2 className="font-display font-bold text-white text-2xl md:text-3xl mb-2">{featuredVideo.title}</h2>
                    <p className="text-white/60 font-sans text-sm mb-6 max-w-xl">{featuredVideo.description}</p>
                    <button
                      onClick={() => setPlaying(featuredVideo.id)}
                      className="relative w-20 h-20 rounded-full bg-gold flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
                      <Play className="w-8 h-8 text-black fill-black ml-1" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Filter */}
        <div className="flex justify-center mb-10">
          <FilterTabs
            tabs={videoCategories}
            active={active}
            onChange={setActive}
          />
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.filter((v) => !v.featured || active !== 'all').map((video) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group bg-black-mid/50 border border-white/5 rounded-xl overflow-hidden hover:border-gold/20 transition-colors duration-300"
              >
                <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={() => setPlaying(video.id)}>
                  {playing === video.id ? (
                    <video
                      src={video.video}
                      title={video.title}
                      poster={video.thumbnail}
                      className="w-full h-full object-cover bg-black"
                      controls
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <>
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                          <Play className="w-6 h-6 text-black fill-black ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-sans px-2 py-1 rounded flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {video.duration}
                      </div>
                    </>
                  )}
                </div>
                <div className="p-4">
                  <Badge variant="dark" className="text-xs mb-2 capitalize">{video.category}</Badge>
                  <h3 className="font-sans font-semibold text-white text-base leading-snug group-hover:text-gold transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-white/50 text-sm font-sans mt-1 line-clamp-2">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
