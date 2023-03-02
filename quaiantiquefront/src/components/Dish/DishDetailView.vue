<script setup lang="ts">
import type { dishInterface } from '@/shared/interface/dish.interface';


const {data} = defineProps<{
  data : dishInterface
}>()
</script>


<template>
    <div class="col-sm pt-5">
    <h4>{{data.title}}</h4>
    <h5>{{data.category}}</h5>
    <span>{{data.description}}</span>
    <span>{{data.price}} €</span>
</div>
</template>