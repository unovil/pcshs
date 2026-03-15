<script lang="ts">
  import * as image from "$lib/assets/images";
  import * as abstract from "$lib/assets/abstract";
</script>

<div style:background-image="url({image.school})" class="min-h-screen bg-cover bg-center">
  <div class="flex flex-col relative overflow-hidden bg-linear-135 from-school-blue via-school-blue-light/52 to-school-yellow p-32 min-h-screen">
    <div class="absolute inset-0 z-0 pointer-events-none select-none">
      <img src={abstract.concentricBlue} alt="Abstract Blue" class="absolute top-0 left-0 -translate-x-1/3 -translate-y-3/5">
      <img src={abstract.concentricYellow} alt="Abstract Yellow" class="absolute bottom-0 right-0 translate-x-1/3 translate-y-5/8">
    </div>
    <div class="font-heading text-9xl/26 tracking-tight text-white my-auto z-10 relative">
      <strong class="block">WE EXCEL.</strong>
      <strong class="block">WE SERVE.</strong>
      <strong class="block">WE LEAD.</strong>
    </div>
  </div>
</div>

<div class="relative px-20 py-30 flex flex-col items-end text-right gap-4 overflow-hidden">
  <img src={image.sportsfest} alt="Sports Fest" class="absolute top-0 left-0 -translate-x-2/5 -z-20">
  <div class="absolute inset-0 -z-10 bg-linear-to-r from-transparent to-school-blue to-55%"></div>
  
  <div class="absolute inset-0 -z-10">
    <img src={abstract.concentricBlueDark} alt="Abstract Blue Dark" class="absolute top-0 right-0 translate-x-1/3 -translate-y-3/8 pointer-events-none select-none">
    <div class="absolute h-full bg-linear-to-r from-transparent to-school-blue/94"></div>
  </div>

  <div class="flex flex-row items-center font-heading">
    <div class="text-3xl font-bold uppercase tracking-tight text-white">
      <p>Do you dream</p>
      <p>of becoming a</p>
    </div>
    <p class="text-7xl font-bold uppercase text-yellow-400 tracking-tight">Pascian<span class="text-white">?</span></p>
  </div>
  <p class="text-white max-w-xl text-balance font-body">
    Step into a community where curiosity sparks discovery, ideas turn into innovation, and passion for learning drives excellence. At Pasig City Science High School, students are empowered to explore science, technology, and leadership in an environment that challenges them to think boldly and achieve more. Here, you will collaborate with bright minds, participate in dynamic academic and extracurricular programs, and grow into a future-ready leader prepared to make an impact in the world. Join the Pascian community today and start shaping a future fueled by knowledge, innovation, and purpose.
  </p>
  <div class="flex gap-4 mt-4">
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