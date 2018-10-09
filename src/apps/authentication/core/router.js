'use strict'

import Vue from 'vue'

import Router from 'vue-router'
import RouteManager from '@/plugins/route-manager'

// Define App Routes
RouteManager.routes({
  all: [
    {
      path: '/',
      name: 'login',
      icon: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    }
  ]
})

// Register Plugins
Vue.use(Router)
Vue.use(RouteManager.mask([ 'name', 'icon' ]))

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: RouteManager.all()
})
