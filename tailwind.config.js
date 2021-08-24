const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        xl: '8px 8px 25px -5px rgba(0, 0, 0, 0.15), 8px 8px 10px 8px rgba(0, 0, 0, 0.12);',
      },
      fontFamily: {
        primary: ['Montserrat', ...fontFamily.sans],
      },
      colors: {
        primary: {
          400: '#00E0F3',
          500: '#00c4fd',
        },
        dark: '#333333',
        orange: '#FF7A3C',
				darkBlue: '#005775',
				lightGreen: '#9DC086',
        orange: '#FF7A3C',
        grayObj: '#C4C4C4',
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
