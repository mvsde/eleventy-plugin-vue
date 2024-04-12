<script setup>
import { useData } from '@mvsde/eleventy-plugin-vue'

import CHero from '@inc/CHero.vue'
import LBase from '@inc/LBase.vue'

const { content } = useData()
</script>

<template>
	<LBase>
		<CHero />
		<div v-html="content" />
	</LBase>
</template>
