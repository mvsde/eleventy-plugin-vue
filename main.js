import { doctype } from './lib/doctype.js'
import { render } from './lib/render.js'

/**
 * @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig
 */
export function pluginVue (eleventyConfig, options) {
	eleventyConfig.addTemplateFormats('vue')

	eleventyConfig.addExtension('vue', {
		compile (_, inputPath) {
			return data => render({
				inputPath,
				data,
				methods: this.config.javascriptFunctions,
				rollupOptions: options.rollupOptions
			})
		},
		read: false
	})

	eleventyConfig.addTransform('doctype', doctype)
}

export * from './lib/use.js'
