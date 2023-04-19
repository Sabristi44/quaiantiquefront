<script setup lang="ts">
import type { menuInterface } from '@/shared/interface/menu.interface';
import CompositionDetailView from '@/components/Composition/CompositionDetailView.vue'


const {data} = defineProps<{
  data : menuInterface
}>()
</script>


<template>
    <div class="menu-group">
      <div class="menu-sub-group">
    <h4>{{data.title}}</h4>
    <CompositionDetailView :data="composition" v-for="composition in data.compositions"></CompositionDetailView>
  </div>
</div>
</template>

<style>
.menu-group{
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.menu-sub-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  text-align: center;
  box-shadow: grey 5px 5px 15px;
  padding-bottom: 10px;
  padding-top: 10px;

}
</style>