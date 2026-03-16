<script lang="ts">
  import { onMount } from 'svelte';
  import PageHeader from '$lib/components/page-header.svelte';

  let mounted = false;
  onMount(() => setTimeout(() => mounted = true, 50));

  const steps = [
    { num: 1, label: 'Submission of Documentary Requirements' },
    { num: 2, label: 'Interview' },
    { num: 3, label: 'Entrance Exam' },
    { num: 4, label: 'Submission of Final Report Card', sub: '(Grade 6 / Grade 10)' },
  ];

  const eligibility = [
    {
      grade: 'FOR GRADE 7',
      items: [
        {
          heading: 'Academic Requirements:',
          bullets: [
            'Quarterly grades in Math, Science, and English should be 85 or above, based on Grade 5 and 6 report cards.',
            'No final grades below 83 in other subjects, based on Grade 5 report card.',
            'No quarterly grades below 80 in other subjects, based on Grade 5 and 6 report cards.',
            'General Weighted Average (GWA) should be 85 or above, based on Grade 5 report card.',
          ],
        },
        { heading: 'Residency Requirements:', bullets: ['Parents/Guardians should be resident of Pasig City for not less than 3 years.'] },
      ],
    },
    {
      grade: 'FOR GRADE 11',
      items: [
        {
          heading: 'Academic Requirements:',
          bullets: [
            'Quarterly grades in Math, Science, and English should be 85 or above, based on Grade 9 and 10 report cards.',
            'No final grades below 83 in other subjects, based on Grade 9 report card.',
            'No quarterly grades below 80 in other subjects, based on Grade 9 and 10 report cards.',
            'General Weighted Average (GWA) should be 85 or above, based on Grade 9 report card.',
          ],
        },
        { heading: 'Residency Requirements:', bullets: ['Parents/Guardians should be resident of Pasig City for not less than 3 years.'] },
      ],
    },
  ];

  const docApplicant = [
    { text: 'Completely filled-out Application Form', sub: false },
    { text: 'Report Card (Certified True Copy)', sub: false },
    { text: 'Incoming Grade 7 - Grade 5 & 6 (1st and 2nd Quarter)', sub: true },
    { text: 'Incoming Grade 11 - Grade 9 & 10 (1st and 2nd Quarter)', sub: true },
    { text: 'Latest 2" x 2" picture with white background', sub: false },
    { text: 'PSA Birth Certificate', sub: false },
  ];

  const docGrade11 = [
    { text: 'Government Issued ID (1 photocopy)', sub: false },
    { text: 'Proof of residency (any one of the following-original copy)', sub: false },
    { text: "2024 Voter's Certificate", sub: true },
    { text: 'Utility bill under the name of parent/guardian (Old SOA 2021 & Latest SOA 2024)', sub: true },
    { text: 'Real Property Tax receipts under the name of parent/guardian (for 3 years)', sub: true },
    { text: 'Other supporting documents for reconsideration', sub: true },
    { text: '2025 Community Tax Certificate (photocopy)', sub: false },
    { text: 'For guardian/s, submit notarized affidavit of guardianship and any one of the following supporting documents:', sub: false },
    { text: 'Work contract or COE for OFW parent/s', sub: true },
    { text: 'Birth certificate of the parent & grandparent or relative as a proof of consanguinity', sub: true },
    { text: 'Court appointment as legal guardian for non-relatives', sub: true },
  ];

  const reminders = [
    { text: 'All documents (photocopy & original) must be placed in a long brown envelope. Write the following details of the student at the left side of the face/front (without the flap) of the brown envelope:', sub: false },
    { text: 'Incoming Grade Level & School Type', sub: true },
    { text: 'Complete Name of Applicant', sub: true },
    { text: 'Sex at Birth', sub: true },
    { text: 'Contact Number of the Parent/Guardian', sub: true },
    { text: 'Name of Current School', sub: true },
    { text: "Parent/guardian shall submit the documents to the Registrar's Office from Monday to Friday, 8AM - 4PM only.", sub: false },
    { text: 'Please observe the proper dress code of the school.', sub: false },
    { text: 'Applicants with INCOMPLETE documents will not be entertained.', sub: false },
    { text: 'The submission of the Grade 6/Grade 10 FINAL Report Card is part and parcel of the complete requirements.', sub: false },
  ];
</script>

<svelte:head>
  <title>Admission | PCSHS</title>
</svelte:head>

