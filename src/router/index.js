import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/auth/login.vue'
import Register from '../views/auth/Register.vue'
import CreatePin from '../views/auth/CreatePin.vue'
import ResetPassword from '../views/auth/ResetPassword.vue'
import ChangePassword from '../views/auth/ChangePassword.vue'
import Main from '../views/Main.vue'

import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/SignUp',
    name: 'Register',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/createpin',
    name: 'CreatePin',
    component: CreatePin,
    meta: { requiresVisitor: true }
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword,
    meta: { requiresVisitor: true }
  },
  {
    path: '/changepassword',
    name: 'ChangePassword',
    component: ChangePassword,
    meta: { requiresVisitor: true }
  },
  {
    path: '/',
    name: 'main',
    component: Main,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
