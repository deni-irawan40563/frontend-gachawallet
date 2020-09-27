import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: localStorage.getItem('token') || null,
    resetId: localStorage.getItem('resetId') || null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setResetId (state, payload) {
      state.resetId = payload
    },
    setToken (state, payload) {
      state.token = payload
    }
  },
  actions: {
    interceptorsResponse (setex) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        console.log(error.response.data.result)
        localStorage.removeItem('token')
        setex.commit('setToken', null)
        router.push('/login')
        return Promise.reject(error)
      })
    },
    interceptorsRequest (setex) {
      console.log('interse')
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${setex.state.token}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    login (setex, payload) {
      // setex.commit('setNotif', 'loading')
      if (!payload.email) {
        // setex.commit('setNotif', 'Please insert your email')
      }
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/login/', payload)
          .then((res) => {
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', this.state.token)
            // localStorage.setItem('userImage', this.state.userImage)
            // localStorage.setItem('userName', this.state.userName)
            // localStorage.setItem('name', this.state.name)
            // localStorage.setItem('phoneNumber', this.state.phoneNumber)
            // localStorage.setItem('bio', this.state.bio)
            // localStorage.setItem('userId', this.state.userId)
            // setex.commit('setNotif', 'Wellcome ' + res.data.result.name)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            // alert(err.response.data.result)
            // setex.commit('setNotif', err.response.data.result)
            // setex.commit('setNotifActive', true)
            reject(err)
          })
      })
    },
    register (setex, payload) {
      // setex.commit('setNotif', 'loading')
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/register/', payload)
          .then((res) => {
            // setex.commit('setNotif', res.data.result)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            // alert(err.response.data.result)
            // setex.commit('setNotif', err.response.data.result)
            reject(err)
          })
      })
    },
    forgotPassword (setex, payload) {
      // setex.commit('setNotif', 'loading')
      // console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/forgotpassword/', payload)
          .then((res) => {
            setex.commit('setResetId', res.data.result)
            localStorage.setItem('resetId', this.state.resetId)
            // console.log(res.data.message)
            // setex.commit('setNotif', res.data.message)
            resolve(res)
          })
          .catch((err) => {
            // setex.commit('setNotif', err.response.data.result)
            reject(err)
          })
      })
    },
    resetPassword (setex, payload) {
      // console.log(payload)
      // setex.commit('setNotif', 'loading')
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + `/users/resetpassword/${this.state.resetId}`, payload)
          .then((res) => {
            // console.log(res.data.message)
            // setex.commit('setNotif', 'reset password success')
            resolve(res)
          })
          .catch((err) => {
            // setex.commit('setNotif', err.response.data.result)
            reject(err)
          })
      })
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    resetId (state) {
      return state.resetId
    },
    isLogin (state) {
      return state.token !== null
    },
    token (state) {
      return state.token
    }
  },
  modules: {
  }
})
