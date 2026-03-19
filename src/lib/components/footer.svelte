<script lang="ts">
	import { resolve } from "$app/paths";
  import * as logo from "$lib/assets/logos";
  import { MapPin, Phone, Globe } from "@lucide/svelte";
</script>

<div class="px-15 py-10 bg-school-blue flex flex-col gap-5 text-white">
  <div class="grid grid-cols-5 gap-10">
    <div class="flex flex-row gap-7 items-center col-span-3 pr-10">
      <img src={logo.pcshs} alt="School Logo" class="max-h-32">
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">
          PASIG CITY <br> SCIENCE HIGH SCHOOL
        </h1>
        <p class="text-sm text-balance">
          This premier academic institution focuses on nurturing future leaders by providing a high-quality STEM curriculum enriched with scientific research and state-of-the-art interactive facilities.
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-6 pt-2 *:mr-auto">
      <a href="" class="link-underline">PASCIAN</a>
      <a href="" class="link-underline">CAMPUS BULLETIN</a>
      <a href={resolve("/academic-policy")} class="link-underline">ACADEMIC POLICY</a>
    </div>
    <div class="flex flex-col gap-6 pt-2 *:mr-auto">
      <a href={resolve("/campus-map")} class="link-underline">CAMPUS MAP</a>
      <a href={resolve("/calendar")} class="link-underline">ACADEMIC CALENDAR</a>
      <a href="" class="link-underline">ADMISSION</a>
    </div>
  </div>

  <hr class="bg-linear-to-r from-transparent via-white to-transparent border-none h-0.5 mt-3">
  
  <div class="grid grid-cols-5 gap-10 items-end">
    <img src={logo.lineup} alt="Logo" class="pr-32 col-span-3" />
    <div class="col-span-2 flex flex-col *:flex-row *:flex *:gap-2 *:items-center gap-2 text-xs">
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
          <a href="https://facebook.com/pcshs.edu" target="_blank" rel="noopener noreferrer" class="link-underline">facebook.com/pcshs.edu</a>
        </span>
      </div>
    </div>
  </div>
</div>

