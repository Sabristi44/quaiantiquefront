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
  <nav class="navbar navbar-light bg-info justify-content-around">
    <a class="navbar-brand">Quai antique</a>
    <div>
    <span class="mx-3"><router-link to="/secure/">Accueil</router-link></span>
    <span class="mx-3"><router-link to="/secure/dish">Plat</router-link></span>
   <span class="mx-3"><router-link to="/secure/menu">Menu</router-link></span>
   <span class="mx-3"><router-link to="/secure/book">Réserver</router-link></span>
   <span class="mx-3"><router-link to="/secure/allergy">Allergies</router-link></span>
   <span class="mx-3" @click= "logout">Se déconnecter</span>
</div>
  </nav>
</template>