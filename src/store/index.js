import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
console.log('lefut')
const onlyOne = new Vuex.Store({
  state: {
    message: '!needs to be updated!',
    static: 'statikus üzenet',
    counter: 0
  },
  getters: {
    dynamicMessage: state => state.message,
    staticMessage: state => state.static,
    counterState: state => state.counter
  },
  mutations: {
    SET_MESSAGE (state, message) {
      state.message = message
    },
    ADD_TO_COUNTER (state) {
      state.counter++
      console.log(state.counter)
    }
  },
  actions: {
    getMessage({ commit }) {
      return axios.get('https://jsonplaceholder.typicode.com/posts/1').then(({ data }) => {
        commit('SET_MESSAGE', data.title)
        return data.title
      })
    },
    addToCounter({ commit }) {
      commit('ADD_TO_COUNTER')
    }
  }
})

export default onlyOne;
