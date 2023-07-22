import { ref, watchEffect } from 'vue';
import { useQuasar } from 'quasar';
import { saveToLocalStorage, getFromLocalStorage } from '@/utils/localStorage';

const DARK_MODE_DEFAULT = import.meta.env.VITE_APP_THEME === 'dark';
const DARK_MODE_KEY = 'darkMode';

export const useDarkMode = () => {
	const $q = useQuasar();
	const darkMode = ref(getFromLocalStorage<boolean>(DARK_MODE_KEY) ?? DARK_MODE_DEFAULT);

	watchEffect(() => {
		$q.dark.set(darkMode.value);
		saveToLocalStorage(DARK_MODE_KEY, darkMode.value);
	});

	return { darkMode };
};
