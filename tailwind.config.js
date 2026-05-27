/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,js}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0b2447', deep: '#081c39' },
        teal: { DEFAULT: '#2f6b6b', soft: '#dceae8', dark: '#225454' },
        brand: { orange: '#f07c2c', 'orange-dark': '#d96a1f' },
        bg: { page: '#eaf3fb' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 12px rgba(11, 36, 71, 0.06)',
        soft: '0 1px 3px rgba(11, 36, 71, 0.08)',
      },
      borderRadius: { card: '1rem' },
    },
  },
  plugins: [],
}

