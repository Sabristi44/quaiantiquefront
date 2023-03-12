import { ADMIN_ROUTES } from './admin.router';
import LoginViewVue from  '@/views/LoginView.vue';
import DishViewVue from  '@/views/DishView.vue';
import MenuViewVue from '@/views/MenuView.vue';
import ReservationView from '@/views/ReservationView.vue'
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
      component: DishViewVue
    },
    {
      path: '/menu',
      name: 'menu',
      beforeEnter: [],
      component: MenuViewVue,
    },
    {
      path: '/book',
      name: 'Réservation',
      beforeEnter: [],
      component: ReservationView,
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
