import { URL_SCHEME } from './index.service';
import axios from 'axios'
import type { imageInterface } from '@/shared/interface/image.interface';

export async function addImageService(Image : File) {
    const response = await (await axios({
        method: 'POST',
        url: 'https://api.cloudinary.com/v1_1/dbnymjpdf/upload',
        data: {
            file: Image,
        },
        headers: { 'Content-Type': 'multipart/form-data' },
      }));
        return response;
}

export async function getAllImagesService(): Promise<imageInterface[]> {
    const response = await (await fetch("https://api.cloudinary.com/v1_1/dbnymjpdf/resources/search/folder/docs",
        {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Basic ODkzMzk0ODI2ODgyNTIzOjg5MzM5NDgyNjg4MjUyMw=="
            }
        })).json();
    if(!response.error){
        return response;
    }else{
        throw response;
    }
}

export async function getImageService(id: string): Promise<Blob> {
    const response = await (await fetch(`${URL_SCHEME}/image/${id}`,
        {
            method: "GET",
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
