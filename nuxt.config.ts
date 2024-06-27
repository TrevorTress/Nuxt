// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	build: {
		transpile: ['vue3-colorpicker'],
	},
	
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	modules: ['@nuxt/ui', '@nuxtjs/color-mode', 'nuxt-icons'],
	devtools: { enabled: true },
});
