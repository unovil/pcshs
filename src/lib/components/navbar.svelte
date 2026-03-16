<script lang="ts">
	import { resolve } from "$app/paths";
  import { pcshs } from "$lib/assets/logos";
  import { onMount } from "svelte";

  let scrolled = $state(false);

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
        <h1 class="text-2xl font-bold">
          PASIG CITY SCIENCE HIGH SCHOOL
        </h1>
      </div>
    </a>
  </div>

  <!-- future nav -->
  <!-- <nav class="flex flex-row gap-8 justify-end">
  <a href="/" class="text-lg font-semibold">Home</a>
  <a href="/about" class="text-lg font-semibold">About Us</a>
  <a href="/admissions" class="text-lg font-semibold">Admissions</a>
  <a href="/academics" class="text-lg font-semibold">Academics</a>
  <a href="/contact" class="text-lg font-semibold">Contact Me</a>
  </nav> -->
</div>