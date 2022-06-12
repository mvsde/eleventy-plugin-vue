const DOCTYPE = '<!doctype html>'

/**
 * Add doctype to HTML files.
 *
 * @param {string} content
 * @param {string} outputPath
 * @returns {string}
 */
export function doctype (content, outputPath) {
	const isHTMLFile = outputPath.endsWith('.html')
	const hasDoctype = content.trim().toLowerCase().startsWith(DOCTYPE)

	if (isHTMLFile && !hasDoctype) {
		return `${DOCTYPE}${content}`
	}

	return content
}
