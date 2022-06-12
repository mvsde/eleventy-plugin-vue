const pluginVue = require('../../dist/main.cjs')

/** @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginVue)
}
