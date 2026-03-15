<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="relative flex flex-col h-screen">
	<header class="fixed top-0 w-full z-10">
		<Navbar />
	</header>
  <div class="my-auto">
		{@render children()}
	</div>
	<footer class="w-full">
		<Footer />
	</footer>
</div>
