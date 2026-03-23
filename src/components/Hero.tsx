import { useEffect, useState } from 'react'

// Botanical corner ornament — delicate pressed-flower illustration style
const BotanicalCorner = ({
  className,
  flipX = false,
  flipY = false,
}: {
  className?: string
  flipX?: boolean
  flipY?: boolean
}) => (
  <svg
    width="180"
    height="180"
    viewBox="0 0 180 180"
    fill="none"
    className={className}
    style={{
      transform: `scaleX(${flipX ? -1 : 1}) scaleY(${flipY ? -1 : 1})`,
    }}
  >
    {/* Main arching branch */}
    <path
      d="M 12 165 C 35 140 55 110 75 80 C 95 50 125 28 168 10"
      stroke="#B87333"
      strokeWidth="1.1"
      strokeOpacity="0.28"
      fill="none"
    />
    {/* Sub-branch 1 */}
    <path
      d="M 48 118 C 32 108 20 96 14 82"
      stroke="#B87333"
      strokeWidth="0.8"
      strokeOpacity="0.2"
      fill="none"
    />
    {/* Sub-branch 2 */}
    <path
      d="M 82 78 C 96 60 102 44 97 32"
      stroke="#B87333"
      strokeWidth="0.8"
      strokeOpacity="0.2"
      fill="none"
    />
    {/* Sub-branch 3 */}
    <path
      d="M 125 42 C 142 34 155 28 162 18"
      stroke="#B87333"
      strokeWidth="0.8"
      strokeOpacity="0.18"
      fill="none"
    />

    {/* Leaves along main branch */}
    <ellipse
      cx="36" cy="142" rx="6" ry="14"
      fill="#8A9A5B" fillOpacity="0.22"
      transform="rotate(-48 36 142)"
    />
    <ellipse
      cx="60" cy="112" rx="5.5" ry="13"
      fill="#8A9A5B" fillOpacity="0.2"
      transform="rotate(-55 60 112)"
    />
    <ellipse
      cx="84" cy="82" rx="5" ry="12"
      fill="#8A9A5B" fillOpacity="0.18"
      transform="rotate(-62 84 82)"
    />
    <ellipse
      cx="110" cy="55" rx="4.5" ry="10"
      fill="#8A9A5B" fillOpacity="0.16"
      transform="rotate(-68 110 55)"
    />
    <ellipse
      cx="138" cy="32" rx="4" ry="9"
      fill="#8A9A5B" fillOpacity="0.14"
      transform="rotate(-72 138 32)"
    />

    {/* Small blossoms */}
    <circle cx="14" cy="82" r="3.5" fill="#FFCBA4" fillOpacity="0.45" />
    <circle cx="14" cy="82" r="1.5" fill="#E8A838" fillOpacity="0.3" />

    <circle cx="97" cy="32" r="3" fill="#F4C2C2" fillOpacity="0.5" />
    <circle cx="97" cy="32" r="1.2" fill="#FBCEB1" fillOpacity="0.4" />

    <circle cx="162" cy="18" r="2.5" fill="#FFCBA4" fillOpacity="0.4" />

    {/* Tiny detail buds */}
    <circle cx="50" cy="120" r="1.8" fill="#B87333" fillOpacity="0.2" />
    <circle cx="108" cy="57" r="1.5" fill="#E8A838" fillOpacity="0.2" />
  </svg>
)

