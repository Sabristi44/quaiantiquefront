import { ADMIN_ROUTES } from './admin.router';
import LoginViewVue from  '@/views/LoginView.vue';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { APP_ROUTES } from './app.router';
import { isAdminGuard, isConnectGuard } from '@/shared/guard/auth.guard';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: [],
      component: HomeView
    },
    {
      path: '/dish',
      name: 'dish',
      beforeEnter: [],
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menu',
      beforeEnter: [],
      component: HomeView
    },
    {
      path: '/book',
      name: 'Réservation',
      beforeEnter: [],
      component: HomeView
    },
    {
      path: "/secure/",
      beforeEnter: [isConnectGuard],
      children: APP_ROUTES
    },
    {
      path: "/admin/",
      beforeEnter: [isAdminGuard],
      children: ADMIN_ROUTES
    },
    {
      path: '/connect',
      beforeEnter: [],
      component: LoginViewVue,
    },
    {
      path: '/:wild(.*)',
      component: () => import("@/components/NotFound.vue"),
    }
  ]
})

export default router
