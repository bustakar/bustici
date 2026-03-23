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

// Small ornamental dot for timeline
const TimelineDot = () => (
  <div className="relative flex-shrink-0 flex flex-col items-center z-10">
    <div className="w-3 h-3 rounded-full bg-wedding-golden border-2 border-wedding-copper/60 shadow-[0_0_0_4px_rgba(232,168,56,0.12)]" />
  </div>
)

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
      className={`fade-section relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
        side === 'right' ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Text block */}
      <div className={`flex-1 ${side === 'right' ? 'md:text-right' : ''}`}>
        <span className="inline-block font-sans text-[10px] tracking-[0.4em] text-wedding-golden/80 mb-2 uppercase">
          {year}
        </span>
        <h3 className="font-serif text-2xl md:text-3xl text-wedding-cream font-light mb-3 leading-snug">
          {title}
        </h3>
        <p className="font-body text-wedding-peach/65 leading-relaxed" style={{ fontSize: '1.025rem' }}>
          {text}
        </p>
      </div>

      {/* Center ornament dot */}
      <TimelineDot />

      {/* Spacer (desktop) */}
      <div className="flex-1 hidden md:block" />
    </div>
  )
}

export default function OurStory() {
  const headingRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)

  return (
    <section id="story" className="py-24 md:py-36 dark-romantic relative overflow-hidden">
      {/* Subtle warm glows in dark section */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-wedding-copper/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-wedding-golden/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="fade-section text-center mb-20">
          <p className="font-sans text-[10px] tracking-[0.45em] text-wedding-golden/70 mb-5 uppercase">
            Jak to začalo
          </p>
          <h2
            className="font-serif font-light text-wedding-cream text-center mb-5"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
          >
            Náš příběh
          </h2>
          {/* Ornamental divider — light version */}
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="flex-1 h-px bg-wedding-copper/20 max-w-[100px] ml-auto" />
            <span className="font-serif italic text-wedding-golden/50 text-lg">✦</span>
            <div className="flex-1 h-px bg-wedding-copper/20 max-w-[100px]" />
          </div>
          <p className="font-body text-wedding-peach/60 max-w-md mx-auto leading-relaxed" style={{ fontSize: '1.05rem' }}>
            Každý velký příběh začíná malým okamžikem. Tady jsou ty naše.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-wedding-copper/25 to-transparent hidden md:block" />

          <div className="flex flex-col gap-16 md:gap-20">
            {timeline.map((item, i) => (
              <TimelineItem key={item.year} {...item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
