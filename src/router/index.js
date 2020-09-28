/*
Hal-hal yang berubah adalah map dari folder-folder yang sedikit saya rapihkan saja
1. root page '/' saya pindahkan menjadi ke landing page
alamat page : src/views/LandingPage/LandingPage.vue
alamat component : src/components/LandingPage

2.semua auth page juga di rapihkan map foldernya
alamat page : src/views/auth/namafile.vue
alamat component : src/components/AuthPage

3.Semua main page juga di rapihkan map foldernya
alamat page parent : src/views/main/Parent/Main.vue
alamat child : src/views/main/child/namafile.vue
alamat component : src/components/MainPage
*/

import Vue from 'vue'
import VueRouter from 'vue-router'

// ini untuk LandingPage
import LandingPage from '../views/LandingPage/LandingPage.vue'

// ini untuk page-page kategori auth
import Login from '../views/auth/login.vue'
import Register from '../views/auth/Register.vue'
import CreatePin from '../views/auth/CreatePin.vue'
import ResetPassword from '../views/auth/ResetPassword.vue'
import ChangePassword from '../views/auth/ChangePassword.vue'

// ini untuk main page
import Main from '../views/main/Parent/Main.vue'
// component child di main
import Dasboard from '../views/main/Child/Dasboard.vue'
import Transfer from '../views/main/Child/Transfer.vue'
import TopUp from '../views/main/Child/TopUp.vue'
import Profile from '../views/main/Child/Profile.vue'
import PersonalInfo from '../views/main/Child/PersonalInfo.vue'
import ChangePasswordProfile from '../views/main/Child/ChangePassword.vue'
import ChangePIN from '../views/main/Child/ChangePIN.vue'
import ManagePhoneNumber from '../views/main/Child/ManagePhoneNumber.vue'
import AddPhoneNumber from '../views/main/Child/AddPhoneNumber.vue'

// untuk coba-coba aja bisa di hapus nanti ini isinya cuman untuk coba-coba liat komponent
import CobaCoba from '../views/CobaCoba.vue'

// import store
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
  // saya rubah root page nya ke landing page biar sama kayak di figma
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    meta: { requiresVisitor: true }
  },
  {
    path: '/changepassword',
    name: 'ChangePassword',
    component: ChangePassword,
    meta: { requiresVisitor: true }
  },
  // ini router khusus main page
  {
    path: '/main',
    name: 'main',
    component: Main,
    meta: { requiresAuth: true },
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
        path: '/changepasswordprofile',
        component: ChangePasswordProfile
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
  // ini router untuk page coba-coba aja nanti bisa di hapus aja
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
        path: '/main'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
