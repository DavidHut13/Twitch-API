import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    access_token: null
  },

  getters: {
    getAccessToken: state => {
      return state.access_token;
    }
  },
  mutations: {
    updateAccessToken: (state,token) => {
      state.access_token = token
}
  },
  actions: {
    saveAccessToken(context,token) {
      context.commit('updateAccessToken',token)
    }
  }
})
