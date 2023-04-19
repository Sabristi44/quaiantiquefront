<script setup lang="ts">
import type { compositionInterface } from '@/shared/interface/composition.interface';


const {data} = defineProps<{
  data : compositionInterface
}>()
</script>


<template>
    <div class="title-menu">
    <span>{{data.description}}</span>
    <div class="price-meenu">
    <h4>{{data.price}} €</h4>
  </div>
</div>
</template>

<style>

.title-menu {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto 20px;
  text-align: justify;
  padding: 20px;
}
.price-menu{
  font-weight: bold;
}

</style>