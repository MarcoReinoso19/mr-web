/* eslint-env node */
// const defaultTheme = require('tailwindcss/defaultTheme')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        background: 'rgba(var(--color-background), 1)',
        'background-gradient': 'rgba(var(--color-background-gradient), 1)',
        surface: 'rgba(var(--color-surface), 1)',
        primary: {
          50: 'rgba(var(--color-primary-50), 1)',
          100: 'rgba(var(--color-primary-100), 1)',
          200: 'rgba(var(--color-primary-200), 1)',
          300: 'rgba(var(--color-primary-300), 1)',
          400: 'rgba(var(--color-primary-400), 1)',
          500: 'rgba(var(--color-primary-500), 1)',
          600: 'rgba(var(--color-primary-600), 1)',
          700: 'rgba(var(--color-primary-700), 1)',
          800: 'rgba(var(--color-primary-800), 1)',
          900: 'rgba(var(--color-primary-900), 1)',
          950: 'rgba(var(--color-primary-950), 1)',
        },
      },
      // here's how to extend fonts if needed
      // fontFamily: {
      //   sans: [...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    iconsPlugin({
      // Collections: https://icones.js.org/
      collections: getIconCollections(['mdi']),
    }),
  ],
  safelist: [{ pattern: /bg-primary-\d{2,3}/ }],
}
