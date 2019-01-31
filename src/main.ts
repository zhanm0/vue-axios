import Vue from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies'

import 'styles/style.css'

import router from './router'
import store from './store/'

Vue.use(VueCookies);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
