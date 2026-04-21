import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { LaceDivider } from './Ornaments'

type Room = {
  name: string
  beds: number
  guests?: string[]
  note?: string
}

// TODO: Upravit podle skutečného rozpisu pokojů ve Statku Jedraž (34 lůžek celkem).
// Struktura je jen orientační — počty lůžek a názvy pokojů doplníme dle reality.
const rooms: Room[] = [
  { name: 'Apartmá — hlavní budova', beds: 6 },
  { name: 'Pokoj 1 — hlavní budova', beds: 4 },
  { name: 'Pokoj 2 — hlavní budova', beds: 4 },
  { name: 'Pokoj 3 — hlavní budova', beds: 4 },
  { name: 'Pokoj 4 — podkroví', beds: 4 },
  { name: 'Pokoj 5 — podkroví', beds: 4 },
  { name: 'Pokoj 6 — stodola', beds: 2 },
  { name: 'Pokoj 7 — stodola', beds: 2 },
  { name: 'Pokoj 8 — stodola', beds: 2 },
  { name: 'Pokoj 9 — stodola', beds: 2 },
]

function bedLabel(n: number) {
  if (n === 1) return 'lůžko'
  if (n >= 2 && n <= 4) return 'lůžka'
  return 'lůžek'
}

function GuestsCell({ guests }: { guests: Room['guests'] }) {
  if (guests && guests.length > 0) {
    return (
      <span className="font-body text-wedding-brown" style={{ fontSize: '0.95rem' }}>
        {guests.join(', ')}
      </span>
    )
  }
  return (
    <span className="font-body italic text-wedding-lightbrown/60" style={{ fontSize: '0.9rem' }}>
      Brzy doplníme
    </span>
  )
}

export default function Ubytovani() {
  const headingRef = useRef<HTMLDivElement>(null)
  const tableRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)
  useFadeIn(tableRef, 200)

  const totalBeds = rooms.reduce((sum, r) => sum + r.beds, 0)

  return (
    <section id="ubytovani" className="py-24 md:py-32 canvas-parchment relative">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={headingRef} className="fade-section text-center mb-12">
          <p className="section-label">Kde složíte hlavu</p>
          <h2 className="section-title font-light">Ubytování</h2>
          <LaceDivider className="mt-4" />
          <p className="font-body text-wedding-brown max-w-xl mx-auto mt-5" style={{ fontSize: '1.075rem' }}>
            Přímo na Statku Jedraž je k dispozici {totalBeds} lůžek.
            Abychom všem zajistili místo, připravili jsme orientační rozdělení pokojů.
          </p>
          <p className="font-body italic text-wedding-brown/80 mt-3" style={{ fontSize: '0.95rem' }}>
            Pokud by vám něco nesedělo, dejte nám vědět — rádi to přehodíme.
          </p>
        </div>

        <div ref={tableRef} className="fade-section">
          <div className="border border-wedding-copper/30 bg-wedding-cream/85 overflow-hidden">
            {/* Header — desktop only */}
            <div
              className="hidden md:grid gap-6 px-6 py-4 border-b border-wedding-copper/30 bg-wedding-cream/50"
              style={{ gridTemplateColumns: '1.4fr 90px 2.2fr' }}
            >
              <p className="font-sans text-[10px] tracking-[0.4em] text-wedding-copper uppercase">
                Pokoj
              </p>
              <p className="font-sans text-[10px] tracking-[0.4em] text-wedding-copper uppercase text-center">
                Lůžka
              </p>
              <p className="font-sans text-[10px] tracking-[0.4em] text-wedding-copper uppercase">
                Hosté
              </p>
            </div>

            {/* Rows */}
            {rooms.map(r => (
              <div
                key={r.name}
                className="md:grid gap-6 px-6 py-4 border-b border-wedding-copper/15 last:border-b-0 md:items-baseline"
                style={{ gridTemplateColumns: '1.4fr 90px 2.2fr' }}
              >
                {/* Place */}
                <div className="flex items-baseline gap-3 md:block">
                  <p className="md:hidden font-sans text-[10px] tracking-[0.4em] text-wedding-copper uppercase min-w-[56px] flex-shrink-0">
                    Pokoj
                  </p>
                  <p className="font-serif text-lg text-wedding-brown font-light leading-tight">
                    {r.name}
                  </p>
                </div>

                {/* Beds */}
                <div className="flex items-baseline gap-3 md:block md:text-center mt-2 md:mt-0">
                  <p className="md:hidden font-sans text-[10px] tracking-[0.4em] text-wedding-copper uppercase min-w-[56px] flex-shrink-0">
                    Lůžka
                  </p>
                  <p className="font-serif text-base text-wedding-brown tabular-nums">
                    {r.beds}
                  </p>
                </div>

                {/* Guests */}
                <div className="flex items-baseline gap-3 md:block mt-2 md:mt-0">
                  <p className="md:hidden font-sans text-[10px] tracking-[0.4em] text-wedding-copper uppercase min-w-[56px] flex-shrink-0">
                    Hosté
                  </p>
                  <GuestsCell guests={r.guests} />
                </div>
              </div>
            ))}

            {/* Total footer */}
            <div
              className="md:grid gap-6 px-6 py-4 border-t border-wedding-copper/30 bg-wedding-cream/50"
              style={{ gridTemplateColumns: '1.4fr 90px 2.2fr' }}
            >
              <p className="font-sans text-[10px] tracking-[0.4em] text-wedding-copper uppercase">
                Celkem
              </p>
              <p className="font-serif text-base text-wedding-brown tabular-nums md:text-center mt-1 md:mt-0">
                {totalBeds} {bedLabel(totalBeds)}
              </p>
              <p className="hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
