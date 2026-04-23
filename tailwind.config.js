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
          // Warm core
          peach: '#FFCBA4',
          golden: '#E8A838',
          copper: '#B87333',
          terracotta: '#C46A4F',
          apricot: '#FBCEB1',
          blush: '#F4C2C2',
          butter: '#F0D67A',
          // Cool accents
          bluebell: '#A1A8BE',
          lilac: '#D9B8D4',
          moss: '#8A9A5B',
          sage: '#B5BFA1',
          // Rare deep accent
          grape: '#5F0015',
          // Neutrals
          cream: '#FFF8F0',
          ivory: '#FAF0E6',
          parchment: '#F5ECD7',
          brown: '#4A3728',
          darkbrown: '#2C1A0E',
          lightbrown: '#7A5C48',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['"Cinzel"', 'Georgia', 'serif'],
        script: ['"Pinyon Script"', '"Cormorant Garamond"', 'serif'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
        '11xl': ['12rem', { lineHeight: '1' }],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1.4s ease-out forwards',
        'float': 'float 8s ease-in-out infinite',
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
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'warm': '0 4px 24px -4px rgba(74, 55, 40, 0.12), 0 1px 4px rgba(74, 55, 40, 0.06)',
        'warm-lg': '0 12px 48px -8px rgba(74, 55, 40, 0.18), 0 2px 8px rgba(74, 55, 40, 0.08)',
        'copper': '0 4px 20px -4px rgba(184, 115, 51, 0.25)',
      },
    },
  },
  plugins: [],
}
