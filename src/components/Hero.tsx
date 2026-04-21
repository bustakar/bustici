import { useEffect, useState } from 'react'

function Countdown() {
  const target = new Date('2026-06-12T14:00:00')

  const getTimeLeft = () => {
    const diff = target.getTime() - new Date().getTime()
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
    <div className="flex items-center justify-center gap-0 mt-8">
      {units.map(({ value, label }, i) => (
        <div key={label} className="flex items-center">
          <div className="text-center px-3 md:px-5">
            <div
              className="font-serif text-3xl md:text-4xl text-wedding-brown font-light tabular-nums leading-none"
              style={{ letterSpacing: '-0.02em' }}
            >
              {String(value).padStart(2, '0')}
            </div>
            <div className="font-sans text-[9px] tracking-[0.3em] text-wedding-brown mt-2 uppercase">
              {label}
            </div>
          </div>
          {i < units.length - 1 && (
            <div className="flex flex-col gap-1.5 opacity-40">
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
    >
      {/* Background image — full bleed, no overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/hero-monet.jpg)' }}
      />

      {/* Content card */}
      <div className="relative w-full max-w-[720px] mx-auto px-4">
        <div className="relative text-center bg-wedding-cream border border-wedding-peach/45 px-8 py-12 md:px-14 md:py-14">
            <p className="font-sans text-[10px] tracking-[0.45em] text-wedding-brown mb-8 uppercase font-semibold">
              Slavnostní oznámení sňatku
            </p>

            <h1
              className="font-serif font-light text-wedding-brown leading-none"
              style={{ fontSize: 'clamp(3rem, 9vw, 6rem)', letterSpacing: '-0.01em' }}
            >
              Kateřina
            </h1>

            <div className="my-3 md:my-4 flex items-center justify-center gap-4">
              <div className="h-px flex-1 max-w-[60px] bg-wedding-copper/40" />
              <span
                className="font-serif italic text-wedding-copper"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1 }}
              >
                &amp;
              </span>
              <div className="h-px flex-1 max-w-[60px] bg-wedding-copper/40" />
            </div>

            <h1
              className="font-serif font-light text-wedding-brown leading-none"
              style={{ fontSize: 'clamp(3rem, 9vw, 6rem)', letterSpacing: '-0.01em' }}
            >
              Karel
            </h1>

            <div className="space-y-1.5 mt-8">
              <p className="font-serif italic text-xl md:text-2xl text-wedding-brown font-light">
                12. června 2026
              </p>
              <p className="font-sans text-[11px] tracking-[0.4em] text-wedding-brown uppercase font-medium">
                Statek Jedraž
              </p>
            </div>

            <Countdown />

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
              <button
                onClick={() => document.querySelector('#dotaznik')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Potvrdit účast
              </button>
              <button
                onClick={() => document.querySelector('#mapa')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                Více informací
              </button>
            </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-sans text-[10px] tracking-[0.3em] text-wedding-cream uppercase">Dolů</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-wedding-cream">
          <path d="M9 3v12M3 9l6 6 6-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
