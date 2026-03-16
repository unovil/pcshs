<script lang="ts">
	import { resolve } from "$app/paths";
  import { pcshs } from "$lib/assets/logos";
	import { Menu } from "@lucide/svelte";
  import { onMount } from "svelte";

  let scrolled = $state(false);
  let isMenuOpened = $state(true);

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 40;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
      ></button>

      <div class="absolute right-4 top-full mt-2 z-50 bg-school-indigo text-white rounded shadow-lg p-10">
        <div class="grid grid-cols-2 gap-10">
          <div class="flex flex-col gap-5 items-start *:w-full">
            <div class="flex flex-col gap-1">
              <span class="font-bold text-xl font-heading">About</span>
              <hr>
              <a href="" class="uppercase font-body text-sm">School information</a>
              <a href="" class="uppercase font-body text-sm">Administration</a>
              <a href="" class="uppercase font-body text-sm">Campus Map</a>
            </div>

            <div class="flex flex-col gap-1">
              <a href="/about" class="font-bold text-xl font-heading">Pascian</a>
              <hr>
              <a href="" class="uppercase font-body text-sm">Faculty & Staff</a>
              <a href="" class="uppercase font-body text-sm">Student Government (SSLG)</a>
              <a href="" class="uppercase font-body text-sm">Clubs & Organizations</a>
              <a href="" class="uppercase font-body text-sm">Alumni</a>
            </div>

            <div class="flex flex-col gap-1">
              <span class="font-bold text-xl font-heading">Admission</span>
              <hr>
              <a href="" class="uppercase font-body text-sm">Guidelines & Requirements</a>
              <a href="" class="uppercase font-body text-sm">List of Passers</a>
            </div>
          </div>
          <div class="flex flex-col gap-5 items-start *:w-full">
            <div class="flex flex-col gap-1">
              <a href="/about" class="font-bold text-xl font-heading">E-Library</a>
            </div>

            <div class="flex flex-col gap-1">
              <span class="font-bold text-xl font-heading">Academics</span>
              <hr>
              <a href="" class="uppercase font-body text-sm">Curriculum</a>
              <a href="" class="uppercase font-body text-sm">Research</a>
              <a href="" class="uppercase font-body text-sm">Academic Calendar</a>
              <a href="" class="uppercase font-body text-sm">Academic Policy</a>
            </div>

            <div class="flex flex-col gap-1">
              <span class="font-bold text-xl font-heading">Events & News</span>
              <hr>
              <a href="" class="uppercase font-body text-sm">Campus Bulletin</a>
            </div>
            
            <div class="flex flex-col gap-1">
              <span class="font-bold text-xl font-heading">Contact</span>
              <hr>
              <a href="" class="uppercase font-body text-sm">Contact Information</a>
              <a href="" class="uppercase font-body text-sm">FAQs</a>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>