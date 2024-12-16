import type { Post } from '$lib/types'

interface LoadContext {
	fetch: typeof fetch
}

export async function load({ fetch }: LoadContext) {
	const response = await fetch('api/posts')
	const posts: Post[] = await response.json()
	return { posts }
}
