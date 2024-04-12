<script setup>
import { useCSS, useData } from '@mvsde/eleventy-plugin-vue'

import CFooter from '@inc/CFooter.vue'
import CHeader from '@inc/CHeader.vue'

const { title } = useData()
const css = useCSS()
</script>

<template>
	<html lang="en">
		<head>
			<title>{{ title }}</title>
			<component :is="'style'">
				{{ css }}
			</component>
		</head>
		<body>
			<CHeader />
			<main>
				<h1>{{ title }}</h1>
				<slot />
			</main>
			<CFooter />
		</body>
	</html>
</template>

<style>
body {
	margin: 1rem;
	font-family: system-ui, sans-serif;
}
</style>
