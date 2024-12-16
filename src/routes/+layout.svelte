<script lang="ts">
	import '../styles/globals.css'
	import Header from '../components/Header.svelte'

	let { children } = $props()
</script>

<section>
	<Header />
</section>

{@render children?.()}
