import type { reservationInterface } from './reservation.interface';
export interface UserResponse{
    user: User
}

export interface User{
    id: number,
    mail: string,
    allergies: string,
    reservations: reservationInterface[],
    admin: boolean,
    numPerson: number,
}
export interface UserConnectInterface{
    email: string,
    password: string
}


export const defaultUser = {
    id: 1,
    mail: "test@yopmail.com",
    allergies: "Fromage, Kiwi, Fraise",
    admin: false,
    reservations: [],
    numPerson: 1
}

export interface UserAddAllergies{
    id: number,
    allergies: string,
}