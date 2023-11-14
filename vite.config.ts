import { defineConfig, loadEnv } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
		base: process.env.VITE_BASE || '/',
		server: {
			port: +process.env.VITE_PORT || 3000
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
			vuetify()
		],
		define: {
			'process.env.DEBUG': false
		}
	});
};
