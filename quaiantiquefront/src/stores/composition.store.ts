import type { addCompositionInterface } from './../shared/interface/composition.interface';
import {defineStore} from "pinia";
import { addCompositionService } from '@/service/composition.service';

export const useCompositionStore = defineStore("compositionStore", {
    actions: {
        async addComposition (formValues: addCompositionInterface) {
            try {
                await addCompositionService(formValues);
            } catch (e) {
                console.log("erreur" + e);
            }
        },
    },
})