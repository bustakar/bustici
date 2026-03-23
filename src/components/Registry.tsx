import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const registryItems = [
  {
    icon: '✈️',
    title: 'Líbánky',
    description:
      'Největší dar, který nám můžete dát, je příspěvek na naše líbánkové dobrodružství. Sníme o Japonsku na podzim 2026.',
    cta: 'Přispět na cestu',
    href: '#',
    highlight: true,
  },
  {
    icon: '🏡',
    title: 'Náš nový domov',
    description:
      'Brzy se chystáme do většího bytu. Jakýkoliv příspěvek na vybavení domácnosti nám moc pomůže.',
    cta: 'Přispět na bydlení',
    href: '#',
    highlight: false,
  },
  {
    icon: '🎁',
    title: 'Klasický seznam',
    description:
      'Pokud preferujete tradiční dary, náš seznam přání najdete na Registru darů. Obsahuje vše od kuchyňského nádobí po dekorace.',
    cta: 'Zobrazit seznam',
    href: '#',
    highlight: false,
  },
]

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
      className={`fade-section rounded-2xl p-8 border transition-all hover:-translate-y-1 hover:shadow-lg duration-300 ${
        item.highlight
          ? 'bg-wedding-copper/10 border-wedding-copper/30'
          : 'bg-white/50 border-wedding-peach/30'
      }`}
    >
      <div className="text-4xl mb-4">{item.icon}</div>
      <h3 className="font-serif text-xl text-wedding-brown mb-3">{item.title}</h3>
      <p className="font-body text-wedding-lightbrown text-sm leading-relaxed mb-6">
        {item.description}
      </p>
      <a
        href={item.href}
        className={`inline-flex font-sans text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-colors ${
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
    <section id="registry" className="py-24 md:py-32 bg-wedding-cream">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={headingRef} className="fade-section text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-wedding-copper mb-4">Dary</p>
          <h2 className="section-title mb-4">Svatební registry</h2>
          <div className="ornament">
            <span className="font-serif italic text-wedding-copper text-lg">♦</span>
          </div>
          <p className="font-body text-wedding-lightbrown max-w-md mx-auto">
            Vaše přítomnost je pro nás největším darem. Pokud přesto chcete přispět, zde jsou naše přání.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {registryItems.map((item, i) => (
            <RegistryCard key={item.title} item={item} delay={i * 150} />
          ))}
        </div>

        <p className="font-body italic text-wedding-lightbrown/70 text-sm text-center mt-10">
          Bankovní spojení a další detaily rádi sdělíme osobně nebo na požádání.
        </p>
      </div>
    </section>
  )
}
