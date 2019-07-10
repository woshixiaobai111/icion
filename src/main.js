import Vue from 'vue'
// 1.1 路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 2.1 我们不使用这个vue-resource的包，我们选择axios
import axios from 'axios';
axios.defaults.baseURL = 'http://www.liulongbin.top:3005';
// 这是修改Vue的原型，可以让我们使用axios和vue-resource类似，直接使用 this.$http.xxx 就可以使用了
Vue.prototype.$http= axios;


// 拦截器配置，  这是请求拦截器，所有请求发送出去之前都要走这里
axios.interceptors.request.use(function (config) {
  console.log('所有请求发出成功之前--1：', config)
  return config;
}, function (error) {
  console.log('所有请求发出 失败 之前--1：', error)
  return Promise.reject(error);
});

// 服务器响应拦截器，所有的数据返回之前 都要走这里
axios.interceptors.response.use(function (response) {
  console.log('所有成功响应 先走拦截器里--2：', response)
  return response.data;
}, function (error) {
  console.log('所有失败响应 先走拦截器里--2：', error)
  return Promise.reject(error);
});

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'


// 按需导入 Mint-UI 中的组件， 工作里面都是按需导入，就是说我们需要什么组件我们就导入什么组件，并不用把所有的文件都导入进来
/* import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload); */
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 1.3 导入自己的 router.js 路由模块
import router from './router.js'

// 导入 App 根组件
import app from './App.vue'
var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
})