const { pluginVue } = require('@mvsde/eleventy-plugin-vue')
const path = require('node:path')
const alias = require('@rollup/plugin-alias')

/** @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig */
module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginVue, {
		rollupOptions: {
			plugins: [
				alias({
					entries: [
						{ find: '@', replacement: process.cwd() },
						{
							find: '@inc',
							replacement: path.resolve(process.cwd(), '_includes')
						}
					]
				})
			]
		}
	})
}
