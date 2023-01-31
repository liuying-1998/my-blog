import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

import {
  titleController
} from "../utils";

if (!window.VueRouter) {
  Vue.use(VueRouter); //使用vue的插件router
}


const router = new VueRouter({
  routes, //路由匹配规则
  mode: 'history',
});

router.afterEach((to, from) => {
  if (to.meta.title) {
    titleController.setRouterTitle(to.meta.title)
  }
})

export default router;