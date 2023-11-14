<template>
  <v-layout class="app">
    <v-main>
      <MyCalculator />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import MyCalculator from '@/views/MyCalculator.vue';
</script>

<style lang="scss">
.app {
  padding: 15px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>