import { ADMIN_ROUTES } from './admin.router';
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
      path: "/secure/",
      beforeEnter: [],
      children: APP_ROUTES
    },
    {
      path: "/admin/",
      beforeEnter: [],
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
