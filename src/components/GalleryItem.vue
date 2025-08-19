<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { Ornament } from '../stores/ornaments/types';

const props = defineProps<{
  item: Ornament;
}>()
</script>

<template>
  <div class="gallery-item">
    <RouterLink class="gallery-item__link" :to="{name: 'ornament',  params: { id: props.item.id }}">
      <img :src="props.item.photo" width="300">
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.gallery-item {
  display: flex;
  &__link {
    padding: 24px;
  }
}
</style>
