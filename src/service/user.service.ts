import { URL_SCHEME } from './index.service';
import type { UserConnectInterface, User } from './../shared/interface/user.interface';
import { useRouter } from 'vue-router';
const router = useRouter();

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

export async function signUpUserService(User : UserConnectInterface): Promise<User> {
    const response = await (await fetch(`${URL_SCHEME}/signup`,
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

export async function addAllergiesService(this: any, userId : number, allergies: String) {
    const router = useRouter();
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
