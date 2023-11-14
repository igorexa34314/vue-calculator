import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Snackbar {
	message: string;
	type: 'success' | 'error' | 'warning';
	timeout: number;
}

export const useSnackbarStore = defineStore('snackbar', () => {
	const snackbar = ref<Snackbar>({ message: 'missing message', type: 'success', timeout: 2000 });

	const notify = ({ message, type, timeout }: Partial<Snackbar>) => {
		snackbar.value = {
			message: message || 'missing message',
			type: type || 'success',
			timeout: timeout ?? 2000
		};
	};

	return {
		snackbarState: snackbar,
		notify
	};
});
