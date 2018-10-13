'use strict'

import Vue from 'vue'

// Register Core Components
import Dashboard from '../Dashboard.vue'
import router from './router'
import store from './store'

// Register Plugins
import UIFramework from '@/plugins/ui-framework'
import SignOut from '@/plugins/auth/signout'

Vue.use(UIFramework)
Vue.use(SignOut)

export default new Vue({
  router,
  store,
  render: (h) => h(Dashboard)
})
