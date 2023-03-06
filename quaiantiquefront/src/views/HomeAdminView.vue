<script setup lang="ts">
import NavbarAdmin from '@/components/Navbar/NavbarAdmin.vue';
import compositionForm from '@/components/Form/composition.form.vue';
import Footer from "./../components/Footer/footer.vue";
</script>

<template>
  <main>
    <NavbarAdmin></NavbarAdmin>
    <h1>Admin</h1>
    <compositionForm></compositionForm>
    <Footer></Footer>
  </main>
</template>
