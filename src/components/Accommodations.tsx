import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const hotels = [
  {
    name: 'Hotel Panorama Sedlčany',
    distance: '8 km od místa konání',
    description: 'Pohodlný hotel v centru Sedlčan s restaurací a snídaní v ceně.',
    price: 'od 1 200 Kč / noc',
    icon: 'hotel',
  },
  {
    name: 'Penzion Na Kopci',
    distance: '5 km od místa konání',
    description: 'Rodinný penzion v krásném venkovském prostředí. Ideální pro skupiny.',
    price: 'od 800 Kč / noc',
    icon: 'house',
  },
  {
    name: 'Glamping Posázaví',
    distance: '12 km od místa konání',
    description: 'Pro milovníky přírody — luxusní stany s postelí a vlastním sociálním zařízením.',
    price: 'od 1 500 Kč / noc',
    icon: 'tent',
  },
]

const transportItems = [
  {
    icon: 'bus',
    title: 'Organizovaná doprava',
    text: 'Zajistíme autobus Praha → Jedraž a zpět. Odjezd v 12:00 od Vyšehradu, zpáteční spoj okolo 1:00.',
  },
  {
    icon: 'car',
    title: 'Vlastní auto',
    text: 'Statek Jedraž je dobře dostupný po silnici E55. Na místě je dostatek parkovacích míst.',
  },
  {
    icon: 'train',
    title: 'Vlakem',
    text: 'Nejbližší vlakové nádraží je Sedlčany. Z nádraží zajistíme kyvadlovou dopravu na místo konání.',
  },
]

// SVG icons for accommodations
const HotelIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="3" y="10" width="22" height="16" rx="1" stroke="#B87333" strokeWidth="1.2" strokeOpacity="0.7" fill="none" />
    <path d="M 1 10 L 14 3 L 27 10" stroke="#B87333" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.7" fill="none" />
    <rect x="10" y="18" width="8" height="8" rx="1" stroke="#B87333" strokeWidth="1" strokeOpacity="0.5" fill="none" />
    <rect x="5" y="13" width="4" height="4" rx="0.5" fill="#B87333" fillOpacity="0.2" />
    <rect x="19" y="13" width="4" height="4" rx="0.5" fill="#B87333" fillOpacity="0.2" />
  </svg>
)

const HouseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M 2 14 L 14 4 L 26 14" stroke="#B87333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" fill="none" />
    <path d="M 5 12 L 5 25 L 23 25 L 23 12" stroke="#B87333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" fill="none" />
    <rect x="11" y="18" width="6" height="7" rx="1" stroke="#B87333" strokeWidth="1" strokeOpacity="0.5" fill="none" />
    <rect x="7" y="15" width="4" height="4" rx="0.5" fill="#B87333" fillOpacity="0.2" />
    <rect x="17" y="15" width="4" height="4" rx="0.5" fill="#B87333" fillOpacity="0.2" />
  </svg>
)

const TentIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M 14 4 L 2 24 L 26 24 Z" stroke="#B87333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" fill="none" />
    <path d="M 14 4 L 14 24" stroke="#B87333" strokeWidth="0.8" strokeOpacity="0.3" />
    <path d="M 10 24 L 14 12 L 18 24" stroke="#B87333" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M 4 24 L 24 24" stroke="#8A9A5B" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
    <circle cx="14" cy="4" r="1.5" fill="#B87333" fillOpacity="0.4" />
  </svg>
)

const BusIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="3" y="6" width="22" height="16" rx="2" stroke="#B87333" strokeWidth="1.2" strokeOpacity="0.7" fill="none" />
    <line x1="3" y1="14" x2="25" y2="14" stroke="#B87333" strokeWidth="0.8" strokeOpacity="0.35" />
    <circle cx="8" cy="25" r="2.5" stroke="#B87333" strokeWidth="1.1" strokeOpacity="0.6" fill="none" />
    <circle cx="20" cy="25" r="2.5" stroke="#B87333" strokeWidth="1.1" strokeOpacity="0.6" fill="none" />
    <rect x="6" y="9" width="5" height="4" rx="0.5" fill="#B87333" fillOpacity="0.2" />
    <rect x="17" y="9" width="5" height="4" rx="0.5" fill="#B87333" fillOpacity="0.2" />
    <line x1="25" y1="10" x2="25" y2="18" stroke="#B87333" strokeWidth="1.2" strokeOpacity="0.4" strokeLinecap="round" />
  </svg>
)

const CarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M 5 16 L 8 9 L 20 9 L 23 16 L 23 21 L 5 21 Z" stroke="#B87333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" fill="none" />
    <rect x="9" y="11" width="10" height="5" rx="1" fill="#B87333" fillOpacity="0.15" />
    <circle cx="9" cy="22.5" r="2.5" stroke="#B87333" strokeWidth="1.1" strokeOpacity="0.6" fill="none" />
    <circle cx="19" cy="22.5" r="2.5" stroke="#B87333" strokeWidth="1.1" strokeOpacity="0.6" fill="none" />
    <line x1="1" y1="16" x2="5" y2="16" stroke="#B87333" strokeWidth="1.2" strokeOpacity="0.4" strokeLinecap="round" />
    <line x1="23" y1="16" x2="27" y2="16" stroke="#B87333" strokeWidth="1.2" strokeOpacity="0.4" strokeLinecap="round" />
  </svg>
)

const TrainIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="6" y="4" width="16" height="18" rx="3" stroke="#B87333" strokeWidth="1.2" strokeOpacity="0.7" fill="none" />
    <line x1="6" y1="14" x2="22" y2="14" stroke="#B87333" strokeWidth="0.8" strokeOpacity="0.35" />
    <circle cx="10" cy="10" r="2" fill="#B87333" fillOpacity="0.2" />
    <circle cx="18" cy="10" r="2" fill="#B87333" fillOpacity="0.2" />
    <rect x="11" y="16" width="6" height="3.5" rx="0.5" fill="#B87333" fillOpacity="0.15" />
    <circle cx="9" cy="24.5" r="2" stroke="#B87333" strokeWidth="1" strokeOpacity="0.6" fill="none" />
    <circle cx="19" cy="24.5" r="2" stroke="#B87333" strokeWidth="1" strokeOpacity="0.6" fill="none" />
    <path d="M 9 22.5 L 4 26" stroke="#B87333" strokeWidth="0.9" strokeOpacity="0.4" strokeLinecap="round" />
    <path d="M 19 22.5 L 24 26" stroke="#B87333" strokeWidth="0.9" strokeOpacity="0.4" strokeLinecap="round" />
  </svg>
)

const iconComponents: Record<string, React.ReactNode> = {
  hotel: <HotelIcon />,
  house: <HouseIcon />,
  tent: <TentIcon />,
  bus: <BusIcon />,
  car: <CarIcon />,
  train: <TrainIcon />,
}

function HotelCard({ hotel, delay }: { hotel: (typeof hotels)[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useFadeIn(ref, delay)
  return (
    <div
      ref={ref}
      className="fade-section warm-card p-6"
    >
      <div className="mb-4">{iconComponents[hotel.icon]}</div>
      <h4 className="font-serif text-lg text-wedding-brown mb-1 font-normal">{hotel.name}</h4>
      <p className="font-sans text-[10px] text-wedding-copper tracking-[0.3em] uppercase mb-3">{hotel.distance}</p>
      <p className="font-body text-wedding-lightbrown leading-relaxed mb-4" style={{ fontSize: '0.95rem' }}>
        {hotel.description}
      </p>
      <p className="font-sans text-[10px] tracking-[0.2em] text-wedding-moss uppercase">{hotel.price}</p>
    </div>
  )
}

export default function Accommodations() {
  const headingRef = useRef<HTMLDivElement>(null)
  const transportRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)
  useFadeIn(transportRef, 300)

  return (
    <section id="travel" className="py-24 md:py-36 bg-wedding-ivory">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={headingRef} className="fade-section text-center mb-16">
          <p className="section-label">Logistika</p>
          <h2 className="section-title mb-4 font-light">Ubytování & cestování</h2>
          <div className="ornament">
            <span className="font-serif italic text-wedding-copper/60 text-lg">✦</span>
          </div>
          <p className="font-body text-wedding-lightbrown max-w-md mx-auto" style={{ fontSize: '1.025rem' }}>
            Vše, co potřebujete vědět pro klidný příjezd a pohodlné přenocování.
          </p>
        </div>

        <h3 className="font-serif text-2xl text-wedding-brown text-center mb-8 font-light">Ubytování v okolí</h3>
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {hotels.map((hotel, i) => (
            <HotelCard key={hotel.name} hotel={hotel} delay={i * 120} />
          ))}
        </div>

        {/* Tip banner */}
        <div className="text-center mb-16 p-6 rounded-2xl border border-wedding-misty/30"
          style={{ background: 'rgba(176,196,222,0.1)' }}
        >
          <p className="font-body text-wedding-lightbrown" style={{ fontSize: '0.95rem' }}>
            <span className="font-sans text-[10px] tracking-[0.3em] text-wedding-copper uppercase mr-2">Tip</span>
            Ubytování si prosím rezervujte co nejdříve — kapacity v okolí jsou omezené,
            zejména o víkendu. Pro skupinové rezervace nás kontaktujte.
          </p>
        </div>

        {/* Transport */}
        <div ref={transportRef} className="fade-section">
          <h3 className="font-serif text-2xl text-wedding-brown text-center mb-8 font-light">Jak se k nám dostanete</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {transportItems.map(item => (
              <div
                key={item.title}
                className="warm-card p-6 text-center"
              >
                <div className="flex justify-center mb-4">{iconComponents[item.icon]}</div>
                <h4 className="font-serif text-lg text-wedding-brown mb-2 font-normal">{item.title}</h4>
                <p className="font-body text-wedding-lightbrown leading-relaxed" style={{ fontSize: '0.95rem' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
