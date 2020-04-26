import Vue from 'vue'
import router from './router'

import AtmLogin from './components/login/AtmLogin'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(ViewUI)

new Vue({
  router
}).$mount('#auth')
