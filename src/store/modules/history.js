import axios from 'axios'
// import router from '../../router/index'

const history = {
  state: {
    historyUser: {}
  },
  mutations: {
    setHistoryUser (state, payload) {
      state.historyUser = payload
    }
  },
  actions: {
    getHistoryUser (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + `/histories/?idUser=${payload}`)
          .then((res) => {
            console.log(res.data.result)
            setex.commit('setHistoryUser', res.data.result)
            resolve(res)
          })
          .catch((err) => {
            reject(new Error(err))
          })
      })
    },

    transfer (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + `/histories/transfer/${payload.id}`, payload.data)
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
    historyUser (state) {
      return state.historyUser
    }
  }
}

export default history