// Elaborate botanical divider for between names and date
const FloralDivider = () => (
  <svg
    width="340"
    height="56"
    viewBox="0 0 340 56"
    fill="none"
    className="mx-auto my-2"
  >
    {/* Center ornament — diamond */}
    <path
      d="M 170 18 L 180 28 L 170 38 L 160 28 Z"
      fill="#B87333"
      fillOpacity="0.38"
    />
    <path
      d="M 170 22 L 176 28 L 170 34 L 164 28 Z"
      fill="#B87333"
      fillOpacity="0.2"
    />

    {/* Lines extending from diamond */}
    <line x1="188" y1="28" x2="290" y2="28" stroke="#B87333" strokeOpacity="0.2" strokeWidth="0.8" />
    <line x1="50" y1="28" x2="152" y2="28" stroke="#B87333" strokeOpacity="0.2" strokeWidth="0.8" />

    {/* Secondary ornament circles */}
    <circle cx="228" cy="28" r="4.5" stroke="#B87333" strokeOpacity="0.22" strokeWidth="0.8" fill="none" />
    <circle cx="228" cy="28" r="1.5" fill="#B87333" fillOpacity="0.18" />
    <circle cx="112" cy="28" r="4.5" stroke="#B87333" strokeOpacity="0.22" strokeWidth="0.8" fill="none" />
    <circle cx="112" cy="28" r="1.5" fill="#B87333" fillOpacity="0.18" />

    {/* Leaf accents flanking center */}
    <path
      d="M 158 28 C 152 18 148 10 152 6"
      stroke="#8A9A5B"
      strokeWidth="0.7"
      strokeOpacity="0.32"
      fill="none"
    />
    <ellipse
      cx="152" cy="8" rx="3" ry="7"
      fill="#8A9A5B" fillOpacity="0.2"
      transform="rotate(-15 152 8)"
    />
    <path
      d="M 182 28 C 188 18 192 10 188 6"
      stroke="#8A9A5B"
      strokeWidth="0.7"
      strokeOpacity="0.32"
      fill="none"
    />
    <ellipse
      cx="188" cy="8" rx="3" ry="7"
      fill="#8A9A5B" fillOpacity="0.2"
      transform="rotate(15 188 8)"
    />

    {/* End flourishes */}
    <path d="M 50 28 C 30 28 20 22 10 20" stroke="#B87333" strokeOpacity="0.15" strokeWidth="0.7" fill="none" />
    <path d="M 290 28 C 310 28 320 22 330 20" stroke="#B87333" strokeOpacity="0.15" strokeWidth="0.7" fill="none" />
    <circle cx="10" cy="20" r="2" fill="#B87333" fillOpacity="0.15" />
    <circle cx="330" cy="20" r="2" fill="#B87333" fillOpacity="0.15" />
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
    <div className="flex items-center justify-center gap-0 mt-10">
      {units.map(({ value, label }, i) => (
        <div key={label} className="flex items-center">
          <div className="text-center px-5 md:px-7">
            <div
              className="font-serif text-4xl md:text-5xl text-wedding-copper font-light tabular-nums leading-none"
              style={{ letterSpacing: '-0.02em' }}
            >
              {String(value).padStart(2, '0')}
            </div>
            <div className="font-sans text-[10px] tracking-[0.3em] text-wedding-lightbrown/70 mt-2 uppercase">
              {label}
            </div>
          </div>
          {i < units.length - 1 && (
            <div className="flex flex-col gap-1.5 opacity-30">
              <span className="w-1 h-1 rounded-full bg-wedding-copper block" />
              <span className="w-1 h-1 rounded-full bg-wedding-copper block" />
            </div>
          )}
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
        background: 'radial-gradient(ellipse at 30% 40%, #FFF8F0 0%, #FAF0E6 35%, #FBCEB1 68%, #FFCBA4 100%)',
      }}
    >
      {/* Vignette overlay */}
      <div className="absolute inset-0 hero-vignette pointer-events-none" />

      {/* Soft glow blobs */}
      <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-wedding-blush/18 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-24 w-80 h-80 rounded-full bg-wedding-apricot/18 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-wedding-peach/8 blur-3xl pointer-events-none" />

      {/* Botanical corners */}
      <div className="absolute top-0 left-0 opacity-80 pointer-events-none">
        <BotanicalCorner />
      </div>
      <div className="absolute top-0 right-0 opacity-80 pointer-events-none">
        <BotanicalCorner flipX />
      </div>
      <div className="absolute bottom-0 left-0 opacity-60 pointer-events-none">
        <BotanicalCorner flipY />
      </div>
      <div className="absolute bottom-0 right-0 opacity-60 pointer-events-none">
        <BotanicalCorner flipX flipY />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-8 max-w-3xl mx-auto animate-fade-in">
        {/* Pre-title */}
        <p className="font-sans text-[10px] tracking-[0.45em] text-wedding-copper/80 mb-10 uppercase">
          Slavnostní Oznámení Sňatku
        </p>

        {/* Names — enormous Cormorant Garamond */}
        <h1
          className="font-serif font-light text-wedding-brown leading-none"
          style={{ fontSize: 'clamp(4.5rem, 12vw, 9rem)', letterSpacing: '-0.01em' }}
        >
          Kateřina
        </h1>

        <div className="my-4 md:my-5 flex items-center justify-center gap-5">
          <div className="h-px flex-1 max-w-[80px] bg-wedding-copper/20" />
          <span
            className="font-serif italic text-wedding-copper"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1 }}
          >
            &amp;
          </span>
          <div className="h-px flex-1 max-w-[80px] bg-wedding-copper/20" />
        </div>

        <h1
          className="font-serif font-light text-wedding-brown leading-none"
          style={{ fontSize: 'clamp(4.5rem, 12vw, 9rem)', letterSpacing: '-0.01em' }}
        >
          Karel
        </h1>

        {/* Botanical divider */}
        <div className="mt-8 mb-4">
          <FloralDivider />
        </div>

        {/* Date & Venue */}
        <div className="space-y-2 mt-2">
          <p className="font-serif italic text-xl md:text-2xl text-wedding-brown/75 font-light">
            12. června 2026
          </p>
          <p className="font-sans text-[10px] tracking-[0.4em] text-wedding-lightbrown/70 uppercase">
            Statek Jedraž
          </p>
        </div>

        {/* Tagline */}
        <p
          className="font-body italic text-wedding-lightbrown/80 mt-6 max-w-sm mx-auto leading-relaxed"
          style={{ fontSize: '1.05rem' }}
        >
          „Každá láska je příběhem. Náš příběh začíná tady."
        </p>

        {/* Countdown */}
        <Countdown />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button
            onClick={() => document.querySelector('#rsvp')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Potvrdit účast
          </button>
          <button
            onClick={() => document.querySelector('#details')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            Více informací
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-sans text-[10px] tracking-[0.3em] text-wedding-copper/50 uppercase">Dolů</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-wedding-copper/40">
          <path d="M9 3v12M3 9l6 6 6-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
