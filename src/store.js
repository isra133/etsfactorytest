import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	apiserver : 'https://back.dcoop.es'
  },
  getters : {
    getServer : state => state.apiserver,
  },
  mutations: {

  },
  actions: {

  }
})
