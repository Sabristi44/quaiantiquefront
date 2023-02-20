import type { Reservation } from "./reservation.interface";

export const userByDefault  = {
    id:0,
    mail: "test@yopmail.com",
    isAdmin: false,
    allergies: [],
    reservations: [],
    numPerson: 1,
   }
   
   export interface InterfaceUserConnection {
       mail: string,
       password: string,
   }
   
   export interface User {
       id: number,
       email: string,
       allergies: string[],
       reservations: Reservation[],
       isAdmin: boolean,
       numPerson: number,

   }