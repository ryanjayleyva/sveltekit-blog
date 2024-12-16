<script lang="ts">
	import Hero from '../components/Hero.svelte'

	let { data } = $props()
</script>

<section>
	<Hero {data} />
</section>
