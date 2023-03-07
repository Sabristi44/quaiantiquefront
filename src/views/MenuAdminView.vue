<script setup lang="ts">
import CompositionForm from '@/components/Form/composition.form.vue';
import MenuForm from '@/components/Form/menu.form.vue';
import NavbarAdmin from '@/components/Navbar/NavbarAdmin.vue';
import Footer from "./../components/Footer/footer.vue";

</script>

<template>
  <main>
    <NavbarAdmin></NavbarAdmin>
    <MenuForm></MenuForm>
    <CompositionForm></CompositionForm>
    <Footer></Footer>
  </main>
</template>
