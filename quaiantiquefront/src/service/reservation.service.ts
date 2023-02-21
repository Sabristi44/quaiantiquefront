import type { reservationInterface } from './../shared/interface/reservation.interface';
import { URL_SCHEME } from './index.service';


export async function addReservationService(Reservation : reservationInterface) {
    const response = await (await fetch(`${URL_SCHEME}/reservation`,
        {
            method: "POST",
            body: JSON.stringify({
              allergies: Reservation.allergies,
              numPerson: Reservation.numPerson,
              idUser: Reservation.idUser,
              reservationDate: Reservation.reservationDate,
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