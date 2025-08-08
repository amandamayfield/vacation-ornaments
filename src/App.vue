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
  background-color: grey;
}

@media (max-width: 1280px) {
  .header {
    height: 200px;
  }
}

@media (max-width: 600px) {
  .header {
    height: 100px;
  }
}
</style>
