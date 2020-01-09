import App from './App.vue'
import router from './router'
import store from './store'
import { Pagination, Notification, Loading } from 'element-ui'

Vue.config.productionTip = false
window.previousRoute = ''

Vue.use(Pagination)
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$notify = Notification;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
