<script lang="ts">
	import '../styles/header.css'

	import * as config from '$lib/config'
	import GithubIcon from './icons/GithubIcon.svelte'
	import ThemeToggle from './ThemeToggle/ThemeToggle.svelte'
</script>

<header class="header">
	<nav class="nav">
		<a href="/">{config.home}</a>

		<div>
			<ThemeToggle />
			<a
				href="https://github.com/ryanjayleyva/"
				class="githubIcon"
				aria-label="Github Icon"
				target="_blank"
			>
				<GithubIcon />
			</a>
		</div>
	</nav>
</header>
