<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
import { useOrnamentStore } from '@/stores/ornaments/ornaments'

const props = defineProps<{
  id: number;
}>()

const store = useOrnamentStore();
const ornament = computed(() => store.getOneOrnament(props.id));
</script>

<template>
  <div class="gallery-item">
    <RouterLink class="gallery-item__link" :to="{name: 'ornament',  params: { id: ornament.id }}">
      <img :src="ornament.photo" class="gallery-item__img">
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.gallery-item {
  &__img {
    width: 100%;
    border-radius: 50%;
    max-width: 300px;
    height: 300px;
  }
}
</style>
