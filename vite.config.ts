import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()],
	build: {
		target: 'es2020',
		sourcemap: true,
	},
	optimizeDeps: {
		esbuildOptions: {
			target: 'es2020',
		},
	},
});
