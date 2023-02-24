<script setup lang="ts">
</script>

<template>
  <!--Navbar -->
  <nav class="navbar navbar-light bg-info justify-content-around">
    <a class="navbar-brand">Quai antique</a>
    <div>
    <span class="mx-3"><router-link to="/admin/">Accueil</router-link></span>
    <span class="mx-3"><router-link to="/admin/dish">Plat</router-link></span>
   <span class="mx-3"><router-link to="/admin/menu">Menu</router-link></span>
   <span class="mx-3"><router-link to="/admin/schedule">Horaires</router-link></span>
   <span class="mx-3"><router-link to="/admin/logout">Se déconnecter</router-link></span>
</div>
  </nav>
</template>