/** @type {import('tailwindcss').Config} */

// default tailwind themes
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      '2xs': '280px',

      xs: '360px',

      ...defaultTheme.screens
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        background: '#f8f5f2',
        headline: '#232323',
        paragraph: '#222525',
        button: '#078080',
        secondary: '#f45d48',
        main: '#fffffe',
        cardBackground: '#fffffe'
      },
      fontFamily: {
        logo: ['Raleway', 'sans-serif'],
        paragraph: ['Nunito', 'sans-serif'],
        heading: ['Rubik Microbe', 'cursive']
      }
    }
  }
  // plugins: [require('tailwind-scrollbar')({ nocompatible: true })]
}
