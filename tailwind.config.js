/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Aeonik Pro"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Feature Deck"', 'Georgia', 'serif'],
        mono: ['"ABC Social Mono"', 'monospace'],
      },
      fontSize: {
        'display-hero': ['clamp(48px, 7vw, 72px)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-section': ['clamp(32px, 5vw, 42px)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'title': ['clamp(20px, 3vw, 24px)', { lineHeight: '1.16', letterSpacing: '-0.02em' }],
        'main': ['15px', { lineHeight: '1.40', letterSpacing: '-0.01em' }],
        'mono-xs': ['11px', { lineHeight: '1.35', letterSpacing: '0.05em' }],
        'mono-sm': ['14px', { lineHeight: '1.35', letterSpacing: '0.05em' }],
      },
      colors: {
        black: '#111111',
        grey: '#a09b93',
        brand: {
          50: '#fff9f5',
          100: '#b7a593',
          200: '#faf3e6',
          300: '#f7efe0',
          400: '#ff9d4d',
          500: '#ff7a1a',
          600: '#e66e17',
          700: '#6b5844',
          800: '#4d3f31',
          900: '#2d251d',
          950: '#16110b',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #ff7a1a 0%, #f58f22 40%, #fccc3c 100%)',
      },
    },
  },
  plugins: [],
}
