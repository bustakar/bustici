import { useEffect, useState } from 'react'

const FloralSvg = () => (
  <svg width="160" height="32" viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    <line x1="0" y1="16" x2="60" y2="16" stroke="#B87333" strokeOpacity="0.35" strokeWidth="1"/>
    <circle cx="80" cy="16" r="4" stroke="#B87333" strokeOpacity="0.5" strokeWidth="1" fill="none"/>
    <circle cx="80" cy="16" r="8" stroke="#B87333" strokeOpacity="0.2" strokeWidth="1" fill="none"/>
    <circle cx="66" cy="16" r="2" fill="#B87333" fillOpacity="0.3"/>
    <circle cx="94" cy="16" r="2" fill="#B87333" fillOpacity="0.3"/>
    <line x1="100" y1="16" x2="160" y2="16" stroke="#B87333" strokeOpacity="0.35" strokeWidth="1"/>
    {/* Leaf accents */}
    <ellipse cx="72" cy="12" rx="3" ry="5" fill="#8A9A5B" fillOpacity="0.25" transform="rotate(-30 72 12)"/>
    <ellipse cx="88" cy="20" rx="3" ry="5" fill="#8A9A5B" fillOpacity="0.25" transform="rotate(30 88 20)"/>
  </svg>
)

function Countdown() {
  const target = new Date('2026-06-12T14:00:00')

  const getTimeLeft = () => {
    const now = new Date()
    const diff = target.getTime() - now.getTime()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: time.days, label: 'dní' },
    { value: time.hours, label: 'hodin' },
    { value: time.minutes, label: 'minut' },
    { value: time.seconds, label: 'sekund' },
  ]

  return (
    <div className="flex gap-6 md:gap-10 justify-center mt-10">
      {units.map(({ value, label }) => (
        <div key={label} className="text-center">
          <div className="font-serif text-3xl md:text-4xl text-wedding-copper font-semibold tabular-nums">
            {String(value).padStart(2, '0')}
          </div>
          <div className="font-sans text-xs uppercase tracking-widest text-wedding-lightbrown mt-1">{label}</div>
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FFF8F0 0%, #FAF0E6 35%, #FBCEB1 70%, #FFCBA4 100%)',
      }}
    >
      {/* Decorative background circles */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-wedding-blush/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-wedding-apricot/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-wedding-peach/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in">
        {/* Pre-title */}
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-wedding-copper mb-8">
          Slavnostní svatební oznámení
        </p>

        {/* Names */}
        <h1 className="font-serif font-normal text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-wedding-brown leading-none mb-2">
          Kateřina
        </h1>
        <div className="font-serif italic text-3xl sm:text-4xl text-wedding-copper my-3 md:my-4">&</div>
        <h1 className="font-serif font-normal text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-wedding-brown leading-none mb-8">
          Karel
        </h1>

        <FloralSvg />

        {/* Date & Venue */}
        <div className="mt-6 space-y-2">
          <p className="font-serif italic text-xl md:text-2xl text-wedding-brown/80">
            12. června 2026
          </p>
          <p className="font-sans text-sm uppercase tracking-widest text-wedding-lightbrown">
            Statek Jedraž
          </p>
        </div>

        {/* Tagline */}
        <p className="font-body italic text-lg md:text-xl text-wedding-lightbrown mt-6 max-w-md mx-auto leading-relaxed">
          „Každá láska je příběhem. Náš příběh začíná tady."
        </p>

        {/* Countdown */}
        <Countdown />

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button
            onClick={() => document.querySelector('#rsvp')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-sans text-sm uppercase tracking-widest bg-wedding-copper text-wedding-cream px-8 py-3 rounded-full hover:bg-wedding-brown transition-all duration-300 hover:shadow-lg"
          >
            Potvrdit účast
          </button>
          <button
            onClick={() => document.querySelector('#details')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-sans text-sm uppercase tracking-widest border border-wedding-copper text-wedding-copper px-8 py-3 rounded-full hover:bg-wedding-copper hover:text-wedding-cream transition-all duration-300"
          >
            Více informací
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-sans text-xs uppercase tracking-widest text-wedding-copper/60">Scrollovat</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-wedding-copper/60">
          <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
