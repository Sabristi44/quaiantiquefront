import type { addMenuInterface, menuInterface } from './../shared/interface/menu.interface';
import { URL_SCHEME } from './index.service';


export async function addMenuService(Menu : addMenuInterface) {
    const response = await (await fetch(`${URL_SCHEME}/menu`,
        {
            method: "POST",
            body: JSON.stringify({
              title: Menu.title
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

export async function getAllMenuesService(): Promise<menuInterface[]> {
    const response = await (await fetch(`${URL_SCHEME}/menu`,
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
