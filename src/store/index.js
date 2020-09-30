import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import phone from './modules/phone'
import history from './modules/history'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    user,
    phone,
    history
  }
})
