<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div 
	class="relative flex flex-col h-screen font-body">
	<header class="fixed top-0 w-full z-10">
		<Navbar />
	</header>
  <div class="my-auto font-body">
		{@render children()}
	</div>
	<footer class="w-full font-body">
		<Footer />
	</footer>
</div>
