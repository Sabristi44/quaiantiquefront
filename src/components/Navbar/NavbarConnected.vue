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
    <a class="navbar-brand text-white">Quai antique</a>
    <div>
    <span class="mx-3"><router-link to="/secure/" class="without-text-decoration">Accueil</router-link></span>
    <span class="mx-3"><router-link to="/secure/dish" class="without-text-decoration">Plat</router-link></span>
   <span class="mx-3"><router-link to="/secure/menu" class="without-text-decoration">Menu</router-link></span>
   <span class="mx-3"><router-link to="/secure/book" class="without-text-decoration">Réserver</router-link></span>
   <span class="mx-3"><router-link to="/secure/allergy" class="without-text-decoration">Allergies</router-link></span>
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