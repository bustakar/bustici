import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { LaceDivider } from './Ornaments'

const MapPin = () => (
  <svg width="36" height="44" viewBox="0 0 32 40" fill="none">
    <path
      d="M16 0C7.163 0 0 7.163 0 16c0 12 16 24 16 24S32 28 32 16C32 7.163 24.837 0 16 0z"
      fill="#B87333"
      fillOpacity="0.9"
    />
    <circle cx="16" cy="16" r="6.5" fill="white" fillOpacity="0.95" />
    <circle cx="16" cy="16" r="3" fill="#B87333" fillOpacity="0.6" />
  </svg>
)

export default function Map() {
  const headingRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)
  useFadeIn(cardRef, 200)

  const address = 'Jedraž 1, Radošovice-Volyně, 387 01, Česko'
  const mapsUrl = 'https://maps.google.com/?q=Jedraž+1+Radošovice+Volyně+387+01'
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent('Jedraž 1, Radošovice, Volyně, 387 01')}&output=embed`

  return (
    <section id="mapa" className="py-24 md:py-32 canvas-ivory relative">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={headingRef} className="fade-section text-center mb-12">
          <p className="section-label">Místo konání</p>
          <h2 className="section-title font-light">Statek Jedraž</h2>
          <LaceDivider className="mt-4" />
          <p className="font-body text-wedding-lightbrown max-w-md mx-auto mt-4" style={{ fontSize: '1.05rem' }}>
            Romantické venkovské sídlo.
          </p>
        </div>

        <div ref={cardRef} className="fade-section grid md:grid-cols-5 gap-6 items-stretch">
          <div className="md:col-span-3 overflow-hidden border border-wedding-peach/45 h-80 md:h-[420px]">
            <iframe
              title="Mapa - Statek Jedraž"
              src={embedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="md:col-span-2 border border-wedding-peach/45 p-8 flex flex-col justify-center bg-wedding-cream/85">
            <div className="flex items-start gap-4 mb-6">
              <MapPin />
              <div>
                <p className="font-serif text-xl text-wedding-brown font-light">Statek Jedraž</p>
                <p className="font-body text-wedding-lightbrown mt-1">{address}</p>
              </div>
            </div>

            <div className="space-y-3 font-body text-wedding-lightbrown text-[0.95rem]">
              <p>
                <span className="font-sans text-[10px] tracking-[0.3em] text-wedding-copper uppercase block mb-1">Z Písku</span>
                cca 30 minut autem
              </p>
              <p>
                <span className="font-sans text-[10px] tracking-[0.3em] text-wedding-copper uppercase block mb-1">Ze Staňkova</span>
                cca 1 hodina 30 minut autem
              </p>
              <p>
                <span className="font-sans text-[10px] tracking-[0.3em] text-wedding-copper uppercase block mb-1">Parkování</span>
                Zdarma přímo v areálu statku
              </p>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 btn-primary text-center"
            >
              Otevřít v Mapách
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
