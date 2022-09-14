import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()], 
	ssr: {
		noExternal: ['sveltekit-flash-message']
	}
};

export default config;
