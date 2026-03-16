<script>

let showArticle = false
let relatedIndex = 0

const news = [
{title:"FreshieCon 2025: New Beginnings at PCSHS",date:"March 6, 2026"},
{title:"FreshieCon 2025: New Beginnings at PCSHS",date:"March 6, 2026"},
{title:"FreshieCon 2025: New Beginnings at PCSHS",date:"March 6, 2026"},
{title:"FreshieCon 2025: New Beginnings at PCSHS",date:"March 6, 2026"}
]

const related = [
{title:"FreshieCon 2025: New Beginnings at PCSHS"},
{title:"FreshieCon 2025: New Beginnings at PCSHS"},
{title:"FreshieCon 2025: New Beginnings at PCSHS"},
{title:"FreshieCon 2025: New Beginnings at PCSHS"},
]

function next(){
relatedIndex=(relatedIndex+1)%related.length
}

function prev(){
relatedIndex=(relatedIndex-1+related.length)%related.length
}

</script>



<!-- HERO -->

<section class="relative h-[520px] flex items-end px-[10%] py-[60px] text-white font-body bg-[url('/images/ushat.png')] bg-cover bg-center">

<div class="absolute inset-0 bg-gradient-to-b from-[rgba(30,20,100,.75)] to-[rgba(30,20,100,.95)]"></div>

<div class="relative max-w-[900px]">

<h1 class="font-heading text-[48px] mb-2">
FIRST-EVER UNIFIED SCIENCE HIGH SCHOOL ADMISSIONS TEST (USHAT)
CONDUCTED AT PCSHS
</h1>

<p class="text-gray-300">MARCH 9, 2026</p>

<p class="text-gray-300">
Pasig City Science High School successfully conducted the Unified
Science High School Admission Test (USHAT) on March 7, 2026.
</p>

<button
class="mt-[25px] bg-white text-black px-[26px] py-[12px] rounded-[25px] transition hover:scale-105"
on:click={()=>showArticle=true}>
Read More
</button>

</div>

</section>



<!-- NEWS -->

<section class="px-[10%] py-[80px] font-body bg-[#1d1360] text-white">

<h2 class="text-center text-[42px] tracking-[3px] mb-[50px] font-heading">
NEWS & EVENTS
</h2>

<div class="grid grid-cols-2 gap-[35px]">

{#each news as n}

<div
class="flex gap-[20px] bg-[#2b2a74] rounded-[20px] p-[22px] cursor-pointer transition hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(0,0,0,.3)]"
on:click={()=>showArticle=true}>

<img src="/images/freshie.png" class="w-[150px] rounded-[10px]">

<div>

<small class="text-gray-400">{n.date}</small>

<h3 class="font-heading">{n.title}</h3>

<p>
FreshieCon 2025 was held at Pasig City Science High School to welcome
newly admitted Pascians.
</p>

</div>

</div>

{/each}

</div>

<button class="block mx-auto mt-[60px] bg-yellow-400 text-black px-[40px] py-[14px] rounded-[30px] font-bold">
Load More
</button>

</section>



{#if showArticle}

<section class="bg-[#e8e8f2] px-[10%] py-[120px] text-black font-body">

<div class="bg-white rounded-[22px] p-[60px] shadow-[0_25px_50px_rgba(0,0,0,.2)]">

<h1 class="text-[36px] mb-[20px] font-heading">
INNOVATION STEPS INTO THE SPOTLIGHT AT CAPSTONE DEFENSE 2026
</h1>

<div class="flex justify-between border-b-2 border-gray-300 pb-[12px] mb-[25px]">

<span>MARCH 12, 2026</span>
<span>WYNONA VENTURA | SCIRE</span>

</div>

<img src="/images/freshie.png" class="w-full rounded-[12px] my-[25px]">

<p class="leading-[1.8] text-gray-700">
Batch 16 of Pasig City Science High School showcased their exceptional
skills and inventions during the Capstone Defense held on March 4–5,
2026.
</p>

<p class="leading-[1.8] text-gray-700">
Students presented innovative research solutions addressing real-world
STEM problems.
</p>

<p class="leading-[1.8] text-gray-700">
Panelists evaluated the projects across different categories including
Physical Science, Data Science, Robotics, and Intelligent Machines.
</p>

</div>



<div class="mt-[70px] bg-[#2b2a74] rounded-[24px] p-[50px] text-white relative">

<h2 class="mb-[25px] font-heading">YOU MIGHT ALSO LIKE</h2>

<button
class="absolute top-1/2 -translate-y-1/2 left-[-20px] w-[40px] h-[40px] bg-white text-black rounded-full"
on:click={prev}>‹</button>

<div class="flex gap-[25px] overflow-hidden">

{#each related.slice(relatedIndex,relatedIndex+3) as r}

<div class="bg-white text-black p-[16px] rounded-[12px] w-[260px] transition hover:-translate-y-1">

<img src="/images/freshie.png" class="w-full rounded-[8px]">

<small>March 12, 2026</small>

<h4 class="font-heading">{r.title}</h4>

<p>
FreshieCon 2025 was held at Pasig City Science High School gathering
newly admitted Pascians.
</p>

</div>

{/each}

</div>

<button
class="absolute top-1/2 -translate-y-1/2 right-[-20px] w-[40px] h-[40px] bg-white text-black rounded-full"
on:click={next}>›</button>

</div>



<div class="mt-[70px] bg-white rounded-[22px] p-[40px] flex gap-[30px] items-center">

<img src="/images/freshie.png" class="w-[150px] rounded-[10px]">

<div>

<h3 class="font-heading mb-[8px]"><b>WYNONA VENTURA</b></h3>

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat
mauris non consectetur auctor.
</p>

<a class="underline cursor-pointer">More from Wynona Ventura</a>

</div>

</div>

</section>

{/if}