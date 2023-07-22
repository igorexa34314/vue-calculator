import { ref, watchEffect } from 'vue';
import { getFromLocalStorage, saveToLocalStorage } from '@/utils/localStorage';

const ACTIVE_TAB_KEY = 'activeTab';

export const useTabs = (initialTabName: string) => {
	const activeTab = ref(getFromLocalStorage<string>(ACTIVE_TAB_KEY) ?? initialTabName);

	watchEffect(() => {
		saveToLocalStorage(ACTIVE_TAB_KEY, activeTab.value);
	});

	return { activeTab };
};
