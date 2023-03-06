import type { reservationInterface } from './../shared/interface/reservation.interface';
import {defineStore} from "pinia";
import { addReservationService } from '@/service/reservation.service';



export const useReservationStore = defineStore("reservationStore", {
    actions: {
        async addReservation (formValues: reservationInterface) {
            try {
                await addReservationService(formValues);
            } catch (e) {
                console.log("erreur" + e);
            }
        },
    },
})