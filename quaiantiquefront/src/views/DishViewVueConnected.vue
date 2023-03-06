<script setup lang="ts">
import {useDishStore} from "@/stores/dish.store"
import DishDetailVue  from "@/components/Dish/DishDetailView.vue";
import NavbarConnected from "@/components/Navbar/NavbarConnected.vue";
import Footer from "./../components/Footer/footer.vue";

const dishStore = useDishStore()

dishStore.getDishes();


</script>

<template>
    <NavbarConnected></NavbarConnected>
      <div class="container">
        <div class="col-sm">
        <h3>Nos plats</h3>
        <DishDetailVue :data="dish" v-for="dish in dishStore.allDishes"> </DishDetailVue>
    </div>
      </div>
      <Footer></Footer>
  </template>