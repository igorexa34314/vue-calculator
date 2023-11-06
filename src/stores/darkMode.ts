import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useDarkModeStore = defineStore('darkMode', () => {
	const darkMode = useLocalStorage<boolean>('darkMode', import.meta.env.VITE_APP_THEME === 'dark');

	return { darkMode };
});
