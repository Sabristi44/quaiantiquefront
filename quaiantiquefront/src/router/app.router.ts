import type {RouteRecordRaw} from "vue-router";
import HomeView from '@/views/HomeView.vue';
import HomeConnectedView from '@/views/HomeConnectedView.vue';


export const APP_ROUTES: RouteRecordRaw[] = [
    {
        path: "",
        component:  HomeConnectedView,
        meta:{
            page: "accueil"
        }
    },
    {
        path: "dish",
        beforeEnter: [],
        component: HomeConnectedView,
        meta: {
            page: "menu"
        }
    },
    {
        path: "menu",
        beforeEnter: [],
        component: HomeConnectedView,
        meta: {
            page: "menu"
        }
    },
    {
        path: "book",
        beforeEnter: [],
        component: HomeConnectedView,
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