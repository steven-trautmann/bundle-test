import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Vuetify from '../plugins/vuetify'

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
        const theme = {
          primary: '#E91E63',
          secondary: '#9C27b0',
          accent: '#9C27b0',
          info: '#00CAE3',
          warning: '#FABB00',
          loginAnimation: '#8CBB86',
          backgroundColor: '#9E9E9E'
        }
        Object.assign(Vuetify.framework.theme.themes.light, theme)
        Object.assign(Vuetify.framework.theme.themes.dark, theme)
        return data.title
      })
    }
  }
});
