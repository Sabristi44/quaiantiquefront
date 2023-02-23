<script setup lang="ts">
</script>

<template>
  <!--Navbar -->
  <nav class="navbar navbar-light bg-info justify-content-around">
    <a class="navbar-brand">Quai antique</a>
    <div>
    <span class="mx-3"><router-link to="/">Accueil</router-link></span>
    <span class="mx-3"><router-link to="/dish">Plat</router-link></span>
   <span class="mx-3"><router-link to="/menu">Menu</router-link></span>
   <span class="mx-3"><router-link to="/book">Réserver</router-link></span>
   <span class="mx-3"><router-link to="/connect">Se connecter</router-link></span>
</div>
  </nav>
</template>