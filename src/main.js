import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import 'lib-flexible'
import Axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


// Axios({
//   url: 'http://www.shdejia.cn/api/registration/findAll'
// }).then(res => {
//   console.log(res);
// })


// Axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res);
// })


// Axios({
//   url: 'http://123.207.32.32:8000/home/data'
// }).then(res => {
//   console.log(res);
// })



// Axios({
//   url: 'http://www.shdejia.cn/api/client/save'
// }).then(res => {
//   console.log(res);
// })