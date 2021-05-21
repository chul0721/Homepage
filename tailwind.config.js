module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nanum: ['NanumGothic'],
        blackhansans: ['BlackHanSans'],
        dohyeon: ['DoHyeon']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
