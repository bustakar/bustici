import { useRef, useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const faqs = [
  {
    q: 'Do kdy musím potvrdit účast?',
    a: 'Prosíme o potvrzení účasti nejpozději do 30. dubna 2026, abychom mohli doladit catering a usazení hostů. Čím dříve, tím lépe!',
  },
  {
    q: 'Mohu přivést děti?',
    a: 'Naše svatba bude spíše pro dospělé, ale rádi se domluvíme individuálně. Napište nám a probereme možnosti. Pro nejmenší hosty budeme mít připravený dětský koutek.',
  },
  {
    q: 'Bude na místě parkování?',
    a: 'Ano, Statek Jedraž disponuje vlastním parkovištěm s dostatečnou kapacitou. Upozorňujeme ale, že alkohol a auto nejdou dohromady — doporučujeme využít organizovaný autobus nebo si zajistit řidiče.',
  },
  {
    q: 'Jaká je předpokládaná délka obřadu?',
    a: 'Samotný obřad trvá přibližně 30–45 minut. Po obřadu bude následovat zahradní recepce s přípitkem a celá slavnost potrvá do pozdních nočních hodin.',
  },
  {
    q: 'Kde se koná obřad — venku nebo uvnitř?',
    a: 'Plánujeme obřad pod širým nebem v zahradě statku, v případě nepříznivého počasí přesuneme dovnitř do historického sálu. Scénář B je stejně krásný!',
  },
  {
    q: 'Mohu si přivést partnera/partnerku, i když nebyl/a pozvána?',
    a: 'Pozvánky jsou osobní. Pokud chcete přivést doprovod, dejte nám vědět předem prostřednictvím RSVP formuláře a rádi to s vámi probereme.',
  },
  {
    q: 'Bude na místě vegetariánské nebo jiné speciální jídlo?',
    a: 'Samozřejmě. V RSVP formuláři prosím uveďte veškeré dietní požadavky a alergie. Naši cateringoví partneři jsou připraveni vyhověti všem potřebám.',
  },
  {
    q: 'Kdy se dozvím více detailů?',
    a: 'Detailnější informace rozešleme všem potvrzeným hostům e-mailem zhruba 4–6 týdnů před svatbou. Pro urgentní dotazy nás kontaktujte na wedding@bustici.cz.',
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useFadeIn(ref, index * 55)

  return (
    <div
      ref={ref}
      className="fade-section border-b border-wedding-peach/30 last:border-0"
    >
      <button
        className="w-full flex items-start justify-between gap-5 py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="font-body text-wedding-brown group-hover:text-wedding-copper transition-colors leading-snug"
          style={{ fontSize: '1.025rem' }}
        >
          {q}
        </span>
        {/* Expand / collapse icon */}
        <span
          className={`flex-shrink-0 mt-0.5 w-6 h-6 rounded-full border border-wedding-copper/30 flex items-center justify-center text-wedding-copper transition-all duration-300 ${
            open ? 'bg-wedding-copper border-wedding-copper' : 'bg-transparent'
          }`}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className={`transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          >
            <path
              d="M5 1v8M1 5h8"
              stroke={open ? '#FFF8F0' : 'currentColor'}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-72 pb-5 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="font-body text-wedding-lightbrown leading-relaxed" style={{ fontSize: '0.975rem' }}>
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
    <section id="faq" className="py-24 md:py-36 bg-wedding-ivory">
      <div className="max-w-2xl mx-auto px-6">
        <div ref={headingRef} className="fade-section text-center mb-14">
          <p className="section-label">Máte otázky?</p>
          <h2 className="section-title mb-4 font-light">Časté dotazy</h2>
          <div className="ornament">
            <span className="font-serif italic text-wedding-copper/60 text-lg">✦</span>
          </div>
        </div>

        {/* Accordion */}
        <div
          className="rounded-3xl p-6 md:p-8 border border-wedding-peach/25"
          style={{ background: 'rgba(255,248,240,0.55)', backdropFilter: 'blur(6px)' }}
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-10">
          <p className="font-body text-wedding-lightbrown mb-4" style={{ fontSize: '0.975rem' }}>
            Nenašli jste odpověď na vaši otázku?
          </p>
          <a
            href="mailto:wedding@bustici.cz"
            className="btn-outline inline-flex"
          >
            Napište nám
          </a>
        </div>
      </div>
    </section>
  )
}
