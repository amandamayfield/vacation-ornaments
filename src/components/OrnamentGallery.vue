<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useOrnamentStore } from '@/stores/ornaments/ornaments'
import GalleryItem from '../components/GalleryItem.vue';

const store = useOrnamentStore();
const ornaments = computed(() => store.ornaments);

onMounted(() => {
  store.getData();
})
</script>

<template>
  <div class="gallery">
    <GalleryItem v-for="item in ornaments" :key="item.id" :item="item"/>
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  display: flex;
  justify-content: space-between;
  padding: 24px;
  background-color: burlywood;
}
</style>
