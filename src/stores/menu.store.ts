import type { addMenuInterface, menuInterface } from "@/shared/interface/menu.interface";
import {defineStore} from "pinia";
import { addMenuService, getAllMenuesService } from '@/service/menu.service';


interface MenuStoreInterface{
    menues: menuInterface[],
}


export const useMenuStore = defineStore("menuStore", {
    state: (): MenuStoreInterface => ({
        menues:  [],
    }),
    actions: {
        async addMenu (formValues: addMenuInterface) {
            try {
                const response = await addMenuService(formValues);
                if(response) {
                    this.menues.push(response)
                }
            } catch (e) {
                console.log("erreur" + e);
            }
        },  async getMenues(){
            this.menues = await getAllMenuesService();
        },
    },
    getters: {
        listOfmenues: (state) => state.menues,
    }
})