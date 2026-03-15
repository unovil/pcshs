<script lang="ts">
    import PageHeader from '$lib/components/page-header.svelte';
    import bgGraphic from '$lib/assets/floorplan/1.1.svg';

</script>

<PageHeader title="List of Passers" img={null} />


<!--<img src={bgGraphic} alt="Background Graphic" class="absolute top-0 left-0 translate(-50%, -50%) pointer-events-none select-none -z-20 h-[200px]" />-->

<div class="relative flex flex-col min-h-screen items-center justify-center p-5">

    <div class="w-[70%] p-2 flex flex-wrap justify-center items-end">
        <span class="text-[24px]">RESULTS WILL BE OUT ON</span>
    </div>
    <div class="w-[70%] flex flex-wrap justify-center bg-gradient-to-b from-[rgba(24,13,79,1)] to-[rgba(24,13,79,0.4)] rounded-xl">
        <span class="text-[100px] text-white font-bold">MARCH 25, 2026</span>
    </div>
    <div class="w-[70%] p-4 flex flex-wrap justify-center items-end mb-20">
        <span class="text-[18px]">buttons below will be open by then</span>
    </div>
    <div class="flex flex-wrap justify-between w-[70%]">
        <div class="bg-[rgb(24,13,79)] w-[40%] flex flex-wrap justify-center">
            <span class="text-white font-medium text-[50px]">Grade 7</span>
        </div>
        <div class="bg-[rgb(24,13,79)] w-[40%] flex flex-wrap justify-center">
            <span class="text-white font-medium text-[50px]">Grade 11</span>
        </div>
    </div>
</div>