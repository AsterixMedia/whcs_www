import Vue from 'vue'
import firebase from 'firebase'
import VueFire from 'vuefire'

Vue.use(VueFire)

if (firebase.apps.length < 1) {
  firebase.initializeApp({

  })
}
