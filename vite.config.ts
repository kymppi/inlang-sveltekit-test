import { paraglide } from '@inlang/paraglide-js-adapter-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		paraglide({
			//recommended
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		}),
		sveltekit()
	]
});
