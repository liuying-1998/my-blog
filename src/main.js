// 入口文件，只需要负责启动vue，渲染组件
// import './mock';
import Vue from 'vue';
import App from './App.vue';
import './styles/global.less';
import router from './router';
import showMessage from './utils/showMessage';
Vue.prototype.$showMessage = showMessage;
import './eventBus';
import store from './store/index';

store.dispatch("setting/fetchSetting");


// 注册全局指令
import vLoading from './directives/loading';
Vue.directive("loading", vLoading);

import vLazy from './directives/lazy';
Vue.directive('lazy', vLazy);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// window.store = store;

// 测试api
// import * as blogApi from './api/blog';

// blogApi.getBlogTypes().then(r => {
//   console.log('博客分类',r)
// })

// blogApi.getBlogs(1,10,1).then(r => {
//   console.log('博客',r)
// })

// blogApi.getBlog().then(r => console.log('博客文章', r))

// blogApi.getComments().then(r=> console.log('评论',r))

// import eventBus from './eventBus'

// function handler1(data) {
//   console.log("handler1", data);
// }

// function handler2(data) {
//   console.log('handler2',data)
// }

// eventBus.$on("event1", handler1);
// eventBus.$on("event1", handler2);
// eventBus.$on("event2", handler1);

// window.eventBus = eventBus;
// window.handler1 = handler1;
// window.handler2 = handler2;

// import { getSetting } from "./api/setting";
// getSetting().then(resp => console.log(resp))

// import { getAbout } from "./api/about";
// getAbout().then(res => console.log(res));