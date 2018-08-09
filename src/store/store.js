import Vue from 'vue'
import Vuex from 'vuex'

import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource);


import commentsModule from '@/store/modules/comments';

export default new Vuex.Store({
  state: {
  	apiserver : 'http://jsonstub.com/etsfintech/symbols',
    symbols : '',
  },
  getters : {

    getServer : state => state.apiserver,
    getAllSymbols : state => state.symbols,
    getCategoriesToFilter : state => {
     let categories = ['name', 'currency', 'risk_family'];
     return categories;
   },
   getSymbolsfiltered(state) {
    return (params) => {

      let symbols = new Array();

      if(!!state.symbols){

        if(params.searchIn.length != 0){

          state.symbols.forEach(symbol => {

            params.searchIn.forEach(s => {

              if(symbol[s].toLowerCase().includes(params.searchText.toLowerCase()) && !symbols.some(s => s.id == symbol.id)){
                symbols.push(symbol);
              }

            });

          });

        }else{

          symbols = state.symbols;
          
        }

        

      }

      return symbols;

    }
  }

},
actions : {

  requestAllSymbols : ({commit}) => {
    Vue.http.get('http://jsonstub.com/etsfintech/symbols').then(response => {
      commit('setAllSymbols', response.body);
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
  }
},
modules : {
  commentsModule
}
})
