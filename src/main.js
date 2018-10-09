'use strict'

import Vue from 'vue'
import firebase from 'firebase'

import fbConfig from '@/../config/firebase'

Vue.config.productionTip = false

firebase.initializeApp(fbConfig)

let userLoggedIn = firebase.auth().currentUser

if (userLoggedIn) {
  import(/* webpackChunkName: "dashboard" */ '@/apps/dashboard/core')
    .then(({ default: vm }) => {
      vm.$mount('#app')
    })
} else {
  import(/* webpackChunkName: "authentication" */ '@/apps/authentication/core')
    .then(({ default: vm }) => {
      vm.$mount('#app')
    })
}
