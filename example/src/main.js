import Vue from 'vue'
import App from './App.vue'
import anglePicker from './angle/index.js'

Vue.use(anglePicker)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
