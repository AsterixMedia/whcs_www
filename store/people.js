const state = () => ({
  profileOpen: false,
  name: '',
  img: '',
  bio: '',
  social: {}
})

const getters = {
  isProfileOpen: state => state.profileOpen,
  getProfileInfo: state => {
    let { profileOpen, ...info } = state
    return info
  }
}

const mutations = {
  SET_PROFILE_STATUS (state, value) {
    state.profileOpen = value
  },
  CLOSE_PROFILE (state) {
    state.profileOpen = false
  },
  ACTIVATE_PROFILE (state) {
    state.profileOpen = true
  }
}

const actions = {
  setProfileStatus ({commit}, value) {
    commit('SET_PROFILE_STATUS', value)
  },
  activateProfile ({commit}) {
    commit('ACTIVATE_PROFILE')
  },
  closeProfile ({commit}) {
    commit('CLOSE_PROFILE')
  }
}

export {
  state,
  getters,
  mutations,
  actions
}
