<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavButton from './components/NavButton.vue';
</script>

<template>
  <header class="header">
    <NavButton/>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
.header {
  height: 300px;
  background-image: url('./images/xmas-tree-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1280px) {
  .header {
    height: 250px;
  }
}

@media (max-width: 600px) {
  .header {
    height: 150px;
  }
}
</style>
