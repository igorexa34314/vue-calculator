import { ref, watchEffect } from 'vue';
import { useQuasar } from 'quasar';

export function useDarkMode() {
	const $q = ref(useQuasar());
	const darkMode = ref(false);

	if (localStorage.getItem('darkMode')) {
		darkMode.value = JSON.parse(localStorage.getItem('darkMode') as string);
	} else {
		darkMode.value = false;
	}

	const toggleDarkMode = (): void => {
		$q.value.dark.set(darkMode.value);
		localStorage.setItem('darkMode', JSON.stringify(darkMode.value));
	};
	watchEffect(toggleDarkMode);

	return {
		darkMode
	};
}
