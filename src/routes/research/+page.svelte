<script lang="ts">
    import heroBG from '$lib/assets/images/bg-research.jpg';
    import PageHeader from '$lib/components/page-header.svelte';
    import { Atom, Dna, Database, Bot } from "@lucide/svelte";

    const categories = [
        { icon: Atom, title: "PHYSICAL SCIENCE" },
        { icon: Dna, title: "LIFE SCIENCE" },
        { icon: Database, title: "DATA SCIENCE" },
        { icon: Bot, title: "RIM" },
    ];
</script>

<PageHeader title="Research" img={null} />

<div class="relative min-h-180 overflow-hidden px-20 py-45 
    flex flex-wrap gap-16 items-center justify-center 
    bg-gradient-to-b from-[rgba(90,90,178,0.2)] to-[rgba(90,90,178,0.5)] 
    ">
    {#each categories as cat}
        <button class="basis-[calc(40%-8px)] flex gap-12 items-center gap-4 pl-12 py-4 
            bg-gradient-to-r from-[#332e53] to-[#1a276d]
            rounded-xl shadow-2xl shadow-black/50

            transition-all duration-200

            hover:bg-gradient-to-r hover:from-[#332e53] hover:to-[#332e53]
            hover:scale-110
            ">
            <svelte:component this={cat.icon} size={125} strokeWidth={1.25} color={"white"} />
            <span class="text-[40px] text-white font-body">{cat.title}</span>
        </button>
    {/each}
</div>