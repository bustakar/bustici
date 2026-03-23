import { useRef, useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

type FormData = {
  name: string
  email: string
  attending: 'yes' | 'no' | ''
  guests: string
  dietary: string
  message: string
}

const initial: FormData = {
  name: '',
  email: '',
  attending: '',
  guests: '1',
  dietary: '',
  message: '',
}

export default function RSVP() {
  const headingRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)
  useFadeIn(formRef, 200)

  const [form, setForm] = useState<FormData>(initial)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const inputClass =
    'w-full font-body text-wedding-brown bg-white/75 border border-wedding-peach/40 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-wedding-copper/25 focus:border-wedding-copper/60 placeholder:text-wedding-lightbrown/40 transition-all'

  const labelClass = 'block font-sans text-[10px] tracking-[0.35em] text-wedding-lightbrown/80 mb-2 uppercase'

  if (submitted) {
    return (
      <section id="rsvp" className="py-24 md:py-36 bg-wedding-ivory">
        <div className="max-w-xl mx-auto px-6 text-center">
          {/* Floral ornament */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-px bg-wedding-copper/20 max-w-[80px] ml-auto" />
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="10" stroke="#B87333" strokeWidth="1" strokeOpacity="0.4" fill="none" />
              <circle cx="18" cy="18" r="5" fill="#FFCBA4" fillOpacity="0.5" />
              <circle cx="18" cy="18" r="2.5" fill="#E8A838" fillOpacity="0.5" />
              {[0, 60, 120, 180, 240, 300].map(deg => (
                <ellipse
                  key={deg}
                  cx={18 + 10 * Math.cos((deg * Math.PI) / 180)}
                  cy={18 + 10 * Math.sin((deg * Math.PI) / 180)}
                  rx="2.5"
                  ry="5"
                  fill="#F4C2C2"
                  fillOpacity="0.5"
                  transform={`rotate(${deg} ${18 + 10 * Math.cos((deg * Math.PI) / 180)} ${18 + 10 * Math.sin((deg * Math.PI) / 180)})`}
                />
              ))}
            </svg>
            <div className="flex-1 h-px bg-wedding-copper/20 max-w-[80px]" />
          </div>

          <h2 className="font-serif text-4xl text-wedding-brown mb-5 font-light">Děkujeme!</h2>
          <p className="font-body text-wedding-lightbrown leading-relaxed" style={{ fontSize: '1.05rem' }}>
            {form.attending === 'yes'
              ? `Moc se na vás těšíme, ${form.name}! Vaše účast nás moc těší. Uvidíme se 12. června na Statku Jedraž.`
              : `Díky za zprávu, ${form.name}. Je nám líto, že nemůžete přijít, ale chápeme. Budete v našich myšlenkách.`}
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
    <section id="rsvp" className="py-24 md:py-36 bg-wedding-ivory">
      <div className="max-w-2xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="fade-section text-center mb-14">
          <p className="section-label">Odpovězte do 30. dubna 2026</p>
          <h2 className="section-title mb-4 font-light">Potvrdit účast</h2>
          <div className="ornament">
            <span className="font-serif italic text-wedding-copper/60 text-lg">✦</span>
          </div>
          <p className="font-body text-wedding-lightbrown max-w-sm mx-auto" style={{ fontSize: '1.025rem' }}>
            Pomozte nám s organizací — prosíme o potvrzení do 30. dubna 2026.
          </p>
        </div>

        {/* Form */}
        <div ref={formRef} className="fade-section">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl p-8 md:p-10 border border-wedding-peach/25 space-y-7"
            style={{ background: 'rgba(255,248,240,0.6)', backdropFilter: 'blur(8px)' }}
          >
            {/* Name */}
            <div>
              <label className={labelClass}>Jméno a příjmení *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={set('name')}
                placeholder="Marie Nováková"
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div>
              <label className={labelClass}>E-mail *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={set('email')}
                placeholder="marie@example.cz"
                className={inputClass}
              />
            </div>

            {/* Attending */}
            <div>
              <label className={labelClass}>Zúčastním se *</label>
              <div className="grid grid-cols-2 gap-3">
                {(['yes', 'no'] as const).map(val => (
                  <label
                    key={val}
                    className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border cursor-pointer transition-all font-body ${
                      form.attending === val
                        ? 'bg-wedding-copper text-wedding-cream border-wedding-copper shadow-copper'
                        : 'bg-white/70 text-wedding-lightbrown border-wedding-peach/40 hover:border-wedding-copper/35'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value={val}
                      checked={form.attending === val}
                      onChange={set('attending')}
                      className="sr-only"
                    />
                    <span style={{ fontSize: '1rem' }}>
                      {val === 'yes' ? 'Ano, s radostí přijdu' : 'Bohužel se nemohu zúčastnit'}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Guests */}
            {form.attending === 'yes' && (
              <div>
                <label className={labelClass}>Počet osob (včetně vás) *</label>
                <select value={form.guests} onChange={set('guests')} className={inputClass}>
                  {[1, 2, 3, 4].map(n => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'osoba' : n < 5 ? 'osoby' : 'osob'}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Dietary */}
            {form.attending === 'yes' && (
              <div>
                <label className={labelClass}>Dietní omezení / alergie</label>
                <input
                  type="text"
                  value={form.dietary}
                  onChange={set('dietary')}
                  placeholder="vegetarián, bezlepková strava, alergie na ořechy…"
                  className={inputClass}
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label className={labelClass}>Zpráva pro novomanžele</label>
              <textarea
                value={form.message}
                onChange={set('message')}
                placeholder="Napište nám cokoliv — přání, vzpomínky, vzkaz…"
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Divider */}
            <div className="h-px bg-wedding-peach/30" />

            {/* Submit */}
            <button
              type="submit"
              disabled={!form.name || !form.email || !form.attending || loading}
              className="w-full font-sans text-[11px] tracking-[0.3em] uppercase bg-wedding-copper text-wedding-cream py-4 rounded-xl hover:bg-wedding-brown transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3"
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
