const { pluginVue } = require('@mvsde/eleventy-plugin-vue')

/** @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig */
module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginVue)
}
