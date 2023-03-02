import type { addMenuInterface, menuInterface } from "@/shared/interface/menu.interface";
import {defineStore} from "pinia";
import { addMenuService, getAllMenuesService } from '@/service/menu.service';


interface MenuStoreInterface{
    listOfmenues: menuInterface[],
}


export const useMenuStore = defineStore("menuStore", {
    state: (): MenuStoreInterface => ({
        listOfmenues:  [],
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
            this.listOfmenues = await getAllMenuesService();
        },
    },
    getters: {
        menues: (state) => state.listOfmenues,
    }
})