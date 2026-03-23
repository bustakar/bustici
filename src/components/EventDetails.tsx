import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

function MapPlaceholder() {
  return (
    <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-wedding-moss/20 to-wedding-misty/30 border border-wedding-peach/40 flex flex-col items-center justify-center gap-3">
      {/* Simple decorative map grid */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 256">
        {[...Array(6)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 45} x2="400" y2={i * 45} stroke="#8A9A5B" strokeWidth="1"/>
        ))}
        {[...Array(9)].map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="256" stroke="#8A9A5B" strokeWidth="1"/>
        ))}
        {/* Roads */}
        <path d="M 50 128 Q 150 100 200 128 Q 250 156 350 128" stroke="#8A9A5B" strokeWidth="3" fill="none" strokeOpacity="0.6"/>
        <path d="M 200 30 L 200 230" stroke="#8A9A5B" strokeWidth="2" fill="none" strokeOpacity="0.4"/>
      </svg>
      {/* Pin */}
      <div className="relative z-10 text-wedding-copper">
        <svg width="36" height="44" viewBox="0 0 36 44" fill="none">
          <path d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 26 18 26s18-12.5 18-26C36 8.06 27.94 0 18 0z" fill="#B87333" fillOpacity="0.9"/>
          <circle cx="18" cy="18" r="7" fill="white" fillOpacity="0.9"/>
        </svg>
      </div>
      <p className="relative z-10 font-sans text-sm text-wedding-brown font-medium">Statek Jedraž</p>
      <a
        href="https://maps.google.com/?q=Statek+Jedraž"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 font-sans text-xs uppercase tracking-widest text-wedding-copper border border-wedding-copper/40 px-4 py-1.5 rounded-full hover:bg-wedding-copper hover:text-wedding-cream transition-colors"
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
  icon: string
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
      className="fade-section bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-wedding-peach/30 hover:border-wedding-copper/30 transition-colors"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <p className="font-sans text-xs uppercase tracking-widest text-wedding-copper mb-2">{type}</p>
      <h3 className="font-serif text-2xl text-wedding-brown mb-4">{time}</h3>
      <div className="w-10 h-px bg-wedding-copper/30 mb-4" />
      <p className="font-body text-wedding-lightbrown leading-relaxed text-sm">{address}</p>
      {note && (
        <p className="font-body italic text-wedding-lightbrown/70 text-sm mt-3">{note}</p>
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
    <section id="details" className="py-24 md:py-32 bg-wedding-cream">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="fade-section text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-wedding-copper mb-4">Program</p>
          <h2 className="section-title mb-4">Detaily svatby</h2>
          <div className="ornament">
            <span className="font-serif italic text-wedding-copper text-lg">♦</span>
          </div>
          <p className="font-body text-wedding-lightbrown max-w-md mx-auto">
            Veškeré informace o obřadu a večerní oslavě na jednom místě.
          </p>
        </div>

        {/* Event cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <EventCard
            icon="💍"
            type="Obřad"
            time="14:00 — Sobota, 12. června 2026"
            address="Statek Jedraž, Jedraž 1, 264 01 Sedlčany, Česká republika"
            note="Doporučujeme příjezd alespoň 30 minut před začátkem obřadu."
            delay={100}
          />
          <EventCard
            icon="🥂"
            type="Recepce & Večeře"
            time="16:00 — do pozdních hodin"
            address="Zahrada a sál Statku Jedraž. Večeře bude podávána od 18:00."
            note="Slavnostní tabule, živá hudba, tanec a nezapomenutelné vzpomínky."
            delay={200}
          />
        </div>

        {/* Dress code */}
        <div className="text-center mb-12 p-6 bg-wedding-apricot/20 rounded-2xl border border-wedding-peach/30">
          <p className="font-sans text-xs uppercase tracking-widest text-wedding-copper mb-2">Dress code</p>
          <p className="font-serif text-xl text-wedding-brown mb-2">Formální — Zahradní elegance</p>
          <p className="font-body text-wedding-lightbrown text-sm max-w-sm mx-auto">
            Prosíme, vyhněte se bílé a krémové barvě. Rádi uvidíme letní, barevné outfity — slavíme v přírodě!
          </p>
        </div>

        {/* Map */}
        <div ref={mapRef} className="fade-section">
          <p className="font-sans text-xs uppercase tracking-widest text-wedding-copper text-center mb-4">Místo konání</p>
          <MapPlaceholder />
          <p className="font-body text-wedding-lightbrown text-sm text-center mt-4">
            <span className="font-medium text-wedding-brown">Statek Jedraž</span> · Jedraž 1, 264 01 Sedlčany · cca 1 hodina od Prahy
          </p>
        </div>
      </div>
    </section>
  )
}
