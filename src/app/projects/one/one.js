import Vue from 'vue'
import one from './one.vue'

Vue.config.productionTip = false

new Vue({
  el:'#one',
  render: h=>h(one)
  })