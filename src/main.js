import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BFormInput } from 'bootstrap-vue'
import { BNavbar } from 'bootstrap-vue'
import router from './router'

Vue.component('b-form-input', BFormInput)
Vue.component('b-navbar', BNavbar)
Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
