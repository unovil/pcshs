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

  let i = 0;

  function nextFloor() {
    if (i < floors.length - 1) i++;
  }

  function prevFloor() {
    if (i > 0) i--;
  }
</script>

<main class="min-h-screen flex justify-center items-center p-5 bg-white bg-no-repeat bg-fixed" style="background-image: url({bgGraphic}); background-position: -60% -90%; background-size: 70% auto;">
  <div class="bg-white w-full max-w-3xl p-8 rounded-xl z-10">
    <div class="flex justify-between items-center mb-6">
      <div class="relative flex items-center">
        <select bind:value={i} class="appearance-none bg-white border border-slate-200 px-4 py-2 rounded-full text-sm text-slate-700 cursor-pointer font-medium min-w-[160px] transition-colors duration-200 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300">
          {#each floors as floor, index}
            <option value={index}>{floor.level}</option>
          {/each}
        </select>
      </div>

      <div class="flex gap-2">
        <button on:click={prevFloor} disabled={i === 0} class="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-500 flex items-center justify-center text-xl transition-all duration-200 hover:bg-slate-100 hover:border-slate-300 hover:text-slate-800 disabled:opacity-30 disabled:cursor-not-allowed">
          ‹
        </button>
        <button on:click={nextFloor} disabled={i === floors.length - 1} class="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-500 flex items-center justify-center text-xl transition-all duration-200 hover:bg-slate-100 hover:border-slate-300 hover:text-slate-800 disabled:opacity-30 disabled:cursor-not-allowed">
          ›
        </button>
      </div>
    </div>

    <div class="p-4 rounded-lg flex justify-center md:p-1">
      <div class="bg-white p-2 rounded-sm w-full shadow-[0_2px_10px_rgba(0,0,0,0.03)] max-h-[55vh]">
        <img class="w-full max-h-[52vh] h-auto block object-contain" src={floors[i].img} alt={floors[i].level} />
      </div>
    </div>
  </div>
</main>

