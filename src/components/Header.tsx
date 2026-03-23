import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#story', label: 'Náš příběh' },
  { href: '#details', label: 'Detaily' },
  { href: '#rsvp', label: 'RSVP' },
  { href: '#registry', label: 'Dary' },
  { href: '#travel', label: 'Ubytování' },
  { href: '#gallery', label: 'Galerie' },
  { href: '#faq', label: 'FAQ' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-wedding-cream/96 backdrop-blur-md shadow-[0_1px_20px_rgba(74,55,40,0.08)] border-b border-wedding-peach/25'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-7">
        <div className="flex items-center justify-between h-16">
          {/* Monogram */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-serif text-xl text-wedding-brown hover:text-wedding-copper transition-colors font-light"
            style={{ letterSpacing: '0.05em' }}
          >
            K <span className="text-wedding-copper italic">&amp;</span> K
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className="font-sans text-[10px] tracking-[0.3em] uppercase text-wedding-lightbrown hover:text-wedding-copper transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => handleNav('#rsvp')}
            className="hidden lg:inline-flex btn-primary py-2"
          >
            Potvrdit účast
          </button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-0.5 bg-wedding-brown transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-wedding-brown transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-wedding-brown transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-wedding-cream/98 backdrop-blur-md border-t border-wedding-peach/25 px-5 pb-6 pt-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className="font-sans text-[11px] tracking-[0.3em] uppercase text-wedding-lightbrown hover:text-wedding-copper transition-colors text-left"
              >
                {label}
              </button>
            ))}
            <div className="h-px bg-wedding-peach/30 my-1" />
            <button
              onClick={() => handleNav('#rsvp')}
              className="btn-primary text-center"
            >
              Potvrdit účast
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
