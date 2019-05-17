
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import Split from './components/Split/Split'
import headerSlot from './components/headerSlot/headerSlot'
import './validata'
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.component('Split',Split)
Vue.component('headerSlot',headerSlot)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
