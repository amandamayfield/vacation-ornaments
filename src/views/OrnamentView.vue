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
  <div>
    <div class="orn-card">
      <div class="orn-card__img">
        <img :src="ornament.photo">
      </div>
      <div class="orn-card__info">
        <h2>{{ ornament.location }}</h2>
        <p>{{ ornament.date }}</p>
        <div class="orn-card__info--desc">
          <p>{{ ornament.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './../assets/base.scss';

.orn-card {
  display: flex;
  padding: 36px;
  background-color: var(--dark-green);
  border-radius: 24px;
  &__info {
    flex: 1 1 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 48px;
    gap: 24px;
    & > h2, > p {
      color: var(--warm-white);
    }
    & > h2 {
      padding-bottom: 24px;
      border-bottom: 2px solid var(--burnt-orange);
    }
    &--desc {
      padding: 24px;
      background-color: var(--warm-white);
      border-radius: 12px;
    }
  }
  &__img {
    flex: 1 1 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
