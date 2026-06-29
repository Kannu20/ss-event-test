'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Volume2, VolumeX } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { scaleIn, overlayVariants } from '@/lib/animations/variants'

interface VideoPlayerProps {
  /** YouTube video ID */
  youtubeId?: string
  /** Direct video URL */
  videoUrl?: string
  /** Thumbnail image */
  thumbnail: string
  /** Video title */
  title: string
  className?: string
  /** Whether to open in a modal or inline */
  mode?: 'modal' | 'inline'
  /** Aspect ratio */
  aspectRatio?: '16/9' | '4/3' | '9/16'
}

const aspectClasses = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '9/16': 'aspect-[9/16]',
}

/**
 * Video player with thumbnail and play button.
 * Supports YouTube embeds and direct video URLs.
 * Can open in a modal or play inline.
 */
export function VideoPlayer({
  youtubeId,
  videoUrl,
  thumbnail,
  title,
  className,
  mode = 'modal',
  aspectRatio = '16/9',
}: VideoPlayerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const embedUrl = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`
    : null

  const handlePlay = () => {
    if (mode === 'modal') {
      setIsOpen(true)
    } else if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const ThumbnailWithButton = () => (
    <div className={cn('relative group cursor-pointer overflow-hidden', aspectClasses[aspectRatio], className)}>
      {/* Thumbnail */}
      <Image
        src={thumbnail}
        alt={`Play ${title}`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

      {/* Play button */}
      <button
        onClick={handlePlay}
        aria-label={`Play ${title}`}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            'relative flex items-center justify-center',
            'w-16 h-16 rounded-full',
            'bg-gold text-black',
            'shadow-gold-lg',
            'transition-all duration-300'
          )}
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
          <Play className="w-6 h-6 ml-1" fill="currentColor" />
        </motion.div>
      </button>

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <p className="font-sans text-sm font-medium text-white truncate">{title}</p>
      </div>
    </div>
  )

  if (mode === 'inline' && videoUrl) {
    return (
      <div className={cn('relative', aspectClasses[aspectRatio], className)}>
        <video
          ref={videoRef}
          src={videoUrl}
          muted={isMuted}
          loop
          className="w-full h-full object-cover"
          playsInline
        />
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 text-white"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    )
  }

  return (
    <>
      <ThumbnailWithButton />

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Video container */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-4 md:inset-16 z-50 flex items-center justify-center"
            >
              <div className="relative w-full max-w-5xl mx-auto">
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-black-light text-gray-300 hover:text-white hover:bg-gold/20 transition-all duration-200"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Video frame */}
                <div className={cn('relative overflow-hidden rounded-xl shadow-elevated', aspectClasses[aspectRatio])}>
                  {embedUrl ? (
                    <iframe
                      src={embedUrl}
                      title={title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  ) : videoUrl ? (
                    <video
                      src={videoUrl}
                      autoPlay
                      controls
                      className="absolute inset-0 w-full h-full object-cover"
                      playsInline
                    />
                  ) : null}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
