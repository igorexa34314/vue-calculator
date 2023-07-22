import { defineStore } from 'pinia';
import { ref, watchEffect } from 'vue';
import { saveToLocalStorage, getFromLocalStorage } from '@/utils/localStorage';
import { Expression } from '@/types/Expression';

const HISTORY_KEY = 'history';

export const useHistoryStore = defineStore('history', () => {
	const problemItems = ref<Expression[]>(getFromLocalStorage(HISTORY_KEY) ?? []);

	const addProblemItem = (problemItem: Expression) => {
		for (let item of problemItems.value) {
			if (item.problem === problemItem.problem) return;
		}
		problemItems.value.push(problemItem);
	};

	const deleteProblemItem = (problemItem: Expression) => {
		problemItems.value = problemItems.value.filter(item => item.problem !== problemItem.problem);
	};

	watchEffect(() => {
		saveToLocalStorage(HISTORY_KEY, problemItems.value);
	});

	return { problemItems, addProblemItem, deleteProblemItem };
});
