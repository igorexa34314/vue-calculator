<template>
  <q-layout class="app" view="hHh lpR fFf">
    <q-page-container>
      <MyCalculator />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import MyCalculator from '@/views/MyCalculator.vue';
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.app {
  padding: 15px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>