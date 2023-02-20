import type { UserAddAllergies } from './../shared/interface/user.interface';
import type { InterfaceUserConnection, User} from './../interface/user.interface';
import { URL_SCHEME } from './index.service';


export async function loginUserService(User : InterfaceUserConnection): Promise<User> {
    const response = await (await fetch(`${URL_SCHEME}/login`,
        {
            method: "POST",
            body: JSON.stringify({
                mail: User.mail,
                password: User.password,
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

export async function addAllergiesService(User : UserAddAllergies): Promise<User> {
    const response = await (await fetch(`${URL_SCHEME}/allergy`,
        {
            method: "POST",
            body: JSON.stringify({
               id: User.id,
               allergies: User.allergies,
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
