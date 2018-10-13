'use strict'

import Vue from 'vue'

import Router from 'vue-router'

// Register Plugins
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      icon: 'home',
      component: () => import(/* webpackChunkName: "platform-home" */ '../views/Home.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      icon: 'signin',
      component: () => import(/* webpackChunkName: "platform-signin" */ '../views/SignIn.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
