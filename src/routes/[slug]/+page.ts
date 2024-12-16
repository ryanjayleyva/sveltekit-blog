import { error } from '@sveltejs/kit'

interface LoadParams {
	slug: string
}

export async function load({ params }: { params: LoadParams }) {
	try {
		const post = await import(`../../posts/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch {
		error(404, `Could not find ${params.slug}`)
	}
}
