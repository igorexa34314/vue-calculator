import { createStore } from 'vuex';

export default createStore({
	state: {
		problemItems: JSON.parse(localStorage.getItem('history') || '[]')
	},
	mutations: {
		addProblemItem(state, problemItem) {
			for (let item of state.problemItems) {
				if (item.problem === problemItem.problem) return;
			}
			state.problemItems.push(problemItem);
			localStorage.setItem('history', JSON.stringify(state.problemItems));
		},
		deleteProblemItem(state, problemItem) {
			state.problemItems = [...state.problemItems].filter(item => item.problem !== problemItem.problem);
			localStorage.setItem('history', JSON.stringify(state.problemItems));
		}
	}
});
