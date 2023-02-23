import {defineStore} from "pinia";
import type { User, UserConnectInterface} from "@/shared/interface/user.interface";
import { loginUserService, addAllergiesService } from "@/service/user.service";
import { defaultUser } from "@/shared/interface/user.interface";


interface UserStoreInterface{
    isConnected : boolean,
    currentUser: User,
    isAdmin: boolean,
}


export const useUserStore = defineStore("userStore", {
    state: (): UserStoreInterface => ({
        isConnected: false,
        currentUser: defaultUser,
        isAdmin: false,
    }),
    actions: {
        async goConnect (formConnect: UserConnectInterface) {
            try {
                const response = await loginUserService(formConnect);
                this.currentUser = response;
                localStorage.setItem('user', JSON.stringify(response));
            } catch (e) {
                console.log("erreur" + e);
            }
        },
        logout(){
            this.currentUser = defaultUser;
            localStorage.removeItem('user');
        },
        async updateAllergies(allergies: String)
        {
            try {
            addAllergiesService(this.currentUser.id,allergies);
            } catch(e) {
                console.log("erreur" + e);
            }
        },
    }
})