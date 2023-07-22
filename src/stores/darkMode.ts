import { defineStore } from 'pinia';
import { ref, watchEffect } from 'vue';
import { saveToLocalStorage, getFromLocalStorage } from '@/utils/localStorage';

export const useDarkModeStore = defineStore('darkMode', () => {
	const darkMode = ref<boolean>(getFromLocalStorage('darkMode') ?? true);

	const setDarkMode = (value: boolean) => {
		darkMode.value = value;
	};

	watchEffect(() => {
		saveToLocalStorage('darkMode', darkMode.value);
	});

	return { darkMode, setDarkMode };
});
