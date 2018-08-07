import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false


//VUEX
import Vuex from 'vuex'
Vue.use(Vuex)
//.VUEX

//VUE RESOURCE
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.http.headers.common['Content-Type'] = 'application/json';
Vue.http.headers.common['JsonStub-User-Key'] = '9facef2e-9583-4a83-9f08-c87159f1c113';
Vue.http.headers.common['JsonStub-Project-Key'] = '6ed070c1-b334-4612-8fa8-169c5e45baef';
Vue.http.options.root = store.getters.getServer;
//.VUE RESOURCE


//VEE VALIDATE
import VeeValidate, {Validator} from 'vee-validate';
import validatorEs from '@/validator/es';
Validator.localize('es', validatorEs);
Vue.use(VeeValidate);
//.VEE-VALIDATE





new Vue({
	router,
	store,
	VueResource,
	Vuex,
	render: h => h(App)
}).$mount('#app')
