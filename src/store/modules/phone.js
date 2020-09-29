import axios from 'axios'
// import router from '../../router/index'

const phone = {
  state: {
    phoneUser: {}
  },
  mutations: {
    setPhoneUser (state, payload) {
      state.phoneUser = payload
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
    }
  },
  getters: {
    phoneUser (state) {
      return state.phoneUser
    }
  }
}

export default phone
