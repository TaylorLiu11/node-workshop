const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      pink: colors.rose,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.emerald,
      blue: colors.sky,
      purple: colors.violet,
      gray: colors.blueGray
    },
  },
  variants: {
    extend: {
      translate: ['active',]
    },
  },
  plugins: [],
};
