import { useRef, useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { LaceDivider } from './Ornaments'

const faqs = [
  {
    q: 'Kdy mám přijet?',
    a: 'Obřad začíná ve 14:00, ale doporučujeme dorazit alespoň 30 minut předem — abyste si dali welcome drink, popovídali a v klidu se posadili.',
  },
  {
    q: 'Můžu na statku přespat?',
    a: 'Ano. Statek Jedraž má omezený počet pokojů přímo v areálu — pokud máte zájem, dejte nám vědět co nejdřív v dotazníku níže a my vám rezervujeme pokoj. Cena cca 1 200 Kč / osoba / noc. V okolí je také několik penzionů a Airbnb (Sedlčany, Krásná Hora, Sedlec-Prčice).',
  },
  {
    q: 'Jsou vítány děti?',
    a: 'S láskou vás zveme bez dětí — máme rádi vaše ratolesti, ale chceme, aby si vy i my mohli den užít naplno. Pokud potřebujete pomoct s hlídáním, rádi vám doporučíme možnosti v okolí.',
  },
  {
    q: 'Jak je to s parkováním?',
    a: 'Přímo v areálu statku je parkoviště zdarma. Upozorňujeme: alkohol a auto nejdou dohromady. Doporučujeme buď přespat, nebo si zajistit odvoz / řidiče.',
  },
  {
    q: 'Kde se obřad odehrává — venku, nebo uvnitř?',
    a: 'Plánujeme obřad pod hruškou na zahradě. Pokud bude pršet, přesouváme se do historického sálu statku. Plán B je stejně krásný, slibujeme.',
  },
  {
    q: 'Co když mám alergii nebo jsem vegan?',
    a: 'Veganská varianta je k dispozici u všech chodů a alergie zvládneme. Stačí to napsat v dotazníku níže — necháme to vědět catering.',
  },
  {
    q: 'Jaký je dress code?',
    a: 'Garden formal v naší barevné paletě (viz sekce Dress code výše). Vyhněte se prosím bílé a krémové — ty si necháme pro nevěstu.',
  },
  {
    q: 'Do kdy mám potvrdit účast?',
    a: 'Prosíme do 30. dubna 2026 — díky tomu doladíme catering, usazení a počet pokojů.',
  },
  {
    q: 'Koho můžu kontaktovat?',
    a: 'Pokud něco nevíte, napište nám e-mail na wedding@bustici.cz nebo zavolejte. Rádi pomůžeme.',
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useFadeIn(ref, index * 50)

  return (
    <div ref={ref} className="fade-section border-b border-wedding-peach/35 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-5 py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="font-body text-wedding-brown group-hover:text-wedding-copper transition-colors leading-snug"
          style={{ fontSize: '1.05rem' }}
        >
          {q}
        </span>
        <span
          className={`flex-shrink-0 mt-0.5 w-7 h-7 rounded-full border border-wedding-copper/35 flex items-center justify-center text-wedding-copper transition-all duration-300 ${
            open ? 'bg-wedding-copper border-wedding-copper' : 'bg-transparent'
          }`}
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 10 10"
            fill="none"
            className={`transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          >
            <path d="M5 1v8M1 5h8" stroke={open ? '#FFF8F0' : 'currentColor'} strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="font-body text-wedding-lightbrown leading-relaxed" style={{ fontSize: '1rem' }}>
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const headingRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)

  return (
    <section id="faq" className="py-24 md:py-32 canvas-parchment relative">
      <div className="max-w-2xl mx-auto px-6">
        <div ref={headingRef} className="fade-section text-center mb-12">
          <p className="section-label">Máte otázky?</p>
          <h2 className="section-title font-light">Časté dotazy</h2>
          <LaceDivider className="mt-4" />
        </div>

        <div
          className="p-6 md:p-8 border border-wedding-peach/40"
          style={{ background: 'rgba(255,248,240,0.85)' }}
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="font-body text-wedding-lightbrown mb-4" style={{ fontSize: '1rem' }}>
            Nenašli jste odpověď?
          </p>
          <a href="mailto:wedding@bustici.cz" className="btn-outline inline-flex">
            Napište nám
          </a>
        </div>
      </div>
    </section>
  )
}
