import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Expression } from '@/types/Expression';

export const useHistoryStore = defineStore('history', () => {
	const problemItems = ref<Expression[]>(JSON.parse(localStorage.getItem('history') || '[]'));

	const saveToLocalStorage = () =>
		localStorage.setItem('history', JSON.stringify(problemItems.value));

	const addProblemItem = (problemItem: Expression) => {
		for (let item of problemItems.value) {
			if (item.problem === problemItem.problem) return;
		}
		problemItems.value.push(problemItem);
		saveToLocalStorage();
	};
	const deleteProblemItem = (problemItem: Expression) => {
		problemItems.value = problemItems.value.filter(item => item.problem !== problemItem.problem);
		saveToLocalStorage();
	};
	return { problemItems, addProblemItem, deleteProblemItem };
});
