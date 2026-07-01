export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        {/* Animated SS logo */}
        <div className="relative">
          <span className="font-display text-4xl font-bold text-gold-gradient">
            Anchor Shubham Khandelwal 
          </span>
          <div className="absolute -bottom-2 left-0 right-0 h-px bg-gold/30 overflow-hidden">
            <div className="h-full w-1/2 bg-gold shimmer-bg animate-shimmer" />
          </div>
        </div>

        {/* Gold loading dots */}
        <div className="flex items-center gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gold animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
