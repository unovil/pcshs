<script lang="ts">
  import * as logo from "$lib/assets/logos";
  import { MapPin, Phone, Globe } from "@lucide/svelte";
</script>

<div class="px-15 py-10 bg-school-blue flex flex-col gap-5 text-white font-body">
  <div class="grid grid-cols-4 gap-10">
    <div class="flex flex-row gap-7 items-center col-span-2">
      <img src={logo.pcshs} alt="School Logo" class="max-h-30">
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">
          PASIG CITY <br> SCIENCE HIGH SCHOOL
        </h1>
        <p class="text-sm text-balance">
          This premier academic institution focuses on nurturing future leaders by providing a high-quality STEM curriculum enriched with scientific research and state-of-the-art interactive facilities.
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-6 pt-2 *:pr-auto">
      <a href="">PASCIAN</a>
      <a href="">CAMPUS BULLETIN</a>
      <a href="">ACADEMIC POLICY</a>
    </div>
    <div class="flex flex-col gap-6 pt-2 *:pr-auto">
      <a href="">CAMPUS MAP</a>
      <a href="">ACADEMIC CALENDAR</a>
      <a href="">ADMISSION</a>
    </div>
  </div>

  <hr class="bg-linear-to-r from-transparent via-white to-transparent border-none h-0.5">
  
  <div class="grid grid-cols-2 gap-10 items-end">
    <img src={logo.lineup} alt="Logo" class="pr-16" />
    <div class="flex flex-col *:flex-row *:flex *:gap-2 *:items-center gap-2 text-xs">
      <div>
        <MapPin class="w-4" />
        <span>
          F. Legaspi St., RAVE Park, Maybunga, Pasig, Philippines, 1607
        </span>
      </div>
      <div>
        <Phone class="w-4" />
        <span>
          Tel. 8628-2177 / 7728-7041
        </span>
      </div>
      <div>
        <Globe class="w-4" />
        <span>
          <a href="https://facebook.com/pcshs.edu" target="_blank" rel="noopener noreferrer">facebook.com/pcshs.edu</a>
        </span>
      </div>
    </div>
  </div>
</div>

