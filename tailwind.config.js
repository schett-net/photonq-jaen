/** @type {import('tailwindcss').Config} */
const colors = require('./src/theme/theme.config')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'primary-light': '#AFCDE3',
        ...colors
      },
      maxWidth: {
        max: '1400px'
      },
      width: {
        'filter-button': '142px',
        'filter-button-sm': '81px'
      },
      maxHeight: {
        hero: '1100px'
      },
      padding: {
        navbar: '80px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
