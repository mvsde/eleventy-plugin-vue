<script setup>
import { useData } from '@mvsde/eleventy-plugin-vue'

import CHero from './CHero.vue'
import LBase from './LBase.vue'

const { content } = useData()
</script>

<template>
	<LBase>
		<CHero />
		<div v-html="content" />
	</LBase>
</template>
