import { compile } from './lib/compile.js'
import { doctype } from './lib/doctype.js'

/**
 * @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig
 */
export default function (eleventyConfig) {
  eleventyConfig.addTemplateFormats('vue')

  eleventyConfig.addExtension('vue', {
    compile,
    read: false
  })

  eleventyConfig.addTransform('doctype', doctype)
}
