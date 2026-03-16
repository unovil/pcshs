<!-- 64px matches navbar's p-4 -->
<div class="pl-20 grid grid-cols-2 text-8xl min-h-[calc(100dvh-64px)] bg-blue-100 items-center">
  <div>
    <strong class="block">WE EXCEL.</strong>
    <strong class="block">WE SERVE.</strong>
    <strong class="block">WE LEAD.</strong>
  </div>
</div>
<div class="pr-20 flex flex-col items-end text-right gap-4 bg-blue-950">
  <div class="flex flex-row items-center">
    <div class="text-4xl font-bold uppercase leading-tight text-white">
      <p>Do you dream</p>
      <p>of becoming a</p>
    </div>
    <p class="text-6xl font-bold uppercase text-yellow-400">Pascian <span class="text-white">?</span></p>
  </div>
  <p class="text-white max-w-md text-sm">
    [Paragraph] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat, mauris non consectetur auctor, nisl libero sollicitudin orci, et pharetra diam orci eu ligula. Maecenas finibus tortor nulla, a congue odio egestas nec.
  </p>
  <div class="flex gap-4">
    <button class="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full">Pascian →</button>
    <button class="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full">Admission →</button>
  </div>
</div>

<div class="p-20 bg-school-indigo grid grid-cols-2 gap-x-20 gap-y-3 items-center text-center text-white text-balanced">
  <h1 class="text-5xl font-bold font-heading">MISSION</h1>
  <h1 class="text-5xl font-bold font-heading">VISION</h1>
  <p class="font-body px-14">
    PCSHS' mission is to fully develop well-rounded, Science and Technology-oriented students, nurturing and gender-sensitive persons, and future leaders with a vision for excellence.
  </p>
  <p class="font-body px-14">
    PCSHS is envisioned to be a world-class institution that is globally and locally competitive and responsive to the ever-changing needs of the times, especially in the fields of Science and Technology.
  </p>
</div>

<div style:background-image="url({image.lab})" class="w-full h-auto bg-cover bg-center">
  <div class="p-24 bg-linear-to-b from-transparent from-30% to-school-blue/50">
    <div class="flex flex-col gap-4 text-white mt-70">
      <h1 class="font-heading text-6xl font-bold">THE LATEST FACILITIES</h1>
      <p class="font-body max-w-lg">Pasig City Science High School features state-of-the-art facilities and laboratories that nurture their students.</p>
    </div>
  </div>
</div>

<div class="flex flex-col gap-5 py-10 bg-linear-to-b from-school-blue to-transparent to-10% items-center">
  <h1 class="font-bold font-heading tracking-widest text-school-blue text-7xl mt-10">CAMPUS BULLETIN</h1>
  <div class="rounded-lg bg-school-blue grid grid-cols-2 items-center text-white">
    <div class="flex flex-col items-center gap-1 p-10">
      <h2 class="font-body">March 31, 2026</h2>
      <h1 class="font-heading text-4xl">COMMENCEMENT EXERCISES</h1>
      <hr class="bg-linear-to-r from-transparent via-white to-transparent border-none h-0.5 w-full my-5">
      <div class="flex flex-row items-center *:flex *:flex-col *:items-center gap-12 font-body">
        <div>
          <p class="text-3xl font-bold">{days}</p>
          <p class="text-sm">Days</p>
        </div>
        <div>
          <p class="text-3xl font-bold">{hours}</p>
          <p class="text-sm">Hours</p>
        </div>
        <div>
          <p class="text-3xl font-bold">{minutes}</p>
          <p class="text-sm">Minutes</p>
        </div>
        <div>
          <p class="text-3xl font-bold">{seconds}</p>
          <p class="text-sm">Seconds</p>
        </div>
      </div>
    </div>
    <div>
      <img src={image.commencement} class="w-full h-auto object-cover rounded-r-lg" alt="Commencement Exercises">
    </div>
  </div>

  <button class="border-school-blue border-2 text-school-blue my-2 px-6 py-2 rounded-full font-body cursor-pointer" onclick={() => goto(resolve("/"))}>Academic Calendar</button>
  <div class="grid grid-cols-2 gap-10 items-center mt-10 px-40 mb-20">
    {#each news as article, index (index)}
      <a href={resolve(`/news/${index}`)}>
        <div class="grid grid-cols-3 gap-5 items-center cursor-pointer">
          {#if article.image}
          <img src={article.image} alt={article.title} class="w-full max-h-24 object-cover rounded-lg">
          {:else}
          <div></div>
          {/if}
          <div class="flex flex-col font-body col-span-2">
            <p class="text-gray-500 text-sm">{article.date}</p>
            <h2 class="text-lg/5 font-semibold font-heading">{article.title}</h2>
            <p class="mt-2 text-xs text-balance line-clamp-3">{article.content[0]}</p>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>