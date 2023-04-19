<script setup lang="ts">
import {useMenuStore} from "@/stores/menu.store"
import Navbar from "@/components/Navbar/Navbar.vue";
import MenuDetailView from "@/components/Menu/MenuDetailView.vue";
import Footer from "./../components/Footer/footer.vue";

const menuStore = useMenuStore()
menuStore.getMenues();

</script>

<template>
    <Navbar></Navbar>
      <div class="container">
        <div class="col-sm">
        <h3>Nos menus</h3>
        <MenuDetailView :data="menu" v-for="menu in menuStore.menues"></MenuDetailView>
    </div>
      </div>
      <Footer></Footer>
  </template>

  <style>
.container {
  margin-bottom: 10em;
}
</style>