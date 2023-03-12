<script setup lang="ts">
import Navbar from './Navbar/Navbar.vue';
import Footer from './Footer/footer.vue';
import { useImageStore } from '@/stores/image.store';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from "@cloudinary/vue";

const imageStore = useImageStore();
imageStore.getImagesInfos();
console.log("coucou" + imageStore.listOfImages)

const cld = new Cloudinary({
    cloud: {
        cloudName: "dbnymjpdf",
    }
})

const myImg = cld.image('docs/Chinese_Chawal_in_Basmati_q39d9n');


</script>

<template>
    <Navbar></Navbar>
    <div class="container">
    <AdvancedImage :cldImg="myImg"></AdvancedImage>
    </div>
    <Footer></Footer>
</template>s