import { Notify, QuasarPluginOptions } from 'quasar';

export default {
	config: {
		notify: {
			position: 'top',
			group: true,
			timeout: 1000,
		},
	},
	plugins: { Notify },
} as QuasarPluginOptions;
