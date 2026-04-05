import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['var(--font-dm-sans)', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'Georgia', 'serif'],
      },
      colors: {
        gold:    '#D4A017',
        'gold-light': '#f0c040',
        bg: {
          primary:   '#0d0d0d',
          secondary: '#111111',
          tertiary:  '#090909',
        },
        border: {
          DEFAULT: '#1e1e1e',
          light:   '#2a2a2a',
        },
      },
      animation: {
        'wa-bounce':    'waBounce 2.5s ease infinite',
        'border-glow':  'borderGlow 3s ease infinite',
        'map-ping':     'mapPing 1.8s ease-out infinite',
        'pulse-slow':   'pulse 2.5s ease infinite',
        'fade-up':      'fadeUp 0.7s ease both',
        'fade-in':      'fadeIn 0.6s ease both',
      },
      keyframes: {
        waBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '40%':       { transform: 'translateY(-6px)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: '#D4A017' },
          '50%':       { borderColor: '#f0c040' },
        },
        mapPing: {
          '0%':   { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
