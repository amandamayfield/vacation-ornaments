<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
  id: number
}>()
</script>

<template>
  <div class="gallery-item">
    <RouterLink class="gallery-item__link" :to="{name: 'ornament',  params: { id }}">{{ id }}</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.gallery-item {
  display: flex;
  &__link {
    padding: 24px;
    background-color: chocolate;
  }
}
</style>