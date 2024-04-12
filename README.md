# eleventy-plugin-vue

## Installation

```sh
npm install --save-dev @mvsde/eleventy-plugin-vue
```

## Usage

In your `eleventy.config.js` or `.eleventy.js`:

```js
const { pluginVue } = require('@mvsde/eleventy-plugin-vue')
const path = require('node:path')
const alias = require('@rollup/plugin-alias')

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginVue, {
		rollupOptions: {
			plugins: [
				alias({
					entries: [
						{ find: '@', replacement: process.cwd() },
						{
							find: '@project',
							replacement: path.resolve(process.cwd(), 'project')
						}
					]
				})
			]
		}
	})
}
```

This makes [Vue 3 Single File Components](https://vuejs.org/guide/scaling-up/sfc.html) available as [layouts](https://www.11ty.dev/docs/layouts/) for Eleventy.

The plugin exports additional Composition API methods to get access to the [current page’s data](https://www.11ty.dev/docs/data/) and [JavaScript shortodes](https://www.11ty.dev/docs/shortcodes/) in [`<script setup>`](https://vuejs.org/api/sfc-script-setup.html):

```vue
<script setup>
import { useData, useMethods, useCSS } from '@mvsde/eleventy-plugin-vue'

// Data supplied by Eleventy and the data cascade
const { page, title, ... } = useData()

// JavaScript shortcodes defined in Eleventy config
const { image,  } = useMethods()

// CSS collected from SFCs
const css = useCSS()
</script>
```

## Acknowledgements

This plugin is inspired by [@11ty/eleventy-plugin-vue](https://github.com/11ty/eleventy-plugin-vue).
