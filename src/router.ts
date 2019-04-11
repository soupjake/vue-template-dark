import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/home.vue';
import Services from '@/components/services/services.vue';
import Biography from '@/components/biography/biography.vue';
import Blog from '@/components/blog/blog.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/biography',
      name: 'biography',
      component: Biography
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 300)
    })
  }
})
