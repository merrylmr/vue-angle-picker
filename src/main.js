import Vue from 'vue'
import App from './App.vue'
import angleComp from './angle/index.js'

Vue.use(angleComp)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
