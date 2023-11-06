import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { watch } from 'vue';
import { useQuasar } from 'quasar';

export const useDarkModeStore = defineStore('darkMode', () => {
	const darkMode = useLocalStorage<boolean>('darkMode', import.meta.env.VITE_APP_THEME === 'dark');
	const $q = useQuasar();

	watch(
		darkMode,
		newVal => {
			$q.dark.set(newVal);
		},
		{ immediate: true }
	);

	return { darkMode };
});
