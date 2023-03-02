<script setup lang="ts">
import CompositionForm from '@/components/Form/composition.form.vue';
import MenuForm from '@/components/Form/menu.form.vue';
import NavbarAdmin from '@/components/Navbar/NavbarAdmin.vue';

</script>

<template>
  <main>
    <NavbarAdmin></NavbarAdmin>
    <MenuForm></MenuForm>
    <CompositionForm></CompositionForm>
  </main>
</template>
