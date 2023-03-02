<script setup lang="ts">
import type { menuInterface } from '@/shared/interface/menu.interface';
import CompositionDetailView from '@/components/Composition/CompositionDetailView.vue'


const {data} = defineProps<{
  data : menuInterface
}>()
</script>


<template>
    <div class="col-sm pt-5">
    <h4>{{data.title}}</h4>
    <CompositionDetailView :data="composition" v-for="composition in data.compositions"></CompositionDetailView>
</div>
</template>