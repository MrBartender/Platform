'use strict'

import Vue from 'vue'

// Register Core Components
import router from './router'
import Platform from '../Platform.vue'
import SignIn from '@/plugins/auth/signin'

Vue.use(SignIn)

export default new Vue({
  router,
  render: (h) => h(Platform)
})
