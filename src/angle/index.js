import angleComp from './Angle.vue'

const install = function (Vue) {
  console.log('angleComp',angleComp.name)
  Vue.component(angleComp.namae, angleComp)
}
export default angleComp