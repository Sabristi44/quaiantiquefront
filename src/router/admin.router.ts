import type {RouteRecordRaw} from "vue-router";
import HomeAdminVue from '@/views/HomeAdminView.vue';
import ScheduleAdminVue from '@/views/ScheduleAdminView.vue';
import HomeView from '@/views/HomeView.vue';
import dishAdminVue from '@/views/DishAdminView.vue';
import MenuAdminVue from '@/views/MenuAdminView.vue';

export const ADMIN_ROUTES: RouteRecordRaw[] = [
    {
        path: "",
        component: HomeAdminVue,
        meta:{
            page: "accueil"
        }
    },
    {
        path: "dish",
        beforeEnter: [],
        component: dishAdminVue,
        meta: {
            page: "menu"
        }
    },
    {
        path: "menu",
        beforeEnter: [],
        component: MenuAdminVue,
        meta: {
            page: "menu"
        }
    },
    {
        path: "schedule",
        beforeEnter: [],
        component: ScheduleAdminVue,
        meta: {
            page: "horaire"
        }
    },
    {
        path: "logout",
        beforeEnter: [],
        component: HomeView,
        meta: {
            page: "déconnexion"
        }
    }
]