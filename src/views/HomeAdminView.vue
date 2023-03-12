<script setup lang="ts">
import NavbarAdmin from '@/components/Navbar/NavbarAdmin.vue';
import compositionForm from '@/components/Form/composition.form.vue';
import FileForm from "./../components/Form/file.form.vue";
</script>

<template>
  <main>
    <NavbarAdmin></NavbarAdmin>
    <h1>Admin</h1>
    <FileForm></FileForm>
    <Footer></Footer>
  </main>
</template>
