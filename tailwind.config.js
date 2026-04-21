/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)'],
        heading: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        brand: {
          950: '#16110b',
          700: '#6b5844',
          500: '#ff7a1a',
          300: '#f7efe0',
          200: '#faf3e6',
          100: '#b7a593',
        },
      },
    },
  },
  plugins: [],
}
