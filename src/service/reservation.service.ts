import type { reservationInterface } from './../shared/interface/reservation.interface';
import { URL_SCHEME } from './index.service';
import { useRouter } from "vue-router";

const router = useRouter();


export async function addReservationService(Reservation : reservationInterface) {
    const response = await (await fetch(`${URL_SCHEME}/reservation`,
        {
            method: "POST",
            body: JSON.stringify({
              allergies: Reservation.allergies,
              numPerson: Reservation.numPerson,
              mail: Reservation.mail,
              date: Reservation.date,
              hour: Reservation.hour,
            }),
            headers: {
                "Content-type": "application/json"
            }
        })).json();
    if(!response.error){
        router.push('/secure');
        return response;
    }else{
        throw response;
    }
}  