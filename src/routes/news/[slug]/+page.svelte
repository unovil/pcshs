<script lang="ts">
	import type { PageProps } from "./$types";
  import { news } from "$lib/assets/news";

  let { params }: PageProps = $props();

  const article = $derived(news[Number(params.slug)]);
</script>

<div class="bg-linear-to-b from-[#d0d1e2] to-[#6e6b8e] min-h-screen py-30 px-30">
  <div class="p-24 rounded-lg shadow-lg bg-white flex flex-col gap-10 max-w-5xl mx-auto">
    
    <h1 class="font-bold font-heading text-7xl">{article.title}</h1>

    <div>
      <div class="font-body grid grid-cols-2 place-content-between w-full">
        <span class="uppercase text-start">{article.date}</span>
        <span class="uppercase text-end">WYNONA VENTURA | SCIRE</span>
      </div>
      <hr class="mt-2 border">
    </div>

    {#if article.image}
      <img src={article.image} alt="News" class="w-full rounded-lg">
    {/if}

    {#each article.content as paragraph, index (index)}
      <p class="font-body text-lg leading-relaxed text-justify">{paragraph}</p>
    {/each}

  </div>
</div>