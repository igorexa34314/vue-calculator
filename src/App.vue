<template>
  <n-config-provider :theme="darkTheme">
    <n-layout class="app" view="hHh lpR fFf">
      <n-layout-content>
        <MyCalculator />
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NLayout, NLayoutContent, NConfigProvider, darkTheme } from 'naive-ui';
import MyCalculator from '@/views/MyCalculator.vue';
</script>

<style lang="scss">
// @import "@/assets/styles/variables.scss";

.app {
  padding: 15px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>