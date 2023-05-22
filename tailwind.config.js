/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.vue'
  ],
  theme: {
    fontSize: {
      '2xs': ['0.75rem', { lineHeight: '1.25rem' }],
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: require('./typography'),
    extend: {
      boxShadow: {
        glow: '0 0 4px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        lg: '33rem',
        '2xl': '40rem',
        '3xl': '50rem',
        '5xl': '66rem',
      },
      opacity: {
        1: '0.01',
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
      colors: {
        primary: {
            DEFAULT: '#00B4F0',
            '50': '#D7F5FF',
            '100': '#BDEFFF',
            '200': '#8AE2FF',
            '300': '#57D5FF',
            '400': '#24C8FF',
            '500': '#00B4F0',
            '600': '#008EBD',
            '700': '#00688A',
            '800': '#004157',
            '900': '#001B24'
        },
      }
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-content-placeholder')({
      width: '100%',
      bgColor: '#ffffff09',
      placeholders: {
        'paragraph': {
          height: 5, // the height of the container in em
          rows: [ // This class will have 4 rows:
            [100], // A 100% width row
            [100], // Another 100% width row
            [40], // A 40% width row
            [] // And an empty row, to create separation
          ]
        },
        'line-title': {
          height: 1.5,
          rows: [
            [30],
          ]
        },
        'line-preview': {
          height: 1.5,
          rows: [
            [25],
          ]
        }
      }
    }),
  ],

}
