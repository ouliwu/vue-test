import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import * as $http from './request'

Vue.prototype.$http = $http
Vue.config.productionTip = false
Vue.use(MintUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
