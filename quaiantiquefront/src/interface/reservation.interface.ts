import type { User } from "./user.interface";

   export interface Reservation {
    id: number,
    numPerson: number,
    reservationDate: Date,
    allergies: string[],
    user: User,
    maxNumPerson: 20,

}