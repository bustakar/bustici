export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 30% 50%, rgba(184,115,51,0.1) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(232,168,56,0.06) 0%, transparent 60%), #4A3728',
      }}
    >
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-wedding-copper/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-wedding-golden/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto px-6 py-20 text-center">
        {/* Monogram */}
        <div
          className="font-serif font-light text-wedding-cream mb-4 leading-none"
          style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', letterSpacing: '-0.01em' }}
        >
          K <span className="text-wedding-golden italic">&amp;</span> K
        </div>

        <p className="font-sans text-[10px] tracking-[0.45em] text-wedding-peach/85 mb-1.5 uppercase">
          12. června 2026
        </p>
        <p className="font-body italic text-wedding-peach/75 mb-10" style={{ fontSize: '0.95rem' }}>
          Statek Jedraž
        </p>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-wedding-copper/20" />
          <span className="text-wedding-golden/40 text-base">✦</span>
          <div className="flex-1 h-px bg-wedding-copper/20" />
        </div>

        <p className="font-body text-wedding-cream/75 mb-1.5" style={{ fontSize: '0.9rem' }}>
          <a href="mailto:wedding@bustici.cz" className="hover:text-wedding-golden transition-colors">
            wedding@bustici.cz
          </a>
        </p>

        <p className="font-sans text-[9px] tracking-[0.2em] text-wedding-cream/50 mt-8 uppercase">
          © 2026 Kateřina &amp; Karel
        </p>
      </div>
    </footer>
  )
}
