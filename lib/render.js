import path from 'node:path'

import pluginVue from '@vitejs/plugin-vue'
import { requireFromString } from 'module-from-string'
import { rollup } from 'rollup'
import pluginCSS from 'rollup-plugin-css-only'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

const CWD = process.cwd()

/**
 * Compile and render Vue component.
 *
 * @param {Object} options
 * @param {string} options.inputPath
 * @param {Object<string, any>} options.data
 * @param {Object<string, function>} options.methods
 * @param {Object} options.rollupOptions
 */
export async function render ({ inputPath, data, methods, rollupOptions }) {
	const filename = path.join(CWD, inputPath)
	let css = ''

	const rollupConfig = {
		input: filename,
		plugins: [
			pluginVue({
				ssr: true
			}),
			pluginCSS({
				output: styles => {	css = styles }
			})
		],
		external: [
			'@mvsde/eleventy-plugin-vue',
			'vue'
		]
	}
	// merge options
	for (const key in rollupOptions) {
		if (key === 'external' || key === 'plugins') {
			// merge the Array
			rollupConfig[key] = rollupConfig[key].concat(rollupOptions[key])
		} else {
			rollupConfig[key] = rollupOptions[key]
		}
	}

	const bundle = await rollup(rollupConfig)

	const template = await bundle.generate({
		format: 'cjs',
		exports: 'default'
	})

	const component = requireFromString(template.output[0].code, {
		filename: path.basename(filename),
		dirname: path.dirname(filename)
	})

	const app = createSSRApp(component)

	app.config.globalProperties.$data = data
	app.config.globalProperties.$methods = methods
	app.config.globalProperties.$css = css

	return renderToString(app)
}
