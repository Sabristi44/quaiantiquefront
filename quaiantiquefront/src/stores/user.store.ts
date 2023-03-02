import type{ UserAllergies } from './../shared/interface/user.interface';
import {defineStore} from "pinia";
import type { User, UserConnectInterface} from "@/shared/interface/user.interface";
import { loginUserService, addAllergiesService } from "@/service/user.service";
import { defaultUser } from "@/shared/interface/user.interface";


interface UserStoreInterface{
    currentUser: User,
}


export const useUserStore = defineStore("userStore", {
    state: (): UserStoreInterface => ({
        currentUser: defaultUser,
    }),
    actions: {
        async goConnect (formConnect: UserConnectInterface) {
            try {
                const response = await loginUserService(formConnect);
                this.currentUser = response;
                localStorage.setItem('user', JSON.stringify(this.currentUser));
            } catch (e) {
                console.log("erreur" + e);
            }
        },
        logout(){
            this.currentUser = defaultUser;
            localStorage.removeItem('user');
        },
        async updateAllergies(allergies: UserAllergies)
        {
            try {
            addAllergiesService(this.currentUser.id,allergies.allergies);
            this.currentUser.allergies = allergies.allergies;
            } catch(e) {
                console.log("erreur" + e);
            }
        },
    }
})