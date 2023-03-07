import type { addDishInterface, dishInterface } from './../shared/interface/dish.interface';
import { URL_SCHEME } from './index.service';


export async function addDishService(Dish : addDishInterface) {
    const response = await (await fetch(`${URL_SCHEME}/dish`,
        {
            method: "POST",
            body: JSON.stringify({
              title: Dish.title,
              description: Dish.description,
              price: Dish.price,
              category: Dish.category,
            }),
            headers: {
                "Content-type": "application/json"
            }
        })).json();
    if(!response.error){
        return response;
    }else{
        throw response;
    }
}

export async function getAllDishesService(): Promise<dishInterface[]> {
    const response = await (await fetch(`${URL_SCHEME}/dish`,
        {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })).json();
    if(!response.error){
        return response;
    }else{
        throw response;
    }
}
