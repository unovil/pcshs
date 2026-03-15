<script>
  import groundFloor from '$lib/assets/floorplan/GROUND FLOOR.png';
  import secondFloor from '$lib/assets/floorplan/2ND FLOOR.png';
  import thirdFloor from '$lib/assets/floorplan/3RD FLOOR.png';
  import fourthFloor from '$lib/assets/floorplan/4TH FLOOR.png';
  import fifthFloor from '$lib/assets/floorplan/5TH FLOOR.png';
  import sixthFloor from '$lib/assets/floorplan/6TH FLOOR.png';
  import bgGraphic from '$lib/assets/floorplan/1.1.svg';

  const floors = [
    { level: 'Ground Floor', img: groundFloor },
    { level: 'Second Floor', img: secondFloor },
    { level: 'Third Floor', img: thirdFloor },
    { level: 'Fourth Floor', img: fourthFloor },
    { level: 'Fifth Floor', img: fifthFloor },
    { level: 'Sixth Floor', img: sixthFloor },
  ];

  let i = $state(0);

  function nextFloor() {
    if (i < floors.length - 1) i++;
  }

  function prevFloor() {
    if (i > 0) i--;
  }
</script>

<div class="relative min-h-screen overflow-hidden ">

  <!-- Background graphic -->
   <img src={bgGraphic} alt="Background Graphic" class="absolute bottom-0 left-0 -translate-x-1/3 translate-y-3/5 pointer-events-none select-none -z-20 w-250">

  <!-- Page content -->
  <main class="relative flex min-h-screen items-center justify-center p-5">

    <div class="w-full max-w-3xl rounded-xl bg-white p-8 shadow-lg">

      <!-- Controls -->
      <div class="mb-6 flex items-center justify-between">

        <select
          bind:value={i}
          class="min-w-40 cursor-pointer appearance-none rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          {#each floors as floor, index (index)}
            <option value={index}>{floor.level}</option>
          {/each}
        </select>

        <div class="flex gap-2">
          <button
            onclick={prevFloor}
            disabled={i === 0}
            class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-500 transition-all duration-200 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-30"
          >
            ‹
          </button>

          <button
            onclick={nextFloor}
            disabled={i === floors.length - 1}
            class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-500 transition-all duration-200 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-30"
          >
            ›
          </button>
        </div>

      </div>

      <!-- Image viewer -->
      <div class="flex justify-center rounded-lg p-2 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">

        <img
          class="max-h-[55vh] w-full object-contain"
          src={floors[i].img}
          alt={floors[i].level}
        />

      </div>

    </div>

  </main>

</div>