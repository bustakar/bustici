/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          peach: '#FFCBA4',
          golden: '#E8A838',
          copper: '#B87333',
          apricot: '#FBCEB1',
          blush: '#F4C2C2',
          misty: '#B0C4DE',
          moss: '#8A9A5B',
          cream: '#FFF8F0',
          ivory: '#FAF0E6',
          brown: '#4A3728',
          darkbrown: '#2C1A0E',
          lightbrown: '#7A5C48',
          parchment: '#F5ECD7',
        },
      },
      fontFamily: {
        // Display / headings — Cormorant Garamond: high-contrast, deeply romantic
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        // Body text — EB Garamond: warm, classical, humanist
        body: ['"EB Garamond"', 'Georgia', 'serif'],
        // Labels / uppercase tracking — Cinzel: Roman inscription style
        sans: ['"Cinzel"', 'Georgia', 'serif'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
        '11xl': ['12rem', { lineHeight: '1' }],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'float': 'float 8s ease-in-out infinite',
        'drift': 'drift 12s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-8px) translateX(4px)' },
          '66%': { transform: 'translateY(4px) translateX(-4px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'warm-radial': 'radial-gradient(ellipse at center, #FFF8F0 0%, #FAF0E6 40%, #FBCEB1 75%, #FFCBA4 100%)',
        'copper-gradient': 'linear-gradient(135deg, #E8A838 0%, #B87333 100%)',
        'parchment-gradient': 'linear-gradient(160deg, #FFF8F0 0%, #FAF0E6 50%, #F5ECD7 100%)',
      },
      boxShadow: {
        'warm': '0 4px 24px -4px rgba(74, 55, 40, 0.12), 0 1px 4px rgba(74, 55, 40, 0.06)',
        'warm-lg': '0 12px 48px -8px rgba(74, 55, 40, 0.18), 0 2px 8px rgba(74, 55, 40, 0.08)',
        'copper': '0 4px 20px -4px rgba(184, 115, 51, 0.25)',
        'inset-copper': 'inset 0 0 0 1px rgba(184, 115, 51, 0.2)',
      },
    },
  },
  plugins: [],
}
