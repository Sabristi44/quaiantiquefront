import type { imageInterface } from './../shared/interface/image.interface';
import {defineStore} from "pinia";
import { addImageService, getAllImagesService, getImageService } from '@/service/image.service';


interface ImageStoreInterface{
    images: imageInterface[],
}


export const useImageStore = defineStore("imageStore", {
    state: (): ImageStoreInterface => ({
        images:  [],
    }),
    actions: {
        async addImage (formValues: File) {
            try {
                const response = await addImageService(formValues);
                if(response) {
                    this.images.push(response.data);
                }
            } catch (e) {
                console.log("erreur" + e);
            }
        },  async getImagesInfos(){
            this.images = await getAllImagesService();
        },
        async getImage(id: string) {
            console.log("coucou" + await getImageService(id));
        }
    },
    getters: {
        listOfImages: (state) => state.images,
    }
})