import {useUserStore} from "@/stores/user.store";



export function isConnectGuard(){
    const userStore = useUserStore()
    console.log("coucou1" + localStorage.getItem("user"));
    console.log("coucou2" + userStore.currentUser.admin );
    if(userStore.currentUser.admin){
        return "/admin";
    } else if(localStorage.getItem("user") == null){
       return "/connect";
        }
    }

export function isAdminGuard(){
    const userStore = useUserStore()
    console.log("coucou1" + localStorage.getItem("user"));
    console.log("coucou2" + userStore.currentUser.admin );
    if(localStorage.getItem("user") != null){
        if (userStore.currentUser.admin == false){
            return "/secure";
        }
    }
    else {
        return "/connect";
    }
}