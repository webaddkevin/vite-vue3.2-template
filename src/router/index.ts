import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: () => import('views/home/index.vue'),
  },
  {
    path: '/about',
    component: () => import('views/about/index.vue'),
  },
  {
    path: '/component',
    component: () => import('views/component/index.vue'),
  },
  {
    path: '/emits',
    component: () => import('views/emits/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
