module.exports = {
  // head options
  // ------------
  head: {
    titleTemplate: '%s - WHCS Radio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Where Hunter College Speaks' }
    ]
  },
  // css options
  // -----------
  css: [
    { src: '~assets/styles/app.styl', lang: 'stylus' }
  ],
  // plugins options
  // ---------------
  plugins: ['~plugins/vuetify'],
  // build options
  // -------------
  build: {
    vendors: ['vuetify']
  }
}
