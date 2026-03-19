<script>
	import { concentricBlueThree, concentricWhite } from "$lib/assets/abstract";
	import { pascianBack, pascianFront } from "$lib/assets/images";
	import { sslg } from "$lib/assets/logos";

</script>

<div class="relative h-screen overflow-hidden bg-cover bg-center" style:background-image="url({pascianBack})">

  <!-- BACK IMAGE -->
  <div
    class="absolute inset-0 z-0 bg-cover bg-center bg-linear-to-b from-[#180d4f]/80 to-[#180d4f]/56 h-screen"
  ></div>

  <!-- YELLOW RADIAL GRADIENT -->
  <div class="absolute inset-0 z-1 translate-y-1/8 flex items-center justify-center pointer-events-none">
  
    <!-- gradient -->
    <div class="h-screen w-[100vh] scale-150 bg-radial from-school-yellow to-transparent to-65%"></div>
    <img src={concentricWhite} alt="Abstract White" class=" absolute h-screen scale-135">

    <!-- text -->
    <h1 class="absolute bottom-7/10 font-bold font-heading text-8xl text-white tracking-tight text-center">
      Pascian Community
    </h1>

  </div>

  <!-- FRONT IMAGE -->
  <div
    class="absolute inset-0 z-2 bg-cover bg-center"
    style:background-image="url({pascianFront})"
  ></div>

</div>

<div class="relative overflow-hidden px-15 pt-10 bg-school-blue flex flex-col items-center gap-5">
  <div class="relative flex justify-center">
    <img src={concentricBlueThree} alt="Abstract Blue" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-118 max-w-none pointer-events-none select-none">  
    <img src={sslg} alt="PCSHS Logo" class="relative w-50 pb-3">
  </div>

  <div class="relative flex flex-col items-center text-center text-white uppercase">
    <p class="text-3xl">S.Y. 2025-2026</p>
    <h1 class="font-heading font-bold text-6xl tracking-tight">Supreme Secondary Learner Government</h1>
  </div>
</div>

<div class="p-20 bg-white flex flex-col">

</div>