<script setup lang="ts">
import AllergyForm from '@/components/Form/allergy.form.vue';
import NavbarConnected from '@/components/Navbar/NavbarConnected.vue';
import Footer from "./../components/Footer/footer.vue";

</script>

<template>
<NavbarConnected></NavbarConnected>
<h3 class="img-title-allergy">Mes allergies</h3>
    <AllergyForm></AllergyForm>
    <Footer></Footer>
</template>

<style>
.img-title-allergy {
  font-weight: normal;
  color: white;
  font-family: "Great Vibes", cursive;
  text-shadow: black 5px 5px 10px;
  font-size: 10em;
  padding-top: 2rem;
  background-image: url('https://res.cloudinary.com/dbnymjpdf/image/upload/c_scale,h_387/v1682954457/mdujfhl15xjgltidmjj0.jpg');
  background-size: cover;
  text-align: center;
  background-size: cover;
  height: 350px;
  width: 100vw;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
