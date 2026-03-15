<script lang="ts">
  import * as image from "$lib/assets/images";
  import * as abstract from "$lib/assets/abstract";
</script>

<div class="relative p-32 flex flex-col min-h-screen overflow-hidden">
  
  <img src={image.school} alt="School" class="absolute inset-0 w-full h-full object-cover -z-10">

  <div class="absolute inset-0 -z-10 bg-linear-135 from-school-blue via-school-blue-light/52 to-school-yellow"></div>

  <div class="absolute inset-0 -z-10">
    <img src={abstract.concentricBlue} alt="Abstract Blue" class="absolute top-0 left-0 -translate-x-1/3 -translate-y-3/5 pointer-events-none select-none">
    <img src={abstract.concentricYellow} alt="Abstract Yellow" class="absolute bottom-0 right-0 translate-x-1/3 translate-y-5/8 pointer-events-none select-none">
  </div>

  <div class="font-heading text-9xl/26 tracking-tight text-white my-auto">
    <strong class="block">WE EXCEL.</strong>
    <strong class="block">WE SERVE.</strong>
    <strong class="block">WE LEAD.</strong>
  </div>
</div>

<div class="p-20 flex flex-col items-end text-right gap-4 bg-blue-950">
  <div class="flex flex-row items-center">
    <div class="text-4xl font-bold uppercase leading-tight text-white">
      <p>Do you dream</p>
      <p>of becoming a</p>
    </div>
    <p class="text-6xl font-bold uppercase text-yellow-400">Pascian<span class="text-white">?</span></p>
  </div>
  <p class="text-white max-w-xl text-balance">
    Step into a community where curiosity sparks discovery, ideas turn into innovation, and passion for learning drives excellence. At Pasig City Science High School, students are empowered to explore science, technology, and leadership in an environment that challenges them to think boldly and achieve more. Here, you will collaborate with bright minds, participate in dynamic academic and extracurricular programs, and grow into a future-ready leader prepared to make an impact in the world. Join the Pascian community today and start shaping a future fueled by knowledge, innovation, and purpose.
  </p>
  <div class="flex gap-4 mt-4">
    <button class="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full">Pascian →</button>
    <button class="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full">Admission →</button>
  </div>
</div>