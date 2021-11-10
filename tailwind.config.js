const colors = require('tailwindcss/colors')

module.exports = {

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        gray: colors.trueGray
      }
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover'],
      visibility: ['hover', 'group-hover', 'focus']
    },
  },
  plugins: [],
}
