import {useUserStore} from "@/stores/user.store";
import {useRouter} from "vue-router";

export function isConnectGuard(){
    const userStore = useUserStore()
    if(userStore.isConnected){
        return '/secure';
    }
}

export function isAdminGuard(){
    const userStore = useUserStore()
    if (userStore.currentUser.isAdmin){
        return "/admin";
    }
}