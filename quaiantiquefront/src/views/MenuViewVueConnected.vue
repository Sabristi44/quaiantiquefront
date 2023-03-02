<script setup lang="ts">
import {useMenuStore} from "@/stores/menu.store"
import MenuDetailView from "@/components/Menu/MenuDetailView.vue";
import NavbarConnected from "@/components/Navbar/NavbarConnected.vue";

const menuStore = useMenuStore()
menuStore.getMenues();

</script>

<template>
    <NavbarConnected></NavbarConnected>
      <div class="container">
        <div class="col-sm">
        <h3>Nos menus</h3>
        <MenuDetailView :data="menu" v-for="menu in menuStore.menues"></MenuDetailView>
    </div>
      </div>
  </template>