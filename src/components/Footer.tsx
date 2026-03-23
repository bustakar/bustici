export default function Footer() {
  return (
    <footer className="bg-wedding-brown text-wedding-cream py-16">
      <div className="max-w-xl mx-auto px-6 text-center">
        {/* Monogram */}
        <div className="font-serif text-5xl mb-4">
          K <span className="text-wedding-golden">&</span> K
        </div>

        {/* Date */}
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-wedding-peach/70 mb-2">
          12. června 2026
        </p>
        <p className="font-body italic text-wedding-peach/50 text-sm mb-8">
          Statek Jedraž
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-wedding-copper/20" />
          <span className="text-wedding-copper/40 text-lg">♦</span>
          <div className="flex-1 h-px bg-wedding-copper/20" />
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
          {[
            { href: '#story', label: 'Náš příběh' },
            { href: '#details', label: 'Detaily' },
            { href: '#rsvp', label: 'RSVP' },
            { href: '#registry', label: 'Dary' },
            { href: '#faq', label: 'FAQ' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-sans text-xs uppercase tracking-widest text-wedding-cream/50 hover:text-wedding-golden transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Contact */}
        <p className="font-body text-wedding-cream/40 text-xs mb-2">
          <a href="mailto:wedding@bustici.cz" className="hover:text-wedding-golden transition-colors">
            wedding@bustici.cz
          </a>
        </p>

        {/* Copyright */}
        <p className="font-sans text-xs text-wedding-cream/20 mt-6">
          © 2026 bustici.cz · Kateřina & Karel Bustici
        </p>
      </div>
    </footer>
  )
}
