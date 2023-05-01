<script setup lang="ts">
import {useDishStore} from "@/stores/dish.store"
import Navbar from "@/components/Navbar/Navbar.vue";
import DishDetailVue  from "@/components/Dish/DishDetailView.vue";
import Footer from "./../components/Footer/footer.vue";

const dishStore = useDishStore()

dishStore.getDishes();


</script>

<template>
    <Navbar></Navbar>
    <div class="space-nav">
        <h3 class="img_title_dish">Nos plats</h3>
        <DishDetailVue :data="dish" v-for="dish in dishStore.allDishes"> </DishDetailVue>
        <Footer></Footer>
      </div>
  </template>

  <style> 
.space-nav {
  margin-bottom: 10em;
}


.img_title_dish {
  font-weight: normal;
  color: white;
  font-family: "Great Vibes", cursive;
  text-shadow: black 5px 5px 10px;
  font-size: 10em;
  padding-top: 2rem;
  background-image: url(https://res.cloudinary.com/dbnymjpdf/image/upload/c_fill,h_205/v1682449420/us6arez5ggznhrayctjf.jpg);
  background-size: cover;
  text-align: center;
  background-size: cover;
  height: 350px;
  width: 100vw;
  background-position: center center;
  background-repeat: no-repeat;
}

</style>