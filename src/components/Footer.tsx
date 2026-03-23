// Small botanical flourish for the footer
const FooterFloral = () => (
  <svg
    width="200"
    height="80"
    viewBox="0 0 200 80"
    fill="none"
    className="mx-auto mb-6 opacity-30"
  >
    {/* Left branch */}
    <path
      d="M 20 60 C 40 50 60 40 90 38"
      stroke="#E8A838"
      strokeWidth="1"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M 40 55 C 35 45 32 38 35 30"
      stroke="#E8A838"
      strokeWidth="0.8"
      strokeLinecap="round"
      fill="none"
    />
    <ellipse cx="36" cy="28" rx="3" ry="7" fill="#8A9A5B" fillOpacity="0.5" transform="rotate(-20 36 28)" />
    <ellipse cx="45" cy="50" rx="3" ry="7" fill="#8A9A5B" fillOpacity="0.4" transform="rotate(-45 45 50)" />
    <ellipse cx="70" cy="42" rx="2.5" ry="6" fill="#8A9A5B" fillOpacity="0.35" transform="rotate(-55 70 42)" />
    <circle cx="35" cy="28" r="2.5" fill="#FFCBA4" fillOpacity="0.6" />
    <circle cx="20" cy="60" r="2" fill="#E8A838" fillOpacity="0.5" />

    {/* Center ornament */}
    <path d="M 100 20 L 107 30 L 100 40 L 93 30 Z" fill="#E8A838" fillOpacity="0.45" />
    <path d="M 100 24 L 104 30 L 100 36 L 96 30 Z" fill="#E8A838" fillOpacity="0.2" />
    <line x1="100" y1="40" x2="100" y2="75" stroke="#E8A838" strokeWidth="0.8" strokeOpacity="0.4" />
    <circle cx="100" cy="76" r="2" fill="#E8A838" fillOpacity="0.35" />

    {/* Right branch (mirrored) */}
    <path
      d="M 180 60 C 160 50 140 40 110 38"
      stroke="#E8A838"
      strokeWidth="1"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M 160 55 C 165 45 168 38 165 30"
      stroke="#E8A838"
      strokeWidth="0.8"
      strokeLinecap="round"
      fill="none"
    />
    <ellipse cx="164" cy="28" rx="3" ry="7" fill="#8A9A5B" fillOpacity="0.5" transform="rotate(20 164 28)" />
    <ellipse cx="155" cy="50" rx="3" ry="7" fill="#8A9A5B" fillOpacity="0.4" transform="rotate(45 155 50)" />
    <ellipse cx="130" cy="42" rx="2.5" ry="6" fill="#8A9A5B" fillOpacity="0.35" transform="rotate(55 130 42)" />
    <circle cx="165" cy="28" r="2.5" fill="#FFCBA4" fillOpacity="0.6" />
    <circle cx="180" cy="60" r="2" fill="#E8A838" fillOpacity="0.5" />
  </svg>
)

const navLinks = [
  { href: '#story', label: 'Náš příběh' },
  { href: '#details', label: 'Detaily' },
  { href: '#rsvp', label: 'RSVP' },
  { href: '#registry', label: 'Dary' },
  { href: '#faq', label: 'FAQ' },
]

export default function Footer() {
  return (
    <footer className="dark-romantic relative overflow-hidden">
      {/* Subtle warm glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-wedding-copper/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-wedding-golden/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto px-6 py-20 text-center">
        {/* Botanical flourish */}
        <FooterFloral />

        {/* Monogram */}
        <div
          className="font-serif font-light text-wedding-cream mb-4 leading-none"
          style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', letterSpacing: '-0.01em' }}
        >
          K <span className="text-wedding-golden italic">&amp;</span> K
        </div>

        {/* Date */}
        <p className="font-sans text-[10px] tracking-[0.45em] text-wedding-peach/55 mb-1.5 uppercase">
          12. června 2026
        </p>
        <p className="font-body italic text-wedding-peach/40 mb-10" style={{ fontSize: '0.925rem' }}>
          Statek Jedraž
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-wedding-copper/18" />
          <span className="text-wedding-golden/35 text-base">✦</span>
          <div className="flex-1 h-px bg-wedding-copper/18" />
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-sans text-[10px] tracking-[0.3em] uppercase text-wedding-cream/40 hover:text-wedding-golden/80 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Contact */}
        <p className="font-body text-wedding-cream/30 mb-1.5" style={{ fontSize: '0.875rem' }}>
          <a
            href="mailto:wedding@bustici.cz"
            className="hover:text-wedding-golden/70 transition-colors"
          >
            wedding@bustici.cz
          </a>
        </p>

        {/* Copyright */}
        <p className="font-sans text-[9px] tracking-[0.2em] text-wedding-cream/18 mt-8 uppercase">
          © 2026 bustici.cz · Kateřina &amp; Karel
        </p>
      </div>
    </footer>
  )
}
