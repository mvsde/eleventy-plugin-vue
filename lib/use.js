import { getCurrentInstance } from 'vue'

/**
 * Workaround for global data and methods in `<script setup>`.
 * Eleventy injects the data into the template. To use it from the script,
 * we need to extract the data from the app instance.
 *
 * Source: https://forum.vuejs.org/t/how-to-use-globalproperties-in-vue-3-setup-method/108387/4
 */

/**
 * @returns {Object}
 */
export function useData () {
	const app = getCurrentInstance()
	return app.appContext.config.globalProperties.$data
}

/**
 * @returns {Object<string,function>}
 */
export function useMethods () {
	const app = getCurrentInstance()
	return app.appContext.config.globalProperties.$methods
}

/**
 * @returns {string}
 */
export function useCSS () {
	const app = getCurrentInstance()
	return app.appContext.config.globalProperties.$css
}
