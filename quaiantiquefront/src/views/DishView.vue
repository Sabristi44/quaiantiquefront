<script setup lang="ts">
import {useDishStore} from "@/stores/dish.store"
import Navbar from "@/components/Navbar/Navbar.vue";
import DishDetailVue  from "@/components/Dish/DishDetailView.vue";

const dishStore = useDishStore()

dishStore.getDishes();

const  dish1 = {
    id: 2,
    title: "coucou",
    description: "description",
    price: 2.3,
    category: "Entrées",
}

</script>

<template>
    <Navbar></Navbar>
      <div class="container">
        <div class="col-sm">
        <h3>Nos plats</h3>
        <DishDetailVue :data="dish" v-for="dish in dishStore.allDishes"> </DishDetailVue>
    </div>
      </div>
  </template>