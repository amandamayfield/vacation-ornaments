<script setup lang="ts">
import { ref } from 'vue'
import { useOrnamentStore } from '@/stores/ornaments'

import GalleryItem from '../components/GalleryItem.vue';

const store = useOrnamentStore();

const ornaments = store.mockData;
</script>

<template>
  <div class="gallery">
    <GalleryItem v-for="item in ornaments" :key="item.id" :id="item.id"/>
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
