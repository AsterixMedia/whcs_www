const state = () => ({
  sources: [
    'http://streams.museter.com:8629/stream'
  ]
})

const getters = {
  getAudioSources: state => state.sources
}

const mutations = {}

const actions = {}

export {
  state,
  getters,
  mutations,
  actions
}
