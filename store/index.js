const state = () => ({
  location: '',
  sidebarOpen: false
})

const getters = {
  getLocation: state => state.location,
  isSidebarOpen: state => state.sidebarOpen
}

const mutations = {
  SET_LOCATION (state, value) {
    state.location = value
  },
  TOGGLE_SIDEBAR (state) {
    state.sidebarOpen = !state.sidebarOpen
  },
  SET_SIDEBAR_STATUS (state, value) {
    state.sidebarOpen = value
  }
}

const actions = {
  setLocation ({commit}, value) {
    commit('SET_LOCATION', value)
  },
  toggleSidebar ({commit}) {
    commit('TOGGLE_SIDEBAR')
  },
  setSidebarStatus ({commit}, value) {
    commit('SET_SIDEBAR_STATUS', value)
  }
}

export {
  state,
  getters,
  mutations,
  actions
}
