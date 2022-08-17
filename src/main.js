import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import routes from './router/router.js'
import store from './store'
import VueRouter from 'vue-router'
import '@/config/rem'

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'hash',
})
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')