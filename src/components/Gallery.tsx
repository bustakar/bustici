import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

// Placeholder gallery items with the wedding color palette
const placeholders = [
  { bg: 'from-wedding-peach/60 to-wedding-apricot/80', label: 'Zásnuby', ratio: 'tall' },
  { bg: 'from-wedding-blush/60 to-wedding-peach/60', label: 'Praha', ratio: 'wide' },
  { bg: 'from-wedding-moss/30 to-wedding-misty/40', label: 'Příroda', ratio: 'square' },
  { bg: 'from-wedding-apricot/50 to-wedding-golden/30', label: 'Večer', ratio: 'square' },
  { bg: 'from-wedding-copper/20 to-wedding-blush/40', label: 'Portrét', ratio: 'tall' },
  { bg: 'from-wedding-misty/50 to-wedding-moss/30', label: 'Cesty', ratio: 'wide' },
  { bg: 'from-wedding-peach/40 to-wedding-copper/20', label: 'Společně', ratio: 'square' },
  { bg: 'from-wedding-blush/50 to-wedding-apricot/40', label: 'Detaily', ratio: 'square' },
  { bg: 'from-wedding-golden/20 to-wedding-peach/50', label: 'Úsměv', ratio: 'wide' },
]

function PhotoCard({ item, index }: { item: typeof placeholders[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useFadeIn(ref, index * 80)

  const heightClass =
    item.ratio === 'tall' ? 'h-80' : item.ratio === 'wide' ? 'h-48' : 'h-60'

  return (
    <div
      ref={ref}
      className={`fade-section relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.bg} group cursor-pointer ${heightClass}`}
    >
      {/* Decorative */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-60">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-wedding-brown/40">
          <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="30" cy="12" r="2" fill="currentColor" fillOpacity="0.5"/>
        </svg>
        <span className="font-sans text-xs uppercase tracking-widest text-wedding-brown/40">
          {item.label}
        </span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-wedding-brown/0 group-hover:bg-wedding-brown/10 transition-all duration-300 rounded-2xl" />

      {/* Coming soon badge */}
      <div className="absolute top-3 right-3 bg-wedding-cream/80 backdrop-blur-sm text-wedding-copper font-sans text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        Brzy
      </div>
    </div>
  )
}

export default function Gallery() {
  const headingRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)

  return (
    <section id="gallery" className="py-24 md:py-32 bg-wedding-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="fade-section text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-wedding-copper mb-4">
            Vzpomínky
          </p>
          <h2 className="section-title mb-4">Galerie</h2>
          <div className="ornament">
            <span className="font-serif italic text-wedding-copper text-lg">♦</span>
          </div>
          <p className="font-body text-wedding-lightbrown max-w-md mx-auto">
            Po svatbě zde najdete fotky z tohoto krásného dne. Zatím si prohlédněte pár momentů z našeho společného života.
          </p>
        </div>

        {/* Masonry-ish grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {placeholders.map((item, i) => (
            <div key={i} className="break-inside-avoid">
              <PhotoCard item={item} index={i} />
            </div>
          ))}
        </div>

        {/* Coming soon note */}
        <div className="text-center mt-12">
          <p className="font-body italic text-wedding-lightbrown/60 text-sm">
            📷 Profesionální fotografie budou přidány po 12. června 2026
          </p>
        </div>
      </div>
    </section>
  )
}
