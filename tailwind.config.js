module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      xl: '600px',
    },
    boxShadow: {
     '2xl': '12px 0 8px -4px rgba(38, 49, 63, 0.8), -12px 0 8px -4px rgba(38, 49, 63, 0.8)',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'corporate-bg': 'rgb(238, 238, 230)',
      'corporate-bg2': 'rgb(255, 255, 255)',
    }),
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
