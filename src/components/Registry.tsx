import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const registryItems = [
  {
    icon: 'plane',
    title: 'Líbánky',
    description:
      'Největší dar, který nám můžete dát, je příspěvek na naše líbánkové dobrodružství. Sníme o Japonsku na podzim 2026.',
    cta: 'Přispět na cestu',
    href: '#',
    highlight: true,
  },
  {
    icon: 'home',
    title: 'Náš nový domov',
    description:
      'Brzy se chystáme do většího bytu. Jakýkoliv příspěvek na vybavení domácnosti nám moc pomůže.',
    cta: 'Přispět na bydlení',
    href: '#',
    highlight: false,
  },
  {
    icon: 'gift',
    title: 'Klasický seznam',
    description:
      'Pokud preferujete tradiční dary, náš seznam přání obsahuje vše od kuchyňského nádobí po dekorace.',
    cta: 'Zobrazit seznam',
    href: '#',
    highlight: false,
  },
]

// SVG plane
const PlaneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      d="M 28 4 L 14 18 M 28 4 L 20 28 L 14 18 L 4 20 L 14 18"
      stroke="#B87333"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.85"
      fill="none"
    />
    <path d="M 28 4 L 4 20" stroke="#B87333" strokeWidth="0.8" strokeOpacity="0.3" strokeLinecap="round" />
  </svg>
)

// SVG home
const HomeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      d="M 4 16 L 16 5 L 28 16"
      stroke="#B87333"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.85"
      fill="none"
    />
    <path
      d="M 7 13.5 L 7 27 L 25 27 L 25 13.5"
      stroke="#B87333"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.85"
      fill="none"
    />
    <rect x="13" y="20" width="6" height="7" rx="1" stroke="#B87333" strokeWidth="1.1" strokeOpacity="0.5" fill="none" />
    <rect x="8" y="16" width="4.5" height="4.5" rx="0.5" fill="#B87333" fillOpacity="0.18" />
    <rect x="19.5" y="16" width="4.5" height="4.5" rx="0.5" fill="#B87333" fillOpacity="0.18" />
  </svg>
)

// SVG gift
const GiftIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="4" y="14" width="24" height="14" rx="1.5" stroke="#B87333" strokeWidth="1.4" strokeOpacity="0.85" fill="none" />
    <rect x="7" y="10" width="18" height="6" rx="1" stroke="#B87333" strokeWidth="1.2" strokeOpacity="0.7" fill="none" />
    <line x1="16" y1="10" x2="16" y2="28" stroke="#B87333" strokeWidth="1" strokeOpacity="0.4" />
    {/* Bow */}
    <path d="M 16 10 C 12 8 10 4 13 4 C 15 4 16 7 16 10 C 16 10 17 7 19 4 C 22 4 20 8 16 10" stroke="#B87333" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.7" fill="none" />
  </svg>
)

const iconComponents: Record<string, React.ReactNode> = {
  plane: <PlaneIcon />,
  home: <HomeIcon />,
  gift: <GiftIcon />,
}

function RegistryCard({
  item,
  delay,
}: {
  item: (typeof registryItems)[0]
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  useFadeIn(ref, delay)

  return (
    <div
      ref={ref}
      className={`fade-section rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-warm-lg ${
        item.highlight
          ? 'border-wedding-copper/25'
          : 'border-wedding-peach/25'
      }`}
      style={{
        background: item.highlight
          ? 'linear-gradient(145deg, rgba(232,168,56,0.08) 0%, rgba(184,115,51,0.06) 100%)'
          : 'linear-gradient(145deg, rgba(255,248,240,0.65) 0%, rgba(250,240,230,0.5) 100%)',
      }}
    >
      <div className="mb-5">{iconComponents[item.icon]}</div>
      <h3 className="font-serif text-xl text-wedding-brown mb-3 font-normal">{item.title}</h3>
      <p className="font-body text-wedding-lightbrown leading-relaxed mb-6" style={{ fontSize: '0.975rem' }}>
        {item.description}
      </p>
      <a
        href={item.href}
        className={`inline-flex font-sans text-[10px] tracking-[0.3em] uppercase px-5 py-2.5 rounded-full transition-colors ${
          item.highlight
            ? 'bg-wedding-copper text-wedding-cream hover:bg-wedding-brown'
            : 'border border-wedding-copper text-wedding-copper hover:bg-wedding-copper hover:text-wedding-cream'
        }`}
      >
        {item.cta}
      </a>
    </div>
  )
}

export default function Registry() {
  const headingRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)

  return (
    <section id="registry" className="py-24 md:py-36 parchment-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={headingRef} className="fade-section text-center mb-16">
          <p className="section-label">Dary</p>
          <h2 className="section-title mb-4 font-light">Svatební registry</h2>
          <div className="ornament">
            <span className="font-serif italic text-wedding-copper/60 text-lg">✦</span>
          </div>
          <p className="font-body text-wedding-lightbrown max-w-md mx-auto" style={{ fontSize: '1.025rem' }}>
            Vaše přítomnost je pro nás největším darem. Pokud přesto chcete přispět,
            zde jsou naše přání.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {registryItems.map((item, i) => (
            <RegistryCard key={item.title} item={item} delay={i * 150} />
          ))}
        </div>

        <p className="font-body italic text-wedding-lightbrown/50 text-center mt-10" style={{ fontSize: '0.925rem' }}>
          Bankovní spojení a další detaily rádi sdělíme osobně nebo na požádání.
        </p>
      </div>
    </section>
  )
}
