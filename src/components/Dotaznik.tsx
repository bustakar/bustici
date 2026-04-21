import { useRef, useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { LaceDivider } from './Ornaments'

type FormData = {
  name: string
  attending: 'yes' | 'no' | ''
  sleepover: 'yes' | 'no' | 'maybe' | ''
  vegan: boolean
  dietary: string
  message: string
}

const initial: FormData = {
  name: '',
  attending: '',
  sleepover: '',
  vegan: false,
  dietary: '',
  message: '',
}

export default function Dotaznik() {
  const headingRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)
  useFadeIn(formRef, 200)

  const [form, setForm] = useState<FormData>(initial)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const setField = <K extends keyof FormData>(field: K, value: FormData[K]) =>
    setForm(prev => ({ ...prev, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  const inputClass =
    'w-full font-body text-wedding-brown bg-white/80 border border-wedding-peach/45  px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-wedding-copper/30 focus:border-wedding-copper/60 placeholder:text-wedding-lightbrown/40 transition-all'
  const labelClass = 'block font-sans text-[10px] tracking-[0.35em] text-wedding-lightbrown/85 mb-2 uppercase'

  if (submitted) {
    return (
      <section id="dotaznik" className="py-24 md:py-32 canvas-parchment">
        <div className="max-w-xl mx-auto px-6 text-center">
          <LaceDivider className="mb-8" />
          <h2 className="font-serif text-4xl text-wedding-brown mb-5 font-light">Děkujeme!</h2>
          <p className="font-body text-wedding-lightbrown leading-relaxed" style={{ fontSize: '1.1rem' }}>
            {form.attending === 'yes'
              ? `${form.name}, máme z toho radost. Uvidíme se 12. června na Statku Jedraž.`
              : `${form.name}, mrzí nás, že to nevyjde. Budete v našich myšlenkách.`}
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm(initial) }}
            className="mt-8 btn-outline"
          >
            Odeslat znovu
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="dotaznik" className="py-24 md:py-32 canvas-parchment relative">
      <div className="max-w-2xl mx-auto px-6">
        <div ref={headingRef} className="fade-section text-center mb-12">
          <h2 className="section-title font-light">Dotazník</h2>
          <LaceDivider className="mt-4" />
          <p className="font-body text-wedding-lightbrown max-w-md mx-auto mt-5" style={{ fontSize: '1.05rem' }}>
            Potvrďte účast
          </p>
        </div>

        <div ref={formRef} className="fade-section">
          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-10 border border-wedding-peach/40 space-y-7"
            style={{ background: 'rgba(255,248,240,0.9)' }}
          >
            {/* Name */}
            <div>
              <label className={labelClass}>Jméno a příjmení *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setField('name', e.target.value)}
                placeholder="Kateřina Buštová"
                className={inputClass}
              />
            </div>

            {/* Attending */}
            <div>
              <label className={labelClass}>Přijdeš? *</label>
              <div className="grid grid-cols-2 gap-3">
                {(['yes', 'no'] as const).map(val => (
                  <label
                    key={val}
                    className={`flex items-center justify-center py-3.5 px-4  border cursor-pointer transition-all font-body ${
                      form.attending === val
                        ? 'bg-wedding-copper text-wedding-cream border-wedding-copper shadow-copper'
                        : 'bg-white/70 text-wedding-lightbrown border-wedding-peach/45 hover:border-wedding-copper/35'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value={val}
                      checked={form.attending === val}
                      onChange={() => setField('attending', val)}
                      className="sr-only"
                    />
                    <span style={{ fontSize: '1rem' }}>{val === 'yes' ? 'Ano, přijdu' : 'Bohužel ne'}</span>
                  </label>
                ))}
              </div>
            </div>

            {form.attending === 'yes' && (
              <>
                {/* Sleepover */}
                <div>
                  <label className={labelClass}>Přespíš na statku? *</label>
                  <div className="grid grid-cols-3 gap-3">
                    {([
                      { v: 'yes', label: 'Ano, prosím o pokoj' },
                      { v: 'maybe', label: 'Možná, řekni mi cenu' },
                      { v: 'no', label: 'Ne, mám odvoz' },
                    ] as const).map(opt => (
                      <label
                        key={opt.v}
                        className={`flex items-center justify-center text-center py-3.5 px-3  border cursor-pointer transition-all font-body leading-tight ${
                          form.sleepover === opt.v
                            ? 'bg-wedding-copper text-wedding-cream border-wedding-copper shadow-copper'
                            : 'bg-white/70 text-wedding-lightbrown border-wedding-peach/45 hover:border-wedding-copper/35'
                        }`}
                      >
                        <input
                          type="radio"
                          name="sleepover"
                          value={opt.v}
                          checked={form.sleepover === opt.v}
                          onChange={() => setField('sleepover', opt.v)}
                          className="sr-only"
                        />
                        <span style={{ fontSize: '0.95rem' }}>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Vegan checkbox */}
                <div>
                  <label
                    className={`flex items-center gap-3 py-3.5 px-4  border cursor-pointer transition-all font-body ${
                      form.vegan
                        ? 'bg-wedding-moss/15 border-wedding-moss/45'
                        : 'bg-white/70 border-wedding-peach/45 hover:border-wedding-moss/35'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={form.vegan}
                      onChange={e => setField('vegan', e.target.checked)}
                      className="w-5 h-5 accent-wedding-moss"
                    />
                    <span className="text-wedding-brown" style={{ fontSize: '1rem' }}>
                      Jsem vegan / chci veganskou variantu
                    </span>
                  </label>
                </div>

                {/* Dietary */}
                <div>
                  <label className={labelClass}>Stravovací omezení / alergie</label>
                  <input
                    type="text"
                    value={form.dietary}
                    onChange={e => setField('dietary', e.target.value)}
                    placeholder="bezlepkové, alergie na ořechy, lakto-vegetarián…"
                    className={inputClass}
                  />
                </div>
              </>
            )}

            {/* Message */}
            <div>
              <label className={labelClass}>Zpráva pro novomanžele</label>
              <textarea
                value={form.message}
                onChange={e => setField('message', e.target.value)}
                placeholder="Napiš nám cokoliv — přání, vzkaz, hláška…"
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="h-px bg-wedding-peach/35" />

            <button
              type="submit"
              disabled={!form.name || !form.attending || (form.attending === 'yes' && !form.sleepover) || loading}
              className="w-full font-sans text-[11px] tracking-[0.3em] uppercase bg-wedding-copper text-wedding-cream py-4  hover:bg-wedding-brown transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-wedding-cream/30 border-t-wedding-cream rounded-full animate-spin" />
                  Odesílám…
                </>
              ) : (
                'Odeslat odpověď'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
