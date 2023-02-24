import { defineConfig } from 'vite';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/vue-calculator/',
	server: {
		port: 3000
	},
	resolve: {
		alias: {
			'@': resolve(dirname(fileURLToPath(import.meta.url)), './src')
		}
	},
	plugins: [
		vue({
			template: { transformAssetUrls }
		}),
		quasar({
			autoImportComponentCase: 'kebab',
			sassVariables: 'src/assets/styles/variables.scss'
		})
	]
});
