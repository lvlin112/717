// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from "./store/store.js"
import App from './App'
import router from './router'
import fontsize from "./common/js/fontSize.js"
import reset from "./common/css/reset.css"
import swicss from "../static/js/swiper-3.3.1.min.js"
import swijs from "./assets/css/swiper-3.3.1.min.css"
import font from "./common/css/font_zzxzi9gkmmibe29/iconfont.css"
import axios from "axios"
import animate from "animate.css"
import getcookie from "./tool/getcookie.js"
//import "./tool/getcookie.js"同上效果一样

Vue.prototype.$http=axios

//开发环境中使用模拟数据
import "../mock/mock"

// Vue.prototype.$http=axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created:function(){
	
  }
})

Vue.filter("money",function(val,type){
	return "￥"+val+type
})
