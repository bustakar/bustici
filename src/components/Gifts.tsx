import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { LaceDivider } from './Ornaments'

const EnvelopeIcon = () => (
  <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
    <rect x="6" y="14" width="52" height="38" rx="3" stroke="#B87333" strokeWidth="1.4" strokeOpacity="0.9" fill="none" />
    <path d="M 6 16 L 32 36 L 58 16" stroke="#B87333" strokeWidth="1.4" strokeOpacity="0.85" fill="none" />
    <path d="M 6 50 L 24 32 M 58 50 L 40 32" stroke="#B87333" strokeWidth="0.9" strokeOpacity="0.4" fill="none" />
    {/* Heart wax seal */}
    <path d="M 32 41 C 30 39 27 39 27 42 C 27 44 32 46 32 46 C 32 46 37 44 37 42 C 37 39 34 39 32 41 Z"
      fill="#C46A4F" fillOpacity="0.85" />
  </svg>
)

export default function Gifts() {
  const headingRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)
  useFadeIn(cardRef, 200)

  // Placeholder bank details — to be replaced with real ones
  const accountNumber = '123456789/0100'
  const iban = 'CZ65 0100 0000 0001 2345 6789'

  return (
    <section id="dary" className="py-24 md:py-32 canvas-ivory relative">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={headingRef} className="fade-section text-center mb-12">
          <p className="section-label">Pokud chcete přispět</p>
          <h2 className="section-title font-light">Svatební dary</h2>
          <LaceDivider className="mt-4" />
          <p className="font-body text-wedding-lightbrown max-w-xl mx-auto mt-5" style={{ fontSize: '1.075rem' }}>
            Vaše přítomnost je pro nás největším darem.
            Pokud nás přesto chcete obdarovat, prosíme o příspěvek do svatební obálky —
            ušetříte sobě i nám starosti s balením a my použijeme každou korunu
            na zařízení nového domova a líbánky.
          </p>
        </div>

        <div ref={cardRef} className="fade-section">
          <div className="border border-wedding-copper/30 bg-wedding-cream/85 p-10 text-center">
            <div className="flex justify-center mb-6">
              <EnvelopeIcon />
            </div>

            <h3 className="font-serif text-2xl text-wedding-brown font-light mb-2">Bankovní převod</h3>
            <p className="font-body italic text-wedding-lightbrown/80 mb-8" style={{ fontSize: '0.95rem' }}>
              Nebo klasická obálka v den svatby — jak je vám libo.
            </p>

            <div className="space-y-5">
              <div>
                <p className="font-sans text-[10px] tracking-[0.4em] text-wedding-copper uppercase mb-1">Číslo účtu</p>
                <p className="font-serif text-2xl text-wedding-brown tabular-nums">{accountNumber}</p>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-[0.4em] text-wedding-copper uppercase mb-1">IBAN</p>
                <p className="font-serif text-lg text-wedding-brown tabular-nums">{iban}</p>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-[0.4em] text-wedding-copper uppercase mb-1">Zpráva pro příjemce</p>
                <p className="font-serif text-lg text-wedding-brown italic">Svatba Kateřina &amp; Karel</p>
              </div>
            </div>
          </div>

          <p className="font-body italic text-wedding-lightbrown/60 text-center mt-8" style={{ fontSize: '0.9rem' }}>
            Děkujeme z celého srdce.
          </p>
        </div>
      </div>
    </section>
  )
}
