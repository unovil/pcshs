<script>
	import { resolve } from "$app/paths";
	import PageHeader from "$lib/components/page-header.svelte";

</script>

<PageHeader title="E-Library" />

<div class="p-25 flex flex-col gap-5 items-center w-full">
  <div class="flex flex-row gap-5 items-center w-3/5">
    <div class="p-10 text-center w-full uppercase font-heading text-4xl font-bold card text-white">
      <a href={resolve("/library")} class="link-underline">
        DO Modules
      </a>
    </div>
    <div class="p-10 text-center w-full uppercase font-heading text-4xl font-bold card text-white">
      <a href={resolve("/library")} class="link-underline">
        CO Modules
      </a>
    </div>
  </div>

  <div class="p-10 text-center w-3/5 uppercase font-heading text-4xl font-bold card text-white">
    <a href={resolve("/library")} class="link-underline">
      Other learning materials
    </a>
  </div>
</div>