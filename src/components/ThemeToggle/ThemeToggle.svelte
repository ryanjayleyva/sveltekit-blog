<script lang="ts">
	import '../../styles/themeToggle.css'
	import { onMount } from 'svelte'
	import MoonIcon from '../icons/MoonIcon.svelte'
	import SunIcon from '../icons/SunIcon.svelte'

	let isDarkMode: boolean = false

	onMount(() => {
		const savedTheme: string | null = localStorage.getItem('theme')
		const prefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches

		isDarkMode = savedTheme ? savedTheme === 'dark' : prefersDark
		updateTheme()
	})

	function toggleTheme(): void {
		isDarkMode = !isDarkMode
		updateTheme()
		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
	}

	function updateTheme(): void {
		document.body.classList.toggle('dark', isDarkMode)
	}
</script>

<button on:click={toggleTheme} aria-label="Theme Toggle" class="themeToggle">
	{#if isDarkMode}
		<MoonIcon />
	{:else}
		<SunIcon />
	{/if}
</button>
