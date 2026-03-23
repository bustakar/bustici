import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const timeline: Array<{ year: string; title: string; text: string; side: 'left' | 'right' }> = [
  {
    year: '2018',
    title: 'První setkání',
    text: 'Osud nás svedl dohromady na jedné podzimní večerní akci v Praze. Karel přinesl víno, Kateřina přinesla úsměv, který ho okamžitě uchvátil. Říká se, že láska na první pohled neexistuje — my jsme o tom přesvědčeni, že existuje.',
    side: 'left',
  },
  {
    year: '2019',
    title: 'První výlet spolu',
    text: 'Benátky v únoru — chladné, ale kouzelné. Ztratili jsme se v uličkách u Canal Grande, snědli jsme nejlepší gelato v životě a uvědomili si, že chceme být ztraceni spolu navždy.',
    side: 'right',
  },
  {
    year: '2021',
    title: 'Společný domov',
    text: 'Po letech přemlouvání a hledání jsme konečně našli byt v Praze, který byl pro oba z nás domovem. První věc, kterou jsme spolu postavili, byl poliční systém z IKEA — a zvládli jsme to bez jediného hádky.',
    side: 'left',
  },
  {
    year: '2024',
    title: 'Zásnuby',
    text: 'Karel poklekl za úsvitu na vrcholu Řípu s prstenem v kapse a třesoucíma rukama. Kateřina řekla ano dříve, než dokončil větu. Bylo to dokonalé.',
    side: 'right',
  },
  {
    year: '2026',
    title: 'Náš velký den',
    text: 'A teď nás čeká ten největší den. Rádi bychom jej strávili s těmi, kteří jsou nám nejdražší — s vámi.',
    side: 'left',
  },
]

function TimelineItem({
  year,
  title,
  text,
  side,
  index,
}: {
  year: string
  title: string
  text: string
  side: 'left' | 'right'
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  useFadeIn(ref, index * 150)

  return (
    <div
      ref={ref}
      className={`fade-section relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
        side === 'right' ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Text */}
      <div className={`flex-1 ${side === 'right' ? 'md:text-right' : ''}`}>
        <span className="inline-block font-sans text-xs uppercase tracking-widest text-wedding-copper mb-2">
          {year}
        </span>
        <h3 className="font-serif text-2xl md:text-3xl text-wedding-brown mb-3">{title}</h3>
        <p className="font-body text-wedding-lightbrown leading-relaxed">{text}</p>
      </div>

      {/* Centre dot */}
      <div className="relative flex-shrink-0 flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-wedding-copper border-4 border-wedding-cream shadow-sm z-10" />
        {/* vertical line is rendered via CSS on the container */}
      </div>

      {/* Empty spacer */}
      <div className="flex-1 hidden md:block" />
    </div>
  )
}

export default function OurStory() {
  const headingRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)

  return (
    <section id="story" className="py-24 md:py-32 bg-wedding-ivory">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="fade-section text-center mb-20">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-wedding-copper mb-4">
            Jak to začalo
          </p>
          <h2 className="section-title mb-4">Náš příběh</h2>
          <div className="ornament">
            <span className="font-serif italic text-wedding-copper text-lg">♦</span>
          </div>
          <p className="font-body text-wedding-lightbrown max-w-lg mx-auto leading-relaxed">
            Každý velký příběh začíná malým okamžikem. Tady jsou ty naše.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-wedding-peach hidden md:block" />

          <div className="flex flex-col gap-16">
            {timeline.map((item, i) => (
              <TimelineItem key={item.year} {...item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
