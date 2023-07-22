import { defineStore } from 'pinia';
import { ref, watchEffect } from 'vue';
import { Expression } from '@/types/Expression';
import { saveToLocalStorage, getFromLocalStorage } from '@/utils/localStorage';

export const useHistoryStore = defineStore('history', () => {
	const problemItems = ref<Expression[]>(getFromLocalStorage('history') || []);

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
		saveToLocalStorage('history', problemItems.value);
	});

	return { problemItems, addProblemItem, deleteProblemItem };
});
