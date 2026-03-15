<script lang="ts">
  import heroBG from "./bg-research.jpg";
  import PageHeader from '$lib/components/page-header.svelte';

</script>


<svelte:head>
  <title>Research</title>
</svelte:head>

<div>
  <PageHeader title="Campus Map" img={heroBG} />
  <div class="container">
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
    <button>Button 4</button>
  </div>
</div>

<style>
  @import "./styles.css";
</style>