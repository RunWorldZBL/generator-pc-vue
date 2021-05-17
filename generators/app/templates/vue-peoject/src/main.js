import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引入 veevalidate 表单验证文件
import '@/utils/veevalidate'
import Alert from './components/modules/alert'
Vue.use(Alert)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
