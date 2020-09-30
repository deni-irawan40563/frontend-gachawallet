import axios from 'axios'
// import router from '../../router/index'

const phone = {
  state: {
    phoneUser: {},
    allPhoneUser: []
  },
  mutations: {
    setPhoneUser (state, payload) {
      state.phoneUser = payload
    },
    setAllPhoneUser (state, payload) {
      state.allPhoneUser = payload
    }
  },
  actions: {
    getPhoneUser (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + `/phone/?idUser=${payload}`)
          .then((res) => {
            console.log(res.data.result)
            setex.commit('setPhoneUser', res.data.result)
            resolve(res)
          })
          .catch((err) => {
            reject(new Error(err))
          })
      })
    },

    getAllPhoneUser (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/phone')
          .then((res) => {
            setex.commit('setAllPhoneUser', res.data.result)
            resolve(res)
          })
          .catch((err) => {
            reject(new Error(err))
          })
      })
    },

    searchPhoneUser (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + `/phone/?phone=${payload}`)
          .then((res) => {
            setex.commit('setAllPhoneUser', res.data.result)
            resolve(res)
          })
          .catch((err) => {
            reject(new Error(err))
          })
      })
    },

    updatePhone (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + `/phone/update/${payload.id}`, payload.data)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(new Error(err))
          })
      })
    },

    primary (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + `/phone/primary/${payload.id}`, payload.data)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(new Error(err))
          })
      })
    }
  },
  getters: {
    phoneUser (state) {
      return state.phoneUser
    },
    allPhoneUser (state) {
      return state.allPhoneUser
    }
  }
}

export default phone
