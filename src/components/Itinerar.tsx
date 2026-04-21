import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { LaceDivider } from './Ornaments'

type ItemProps = {
  time: string
  title: string
  note?: string
  delay?: number
}

function TimelineItem({ time, title, note, delay }: ItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  useFadeIn(ref, delay)
  return (
    <div ref={ref} className="fade-section relative pl-12 md:pl-0 md:grid md:grid-cols-[140px_24px_1fr] md:gap-6 md:items-start py-6">
      {/* Time */}
      <div className="md:text-right">
        <span className="font-serif text-2xl text-wedding-copper font-light tabular-nums">{time}</span>
      </div>

      {/* Dot + line (mobile uses absolute, desktop uses grid) */}
      <div className="absolute left-3 top-7 md:relative md:left-auto md:top-auto flex items-start justify-center">
        <div className="w-3 h-3 rounded-full bg-wedding-copper mt-2 ring-4 ring-wedding-cream" />
      </div>

      {/* Content */}
      <div>
        <h3 className="font-serif text-xl md:text-2xl text-wedding-brown font-light">{title}</h3>
        {note && (
          <p className="font-body italic text-wedding-lightbrown/80 mt-1.5" style={{ fontSize: '0.95rem' }}>
            {note}
          </p>
        )}
      </div>
    </div>
  )
}

export default function Itinerar() {
  const headingRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)

  const items: ItemProps[] = [
    { time: '11:00', title: 'Příjezd hostů' },
    { time: '12:30', title: 'Obřad' },
    { time: '13:00', title: 'Přípitek & slavnostní oběd & krájení dortu' },
    { time: '14:00', title: 'Skupinové fotografie' },
    { time: '15:00', title: 'První tanec' },
    { time: '15:30', title: 'Hraní her' },
    { time: '18:00', title: 'Tanec a zábava s DJ' },
    { time: '00:00', title: 'Konec oficiálního programu' },
  ]

  return (
    <section id="itinerar" className="py-24 md:py-32 canvas-parchment relative">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={headingRef} className="fade-section text-center mb-14">
          <p className="section-label">Program dne</p>
          <h2 className="section-title font-light">Itinerář</h2>
          <LaceDivider className="mt-4" />
          <p className="font-body text-wedding-lightbrown max-w-md mx-auto mt-4" style={{ fontSize: '1.05rem' }}>
            Aby vám nic neuteklo — tady je celý průběh pátečního dne.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line through timeline (mobile + desktop) */}
          <div className="absolute left-4 md:left-[154px] top-0 bottom-0 w-px bg-wedding-copper/20" />

          {items.map((item, i) => (
            <TimelineItem key={item.time} {...item} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}
