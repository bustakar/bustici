import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const hotels = [
  {
    name: 'Hotel Panorama Sedlčany',
    distance: '8 km od místa konání',
    description: 'Pohodlný hotel v centru Sedlčan s restaurací a snídaní v ceně.',
    price: 'od 1 200 Kč / noc',
    emoji: '🏨',
  },
  {
    name: 'Penzion Na Kopci',
    distance: '5 km od místa konání',
    description: 'Rodinný penzion v krásném venkovském prostředí. Ideální pro skupiny.',
    price: 'od 800 Kč / noc',
    emoji: '🏡',
  },
  {
    name: 'Glamping Posázaví',
    distance: '12 km od místa konání',
    description: 'Pro milovníky přírody — luxusní stany s postelí a vlastním sociálním zařízením.',
    price: 'od 1 500 Kč / noc',
    emoji: '⛺',
  },
]

const transportItems = [
  {
    icon: '🚌',
    title: 'Organizovaná doprava',
    text: 'Zajistíme autobus Praha → Jedraž a zpět. Odjezd v 12:00 od Vyšehradu, zpáteční spoj okolo 1:00.',
  },
  {
    icon: '🚗',
    title: 'Vlastní auto',
    text: 'Statek Jedraž je dobře dostupný po silnici E55. Na místě je dostatek parkovacích míst.',
  },
  {
    icon: '🚆',
    title: 'Vlakem',
    text: 'Nejbližší vlakové nádraží je Sedlčany. Z nádraží zajistíme kyvadlovou dopravu na místo konání.',
  },
]

function HotelCard({ hotel, delay }: { hotel: (typeof hotels)[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useFadeIn(ref, delay)
  return (
    <div
      ref={ref}
      className="fade-section bg-white/60 rounded-2xl p-6 border border-wedding-peach/30 hover:border-wedding-copper/30 transition-colors"
    >
      <div className="text-3xl mb-3">{hotel.emoji}</div>
      <h4 className="font-serif text-lg text-wedding-brown mb-1">{hotel.name}</h4>
      <p className="font-sans text-xs text-wedding-copper uppercase tracking-wide mb-3">{hotel.distance}</p>
      <p className="font-body text-wedding-lightbrown text-sm leading-relaxed mb-4">{hotel.description}</p>
      <p className="font-sans text-xs font-medium text-wedding-moss">{hotel.price}</p>
    </div>
  )
}

export default function Accommodations() {
  const headingRef = useRef<HTMLDivElement>(null)
  const transportRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)
  useFadeIn(transportRef, 300)

  return (
    <section id="travel" className="py-24 md:py-32 bg-wedding-ivory">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={headingRef} className="fade-section text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-wedding-copper mb-4">
            Logistika
          </p>
          <h2 className="section-title mb-4">Ubytování & cestování</h2>
          <div className="ornament">
            <span className="font-serif italic text-wedding-copper text-lg">♦</span>
          </div>
          <p className="font-body text-wedding-lightbrown max-w-md mx-auto">
            Vše, co potřebujete vědět pro klidný příjezd a pohodlné přenocování.
          </p>
        </div>

        <h3 className="font-serif text-2xl text-wedding-brown text-center mb-8">Ubytování v okolí</h3>
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {hotels.map((hotel, i) => (
            <HotelCard key={hotel.name} hotel={hotel} delay={i * 120} />
          ))}
        </div>

        <div className="text-center mb-16 p-5 bg-wedding-blush/20 rounded-2xl border border-wedding-blush/40">
          <p className="font-body text-wedding-lightbrown text-sm">
            💡 Ubytování si prosím rezervujte co nejdříve — kapacity v okolí jsou omezené, zejména o víkendu.
            Pro skupinové rezervace nás kontaktujte — rádi pomůžeme s koordinací.
          </p>
        </div>

        <div ref={transportRef} className="fade-section">
          <h3 className="font-serif text-2xl text-wedding-brown text-center mb-8">Jak se k nám dostanete</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {transportItems.map(item => (
              <div
                key={item.title}
                className="bg-white/50 rounded-2xl p-6 border border-wedding-peach/30 text-center"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-serif text-lg text-wedding-brown mb-2">{item.title}</h4>
                <p className="font-body text-wedding-lightbrown text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
