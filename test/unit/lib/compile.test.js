import assert from 'node:assert'
import test from 'node:test'

import { compile } from '../../../lib/compile.js'

test('renders Vue SFC', async () => {
  const result = await compile('', 'test/unit/fixtures/component.vue')
  assert.equal(result(), '<p>content</p>')
})
