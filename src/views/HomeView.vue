<script setup lang="ts">
import OrnamentGallery from '../components/OrnamentGallery.vue'
</script>

<template>
  <main>
    <div class="home">
      <OrnamentGallery />
    </div>
  </main>
</template>


<style lang="scss" scoped>
@use './../assets/base.scss';

.home {
  padding: 60px 36px;
  background-color: var(--warm-white);
}

@media (max-width: 1280px) {
  .home {
    padding: 48px 24px;
  }
}

@media (max-width: 600px) {
  .home {
    padding: 36px 12px;
  }
}
</style>