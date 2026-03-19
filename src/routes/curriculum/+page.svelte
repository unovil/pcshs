<script>
	import PageHeader from "$lib/components/page-header.svelte";
	import { juniorHighCurricula, seniorHighCurricula } from "./curricula";

</script>

<PageHeader title="Curriculum" />

<div class="px-25 pt-15 flex flex-col gap-4 text-school-blue">
  <h1 class="text-4xl font-bold font-heading">Secondary Curriculum</h1>
  <p class="text-justify">Pasig City Science High School's curriculum is geared towards students' excellence in Science, Technology, Engineering and Mathematics (STEM). Being a Science High School, the PCSHS curriculum is enriched with STEM courses. It has two components: the core curriculum and the STEM stream courses.</p>
  <p class="text-justify">The core curriculum is packed with Science, Math, and English courses to fully develop the students' potential along these areas. The STEM stream courses are specialized electives the students may choose from depending on their aptitude or interests. Additionally, in compliance with the Special Program for Foreign languages (SPFL) of DepEd, a Grade 9 and Grade 10 students may elect to take up any of the foreign language offerings of the school.</p>
  <ol class="flex flex-row list-inside">
    <div class="w-1/2 flex flex-col gap-2">
      <li class="text-3xl font-heading">Junior High School</li>
      <ul class="list-disc list-inside ml-4 text-lg">
        <li><a class="link-underline" href="#grade-7">Grade 7</a></li>
        <li><a class="link-underline" href="#grade-8">Grade 8</a></li>
        <li><a class="link-underline" href="#grade-9">Grade 9</a></li>
        <li><a class="link-underline" href="#grade-10">Grade 10</a></li>
      </ul>
    </div>
    <div class="w-1/2 flex flex-col gap-2">
      <li class="text-3xl font-heading">Senior High School</li>
      <ul class="list-disc list-inside ml-4 text-lg">
        <li><a class="link-underline" href="#grade-11">Grade 11</a></li>
        <li><a class="link-underline" href="#grade-12">Grade 12</a></li>
      </ul>
    </div>
  </ol>
</div>

<div class="m-15 px-15 py-12 text-white rounded-lg card flex flex-col gap-8">
  <h1 class="uppercase font-heading font-bold text-5xl">Matatag Curriculum</h1>
  <p class="text-justify">The MATATAG Curriculum is the new DepEd K-10 basic education program of the Department of Education. It officially began in August 2023. The MATATAG Curriculum came to fruition as a new framework to the previous basic education program (K to 12). The overarching goal of MATATAG is to remedy the learning poverty gaps in foundational learning while desiring to lessen the congested curriculum. It prioritizes the development of fundamental literacy and numeracy skills, instills values of nationalism, and builds modern competencies. Implementation is taking place on a systematic and phased approach, with the rollout of the program beginning in School Year 2024-2025.</p>
</div>

<!-- <hr>

<section>
  <h1 class="uppercase font-heading font-bold text-5xl">Grade 7</h1>
  <div class="flex flex-row">
    <div>

    </div>
  </div>
</section> -->

{#each juniorHighCurricula as curriculum (curriculum.grade)}

<hr>

<section class="flex flex-col gap-4 px-25 py-15 text-school-blue scroll-mt-18" id="grade-{curriculum.grade}">
  <h1 class="uppercase font-heading font-bold text-5xl">Grade {curriculum.grade}</h1>
  <div class="flex flex-row items-start gap-10">
    <table class="w-1/2 table-fixed border-separate border-spacing-y-1">
      <thead>
        <tr class="text-2xl uppercase">
          <th class="text-left">Core Subjects</th>
          <th>No. of Unit/s</th>
        </tr>
      </thead>
      <tbody>
        {#each curriculum.coreSubjects as subject (subject.subject)}
          <tr class="-indent-3">
            <td class="pl-8 text-base/tight">{subject.subject}</td>
            <td class="text-center">{subject.units}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    <div class="w-1/2 flex flex-col gap-3">
      <table class="w-full table-fixed border-separate border-spacing-y-1">
        <thead>
          <tr class="text-2xl uppercase">
            <th class="text-left">Additional Subjects</th>
            <th>No. of Unit/s</th>
          </tr>
        </thead>
        <tbody>
          {#each curriculum.additionalSubjects as subject (subject.subject)}
            <tr class="-indent-3">
              <td class="pl-8 text-base/tight">{subject.subject}</td>
              <td class="text-center">{subject.units}</td>
            </tr>
          {/each}
        </tbody>
      </table>

      {#if curriculum.electiveSubjects}
      <table class="w-full table-fixed border-separate border-spacing-y-1">
        <thead>
          <tr class="text-2xl uppercase">
            <th class="text-left">Elective Subjects</th>
            <th>No. of Unit/s</th>
          </tr>
        </thead>
        <tbody>
          {#each curriculum.electiveSubjects as subject (subject.subject)}
            <tr class="-indent-3">
              <td class="pl-8 text-base/tight">{subject.subject}</td>
              <td class="text-center">{subject.units}</td>
            </tr>
          {/each}
        </tbody>
      </table>
      {/if}
    </div>
  </div>
</section>

{/each}

{#each seniorHighCurricula as curriculum (curriculum.grade)}

<hr>

<section class="flex flex-col gap-4 px-25 py-15 text-school-blue scroll-mt-18" id="grade-{curriculum.grade}">
  <h1 class="uppercase font-heading font-bold text-5xl">Grade {curriculum.grade}</h1>
  <div class="flex flex-row items-start gap-10">
    <table class="w-1/2 table-fixed border-separate border-spacing-y-1">
      <thead>
        <tr class="text-2xl uppercase">
          <th class="text-left">First Semester</th>
          <th>No. of Unit/s</th>
        </tr>
      </thead>
      <tbody>
        {#each curriculum.firstSemesterSubjects as subject (subject.subject)}
          <tr class="-indent-3">
            <td class="pl-8 text-base/tight">{subject.subject}</td>
            <td class="text-center">{subject.units}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    <table class="w-1/2 table-fixed border-separate border-spacing-y-1">
      <thead>
        <tr class="text-2xl uppercase">
          <th class="text-left">Second Semester</th>
          <th>No. of Unit/s</th>
        </tr>
      </thead>
      <tbody>
        {#each curriculum.secondSemesterSubjects as subject (subject.subject)}
          <tr class="-indent-3">
            <td class="pl-8 text-base/tight">{subject.subject}</td>
            <td class="text-center">{subject.units}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>

{/each}