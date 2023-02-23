import type {RouteRecordRaw} from "vue-router";
import HomeAdminVue from '@/views/HomeAdminView.vue';
import HomeView from '@/views/HomeView.vue';

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
        component: HomeAdminVue,
        meta: {
            page: "menu"
        }
    },
    {
        path: "menu",
        beforeEnter: [],
        component: HomeAdminVue,
        meta: {
            page: "menu"
        }
    },
    {
        path: "book",
        beforeEnter: [],
        component: HomeAdminVue,
        meta: {
            page: "réserver"
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