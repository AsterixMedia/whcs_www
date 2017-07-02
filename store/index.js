const state = () => ({
  location: '',
  sidebarOpen: true,
  playerDrawerOpen: true
})

const getters = {
  getLocation: state => state.location,
  isSidebarOpen: state => state.sidebarOpen,
  isPlayerDrawerOpen: state => state.playerDrawerOpen
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
  },
  TOGGLE_PLAYER_DRAWER (state) {
    state.playerDrawerOpen = !state.playerDrawerOpen
  },
  SET_PLAYER_DRAWER_STATUS (state, value) {
    state.playerDrawerOpen = value
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
  },
  togglePlayerDrawer ({commit}) {
    commit('TOGGLE_PLAYER_DRAWER')
  },
  setPlayerDrawerStatus ({commit}, value) {
    commit('SET_PLAYER_DRAWER_STATUS', value)
  }
}

export {
  state,
  getters,
  mutations,
  actions
}
