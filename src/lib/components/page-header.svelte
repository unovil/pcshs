<script lang="ts">
  import { school } from "$lib/assets/images";
  import { concentricBlue, concentricYellow } from "$lib/assets/abstract";
  let { title, img }: { title: string; img?: string } = $props();
</script>

{#if !img}

<div style:background-image="url({school})" class="bg-cover bg-center">
  <div class="flex flex-col relative overflow-hidden bg-linear-135 from-school-blue via-school-blue-light/52 to-school-yellow px-16 pb-12 pt-24">
    <div class="absolute inset-0 z-0 pointer-events-none select-none">
      <img src={concentricBlue} alt="Abstract Blue" class="absolute top-0 left-0 -translate-x-1/3 -translate-y-3/5">
      <img src={concentricYellow} alt="Abstract Yellow" class="absolute bottom-0 right-0 translate-x-1/3 translate-y-5/8">
    </div>
    <div class="font-heading tracking-tight text-white text-8xl z-0 relative">
      <strong class="block">{title}</strong>
    </div>
  </div>
</div>

{:else}

<div style:background-image="url({img})" class="bg-cover bg-center">
  <div class="flex flex-col">
    <div class="font-heading text-white text-8xl z-0 relative">
      <strong class="block">{title}</strong>
    </div>
  </div>
</div>

{/if}
