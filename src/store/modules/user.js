import axios from 'axios'
import router from '../../router/index'

const user = {
  state: {
    user: {},
    token: localStorage.getItem('token') || null,
    resetId: localStorage.getItem('resetId') || null,
    name: localStorage.getItem('name') || null,
    firstName: localStorage.getItem('firstName') || null,
    lastName: localStorage.getItem('lastName') || null,
    userImage: localStorage.getItem('userImage') || null,
    userEmail: localStorage.getItem('userEmail') || null,
    phoneNumber: localStorage.getItem('phoneNumber') || null,
    userId: localStorage.getItem('userId') || null,
    saldo: localStorage.getItem('saldo') || null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
      state.userId = payload.id
      state.name = (payload.firstName + ' ' + payload.lastName)
      state.firstName = (payload.firstName)
      state.lastName = (payload.lastName)
      state.userEmail = (payload.email)
      state.userImage = payload.image
      state.phoneNumber = payload.phoneNumber
    },
    setResetId (state, payload) {
      state.resetId = payload
    },
    setToken (state, payload) {
      state.token = payload
    },
    setSaldo (state, payload) {
      state.saldo = payload
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
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/login/', payload)
          .then((res) => {
            console.log(res.data.result)
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            localStorage.setItem('name', res.data.result.firstName + ' ' + res.data.result.lastName)
            localStorage.setItem('firstName', res.data.result.firstName)
            localStorage.setItem('lastName', res.data.result.lastName)
            localStorage.setItem('userEmail', res.data.result.email)
            localStorage.setItem('userImage', res.data.result.image)
            localStorage.setItem('phoneNumber', res.data.result.phoneNumber)
            localStorage.setItem('userId', res.data.result.id)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    register (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/register/', payload)
          .then((res) => {
            resolve(res.data.result[0])
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    forgotPassword (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/forgotpassword/', payload)
          .then((res) => {
            setex.commit('setResetId', res.data.result)
            localStorage.setItem('resetId', this.state.resetId)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    resetPassword (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + `/users/resetpassword/${payload.id}`, payload)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    logout () {
      return new Promise((resolve, reject) => {
        localStorage.removeItem('token')
        localStorage.removeItem('userRoleId')
        localStorage.removeItem('userImage')
        localStorage.removeItem('userName')
        localStorage.removeItem('name')
        localStorage.removeItem('userId')
        localStorage.removeItem('phoneNumber')
        localStorage.removeItem('bio')
        localStorage.removeItem('resetId')
        axios.post(process.env.VUE_APP_BASE_URL + '/users/logout/' + this.state.userId)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getUserId (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + `/users/${payload}`)
          .then((res) => {
            console.log(res.data.result[0])
            setex.commit('setSaldo', res.data.result[0].saldo)
            localStorage.setItem('saldo', res.data.result[0].saldo)
            resolve(res)
          })
          .catch((err) => {
            reject(new Error(err))
          })
      })
    },
    getResetId (setex, payload) {
      setex.commit('setResetId', payload)
      localStorage.setItem('resetId', payload)
    },

    confirmPassword (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/confirmpassword/', payload)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
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
    },
    name (state) {
      return state.name
    },
    userImage (state) {
      return state.userImage
    },
    phoneNumber (state) {
      return state.phoneNumber
    },
    userId (state) {
      return state.userId
    },
    saldo (state) {
      return state.saldo
    },
    firstName (state) {
      return state.firstName
    },
    lastName (state) {
      return state.lastName
    },
    userEmail (state) {
      return state.userEmail
    }
  }
}

export default user
