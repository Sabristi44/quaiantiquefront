<script setup lang="ts">
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "./../components/Footer/footer.vue";
import ReservationForm from "@/components/Form/reservation.form.vue";


</script>

<template>
    <Navbar></Navbar>
    <h3 class="img_title_reservation">Réservation</h3>
    <ReservationForm></ReservationForm>
    <Footer></Footer>
  </template>

  <style>

  .img_title_reservation {
    font-weight: normal;
    color: white;
    font-family: "Great Vibes", cursive;
    text-shadow: black 5px 5px 10px;
    font-size: 10em;
    padding-top: 2rem;
    background-image: url(https://res.cloudinary.com/dbnymjpdf/image/upload/v1682452488/nwdls0ft6hzcmo1sw9u0.webp);
    background-size: cover;
    text-align: center;
    background-size: cover;
    height: 350px;
    width: 100vw;
    background-position: center center;
    background-repeat: no-repeat;
  }
</style>