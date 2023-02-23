import {isConnectGuard } from '@/shared/guard/auth.guard'
import LoginViewVue from  '@/views/LoginView.vue';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { APP_ROUTES } from './app.router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dish',
      name: 'dish',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menu',
      component: HomeView
    },
    {
      path: '/book',
      name: 'Réservation',
      component: HomeView
    },
    {
      path: "/secure",
      beforeEnter: [isConnectGuard],
      component: HomeView,
      children: APP_ROUTES
    },
    {
      path: '/connect',
      beforeEnter: [isConnectGuard],
      component: LoginViewVue,
    },
    {
      path: '/:wild(.*)',
      component: () => import("@/components/NotFound.vue"),
    }
  ]
})

export default router
