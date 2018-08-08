import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/views/home'
import symbol_view from '@/components/views/symbol-view'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/activo/:id',
      name: 'activo',
      component: symbol_view
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})
