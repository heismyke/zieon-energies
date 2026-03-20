/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glass-white': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        brand: {
          900: '#3b2412',
          700: '#7a4a24',
          500: '#c8823a',
          400: '#d59a5b',
          300: '#e3b680',
        },
        accent: {
          magenta: '#d51d7f',
        },
      },
      backdropBlur: {
        'glass': '20px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'gradient-shift': 'gradientShift 15s ease infinite',
        'rotate': 'rotate 8s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        gradientShift: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        rotate: {
          'to': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
