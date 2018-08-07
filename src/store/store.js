import Vue from 'vue'
import Vuex from 'vuex'

import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource);


import commentsModule from '@/store/modules/comments';

export default new Vuex.Store({
  state: {
  	apiserver : 'http://jsonstub.com/etsfintech/symbols',
    load : false,
    symbols : ''
  },
  getters : {

    getServer : state => state.apiserver,
    getLoad : state => state.load,
    getAllSymbols : state => state.symbols,

  },
  actions : {

    requestAllSymbols : ({commit}) => {
      Vue.http.get('http://jsonstub.com/etsfintech/symbols').then(response => {
        commit('setAllSymbols', response.body);
        commit('setLoaded',true);
      });
    },
    requestSymbol : ({commit}, id) => {

      return new Promise((resolve, reject) => {

        Vue.http.get(id).then(response => {
          resolve(response.body);
        });

      });

    }

  },
  mutations : {
    setAllSymbols (state, symbols){
      state.symbols = symbols;
    },
    setLoaded (state, status){
      state.load = status;
    }
  },
  modules : {
    commentsModule
  }
})
