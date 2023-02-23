import { isConnectGuard} from '@/shared/guard/auth.guard';
import type {RouteRecordRaw} from "vue-router";
import LoginViewVue from '@/views/LoginView.vue';


export const APP_ROUTES: RouteRecordRaw[] = [
    {
        path: "/home",
        component: LoginViewVue,
        meta:{
            page: "accueil"
        }
    },
    {
        path: "/dish",
        beforeEnter: [],
        component: LoginViewVue,
        meta: {
            page: "menu"
        }
    },
    {
        path: "/book",
        beforeEnter: [],
        component: LoginViewVue,
        meta: {
            page: "réserver"
        }
    },
    {
        path: "/logout",
        beforeEnter: [isConnectGuard],
        component: LoginViewVue,
        meta: {
            page: "dash"
        }
    }
]