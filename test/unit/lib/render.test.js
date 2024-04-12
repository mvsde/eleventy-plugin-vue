import assert from 'node:assert'
import test from 'node:test'
import path from 'node:path'
import { render } from '../../../lib/render.js'
import alias from '@rollup/plugin-alias'

test('renders Vue SFC', async () => {
	const result = await render({
		inputPath: 'test/unit/fixtures/component.vue',
		data: {},
		methods: {},
		rollupOptions: {
			plugins: [
				alias({
					entries: [{ find: '@', replacement: path.resolve(process.cwd()) }]
				})
			]
		}
	})

	assert.equal(result, '<p>content</p>')
})
