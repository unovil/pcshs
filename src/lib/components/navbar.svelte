<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	import { resolve } from "$app/paths";
  import { pcshs } from "$lib/assets/logos";
	import { Menu } from "@lucide/svelte";
  import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";

  let scrolled = $state(false);
  let isMenuOpened = $state(false);

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 40;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  afterNavigate(() => {
    isMenuOpened = false;
  });

</script>

<div class="fixed top-0 w-full z-50">
  <div class="relative p-4 flex items-center justify-between text-white">
    <!-- background layer -->
    <div
      class={`absolute inset-0 bg-school-blue transition-opacity duration-300 ${
        scrolled ? "opacity-100" : "opacity-0"
      }`}
    ></div>

    <!-- content -->
    <a href={resolve("/")}>
      <div class="relative z-10 flex items-center gap-4">
        <img src={pcshs} alt="School Logo" class="w-10">
        <h1 class="text-2xl font-bold font-heading uppercase">
          Pasig City Science High School
        </h1>
      </div>
    </a>

    <button class="relative z-10 cursor-pointer" onclick={() => {isMenuOpened = !isMenuOpened}}><Menu /></button>

    {#if isMenuOpened}
      <button
        class="fixed inset-0 z-40"
        title="Close Menu"
        onclick={() => (isMenuOpened = false)}
        in:fade={{ duration: 150 }}
        out:fade={{ duration: 150 }}
      ></button>

      <div 
        class="absolute right-4 top-full mt-2 z-50 bg-school-indigo text-white rounded shadow-lg p-10"
        in:fly={{ y: -10, duration: 200 }}
        out:fly={{ y: -10, duration: 150 }}
      >
        <div class="grid grid-cols-2 gap-10 [&_a]:link-underline">
          <div class="flex flex-col gap-5 items-start *:w-full">
            <div class="flex flex-col gap-1">
              <span class="font-bold text-xl font-heading">About</span>
              <hr>
              <a href={resolve("/school-information")} class="uppercase font-body text-sm link-underline">School information</a>
              <a href={resolve("/administration")} class="uppercase font-body text-sm link-underline">Administration</a>
              <a href={resolve("/campus-map")} class="uppercase font-body text-sm link-underline">Campus Map</a>
            </div>

            <div class="flex flex-col gap-1">
              <a href="/about" class="font-bold text-xl font-heading link-underline">Pascian</a>
              <hr>
              <a href="" class="uppercase font-body text-sm link-underline">Faculty & Staff</a>
              <a href="" class="uppercase font-body text-sm link-underline">Student Government (SSLG)</a>
              <a href="" class="uppercase font-body text-sm link-underline">Clubs & Organizations</a>
              <a href="" class="uppercase font-body text-sm link-underline">Alumni</a>
            </div>

            <div class="flex flex-col gap-1">
              <span class="font-bold text-xl font-heading">Admission</span>
              <hr>
              <a href="" class="uppercase font-body text-sm link-underline">Guidelines & Requirements</a>
              <a href="" class="uppercase font-body text-sm link-underline">List of Passers</a>
            </div>
          </div>
          <div class="flex flex-col gap-5 items-start *:w-full">
            <div class="flex flex-col gap-1">
              <a href="/about" class="font-bold text-xl font-heading link-underline">E-Library</a>
            </div>

            <div class="flex flex-col gap-1">
              <span class="font-bold text-xl font-heading">Academics</span>
              <hr>
              <a href={resolve("/curriculum")} class="uppercase font-body text-sm link-underline">Curriculum</a>
              <a href={resolve("/research")} class="uppercase font-body text-sm link-underline">Research</a>
              <a href="" class="uppercase font-body text-sm link-underline">Academic Calendar</a>
              <a href={resolve("/academic-policy")} class="uppercase font-body text-sm link-underline">Academic Policy</a>
            </div>

            <div class="flex flex-col gap-1">
              <span class="font-bold text-xl font-heading">Events & News</span>
              <hr>
              <a href="" class="uppercase font-body text-sm link-underline">Campus Bulletin</a>
            </div>
            
            <div class="flex flex-col gap-1">
              <span class="font-bold text-xl font-heading">Contact</span>
              <hr>
              <a href="" class="uppercase font-body text-sm link-underline">Contact Information</a>
              <a href="" class="uppercase font-body text-sm link-underline">FAQs</a>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>