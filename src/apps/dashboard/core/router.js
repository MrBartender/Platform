'use strict'

import Vue from 'vue'

import Router from 'vue-router'
import RouteManager from '@/plugins/route-manager'

// Define App Routes
RouteManager.routes({
  sidebar: [
    {
      path: '/',
      name: 'home',
      icon: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      icon: 'info-circle',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ],
  other: [
    { path: '/signin', redirect: '/' }
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
