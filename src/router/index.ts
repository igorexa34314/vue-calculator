import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router/auto';

const history = import.meta.env.SSR
	? createMemoryHistory(import.meta.env.BASE_URL)
	: createWebHistory(import.meta.env.BASE_URL);

const router = createRouter({
	history,
});

export default router;
