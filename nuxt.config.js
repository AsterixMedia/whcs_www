const People = require('./data/people')

let peopleProfileRoutes = People.map(human => `/people/${human.slug}`)

module.exports = {
  // env options
  // ------------
  env: {},
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
  plugins: [
    '~plugins/vuetify',
    '~plugins/vuex-router-sync',
    '~plugins/graphql-request',
    '~plugins/firebase'
  ],
  // build options
  // -------------
  build: {
    vendors: ['vuetify', 'graphql-request', 'firebase'],
    analyze: true
  },
  // modules options
  // ----------------
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/optimize'
  ],
  // generation options
  // ----------------
  generate: {
    routes: [
      '/',
      '/people',
      ...peopleProfileRoutes
    ]
  }
}
