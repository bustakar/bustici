import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const placeholders = [
  { bg: 'from-wedding-peach/50 to-wedding-apricot/70', label: 'Zásnuby', ratio: 'tall' },
  { bg: 'from-wedding-blush/50 to-wedding-peach/50', label: 'Praha', ratio: 'wide' },
  { bg: 'from-wedding-moss/25 to-wedding-misty/35', label: 'Příroda', ratio: 'square' },
  { bg: 'from-wedding-apricot/45 to-wedding-golden/25', label: 'Večer', ratio: 'square' },
  { bg: 'from-wedding-copper/18 to-wedding-blush/35', label: 'Portrét', ratio: 'tall' },
  { bg: 'from-wedding-misty/45 to-wedding-moss/25', label: 'Cesty', ratio: 'wide' },
  { bg: 'from-wedding-peach/35 to-wedding-copper/18', label: 'Společně', ratio: 'square' },
  { bg: 'from-wedding-blush/45 to-wedding-apricot/35', label: 'Detaily', ratio: 'square' },
  { bg: 'from-wedding-golden/18 to-wedding-peach/45', label: 'Úsměv', ratio: 'wide' },
]

// Camera icon
const CameraIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-wedding-brown/30">
    <path
      d="M 3 10 C 3 8.9 3.9 8 5 8 L 9 8 L 11 5 L 21 5 L 23 8 L 27 8 C 28.1 8 29 8.9 29 10 L 29 24 C 29 25.1 28.1 26 27 26 L 5 26 C 3.9 26 3 25.1 3 24 Z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
    <circle cx="16" cy="17" r="5" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <circle cx="24" cy="12" r="1.5" fill="currentColor" fillOpacity="0.4" />
  </svg>
)

function PhotoCard({ item, index }: { item: typeof placeholders[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useFadeIn(ref, index * 80)

  const heightClass =
    item.ratio === 'tall' ? 'h-80' : item.ratio === 'wide' ? 'h-48' : 'h-60'

  return (
    <div
      ref={ref}
      className={`fade-section relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.bg} group cursor-pointer ${heightClass} border border-wedding-brown/5`}
    >
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 group-hover:opacity-0">
        <CameraIcon />
        <span className="font-sans text-[10px] tracking-[0.35em] text-wedding-brown/35 uppercase">
          {item.label}
        </span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-wedding-brown/0 group-hover:bg-wedding-brown/8 transition-all duration-300" />

      {/* Hover label */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-wedding-cream/85 backdrop-blur-sm rounded-full px-4 py-1.5">
          <span className="font-sans text-[10px] tracking-[0.3em] text-wedding-copper uppercase">Brzy</span>
        </div>
      </div>

      {/* Subtle corner accent */}
      <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-wedding-brown/15 rounded-tl" />
      <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-wedding-brown/15 rounded-br" />
    </div>
  )
}

export default function Gallery() {
  const headingRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)

  return (
    <section id="gallery" className="py-24 md:py-36 parchment-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="fade-section text-center mb-16">
          <p className="section-label">Vzpomínky</p>
          <h2 className="section-title mb-4 font-light">Galerie</h2>
          <div className="ornament">
            <span className="font-serif italic text-wedding-copper/60 text-lg">✦</span>
          </div>
          <p className="font-body text-wedding-lightbrown max-w-md mx-auto" style={{ fontSize: '1.025rem' }}>
            Po svatbě zde najdete fotky z tohoto krásného dne. Zatím si prohlédněte
            pár momentů z našeho společného života.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {placeholders.map((item, i) => (
            <div key={i} className="break-inside-avoid">
              <PhotoCard item={item} index={i} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body italic text-wedding-lightbrown/50" style={{ fontSize: '0.925rem' }}>
            Profesionální fotografie budou přidány po 12. června 2026
          </p>
        </div>
      </div>
    </section>
  )
}
