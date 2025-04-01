/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#FFF7F1', // Warm Cream
          100: '#FCE8EC', // Blush Pink
          200: '#FADDE1',
          300: '#F8D2D9',
          400: '#F4C6D0',
          500: '#F0BAC7',
          600: '#ECA3B4',
          700: '#E88C9F',
          800: '#E6758A',
          900: '#E45E75',
        },
        rose: {
          50: '#FFF7F1', // Warm Cream
          100: '#FCE8EC', // Blush Pink
          200: '#FADDE1',
          300: '#F8D2D9',
          400: '#F4C6D0',
          500: '#F0BAC7',
          600: '#ECA3B4',
          700: '#E88C9F',
          800: '#E6758A',
          900: '#E45E75',
        },
        mauve: {
          50: '#FFF7F1', // Warm Cream
          100: '#FCE8EC', // Blush Pink
          200: '#FADDE1',
          300: '#F8D2D9',
          400: '#F4C6D0',
          500: '#F0BAC7',
          600: '#ECA3B4',
          700: '#D28EA7', // Rosé Mauve
          800: '#C07F9B',
          900: '#AF748F',
        },
        plum: {
          50: '#FFF7F1', // Warm Cream
          100: '#FCE8EC', // Blush Pink
          200: '#FADDE1',
          300: '#F8D2D9',
          400: '#F4C6D0',
          500: '#F0BAC7',
          600: '#ECA3B4',
          700: '#E88C9F',
          800: '#E6758A',
          900: '#5E3A47', // Rich Plum
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
      },
    },
  },
  plugins: [],
}