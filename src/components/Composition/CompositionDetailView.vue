<script setup lang="ts">
import type { compositionInterface } from '@/shared/interface/composition.interface';


const {data} = defineProps<{
  data : compositionInterface
}>()
</script>


<template>
    <div class="col-sm pt-5">
    <span>{{data.description}}</span>
    <span>{{data.price}} €</span>
</div>
</template>