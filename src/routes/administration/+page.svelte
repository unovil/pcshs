<script>

import adminBg from '$lib/assets/administration/admin1.jpg';
import gradient from '$lib/assets/administration/gradient.png';
import gradient2 from '$lib/assets/administration/gradient2.png';
import PageHeader from '$lib/components/page-header.svelte';

import ascotia from '$lib/assets/administration/ascotia.jpg';
import caigoy from '$lib/assets/administration/caigoy.jpg';
import supang from '$lib/assets/administration/supang.jpg';
import castro from '$lib/assets/administration/castro.jpg';
import lucero from '$lib/assets/administration/lucero.jpg';
import labonete from '$lib/assets/administration/labonete.jpg';
import cuadra from '$lib/assets/administration/cuadra.jpg';
import narag from '$lib/assets/administration/narag.jpg';
import oriarte from '$lib/assets/administration/oriarte.jpg';

const fallbackPhoto = adminBg;

  const schoolHeads = [
    { name: "Arianne A. Labonete", title: "Teacher III", subtitle: "Academic Affairs", photo: labonete },
    { name: "Ms. Liza Caigoy", title: "Principal I", photo: caigoy },
    { name: "Dr. Leilani Lucero", title: "Head Teacher III", subtitle: "Student Affairs & ESP", photo: lucero }
  ];

  const adminOfficers = [
    { name: "Ms. Maricar E. Oriarte", title: "Administrative Officer V", photo: oriarte },
    { name: "Ms. Grace Efleda Dela Cuadra", title: "Administrative Officer II", photo: cuadra },
    { name: "Mr. Jay M. Cos", title: "Administrative Officer II", photo: fallbackPhoto },
    { name: "Ms. Grace Narag", title: "Administrative Assistant III", photo: narag }
  ];

  const headTeachers = [
    { name: "Avel B. Alcalde", title: "Science Department", photo: fallbackPhoto },
    { name: "Ms. Mary Ivy Castro", title: "Science Department", photo: castro },
    { name: "Elmer D.V. Legarda", title: "Araling Panlipunan", photo: fallbackPhoto },
    { name: "Leilani C. Lucero", title: "Edukasyon sa Pagpapakatao", photo: lucero },
    { name: "Ms. Arianne Labonete", title: "Mathematics", photo: labonete },
    { name: "Ms. Elenita Supang", title: "English Department", photo: supang }
  ];

  const masterTeachers = [
    { name: "Mr. Ronald C. Dumapias", title: "Master Teacher I & Subject Group Head", subtitle: "(STEM)", photo: fallbackPhoto },
    { name: "Ms. Annie R. Ascotia", title: "Master Teacher II & Subject Group Head", subtitle: "(NON-STEM)", photo: ascotia }
  ];

  const interimHeads = [
    { name: "Carmela C. Abelard", title: "ICT/TLE", photo: fallbackPhoto },
    { name: "Desiree C. Didulo", title: "MAPEH", photo: fallbackPhoto },
    { name: "Mr. Danilo Ungos", title: "Filipino", photo: fallbackPhoto }
  ];

</script>

<main class="min-h-screen bg-white font-cabin overflow-x-hidden">
    <PageHeader title="Administration" img={null} />

  <section class="relative bg-cover bg-center py-20 px-4 min-h-[50vh]" style="background-image:url({adminBg});">
    <div class="absolute inset-0 bg-white/65"></div>
    <div class="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
      {#each schoolHeads as person}
        <div class="flex flex-col items-center text-center transition-all duration-300 {person.title === 'Principal I' ? 'scale-110 -translate-y-6' : ''}">
          <div class="{person.title === 'Principal I' ? 'w-56 h-56' : 'w-44 h-44'} rounded-full shadow-2xl mb-6 border-4 border-white overflow-hidden relative">
            <img src={person.photo || fallbackPhoto} alt="{person.name}" class="w-full h-full object-cover" />
          </div>
          <h3 class="text-slate-900 font-bold uppercase tracking-tight leading-tight {person.title === 'Principal I' ? 'text-3xl' : 'text-xl'}">{person.name}</h3>
          <p class="text-indigo-900 font-bold {person.title === 'Principal I' ? 'text-base' : 'text-xs'} uppercase mt-2">{person.title}</p>
          <p class="text-indigo-700 font-medium text-xs uppercase italic mt-1">{person.subtitle || ''}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="relative bg-cover bg-center py-20 px-4 min-h-[50vh]" style="background-image:url({gradient});">
    <h2 class="text-4xl font-cabin font-bold text-white text-center mb-16 uppercase tracking-[0.3em]">Administrative Officers</h2>
    <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      {#each adminOfficers as person}
        <div class="flex flex-col items-center text-center">
          <img src={person.photo || fallbackPhoto} alt="{person.name}" class="w-32 h-32 rounded-full shadow-md mb-4 border-2 border-slate-700 object-cover" />
          <h3 class="text-white font-bold uppercase text-sm leading-tight px-2">{person.name}</h3>
          <p class="text-slate-300 font-semibold text-[10px] uppercase mt-2 tracking-wide">{person.title}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="relative bg-cover bg-center py-20 px-4 min-h-[50vh]" style="background-image:url({gradient2});">
    <h2 class="text-4xl font-cabin font-bold text-[#1e1b3a] text-center mb-16 uppercase tracking-[0.3em]">Head Teachers</h2>
    <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
      {#each headTeachers as person}
        <div class="flex flex-col items-center text-center">
          <img src={person.photo || fallbackPhoto} alt="{person.name}" class="w-36 h-36 rounded-full shadow-xl mb-6 border border-slate-100 object-cover" />
          <h3 class="text-slate-900 font-bold uppercase text-md tracking-tight">{person.name}</h3>
          <p class="text-indigo-800 font-bold text-[11px] uppercase mt-1">{person.title}</p>
        </div>
      {/each}
    </div>
    <br><br><br>
    <h2 class="text-4xl font-cabin font-bold text-[#1e1b3a] text-center mb-16 uppercase tracking-[0.3em]">Master Teachers</h2>
    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
      {#each masterTeachers as person}
        <div class="flex flex-col items-center text-center">
          <img src={person.photo || fallbackPhoto} alt="{person.name}" class="w-40 h-40 rounded-full shadow-lg mb-6 object-cover" />
          <h3 class="text-slate-800 font-bold uppercase text-lg tracking-tight">{person.name}</h3>
          <p class="text-indigo-900 font-bold text-xs uppercase mt-1">{person.title}</p>
          <p class="text-indigo-600 font-medium text-[10px] uppercase mt-1">{person.subtitle}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="relative bg-cover bg-center py-20 px-4 min-h-[50vh]" style="background-image:url({gradient});">
    <h2 class="text-4xl font-cabin font-bold text-white text-center mb-16 uppercase tracking-[0.3em]">Interim Department Heads</h2>
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      {#each interimHeads as person}
        <div class="flex flex-col items-center text-center">
          <img src={person.photo || fallbackPhoto} alt="{person.name}" class="w-36 h-36 rounded-full shadow-lg mb-6 border-2 border-slate-600 object-cover" />
          <h3 class="text-white font-bold uppercase text-md tracking-tight">{person.name}</h3>
          <p class="text-slate-300 font-bold text-[11px] uppercase mt-1 tracking-widest">{person.title}</p>
        </div>
      {/each}
    </div>
  </section>

</main>
