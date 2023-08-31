import type { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  { path: '/preview', name: 'preview', component: () => import('@/views/Preview.vue') }
];
