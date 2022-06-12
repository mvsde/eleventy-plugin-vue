import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { rollup } from 'rollup'
import path from 'node:path'
import pluginCSS from 'rollup-plugin-css-only'
import pluginVue from '@vitejs/plugin-vue'

const CWD = process.cwd()

/**
 * Compile and render Vue component.
 *
 * @param {string} inputContent
 * @param {string} inputPath
 */
export async function compile (inputContent, inputPath) {
  const bundle = await rollup({
    input: path.join(CWD, inputPath),
    plugins: [
      pluginVue(),
      pluginCSS({ output: false })
    ],
    external: ['vue']
  })

  const filename = path.join('.temp', `${inputPath}.cjs`)

  await bundle.write({
    format: 'cjs',
    exports: 'default',
    file: filename
  })

  const { default: component } = await import(path.join(CWD, filename))

  const app = createSSRApp(component)
  const html = await renderToString(app)

  return () => html
}
