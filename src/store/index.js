import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: ''
  },
  mutations: {
    SET_MESSAGE (state, message) {
      state.message = message
    }
  },
  actions: {
    getMessage({ commit }) {
      return axios.get('https://jsonplaceholder.typicode.com/posts/1').then(({ data }) => {
        commit('SET_MESSAGE', data.title)
        return data.title
      })
    }
  }
});
