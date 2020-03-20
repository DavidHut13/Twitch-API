import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import browse from './views/Browse.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/browse',
      name: 'browse',
      component: browse
    }
  ]
})
