import type { compositionInterface } from "./composition.interface";

export interface addMenuInterface{
    title: string,
}

export interface menuInterface{
    id: number
    title: string,
    compositions: [compositionInterface]
}