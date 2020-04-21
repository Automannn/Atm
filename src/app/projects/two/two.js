import Vue from 'vue'
import two from './two.vue'

Vue.config.productionTip = false

new Vue({
  el:'#two',
  render: h=>h(two)
  })
