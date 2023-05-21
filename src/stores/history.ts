import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Expression } from '@/types/Expression';

export const useHistoryStore = defineStore('history', () => {
	const problemItems = ref<Expression[]>(JSON.parse(localStorage.getItem('history') || '[]'));

	const addProblemItem = (problemItem: Expression) => {
		for (let item of problemItems.value) {
			if (item.problem === problemItem.problem) return;
		}
		problemItems.value.push(problemItem);
		localStorage.setItem('history', JSON.stringify(problemItems.value));
	};
	const deleteProblemItem = (problemItem: Expression) => {
		problemItems.value = problemItems.value.filter(item => item.problem !== problemItem.problem);
		localStorage.setItem('history', JSON.stringify(problemItems.value));
	};
	return { problemItems, addProblemItem, deleteProblemItem };
});
