<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/navbar.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="flex flex-col h-screen">
	<div class="sticky top-0 w-full">
		<Navbar />
	</div>
  <div class="my-auto">
		{@render children()}
	</div>
</div>
