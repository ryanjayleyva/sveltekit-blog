<script lang="ts">
	import '../styles/hero.css'
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	let { data } = $props()
</script>

<Svelte:head>
	<div class="container">
		<h1 class="author">{config.author}</h1>

		<h2 class="about">
			{config.about}
		</h2>
	</div>
</Svelte:head>

<section>
	<div class="postsWrapper">
		<h1 class="articles">Articles</h1>
		<h2>2024</h2>
		<ul class="posts">
			{#each data.posts as post}
				<li class="post">
					<a href={post.slug} class="title">{post.title}</a>
					<p class="date">{formatDate(post.date)}</p>
					<p class="description">{post.description}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
