import Firebase from 'firebase'
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types'

const state = () => ({
  email: 'test@test.com',
  password: 'testtest',
  loading: false,
  error: '',
  user: null
})

const getters = {
  getEmail: state => state.email,
  getPassword: state => state.password,
  isLoading: state => state.loading,
  getError: state => state.error,
  getUser: state => state.user,
  isSignedIn: state => !!state.user
}

const mutations = {
  [EMAIL_CHANGED] (state, email) {
    state.email = email
  },
  [PASSWORD_CHANGED] (state, password) {
    state.password = password
  },
  [LOGIN_USER] (state) {
    state.loading = true
  },
  [LOGIN_USER_SUCCESS] (state, user) {
    state.user = user
    state.loading = false
    state.password = ''
    state.email = ''
  },
  [LOGIN_USER_FAIL] (state, error) {
    state.error = error
    state.loading = false
    state.password = ''
  }
}

const actions = {
  emailChanged ({commit}, email) {
    commit(EMAIL_CHANGED, email)
  },
  passwordChanged ({commit}, password) {
    commit(PASSWORD_CHANGED, password)
  },
  loginUser ({commit, state}) {
    commit(LOGIN_USER)
    const {email, password} = state
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => commit(LOGIN_USER_SUCCESS, user))
      .catch(error => commit(LOGIN_USER_FAIL, error.message))
  }
}

export {
  state,
  getters,
  mutations,
  actions
}
