// import Vue from 'vue'
// import App from './App.vue'
// import router from '@/router/index.js';
// import VueRouter from "vue-router";
// // import './common/plugins/bootstrap-vue'
// // import './common/plugins/vue-slick'
// Vue.config.productionTip = false
//
// Vue.use(VueRouter);
//
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Main from '@/views/main.vue'
import Index from '@/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  }
]

const router = new VueRouter({
  mode: 'hash',
  // base: '/app/',
  routes
});



Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')