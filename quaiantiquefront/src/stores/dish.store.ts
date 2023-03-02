import type { dishInterface, addDishInterface } from './../shared/interface/dish.interface';
import {defineStore} from "pinia";
import { addDishService, getAllDishesService } from '@/service/dish.service';


interface DishStoreInterface{
    dishes: dishInterface[],
}


export const useDishStore = defineStore("dishStore", {
    state: (): DishStoreInterface => ({
        dishes:  [],
    }),
    actions: {
        async addDish (formValues: addDishInterface) {
            try {
                const response = await addDishService(formValues);
                if(response) {
                    this.dishes.push(response)
                }
            } catch (e) {
                console.log("erreur" + e);
            }
        },  async getDishes(){
            this.dishes = await getAllDishesService();
        },
    },
    getters: {
        allDishes: (state) => state.dishes,
    }
})