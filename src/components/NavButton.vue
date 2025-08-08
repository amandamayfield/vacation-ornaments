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
  <div class="nav-btn">
    <div v-if="!isHome">
      <RouterLink class="nav-btn__link" :to="{name: 'home'}">Home</RouterLink>
    </div>
    <div v-if="isHome">
      <RouterLink class="nav-btn__link" :to="{name: 'add'}">Add</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-btn {
  padding: 16px;
  background-color: darkgreen;
}
</style>