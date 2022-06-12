import assert from 'node:assert'
import test from 'node:test'

import { doctype } from '../../../lib/doctype.js'

test('adds doctype', () => {
	const result = doctype('content', 'file.html')
	assert.equal(result, '<!doctype html>content')
})

test('does not add doctype', () => {
	const result = doctype('content', 'file.txt')
	assert.equal(result, 'content')
})
