import { URL_SCHEME } from './index.service';
import type { UserConnectInterface, User } from './../shared/interface/user.interface';


export async function loginUserService(User : UserConnectInterface): Promise<User> {
    const response = await (await fetch(`${URL_SCHEME}/login`,
        {
            method: "POST",
            body: JSON.stringify({
                mail: User.email,
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

export async function addAllergiesService(userId : number, allergies: String) {
    const response = await (await fetch(`${URL_SCHEME}/allergy`,
        {
            method: "POST",
            body: JSON.stringify({
               id: userId,
               allergies: allergies,
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
