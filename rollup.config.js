export default {
  input: 'main.js',
  output: {
    file: 'dist/main.cjs',
    format: 'cjs',
    exports: 'default'
  },
  external: [
    '@vitejs/plugin-vue',
    'rollup',
    'rollup-plugin-css-only',
    'vue',
    'vue/server-renderer',
    /^node:/
  ]
}
