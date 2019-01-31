import Vue from 'vue';
import Router from 'vue-router';

import home from '@/pages/home/home.vue';
import login from '@/pages/login/login.vue';
import t1 from '@/pages/t1.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/home',
      name: 'home',
      component: home
    },



    {
      path: '/',
      name: 't1',
      component: t1
    },
  ]
})
