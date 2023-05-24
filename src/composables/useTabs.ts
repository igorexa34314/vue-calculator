import { Ref, ref, watchEffect } from 'vue';

export const useTabs = <T extends { name: string }[]>(tabs: T) => {
	const activeTab = ref(tabs[0].name) as Ref<T[number]['name']>;

	const setActiveTab = () => {
		if (localStorage.getItem('activeTab')) {
			activeTab.value = JSON.parse(localStorage.getItem('activeTab') || '');
		} else {
			activeTab.value = tabs[0].name;
		}
	};
	setActiveTab();

	watchEffect(() => localStorage.setItem('activeTab', JSON.stringify(activeTab.value)));

	return { activeTab };
};
