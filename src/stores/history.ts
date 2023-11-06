import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export interface Expression {
	problem: string;
	result: number | string;
}

export const useHistoryStore = defineStore('history', () => {
	const problemItems = useLocalStorage<Expression[]>('history', []);

	const addProblemItem = (problemItem: Expression) => {
		if (!problemItems.value.some(item => item.problem === problemItem.problem)) {
			problemItems.value = [...problemItems.value, problemItem];
		}
	};

	const deleteProblemItem = (problemItem: Expression) => {
		problemItems.value = problemItems.value.filter(item => item.problem !== problemItem.problem);
	};

	return { problemItems, addProblemItem, deleteProblemItem };
});
