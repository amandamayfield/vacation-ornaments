<script setup lang="ts">
import { ref } from 'vue'
import GalleryItem from '../components/GalleryItem.vue';

const ornaments = ref([{id: '1', date: 'November 2021'}, {id: '2', date: 'June 2022'}, {id: '3', date: 'October 2022'}]);
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
