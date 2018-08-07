import Vue from 'vue'
import Vuex from 'vuex'

import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource);

export default new Vuex.Store({
  state: {
  	apiserver : 'http://jsonstub.com/etsfintech/symbols',
    symbols : ''
  },
  getters : {
    getServer : state => state.apiserver,
    getAllSymbols : state => state.symbols
  },
  actions : {
   requestAllSymbols : ({commit}) => {

    Vue.http.get('http://jsonstub.com/etsfintech/symbols').then(response => {
      commit('setAllSymbols', response.body);
    });

  }
},
mutations : {
  setAllSymbols (state, symbols){
    state.symbols = symbols;
  }
}
})
