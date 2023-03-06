<script setup lang="ts">
import { useUserStore } from '@/stores/user.store';
import { RouterLink } from 'vue-router';
import { useRouter } from "vue-router";

const router = useRouter()
const userStore = useUserStore();

function logout() {
  userStore.logout();
  router.push("/");
}
</script>

<template>
  <!--Navbar -->
  <nav class="navbar fixed-top navbar-light bg-info justify-content-around">
    <a class="navbar-brand">Quai antique</a>
    <div>
    <span class="mx-3"><router-link to="/admin/" class="without-text-decoration">Galerie d'image</router-link></span>
    <span class="mx-3"><router-link to="/admin/dish" class="without-text-decoration">Plat</router-link></span>
   <span class="mx-3"><router-link to="/admin/menu" class="without-text-decoration">Menu</router-link></span>
   <span class="mx-3"><router-link to="/admin/schedule" class="without-text-decoration">Horaires</router-link></span>
   <span class="mx-3 without-text-decoration" @click= "logout">Se déconnecter</span>
</div>
  </nav>
</template>

<style>

nav {
  background: linear-gradient(105deg,#6e99e6 ,#093c94);
}

.without-text-decoration {
  text-decoration: none;
  color: white;
}

.without-text-decoration:hover {
  color: black;
}

</style>