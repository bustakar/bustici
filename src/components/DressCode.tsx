import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { ColorSwatch, LaceDivider } from './Ornaments'

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

function OutfitImage({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <figure className="flex flex-col">
      <div className="w-full overflow-hidden bg-wedding-cream/60 border border-wedding-copper/20 aspect-[3/4]">
        <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <figcaption className="font-body italic text-wedding-brown mt-3 text-center" style={{ fontSize: '0.95rem' }}>
        {label}
      </figcaption>
    </figure>
  )
}

const menOutfits = [
  { src: '/dress-code/men-1.jpg', label: 'Lněné obleky v zemitých tónech' },
  { src: '/dress-code/men-2.jpg', label: 'Šalvějová zelená, modrá, hnědá / blush' },
  { src: '/dress-code/men-3.jpg', label: 'Beach garden — světlý len, košile bez kravaty' },
]

const womenOutfits = [
  { src: '/dress-code/women-1.jpg', label: 'Pastelové vrstvené šaty (sage, dusty modrá, peach, butter)' },
  { src: '/dress-code/women-2.jpg', label: 'Romantické střihy v paletě (květinové vzory vítány)' },
  { src: '/dress-code/women-3.jpg', label: 'Mismatch styl — nemusíte se domlouvat, jen barvy' },
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

  return (
    <section id="dress-code" className="py-24 md:py-32 canvas-apricot relative">
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
            <h3 className="font-serif text-2xl md:text-3xl text-wedding-brown font-light">Lněný oblek, garden formal</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-8">
            {menOutfits.map(o => (
              <OutfitImage key={o.src} src={o.src} alt={o.label} label={o.label} />
            ))}
          </div>

          <ul className="space-y-2 font-body text-wedding-brown max-w-2xl mx-auto" style={{ fontSize: '1rem' }}>
            <li>· Lněný nebo lehký vlněný oblek</li>
            <li>· Bílá nebo světlá košile, kravata či motýlek volitelné</li>
            <li>· Hnědé nebo světlé kožené boty (žádné tenisky)</li>
            <li>· Klidně bez sáčka po obřadu — venkovní oslava</li>
          </ul>
        </div>

        {/* Dámy */}
        <div ref={womenRef} className="fade-section border border-wedding-copper/25 bg-wedding-cream/85 p-8 md:p-10">
          <div className="text-center mb-7">
            <p className="font-sans text-[10px] tracking-[0.4em] text-wedding-copper uppercase mb-2">Dámy</p>
            <h3 className="font-serif text-2xl md:text-3xl text-wedding-brown font-light">Romantické šaty, plynoucí střih</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-8">
            {womenOutfits.map(o => (
              <OutfitImage key={o.src} src={o.src} alt={o.label} label={o.label} />
            ))}
          </div>

          <ul className="space-y-2 font-body text-wedding-brown max-w-2xl mx-auto" style={{ fontSize: '1rem' }}>
            <li>· Šaty délky midi nebo maxi, klidně volánové či vrstvené</li>
            <li>· Lehčí materiály: šifon, len, bavlna, hedvábí</li>
            <li>· Květinové vzory vítány</li>
            <li>· Pohodlné boty — část oslavy je na trávě</li>
            <li>· Pamatujte na lehkou bundu nebo šál pro pozdní večer</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
