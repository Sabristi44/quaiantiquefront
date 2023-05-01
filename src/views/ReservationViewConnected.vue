<script setup lang="ts">
import Footer from "../components/Footer/footer.vue";
import ReservationForm from "@/components/Form/reservation.form.vue";
import NavbarConnected from "@/components/Navbar/NavbarConnected.vue";
</script>

<template>
    <NavbarConnected></NavbarConnected>
    <h3 class="img_title_reservation">Réservation</h3>
    <ReservationForm></ReservationForm>
    <Footer></Footer>
  </template>