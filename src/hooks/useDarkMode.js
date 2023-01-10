import { ref, watch } from 'vue';

import { useQuasar } from 'quasar';

export function useDarkMode() {
	const $q = ref(useQuasar());

	const darkMode = ref(false);

	if (localStorage.getItem('darkMode')) {
		darkMode.value = JSON.parse(localStorage.getItem('darkMode'));
	} else {
		darkMode.value = false;
	}

	const toggleDarkMode = newValue => {
		$q.value.dark.set(newValue);
		localStorage.setItem('darkMode', JSON.stringify(newValue));
	};
	watch(darkMode, toggleDarkMode);
	toggleDarkMode(darkMode.value);

	return {
		darkMode
	};
}
