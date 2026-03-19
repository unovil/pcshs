<script>
	import { calendar } from "$lib/assets/images";
	import PageHeader from "$lib/components/page-header.svelte";
	import { monthEvents } from "./events";
</script>

<PageHeader title="Academic Calendar" img={calendar}/>

<div class="p-15 columns-2 gap-8 bg-linear-135 from-school-blue/80 via-school-blue-light/50 to-school-yellow/80">

  {#each monthEvents as month (month.month)}
  <div class="break-inside-avoid mb-8 flex flex-col gap-3 p-10 rounded-lg bg-linear-to-r from-school-blue to-[#1a276d]">
    <h2 class="text-4xl uppercase text-school-yellow font-bold font-heading">{month.month}</h2>
    <table class="w-full table-fixed border-separate border-spacing-x-2">
      <tbody>
      {#each Object.entries(month.events) as [date, events] (date)}
        <tr class="text-white">
          <td class="border-r-2 w-1/6">{date}</td>
          <td class="w-5/6">{events.join("; ")}</td>
        </tr>
      {/each}
      </tbody>
    </table>
  </div>
  {/each}

  <div class="break-inside-avoid p-10 rounded-lg flex bg-linear-to-r from-white to-gray-300">
    <p class="uppercase font-heading font-bold text-4xl w-full text-center">More dates to follow</p>
  </div>

</div>