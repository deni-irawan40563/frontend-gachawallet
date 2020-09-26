import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/auth/login.vue'
import Register from '../views/auth/Register.vue'
import CreatePin from '../views/auth/CreatePin.vue'
import ResetPassword from '../views/auth/ResetPassword.vue'

import Main from '../views/Main.vue'
// component child di main
import Dasboard from '../views/main/Dasboard.vue'
import Transfer from '../views/main/Transfer.vue'
import TopUp from '../views/main/TopUp.vue'
import Profile from '../views/main/Profile.vue'

// untuk coba-coba aja
import CobaCoba from '../views/CobaCoba.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/SignUp',
    name: 'Register',
    component: Register
  },
  {
    path: '/createpin',
    name: 'CreatePin',
    component: CreatePin
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/dasboard',
        component: Dasboard
      },
      {
        path: '/transfer',
        component: Transfer
      },
      {
        path: '/topup',
        component: TopUp
      },
      {
        path: '/profile',
        component: Profile
      }
    ]
  },
  {
    path: '/cobacoba',
    name: 'cobacoba',
    component: CobaCoba
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
