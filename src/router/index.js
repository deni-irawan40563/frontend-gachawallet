import Vue from 'vue'
import VueRouter from 'vue-router'

import LandingPage from '../views/LandingPage/LandingPage.vue'

import Login from '../views/auth/login.vue'
import Register from '../views/auth/Register.vue'
import CreatePin from '../views/auth/CreatePin.vue'
import ResetPassword from '../views/auth/ResetPassword.vue'
import ChangePassword from '../views/auth/ChangePassword.vue'

import Main from '../views/Main.vue'
// component child di main
import Dasboard from '../views/main/Dasboard.vue'
import Transfer from '../views/main/Transfer.vue'
import TopUp from '../views/main/TopUp.vue'
import Profile from '../views/main/Profile.vue'


// child profile
import PersonalInfo from '../views/main/profile/PersonalInfo.vue'
import ChangePassword from '../views/main/profile/ChangePassword.vue'
import ChangePIN from '../views/main/profile/ChangePIN.vue'
import ManagePhoneNumber from '../views/main/profile/ManagePhoneNumber.vue'
import AddPhoneNumber from '../views/main/profile/AddPhoneNumber.vue'
// untuk coba-coba aja
import CobaCoba from '../views/CobaCoba.vue'

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
    path: '/landingPage',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/main',
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
      },
      {
        path: '/personalInfo',
        component: PersonalInfo
      },
      {
        path: '/changePassword',
        component: ChangePassword
      },
      {
        path: '/changePIN',
        component: ChangePIN
      },
      {
        path: '/managePhoneNumber',
        component: ManagePhoneNumber
      },
      {
        path: '/addPhoneNumber',
        component: AddPhoneNumber
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
