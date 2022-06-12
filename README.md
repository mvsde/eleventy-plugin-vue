# eleventy-plugin-vue

## Installation

```sh
npm install --save-dev @mvsde/eleventy-plugin-vue
```

## Usage

In your `eleventy.config.js` or `.eleventy.js`:

```js
const { pluginVue } = require('@mvsde/eleventy-plugin-vue')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginVue)
}
```

## Acknowledgements

This plugin is inspired by [@11ty/eleventy-plugin-vue](https://github.com/11ty/eleventy-plugin-vue).
