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
          ? 'bg-wedding-cream/95 backdrop-blur-sm shadow-sm border-b border-wedding-peach/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / monogram */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-serif text-xl text-wedding-brown hover:text-wedding-copper transition-colors"
          >
            K <span className="text-wedding-copper">&</span> K
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className="font-sans text-xs uppercase tracking-widest text-wedding-lightbrown hover:text-wedding-copper transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* RSVP CTA */}
          <button
            onClick={() => handleNav('#rsvp')}
            className="hidden lg:inline-flex font-sans text-xs uppercase tracking-widest bg-wedding-copper text-wedding-cream px-5 py-2 rounded-full hover:bg-wedding-brown transition-colors"
          >
            Potvrdit účast
          </button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-wedding-brown transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-wedding-brown transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-wedding-brown transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-wedding-cream/98 backdrop-blur-sm border-t border-wedding-peach/30 px-4 pb-6 pt-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className="font-sans text-sm uppercase tracking-widest text-wedding-lightbrown hover:text-wedding-copper transition-colors text-left"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#rsvp')}
              className="mt-2 font-sans text-xs uppercase tracking-widest bg-wedding-copper text-wedding-cream px-5 py-2.5 rounded-full hover:bg-wedding-brown transition-colors"
            >
              Potvrdit účast
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
