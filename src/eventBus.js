// const listeners = {};

// // 导出事件总线
// export default {
//   // 监听某一事件
//   $on(eventName, handler) {
//     if (!listeners[eventName]) {
//       listeners[eventName] = new Set();
//     }
//     listeners[eventName].add(handler)
//   },
//   // 取消监听
//   $off(eventName, handler) { 
//     if (!listeners[eventName]) {
//       return
//     }
//     listeners[eventName].delete(handler)
//   },
//   // 触发事件
//   $emit(eventName, ...arg) {
//     if (!listeners[eventName]) {
//       return
//     }
//     for (const handler of listeners[eventName]) {
//       handler(...arg);
//     }
//   }
// }


// 等同于
import Vue from 'vue';
const app = new Vue({});

/*
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的dom元素，如果是undefined，则表示dom元素已经不存在
 *
 * 事件名：setMainScroll
 * 含义：当需要设置主区域滚动条位置时触发
 * 参数：
 * - 滚动高度
 */
Vue.prototype.$bus = app;

// 导出事件总线，使其他js文件页可以使用
export default app; 