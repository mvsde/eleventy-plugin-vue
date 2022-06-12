import assert from 'node:assert'
import test from 'node:test'

import { render } from '../../../lib/render.js'

test('renders Vue SFC', async () => {
	const result = await render({
		inputPath: 'test/unit/fixtures/component.vue',
		data: {},
		methods: {}
	})

	assert.equal(result, '<p>content</p>')
})
