<script setup lang="ts">
import CompositionForm from '@/components/Form/composition.form.vue';
import MenuForm from '@/components/Form/menu.form.vue';
import NavbarAdmin from '@/components/Navbar/NavbarAdmin.vue';
import Footer from "./../components/Footer/footer.vue";

</script>

<template>
  <main>
    <NavbarAdmin></NavbarAdmin>
    <MenuForm class="border border-primary py-2"></MenuForm>
    <CompositionForm class="border border-primary py-2"></CompositionForm>
    <Footer></Footer>
  </main>
</template>
