<script setup lang="ts">
defineProps<{
  id: string
}>()
</script>

<template>
  <div class="ornament">
    <h1>This is an ornament detail page</h1>
    <p>ornament {{ id }}</p>
  </div>
</template>

<style lang="scss" scoped>
  .ornament {
    padding: 5px;
  }
</style>
