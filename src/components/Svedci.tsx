import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { LaceDivider } from './Ornaments'

type Witness = {
  role: string
  name: string
  note?: string
}

const witnesses: Witness[] = [
  {
    role: 'Za nevěstu',
    name: 'Terezka Koloušková',
  },
  {
    role: 'Za ženicha',
    name: 'Jakub Kanděra',
  },
]

function WitnessCard({ witness, delay }: { witness: Witness; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useFadeIn(ref, delay)

  return (
    <div
      ref={ref}
      className="fade-section border border-wedding-copper/30 bg-wedding-cream/85 p-8 md:p-10 flex flex-col items-center text-center"
    >
      <p className="font-sans text-[10px] tracking-[0.4em] text-wedding-copper uppercase mb-3">
        {witness.role}
      </p>
      <h3 className="font-serif text-2xl md:text-3xl text-wedding-brown font-light">
        {witness.name}
      </h3>
      {witness.note && (
        <p className="font-body italic text-wedding-lightbrown/80 mt-3" style={{ fontSize: '0.95rem' }}>
          {witness.note}
        </p>
      )}
    </div>
  )
}

export default function Svedci() {
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)
  useFadeIn(cardsRef, 200)

  return (
    <section id="svedci" className="py-24 md:py-32 canvas-ivory relative">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={headingRef} className="fade-section text-center mb-12">
          <p className="section-label">Ti, kteří nás provedou dnem</p>
          <h2 className="section-title font-light">Svědci</h2>
          <LaceDivider className="mt-4" />
          <p className="font-body text-wedding-lightbrown max-w-md mx-auto mt-5" style={{ fontSize: '1.075rem' }}>
            Kdybyste cokoli potřebovali — ať už v den svatby, nebo před ní —
            neváhejte se na ně obrátit.
          </p>
        </div>

        <div ref={cardsRef} className="fade-section">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {witnesses.map((w, i) => (
              <WitnessCard key={w.name} witness={w} delay={80 + i * 60} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
