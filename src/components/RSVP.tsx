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
    // Simulate submission (no backend yet)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const inputClass =
    'w-full font-body text-wedding-brown bg-white/70 border border-wedding-peach/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-wedding-copper/30 focus:border-wedding-copper placeholder:text-wedding-lightbrown/50 transition-all'

  const labelClass = 'block font-sans text-xs uppercase tracking-widest text-wedding-lightbrown mb-1.5'

  if (submitted) {
    return (
      <section id="rsvp" className="py-24 md:py-32 bg-wedding-ivory">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6">🌸</div>
          <h2 className="font-serif text-4xl text-wedding-brown mb-4">Děkujeme!</h2>
          <p className="font-body text-wedding-lightbrown leading-relaxed">
            {form.attending === 'yes'
              ? `Moc se na vás těšíme, ${form.name}! Vaše účast nás moc těší. Uvidíme se 12. června na Statku Jedraž.`
              : `Díky za zprávu, ${form.name}. Je nám líto, že nemůžete přijít, ale chápeme. Budete v našich myšlenkách.`}
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm(initial) }}
            className="mt-8 font-sans text-sm uppercase tracking-widest text-wedding-copper border border-wedding-copper/40 px-6 py-2.5 rounded-full hover:bg-wedding-copper hover:text-wedding-cream transition-colors"
          >
            Odeslat znovu
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="py-24 md:py-32 bg-wedding-ivory">
      <div className="max-w-2xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="fade-section text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-wedding-copper mb-4">
            Odpovězte do 30. dubna 2026
          </p>
          <h2 className="section-title mb-4">Potvrdit účast</h2>
          <div className="ornament">
            <span className="font-serif italic text-wedding-copper text-lg">♦</span>
          </div>
          <p className="font-body text-wedding-lightbrown max-w-sm mx-auto">
            Pomozte nám s organizací — prosíme o potvrzení do 30. dubna 2026.
          </p>
        </div>

        {/* Form */}
        <div ref={formRef} className="fade-section">
          <form
            onSubmit={handleSubmit}
            className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-wedding-peach/30 space-y-6"
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
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border cursor-pointer transition-all font-body text-sm ${
                      form.attending === val
                        ? 'bg-wedding-copper text-wedding-cream border-wedding-copper'
                        : 'bg-white/70 text-wedding-lightbrown border-wedding-peach/50 hover:border-wedding-copper/40'
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
                    {val === 'yes' ? '🎉 Ano, přijdu!' : '😢 Bohužel nemohu'}
                  </label>
                ))}
              </div>
            </div>

            {/* Number of guests (only if attending) */}
            {form.attending === 'yes' && (
              <div>
                <label className={labelClass}>Počet osob (včetně vás) *</label>
                <select
                  value={form.guests}
                  onChange={set('guests')}
                  className={inputClass}
                >
                  {[1, 2, 3, 4].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'osoba' : n < 5 ? 'osoby' : 'osob'}</option>
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

            {/* Submit */}
            <button
              type="submit"
              disabled={!form.name || !form.email || !form.attending || loading}
              className="w-full font-sans text-sm uppercase tracking-widest bg-wedding-copper text-wedding-cream py-4 rounded-xl hover:bg-wedding-brown transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-wedding-cream/40 border-t-wedding-cream rounded-full animate-spin" />
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
