import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0f16',
        surface: '#0f1724',
        primary: {
          50: '#e8f5ff',
          100: '#d0eaff',
          200: '#a1d4ff',
          300: '#72beff',
          400: '#43a8ff',
          500: '#148fff',
          600: '#0f6fcc',
          700: '#0b5299',
          800: '#073666',
          900: '#041b33'
        },
        accent: '#22d3ee'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.25)'
      }
    },
  },
  plugins: [],
} satisfies Config
