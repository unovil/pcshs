<script lang="ts">
  import schoolLogo from '$lib/assets/logos/school_logo.png';
</script>

<div class="p-4 grid grid-cols-2 justify-between align-middle font-body bg-linear-to-b from-school-blue to-transparent">
  <div class="flex flex-row gap-4 items-center">
    <img src={schoolLogo} alt="School Logo" class="w-10">
    <h1 class="text-2xl font-bold">
      PASIG CITY SCIENCE HIGH SCHOOL
    </h1>
  </div>
  <nav class="flex flex-row gap-8 justify-end">
    <a href="/" class="text-lg font-semibold">Home</a>
    <a href="/about" class="text-lg font-semibold">About Us</a>
    <a href="/admissions" class="text-lg font-semibold">Admissions</a>
    <a href="/academics" class="text-lg font-semibold">Academics</a>
    <a href="/contact" class="text-lg font-semibold">Contact Me</a>
  </nav>
</div>