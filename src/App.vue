<template>
  <n-config-provider :theme="appTheme">
    <n-layout class="app-layout">
      <n-layout-content>
        <MyCalculator />
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NLayout, NLayoutContent, NConfigProvider, darkTheme, lightTheme, useOsTheme } from 'naive-ui';
import MyCalculator from '@/views/MyCalculator.vue';
import { computed } from 'vue';
import { useDarkModeStore } from '@/stores/darkMode';

const darkModeStore = useDarkModeStore();
const osTheme = useOsTheme();
const appTheme = computed(() => darkModeStore.darkMode ? darkTheme : lightTheme);
</script>

<style lang="scss">
.app-layout {
  padding: 15px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>