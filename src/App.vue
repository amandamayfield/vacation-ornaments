<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="ornament">Ornament</RouterLink>
        <RouterLink to="/add">Add</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
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
