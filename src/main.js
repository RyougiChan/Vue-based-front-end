import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Pagination, Notification } from 'element-ui'

Vue.config.productionTip = false
window.previousRoute = ''
Vue.use(Pagination)
Vue.use(Notification)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
