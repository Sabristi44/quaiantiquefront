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
        <h3 class="img_title_menu">Nos menus</h3>
        <MenuDetailView :data="menu" v-for="menu in menuStore.menues"></MenuDetailView>
    </div>
      </div>
      <Footer></Footer>
  </template>

  <style>
.container {
  margin-bottom: 10em;
}

.img_title_menu {
  font-weight: normal;
  color: white;
  font-family: "Great Vibes", cursive;
  text-shadow: black 5px 5px 10px;
  font-size: 10em;
  padding-top: 2rem;
  background-image: url(https://res.cloudinary.com/dbnymjpdf/image/upload/c_scale,w_241/v1682451661/mhgsywwj2dhnfpivpfxn.jpg);
  background-size: cover;
  text-align: center;
  background-size: cover;
  height: 350px;
  width: 100vw;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>