import { useEffect, useRef, useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { ColorSwatch, LaceDivider } from './Ornaments'

type LightboxImage = { src: string; alt: string; caption?: string } | null

function Lightbox({ image, onClose }: { image: LightboxImage; onClose: () => void }) {
  useEffect(() => {
    if (!image) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [image, onClose])

  if (!image) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Náhled obrázku"
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-10 bg-wedding-darkbrown/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Zavřít"
        className="absolute top-5 right-5 md:top-7 md:right-7 text-wedding-cream/90 hover:text-wedding-cream transition-colors"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
        </svg>
      </button>
      <figure
        className="relative max-w-5xl max-h-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[85vh] object-contain shadow-warm-lg"
        />
        {image.caption && (
          <figcaption className="font-body italic text-wedding-cream/90 mt-5 text-center max-w-2xl" style={{ fontSize: '0.95rem' }}>
            {image.caption}
          </figcaption>
        )}
      </figure>
    </div>
  )
}

const palette = [
  { color: '#FFCBA4', name: 'Peach', hex: '#FFCBA4' },
  { color: '#E8A838', name: 'Golden', hex: '#E8A838' },
  { color: '#C46A4F', name: 'Terracotta', hex: '#C46A4F' },
  { color: '#FBCEB1', name: 'Apricot', hex: '#FBCEB1' },
  { color: '#F4C2C2', name: 'Blush', hex: '#F4C2C2' },
  { color: '#A1A8BE', name: 'Bluebell', hex: '#A1A8BE' },
  { color: '#D9B8D4', name: 'Lilac', hex: '#D9B8D4' },
  { color: '#B5BFA1', name: 'Sage', hex: '#B5BFA1' },
  { color: '#F0D67A', name: 'Butter', hex: '#F0D67A' },
]

function OutfitImage({
  src,
  alt,
  label,
  onOpen,
}: {
  src: string
  alt: string
  label: string
  onOpen: () => void
}) {
  return (
    <figure className="flex flex-col">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Zvětšit obrázek: ${label}`}
        className="group w-full overflow-hidden bg-wedding-cream/60 border border-wedding-copper/20 aspect-[3/4] cursor-zoom-in"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </button>
      <figcaption className="font-body italic text-wedding-brown mt-3 text-center" style={{ fontSize: '0.95rem' }}>
        {label}
      </figcaption>
    </figure>
  )
}

const menOutfits = [
  { src: '/dress-code/men-1.jpg', label: 'Obleky v zemitých tónech' },
  { src: '/dress-code/men-2.jpg', label: 'Šalvějová zelená, modrá, hnědá / blush' },
  { src: '/dress-code/men-3.jpg', label: 'Svěží teplé barvy' },
]

const womenOutfits = [
  { src: '/dress-code/women-1.jpg', label: 'Vrstvené šaty (šalvějová, dusty modrá, meruňková, žlutá)' },
  { src: '/dress-code/women-2.jpg', label: 'Romantické střihy v paletě (květinové vzory vítány)' },
  { src: '/dress-code/women-3.jpg', label: 'Teplé jarní barvy' },
]

export default function DressCode() {
  const headingRef = useRef<HTMLDivElement>(null)
  const paletteRef = useRef<HTMLDivElement>(null)
  const menRef = useRef<HTMLDivElement>(null)
  const womenRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)
  useFadeIn(paletteRef, 200)
  useFadeIn(menRef, 350)
  useFadeIn(womenRef, 450)

  const [lightboxImage, setLightboxImage] = useState<LightboxImage>(null)

  return (
    <section id="dress-code" className="py-24 md:py-32 canvas-ivory relative">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={headingRef} className="fade-section text-center mb-12">
          <p className="section-label">Co si vzít na sebe</p>
          <h2 className="section-title font-light">Dress code</h2>
          <LaceDivider className="mt-4" />
          <p className="font-body text-wedding-brown max-w-xl mx-auto mt-5" style={{ fontSize: '1.075rem' }}>
            Slavíme v zahradě statku — chceme, aby vám bylo příjemně, ale ať to vypadá svátečně.
            Zvolte něco letního, lehkého a v <em>našich barvách</em>.
          </p>
          <p className="font-body italic text-wedding-brown/85 mt-3" style={{ fontSize: '0.95rem' }}>
            Prosíme, vyhněte se bílé a krémové — ty si necháme pro nevěstu.
          </p>
        </div>

        {/* Palette */}
        <div ref={paletteRef} className="fade-section mb-16">
          <p className="font-sans text-[10px] tracking-[0.4em] text-wedding-copper uppercase text-center mb-7">Naše paleta</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {palette.map(p => (
              <ColorSwatch key={p.name} color={p.color} name={p.name} hex={p.hex} />
            ))}
          </div>
        </div>

        {/* Páni */}
        <div ref={menRef} className="fade-section mb-12 border border-wedding-copper/25 bg-wedding-cream/85 p-8 md:p-10">
          <div className="text-center mb-7">
            <p className="font-sans text-[10px] tracking-[0.4em] text-wedding-copper uppercase mb-2">Páni</p>
            <h3 className="font-serif text-2xl md:text-3xl text-wedding-brown font-light">Garden formal</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {menOutfits.map(o => (
              <OutfitImage
                key={o.src}
                src={o.src}
                alt={o.label}
                label={o.label}
                onOpen={() => setLightboxImage({ src: o.src, alt: o.label, caption: o.label })}
              />
            ))}
          </div>
        </div>

        {/* Dámy */}
        <div ref={womenRef} className="fade-section border border-wedding-copper/25 bg-wedding-cream/85 p-8 md:p-10">
          <div className="text-center mb-7">
            <p className="font-sans text-[10px] tracking-[0.4em] text-wedding-copper uppercase mb-2">Dámy</p>
            <h3 className="font-serif text-2xl md:text-3xl text-wedding-brown font-light">Romantické šaty, květy a volány</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {womenOutfits.map(o => (
              <OutfitImage
                key={o.src}
                src={o.src}
                alt={o.label}
                label={o.label}
                onOpen={() => setLightboxImage({ src: o.src, alt: o.label, caption: o.label })}
              />
            ))}
          </div>
        </div>
      </div>

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </section>
  )
}
