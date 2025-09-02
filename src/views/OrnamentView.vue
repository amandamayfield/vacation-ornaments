<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useOrnamentStore } from '@/stores/ornaments/ornaments'

const props = defineProps<{
  id: number
}>()

const store = useOrnamentStore();
const ornament = computed(() => store.getOneOrnament(props.id));

onMounted(() => {
  if (store.ornamentsMap.get(props.id) === undefined) {
    store.getOrnaments();
  }
});
</script>

<template>
  <div class="ornament">
    <div class="ornament-card">
      <h1>This is an ornament detail page</h1>
      <p>location: {{ ornament.location }}</p>
      <p>date: {{ ornament.date }}</p>
      <p>description: {{ ornament.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './../assets/base.scss';

.ornament {
  padding: 24px;
}
</style>