<div class="min-h-screen bg-white font-body" style="zoom:1.05" class:mounted>

  <!-- ── Hero ── -->
  <PageHeader title="Admission" img={null} />

  <!-- ── Admission Process ── -->
  <section class="relative py-14 px-8 overflow-hidden"
    style="background:linear-gradient(150deg,#1e1a5a 0%,#2a2480 35%,#332e90 60%,#2c3580 100%);">
    <!-- circles -->
    <div class="absolute rounded-full pointer-events-none" style="width:420px;height:420px;background:radial-gradient(circle,rgba(255,255,255,0.18) 0%,rgba(255,255,255,0.08) 50%,transparent 75%);top:-240px;left:-80px;"></div>
    <div class="absolute rounded-full pointer-events-none" style="width:280px;height:280px;background:radial-gradient(circle,rgba(255,255,255,0.35) 0%,rgba(255,255,255,0.18) 55%,transparent 80%);top:-155px;left:10px;"></div>
    <div class="absolute rounded-full pointer-events-none" style="width:400px;height:400px;background:radial-gradient(circle,rgba(255,255,255,0.18) 0%,rgba(255,255,255,0.08) 50%,transparent 75%);bottom:-240px;right:-80px;"></div>
    <div class="absolute rounded-full pointer-events-none" style="width:260px;height:260px;background:radial-gradient(circle,rgba(255,255,255,0.35) 0%,rgba(255,255,255,0.18) 55%,transparent 80%);bottom:-155px;right:10px;"></div>

    <div class="relative z-10 max-w-5xl mx-auto">
      <h2 class="font-head font-extrabold tracking-widest text-center text-white mb-10"
        style="font-size:clamp(1.5rem,3.5vw,2.2rem);">ADMISSION PROCESS</h2>
      <div class="flex items-start justify-center gap-5">
        {#each steps as step, i}
          <div class="flex flex-col items-center flex-1 max-w-[220px] transition-all duration-500"
            class:opacity-0={!mounted} class:translate-y-4={!mounted}
            style="transition-delay:{i * 120 + 100}ms;">
            <div class="w-11 h-11 rounded-full flex items-center justify-center mb-3 font-head font-extrabold text-[#1a1f4e] text-2xl"
              style="background:linear-gradient(135deg,#f5d040 0%,#e6a800 100%);">{step.num}</div>
            <div class="step-card w-full rounded-xl text-center transition-all duration-300"
              style="padding:1.2rem 1rem 1.8rem;min-height:100px;backdrop-filter:blur(6px);background:linear-gradient(to bottom,rgba(15,10,70,0.75) 0%,rgba(20,14,85,0.55) 40%,rgba(20,14,85,0.20) 80%,transparent 100%);border:1px solid rgba(255,255,255,0.14);border-bottom:none;border-radius:12px;">
              <p class="text-sm font-medium text-white leading-snug m-0">{step.label}</p>
              {#if step.sub}<p class="text-xs text-white/60 mt-1 m-0">{step.sub}</p>{/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- ── Eligibility ── -->
  <section class="relative overflow-hidden" style="padding:3rem 2rem;background:#f4f4f8;">
    <!-- circles -->
    <div class="absolute rounded-full pointer-events-none" style="width:320px;height:320px;background:radial-gradient(circle,rgba(230,184,0,0.08) 0%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%);"></div>
    <div class="absolute rounded-full pointer-events-none" style="width:900px;height:900px;background:radial-gradient(circle,rgba(255,255,255,0.65) 25%,rgba(156,156,156,0.42) 55%,transparent 72%);top:-420px;left:50%;transform:translateX(-50%);"></div>
    <div class="absolute rounded-full pointer-events-none" style="width:600px;height:600px;background:radial-gradient(circle,rgba(255,255,255,0.65) 25%,rgba(156,156,156,0.42) 55%,transparent 74%);top:-310px;left:50%;transform:translateX(-50%);"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-8">
      <h2 class="font-head font-extrabold tracking-widest text-center mb-10 text-[#1a1f4e]"
        style="font-size:clamp(1.5rem,3.5vw,2.2rem);">ELIGIBILITY</h2>
      <div class="grid grid-cols-2 gap-12">
        {#each eligibility as col}
          <div>
            <h3 class="font-head font-extrabold tracking-widest text-lg text-[#1a1f4e] mb-3">{col.grade}</h3>
            {#each col.items as group}
              <p class="text-sm font-semibold text-gray-700 mt-3 mb-1">{group.heading}</p>
              <ul class="list-disc ml-5 p-0">
                {#each group.bullets as b}
                  <li class="text-sm leading-snug mb-1 text-gray-600">{b}</li>
                {/each}
              </ul>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- ── Documentary Requirements ── -->
  <section class="relative py-16 px-8 overflow-hidden">
    <div class="absolute inset-0" style="background:#2f2b51;"></div>
    <!-- full cover circle -->
    <div class="absolute rounded-full pointer-events-none" style="width:1600px;height:1600px;background:radial-gradient(circle,rgba(255,255,255,0.16) 0%,rgba(255,255,255,0.07) 45%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%);"></div>
    <!-- bottom-left pair -->
    <div class="absolute rounded-full pointer-events-none" style="width:500px;height:500px;background:radial-gradient(circle,rgba(255,255,255,0.35) 0%,rgba(255,255,255,0.18) 55%,transparent 80%);bottom:-300px;left:130px;"></div>
    <!-- upper-right pair -->
    <div class="absolute rounded-full pointer-events-none" style="width:500px;height:500px;background:radial-gradient(circle,rgba(255,255,255,0.18) 0%,rgba(255,255,255,0.08) 50%,transparent 75%);top:-240px;right:-80px;"></div>
    <div class="absolute rounded-full pointer-events-none" style="width:300px;height:300px;background:radial-gradient(circle,rgba(255,255,255,0.35) 0%,rgba(255,255,255,0.18) 55%,transparent 80%);top:-155px;right:10px;"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-8">
      <h2 class="font-head font-extrabold tracking-widest text-center text-white mb-10"
        style="font-size:clamp(1.5rem,3.5vw,2.2rem);">DOCUMENTARY REQUIREMENTS</h2>
      <div class="grid grid-cols-2 gap-12">
        <div>
          <h3 class="font-head font-extrabold tracking-widest text-lg text-white mb-3">APPLICANT</h3>
          <ul class="list-disc ml-5 p-0">
            {#each docApplicant as item}
              <li class="text-sm leading-snug mb-1" class:ml-5={item.sub} style="color:{item.sub ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.85)'};">{item.text}</li>
            {/each}
          </ul>
        </div>
        <div>
          <h3 class="font-head font-extrabold tracking-widest text-lg text-white mb-3">FOR GRADE 11</h3>
          <ul class="list-disc ml-5 p-0">
            {#each docGrade11 as item}
              <li class="text-sm leading-snug mb-1" class:ml-5={item.sub} style="color:{item.sub ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.85)'};">{item.text}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Reminders ── -->
  <section class="relative bg-white overflow-hidden" style="padding:4rem 2rem 5rem;">
    <!-- gold glow -->
    <div class="absolute rounded-full pointer-events-none" style="width:600px;height:600px;background:radial-gradient(circle,rgba(255,210,0,0.22) 0%,rgba(230,170,0,0.10) 50%,transparent 72%);top:-200px;left:50%;transform:translateX(-50%);"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-8">
      <h2 class="font-head font-extrabold italic text-[#1a1f4e] tracking-wide mb-5"
        style="font-size:clamp(2rem,5vw,3.2rem);">REMINDERS</h2>
      <ul class="list-disc ml-5 p-0">
        {#each reminders as item}
          <li class="text-sm leading-snug mb-1" class:ml-5={item.sub} style="color:{item.sub ? '#666' : '#333'};">{item.text}</li>
        {/each}
      </ul>

      <div class="mt-10">
        <h3 class="font-head font-extrabold tracking-widest text-base text-[#1a1f4e] mb-4">APPLICATION FORM</h3>
        <div class="flex gap-4 flex-wrap">
          <a href="https://drive.google.com/file/d/1xHTT5iNEYznbFECOQMmA4-yM3ODXo0Mh/view" target="_blank" rel="noopener noreferrer" class="appbtn">
            <span>Incoming Grade 7</span>
          </a>
          <a href="https://drive.google.com/file/d/1qLOlfFP79euxvjnwfERiQREFTDCGyB-V/view" target="_blank" rel="noopener noreferrer" class="appbtn">
            <span>Incoming Grade 11</span>
          </a>
        </div>
      </div>
    </div>
  </section>

</div>

<style>
  /* mounted transition helpers */
  .mounted .opacity-0 { opacity: 1 !important; }
  .mounted .translate-y-4 { transform: none !important; }

  /* step card hover */
  .step-card:hover {
    background: linear-gradient(to bottom,rgba(30,20,110,0.85) 0%,rgba(30,20,110,0.60) 50%,rgba(30,20,110,0.20) 85%,transparent 100%) !important;
    box-shadow: 0 4px 24px rgba(0,0,0,0.25);
  }

  /* application form buttons */
  .appbtn {
    display: inline-block;
    text-decoration: none;
    background: #2f2b51;
    border-radius: 8px;
    padding: 0.75rem 2rem;
    position: relative;
    overflow: hidden;
    transition: box-shadow 0.2s ease;
  }
  .appbtn::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(to bottom, #f5d020 0%, #d4a800 50%, #b08800 100%);
    opacity: 0; transition: opacity 0.4s cubic-bezier(0.4,0,0.2,1);
  }
  .appbtn:hover::before { opacity: 1; }
  .appbtn:hover { box-shadow: 0 6px 20px rgba(180,130,0,0.35); }
  .appbtn span {
    position: relative; z-index: 1;
    font-family: var(--font-head);
    font-size: 1rem; font-weight: 700;
    letter-spacing: 0.06em; color: #fff;
  }

  @media (max-width: 700px) {
    .grid-cols-2 { grid-template-columns: 1fr !important; }
  }
</style>