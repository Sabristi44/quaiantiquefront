<script setup lang="ts">
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
   <span class="mx-3"><router-link to="/secure/logout">Se déconnecter</router-link></span>
</div>
  </nav>
</template>