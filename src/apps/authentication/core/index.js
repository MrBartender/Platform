'use strict'

import Vue from 'vue'
// import firebase from 'firebase'

// Register Core Components
import Authentication from '../Authentication.vue'
import router from './router'

// const googleAuth = new firebase.auth.GoogleAuthProvider()
// firebase.auth().signInWithRedirect(googleAuth)

export default new Vue({
  router,
  render: (h) => h(Authentication)
})
