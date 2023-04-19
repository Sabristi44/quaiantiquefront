<script setup lang="ts">
import type { dishInterface } from '@/shared/interface/dish.interface';


const {data} = defineProps<{
  data : dishInterface
}>()
</script>


<template>
    <div class="menu-group">
      <div class="menu-sub-group">
    <h4>{{data.title}}</h4>
    <h5>{{data.category}}</h5>
    <span>{{data.description}}</span>
    <span>{{data.price}} €</span>
    </div>
</div>
</template>