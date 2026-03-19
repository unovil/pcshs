<script>
	import { resolve } from "$app/paths";
	import { research } from "$lib/assets/images";
	import PageHeader from "$lib/components/page-header.svelte";
	import { researchTypes } from "./researchTypes";
</script>

<PageHeader title="Research" img={research}/>

<div class="p-30 bg-linear-to-b from-gray-100 to-school-indigo/50 grid grid-cols-2 gap-16">
  {#each researchTypes as type (type.name)}
    <a href={resolve(type.link)}>
      <div class="flex flex-row items-center text-left align-middle p-8 bg-linear-to-r from-school-blue to-[#1a276d] rounded-lg text-white gap-4">
        <type.icon class="w-20 h-20"/>
        <h3 class="text-3xl font-bold uppercase">{type.name}</h3>
      </div>
    </a>
  {/each}
</div>