<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useOrnamentStore } from '@/stores/ornaments/ornaments'
import GalleryItem from '../components/GalleryItem.vue';

const store = useOrnamentStore();
const ornamentsIds = computed(() => store.ornamentIds);

onMounted(() => {
  store.getOrnaments();
})
</script>

<template>
  <div class="gallery">
    <GalleryItem v-for="id in ornamentsIds" :key="id" :id="id"/>
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 24px;
  background-color: burlywood;
}
</style>
