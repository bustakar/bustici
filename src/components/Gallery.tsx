import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { LaceDoily, LaceDivider } from './Ornaments'

const placeholders = [
  { tone: 'peach', label: 'Zásnuby', ratio: 'tall', framed: false },
  { tone: 'blush', label: 'Praha', ratio: 'wide', framed: false },
  { tone: 'sage', label: 'Příroda', ratio: 'square', framed: true },
  { tone: 'apricot', label: 'Večer', ratio: 'square', framed: false },
  { tone: 'copper', label: 'Portrét', ratio: 'tall', framed: true },
  { tone: 'bluebell', label: 'Cesty', ratio: 'wide', framed: false },
  { tone: 'lilac', label: 'Společně', ratio: 'square', framed: false },
  { tone: 'butter', label: 'Detaily', ratio: 'square', framed: false },
  { tone: 'terracotta', label: 'Úsměv', ratio: 'wide', framed: true },
] as const

const toneToBg: Record<string, string> = {
  peach: 'from-wedding-peach/45 to-wedding-apricot/55',
  blush: 'from-wedding-blush/45 to-wedding-peach/35',
  sage: 'from-wedding-sage/45 to-wedding-moss/30',
  apricot: 'from-wedding-apricot/45 to-wedding-golden/25',
  copper: 'from-wedding-copper/22 to-wedding-blush/30',
  bluebell: 'from-wedding-bluebell/40 to-wedding-sage/25',
  lilac: 'from-wedding-lilac/40 to-wedding-blush/30',
  butter: 'from-wedding-butter/40 to-wedding-apricot/30',
  terracotta: 'from-wedding-terracotta/30 to-wedding-peach/35',
}

const CameraIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-wedding-brown/35">
    <path d="M 3 10 C 3 8.9 3.9 8 5 8 L 9 8 L 11 5 L 21 5 L 23 8 L 27 8 C 28.1 8 29 8.9 29 10 L 29 24 C 29 25.1 28.1 26 27 26 L 5 26 C 3.9 26 3 25.1 3 24 Z"
      stroke="currentColor" strokeWidth="1.2" fill="none" />
    <circle cx="16" cy="17" r="5" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <circle cx="24" cy="12" r="1.5" fill="currentColor" fillOpacity="0.4" />
  </svg>
)

function PhotoCard({ item, index }: { item: typeof placeholders[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useFadeIn(ref, index * 70)

  const heightClass =
    item.ratio === 'tall' ? 'h-80' : item.ratio === 'wide' ? 'h-48' : 'h-60'

  return (
    <div
      ref={ref}
      className={`fade-section relative overflow-hidden bg-gradient-to-br ${toneToBg[item.tone]} group ${heightClass} border border-wedding-brown/10`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 group-hover:opacity-0">
        <CameraIcon />
        <span className="font-sans text-[10px] tracking-[0.35em] text-wedding-brown/40 uppercase">{item.label}</span>
      </div>

      {/* Lace doily overlay on framed cards */}
      {item.framed && (
        <div className="absolute inset-0 flex items-center justify-center opacity-90 pointer-events-none">
          <LaceDoily width={Math.min(320, 240)} height={item.ratio === 'tall' ? 260 : 180} />
        </div>
      )}

      <div className="absolute inset-0 bg-wedding-brown/0 group-hover:bg-wedding-brown/10 transition-all duration-300" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-wedding-cream/90 px-4 py-1.5">
          <span className="font-sans text-[10px] tracking-[0.3em] text-wedding-copper uppercase">Brzy</span>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const headingRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)

  return (
    <section id="galerie" className="py-24 md:py-32 canvas-parchment relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="fade-section text-center mb-14">
          <p className="section-label">Vzpomínky</p>
          <h2 className="section-title font-light">Galerie</h2>
          <LaceDivider className="mt-4" />
          <p className="font-body text-wedding-lightbrown max-w-md mx-auto mt-4" style={{ fontSize: '1.05rem' }}>
            Naše společné chvíle — dobrodružství, místa, večery, cesty.
          </p>
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {placeholders.map((item, i) => (
            <div key={i} className="break-inside-avoid">
              <PhotoCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
