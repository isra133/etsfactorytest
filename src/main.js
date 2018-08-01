import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


//VUEX
import Vuex from 'vuex'
Vue.use(Vuex)
//.VUEX


//AXIOS
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = store.state.apiserver;
//.AXIOS


new Vue({
  router,
  store,
  Vuex,
  render: h => h(App)
}).$mount('#app')
