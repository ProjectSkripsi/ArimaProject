import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import Home from './views/Home.vue'
import Distribution from '../src/components/Distribution.vue'
import invoice from '../src/components/NewInvoice.vue'
import Agen from '../src/components/Agent.vue'
import dashboard from '@/components/dashboard.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/login',
      name: 'login',
      // components: Login,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/signup.vue')
    },
    {
      path: '/recover-password',
      name: 'lostpassword',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/lostpassword.vue')
    },
    {
      path: '/agent',
      name: 'Agen',
      component: Agen
    },
    {
      path: '/product',
      name: 'Product',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Product.vue')
    },
    {
      path: '/distribution',
      name: 'Distribution',
      component: Distribution,
      children: [
        {
          path: '/distribution/:id',
          name: 'invoice',
          component: () => import('./components/NewInvoice.vue'),
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router