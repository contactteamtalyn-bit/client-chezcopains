import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charbon: { DEFAULT: '#1A1612', profond: '#0F0C09', card: '#242018' },
        moutarde: { DEFAULT: '#C4A017', clair: '#FDF6E3', vif: '#D4B027' },
        creme: '#FAF7F0',
        vin: { DEFAULT: '#8B2D3C', clair: '#F5E8EA' },
        beige: '#E8D8B8',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22,1,0.36,1) both',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        'pulse-soft-delay': 'pulse-soft 2.4s ease-in-out 1.2s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
