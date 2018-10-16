'use strict'

import Vue from 'vue'
import firebase from 'firebase'
import firebaseConfig from '@/../firebase/config'

firebase.initializeApp(firebaseConfig)
Vue.config.productionTip = false

// Build the app based on auth state
const buildAppInstance = (user) => {
  if (user) {
    import(/* webpackChunkName: "dashboard" */ '@/apps/dashboard/core')
      .then(({ default: vm }) => {
        vm.$mount('#app')
      })
  } else {
    import(/* webpackChunkName: "platform" */ '@/apps/platform/core')
      .then(({ default: vm }) => {
        vm.$mount('#app')
      })
  }
}

// get auth state and build the app accordingly
firebase.auth().getRedirectResult()
  .then((result) => {
    buildAppInstance(firebase.auth().currentUser)
  })
  .catch(() => {
    buildAppInstance(null)
  })
