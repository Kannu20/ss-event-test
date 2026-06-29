'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    // Only run on devices with a fine pointer (desktop)
    if (!window.matchMedia('(pointer: fine)').matches) return

    let dotX = 0
    let dotY = 0
    let ringX = 0
    let ringY = 0
    let animFrame: number

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX
      dotY = e.clientY
      if (!visible) setVisible(true)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)
    const onMouseDown = () => setClicking(true)
    const onMouseUp = () => setClicking(false)

    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], label, input, textarea, select')) {
        setHovering(true)
      }
    }

    const onHoverEnd = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], label, input, textarea, select')) {
        setHovering(false)
      }
    }

    // Smooth ring follow with lerp
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const tick = () => {
      // Dot follows exactly
      dot.style.transform = `translate(${dotX - 6}px, ${dotY - 6}px)`

      // Ring follows with lag
      ringX = lerp(ringX, dotX, 0.12)
      ringY = lerp(ringY, dotY, 0.12)
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`

      animFrame = requestAnimationFrame(tick)
    }

    animFrame = requestAnimationFrame(tick)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseover', onHoverStart)
    document.addEventListener('mouseout', onHoverEnd)

    return () => {
      cancelAnimationFrame(animFrame)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseover', onHoverStart)
      document.removeEventListener('mouseout', onHoverEnd)
    }
  }, [visible])

  return (
    <>
      {/* Dot — sharp, follows exactly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        <div
          style={{
            width: hovering ? 0 : clicking ? 4 : 12,
            height: hovering ? 0 : clicking ? 4 : 12,
            borderRadius: '50%',
            background: '#D4AF37',
            transition: 'width 0.2s ease, height 0.2s ease',
          }}
        />
      </div>

      {/* Ring — lagged, enlarges on hover */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        <div
          style={{
            width: hovering ? 56 : clicking ? 32 : 40,
            height: hovering ? 56 : clicking ? 32 : 40,
            borderRadius: '50%',
            border: `1.5px solid ${hovering ? '#D4AF37' : 'rgba(212, 175, 55, 0.5)'}`,
            background: hovering ? 'rgba(212, 175, 55, 0.08)' : 'transparent',
            transition: 'width 0.25s ease, height 0.25s ease, border-color 0.2s ease, background 0.2s ease',
            // Offset to center the ring around the pointer
            marginLeft: hovering ? -8 : 0,
            marginTop: hovering ? -8 : 0,
          }}
        />
      </div>
    </>
  )
}
