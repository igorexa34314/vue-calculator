import { ref, watchEffect } from 'vue';
import { useTheme } from 'vuetify';
import { saveToLocalStorage, getFromLocalStorage } from '@/utils/localStorage';

const DARK_MODE_DEFAULT = import.meta.env.VITE_APP_THEME === 'dark';
const DARK_MODE_KEY = 'darkMode';

export const useDarkMode = () => {
	const theme = useTheme();
	const darkMode = ref(getFromLocalStorage<boolean>(DARK_MODE_KEY) ?? DARK_MODE_DEFAULT);

	watchEffect(() => {
		theme.global.name.value = darkMode ? 'dark' : 'light';
		saveToLocalStorage(DARK_MODE_KEY, darkMode.value);
	});

	return { darkMode };
};
