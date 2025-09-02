<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import { watchEffect, ref } from 'vue';

const route = useRoute();
const isHome = ref(false);

watchEffect(() => {
  isHome.value = route.name === 'home';
});
</script>

<template>
  <div class="nav-btn" aria-label="Navigation Button">
    <div v-if="!isHome">
      <RouterLink class="nav-btn__link" :to="{name: 'home'}">Home</RouterLink>
    </div>
    <div v-if="isHome">
      <RouterLink class="nav-btn__link" :to="{name: 'add'}">Add</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './../assets/base.scss';

.nav-btn {
  position: absolute;
  bottom: -40px;
  left: 50%;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  transform: translateX(-50%);
  background-color: var(--burnt-brown);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1280px) {
  .nav-btn {
    bottom: -30px;
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 600px) {
  .nav-btn {
    bottom: -25px;
    width: 50px;
    height: 50px;
  }
}
</style>