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
      <div class="container">
        <div class="col-sm">
        <h3>Nos plats</h3>
        <DishDetailVue :data="dish" v-for="dish in dishStore.allDishes"> </DishDetailVue>
        <Footer></Footer>
    </div>
      </div>
  </template>