import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

// SVG icon — ceremony rings
const CeremonyIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="13" cy="18" r="9" stroke="#B87333" strokeWidth="1.4" fill="none" strokeOpacity="0.8" />
    <circle cx="23" cy="18" r="9" stroke="#B87333" strokeWidth="1.4" fill="none" strokeOpacity="0.8" />
    <path d="M 18 12 C 18 12 16 15 16 18 C 16 21 18 24 18 24 C 18 24 20 21 20 18 C 20 15 18 12 18 12 Z" fill="#B87333" fillOpacity="0.2" />
  </svg>
)

// SVG icon — champagne glasses
const ReceptionIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M 10 6 L 15 20 L 11 20 L 11 30 L 15 30" stroke="#B87333" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" fill="none" />
    <path d="M 26 6 L 21 20 L 25 20 L 25 30 L 21 30" stroke="#B87333" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" fill="none" />
    <path d="M 7 6 L 13 6" stroke="#B87333" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.5" />
    <path d="M 23 6 L 29 6" stroke="#B87333" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.5" />
    {/* Clink arc */}
    <path d="M 16 10 Q 18 7 20 10" stroke="#E8A838" strokeWidth="0.9" strokeLinecap="round" fill="none" strokeOpacity="0.6" />
  </svg>
)

// SVG map pin
const MapPinIcon = () => (
  <svg width="32" height="40" viewBox="0 0 32 40" fill="none">
    <path
      d="M16 0C7.163 0 0 7.163 0 16c0 12 16 24 16 24S32 28 32 16C32 7.163 24.837 0 16 0z"
      fill="#B87333"
      fillOpacity="0.85"
    />
    <circle cx="16" cy="16" r="6.5" fill="white" fillOpacity="0.9" />
    <circle cx="16" cy="16" r="3" fill="#B87333" fillOpacity="0.5" />
  </svg>
)

function MapPlaceholder() {
  return (
    <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-wedding-peach/35 flex flex-col items-center justify-center gap-4"
      style={{ background: 'linear-gradient(145deg, rgba(138,154,91,0.12) 0%, rgba(176,196,222,0.18) 100%)' }}
    >
      {/* Decorative grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 400 256" preserveAspectRatio="xMidYMid slice">
        {[...Array(7)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 43} x2="400" y2={i * 43} stroke="#8A9A5B" strokeWidth="1" />
        ))}
        {[...Array(10)].map((_, i) => (
          <line key={`v${i}`} x1={i * 45} y1="0" x2={i * 45} y2="256" stroke="#8A9A5B" strokeWidth="1" />
        ))}
        <path d="M 60 128 Q 150 100 200 128 Q 250 156 345 128" stroke="#8A9A5B" strokeWidth="3.5" fill="none" strokeOpacity="0.8" />
        <path d="M 200 20 L 200 240" stroke="#8A9A5B" strokeWidth="2.5" fill="none" strokeOpacity="0.5" />
        <path d="M 80 60 L 160 120 L 200 128" stroke="#8A9A5B" strokeWidth="1.5" fill="none" strokeOpacity="0.4" />
      </svg>

      <div className="relative z-10">
        <MapPinIcon />
      </div>
      <p className="relative z-10 font-sans text-[11px] tracking-[0.3em] text-wedding-brown/70 uppercase">Statek Jedraž</p>
      <a
        href="https://maps.google.com/?q=Jedraz+1+264+01+Sedlcany"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 font-sans text-[10px] tracking-[0.25em] uppercase text-wedding-copper border border-wedding-copper/35 px-5 py-2 rounded-full hover:bg-wedding-copper hover:text-wedding-cream transition-colors"
      >
        Otevřít v Mapách
      </a>
    </div>
  )
}

function EventCard({
  icon,
  type,
  time,
  address,
  note,
  delay,
}: {
  icon: React.ReactNode
  type: string
  time: string
  address: string
  note?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  useFadeIn(ref, delay)

  return (
    <div
      ref={ref}
      className="fade-section parchment-card p-8 hover:shadow-warm-lg hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="mb-5">{icon}</div>
      <p className="font-sans text-[10px] tracking-[0.4em] text-wedding-copper mb-2 uppercase">{type}</p>
      <h3 className="font-serif text-2xl text-wedding-brown mb-4 font-light leading-snug">{time}</h3>
      <div className="w-8 h-px bg-wedding-copper/25 mb-4" />
      <p className="font-body text-wedding-lightbrown leading-relaxed" style={{ fontSize: '0.975rem' }}>
        {address}
      </p>
      {note && (
        <p className="font-body italic text-wedding-lightbrown/60 mt-3" style={{ fontSize: '0.9rem' }}>
          {note}
        </p>
      )}
    </div>
  )
}

export default function EventDetails() {
  const headingRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)
  useFadeIn(mapRef, 400)

  return (
    <section id="details" className="py-24 md:py-36 parchment-bg">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="fade-section text-center mb-16">
          <p className="section-label">Program</p>
          <h2 className="section-title mb-4 font-light">Detaily svatby</h2>
          <div className="ornament">
            <span className="font-serif italic text-wedding-copper/60 text-lg">✦</span>
          </div>
          <p className="font-body text-wedding-lightbrown max-w-md mx-auto" style={{ fontSize: '1.025rem' }}>
            Veškeré informace o obřadu a večerní oslavě na jednom místě.
          </p>
        </div>

        {/* Event cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <EventCard
            icon={<CeremonyIcon />}
            type="Obřad"
            time="14:00 — Sobota, 12. června 2026"
            address="Statek Jedraž, Jedraž 1, 264 01 Sedlčany, Česká republika"
            note="Doporučujeme příjezd alespoň 30 minut před začátkem obřadu."
            delay={100}
          />
          <EventCard
            icon={<ReceptionIcon />}
            type="Recepce & Večeře"
            time="16:00 — do pozdních hodin"
            address="Zahrada a sál Statku Jedraž. Večeře bude podávána od 18:00."
            note="Slavnostní tabule, živá hudba, tanec a nezapomenutelné vzpomínky."
            delay={200}
          />
        </div>

        {/* Dress code */}
        <div className="text-center mb-12 p-7 rounded-2xl border border-wedding-copper/15"
          style={{ background: 'rgba(232,168,56,0.06)' }}
        >
          <p className="font-sans text-[10px] tracking-[0.4em] text-wedding-copper mb-2 uppercase">Dress Code</p>
          <h3 className="font-serif text-2xl text-wedding-brown mb-3 font-light">Formální — Zahradní elegance</h3>
          <div className="w-10 h-px bg-wedding-copper/20 mx-auto mb-3" />
          <p className="font-body text-wedding-lightbrown max-w-sm mx-auto" style={{ fontSize: '0.975rem' }}>
            Prosíme, vyhněte se bílé a krémové barvě. Rádi uvidíme letní,
            barevné outfity — slavíme v přírodě!
          </p>
        </div>

        {/* Map */}
        <div ref={mapRef} className="fade-section">
          <p className="section-label text-center mb-5">Místo konání</p>
          <MapPlaceholder />
          <p className="font-body text-wedding-lightbrown text-center mt-4" style={{ fontSize: '0.925rem' }}>
            <span className="font-medium text-wedding-brown">Statek Jedraž</span>
            {' '}· Jedraž 1, 264 01 Sedlčany · cca 1 hodina od Prahy
          </p>
        </div>
      </div>
    </section>
  )
}
