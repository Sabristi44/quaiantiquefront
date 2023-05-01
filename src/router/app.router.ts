import  ReservationViewVueConnected  from '@/views/ReservationViewConnected.vue';
import type {RouteRecordRaw} from "vue-router";
import HomeView from '@/views/HomeView.vue';
import HomeConnectedView from '@/views/HomeConnectedView.vue';
import MenuViewVueConnected from '@/views/MenuViewVueConnected.vue';
import DishViewVueConnected from '@/views/DishViewVueConnected.vue';
import AllergyViewVue from '@/views/AllergyView.vue';


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
        component: DishViewVueConnected,
        meta: {
            page: "menu"
        }
    },
    {
        path: "menu",
        beforeEnter: [],
        component: MenuViewVueConnected,
        meta: {
            page: "menu"
        }
    },
    {
        path: "book",
        beforeEnter: [],
        component: ReservationViewVueConnected,
        meta: {
            page: "réserver"
        }
    },
    {
        path: "allergy",
        beforeEnter: [],
        component: AllergyViewVue,
        meta: {
            page: "allergies"
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