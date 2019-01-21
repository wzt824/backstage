// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
//全局引入Eelement
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/styles/font-awesome.min.css'
import './assets/styles/public.css'
//全局引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import $ from '../static/js/jquery-1.8.3.min'

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render (h){
    return h(App)
  }
})
