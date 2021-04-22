import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import axios from 'axios'
axios.defaults.baseURL = 'https://ypyh.gdzc100.com/api'


Vue.prototype.$http = axios

Vue.use(VueAwesomeSwiper /* { default options with global component } */)
Vue.use(ElementUI)
new Vue({

  router,
  store,
  render: h => h(App)
}).$mount('#app')
