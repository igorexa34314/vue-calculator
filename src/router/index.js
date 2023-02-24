import { createRouter, createWebHistory } from 'vue-router';
import CalculatorView from '@/views/CalculatorView.vue';

export default createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Calculator',
			component: CalculatorView
		}
	]
});
