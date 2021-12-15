const extraConfig=(process.env.NODE_ENV==="production"?{
  purge:{
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  }
}:{})
module.exports = {
  //mode: 'jit',
  ...extraConfig,
  theme: {
    extend: {
      colors: {
        change: 'black',
        sanjoseText:'rgba(0, 0, 0, 0.7)'
      },
    },
    fontFamily:{
      'sans':['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      'serif':['Garamond', 'Baskerville', 'Baskerville Old Face', 'Hoefler Text', 'Times New Roman', 'serif']
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
