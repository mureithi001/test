/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        plum: {
          50: '#f8f0f8',
          100: '#f1e6f1',
          200: '#e9dbf0',
          300: '#e1d0ee',
          400: '#d9c5ec',
          500: '#d1b9eb',
          600: '#c9adea',
          700: '#c1a1e9',
          800: '#b994e8',
          900: '#b188e7',
        },
        mauve: {
          50: '#f8f0f8',
          100: '#f1e6f1',
          200: '#e9dbf0',
          300: '#e1d0ee',
          400: '#d9c5ec',
          500: '#d1b9eb',
          600: '#c9adea',
          700: '#c1a1e9',
          800: '#b994e8',
          900: '#b188e7',
        },
        blush: {
          50: '#fff0f5',
          100: '#ffe6ec',
          200: '#ffd0e3',
          300: '#ffc0da',
          400: '#ffb0d1',
          500: '#ff9fc8',
          600: '#ff8ebf',
          700: '#ff7da6',
          800: '#ff6c8d',
          900: '#ff5b74',
        },
        gold: {
          50: '#FFF7F1', // Warm Cream
          100: '#FCE8EC', // Blush Pink
          200: '#FADDE1',
          300: '#F8D2D9',
          400: '#F4C6D0',
          500: '#F0BAC7',
          600: '#ECA3B4',
          700: '#E88C9F',
          800: '#E6758A',
          900: '#E3CBA6', // Champagne Gold
        },
        background: {
          DEFAULT: 'var(--background)',
          warm: '#FFF7F1', // Warm Cream
          blush: '#FCE8EC', // Blush Pink
        },
        foreground: {
          DEFAULT: 'var(--foreground)',
          plum: '#5E3A47', // Rich Plum
          mauve: '#D28EA7', // Rosé Mauve
        },
        'glass-bg': 'rgba(255, 255, 255, 0.12)',
        'glass-border': 'rgba(255, 255, 255, 0.25)',
        'glass-hover': 'rgba(255, 255, 255, 0.15)',
        'glass-shadow': 'rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glass': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glass-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}