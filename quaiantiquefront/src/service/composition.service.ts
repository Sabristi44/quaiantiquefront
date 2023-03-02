import type { addCompositionInterface } from './../shared/interface/composition.interface';
import { URL_SCHEME } from './index.service';


export async function addCompositionService(Composition : addCompositionInterface) {
    const response = await (await fetch(`${URL_SCHEME}/composition`,
        {
            method: "POST",
            body: JSON.stringify({
             price: Composition.price,
             description: Composition.description,
             menuId: Composition.menuId,
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
