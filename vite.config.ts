import { defineConfig, loadEnv } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
		base: process.env.VITE_BASE || '/',
		server: {
			port: +process.env.VITE_PORT || 3000,
		},
		resolve: {
			alias: {
				'@': resolve(dirname(fileURLToPath(import.meta.url)), './src'),
			},
		},
		plugins: [
			VueRouter({
				routesFolder: 'src/views',
				dts: './src/typed-router.d.ts',
			}),
			vue({
				script: {
					propsDestructure: true,
					defineModel: true,
				},
			}),
			{
				...visualizer({ filename: 'bundle-stats.html' }),
				apply: () => !!process.env.ROLLUP_ANALYZE,
			},
		],
		define: {
			'process.env.DEBUG': false,
		},
	});
};
