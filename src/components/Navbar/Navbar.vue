<script setup lang="ts">
</script>

<template>
  <!--Navbar -->
  <nav class="navbar fixed-top navbar-ligh justify-content-around">
    <span class="navbar-brand text-white">Quai antique</span>
    <div>
    <span class="mx-3"><router-link to="/" class="without-text-decoration">Accueil</router-link></span>
    <span class="mx-3"><router-link to="/dish" class="without-text-decoration">Plat</router-link></span>
   <span class="mx-3"><router-link to="/menu" class="without-text-decoration">Menu</router-link></span>
   <span class="mx-3"><router-link to="/book" class="without-text-decoration">Réserver</router-link></span>
   <span class="mx-3"><router-link to="/connect" class="without-text-decoration">Se connecter</router-link></span>
   <span class="mx-3"><router-link to="/signUp" class="without-text-decoration">Créer un compte</router-link></span>
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