import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import { mdsvex, escapeSvelte } from 'mdsvex'
import { createHighlighter } from 'shiki/index.mjs'

let cachedHighlighter

async function getHighlighter() {
	if (!cachedHighlighter) {
		cachedHighlighter = await createHighlighter({
			themes: ['poimandres'],
			langs: ['javascript', 'typescript']
		})
	}
	return cachedHighlighter
}

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	remarkPlugins: [[remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug],
	extensions: ['.md'],
	layout: {
		_: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getHighlighter()
			await highlighter.loadLanguage('javascript', 'typescript')
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }))
			return `{@html \`${html}\` }`
		}
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
}

export default config
