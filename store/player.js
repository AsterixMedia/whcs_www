const state = () => ({
  sources: ['http://192.184.9.158:8629/stream']
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
