import { ref, watchEffect } from 'vue';
import { darkTheme, lightTheme } from 'naive-ui';

const DARK_MODE_DEFAULT = false;

export function useDarkMode() {
	const darkMode = ref(DARK_MODE_DEFAULT);

	const getDarkMode = () => {
		if (localStorage.getItem('darkMode')) {
			darkMode.value = JSON.parse(localStorage.getItem('darkMode') as string);
		}
	};
	getDarkMode();

	const toggleDarkMode = (): void => {
		// $q.value.dark.set(darkMode.value);
		localStorage.setItem('darkMode', JSON.stringify(darkMode.value));
	};
	watchEffect(toggleDarkMode);

	return {
		darkMode
	};
}
