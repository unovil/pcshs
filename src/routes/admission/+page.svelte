<script lang="ts">
  import { onMount } from 'svelte';
  import homepageImg from '$lib/assets/homepage.jpg';
  

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
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;1,700;1,800&family=Barlow:wght@300;400;500;600&display=swap" rel="stylesheet" />
</svelte:head>

<div class="admission-page" class:mounted>

  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-img" style="background-image: url('{homepageImg}')"></div>
    <div class="hero-content">
      <h1 class="hero-title">Admission</h1>
    </div>
  </section>

  <section class="process-section">
    <div class="shape s-left"></div>
    <div class="shape s-right"></div>
    <div class="shape s-top-right"></div>
    <div class="shape s-bot-left"></div>

    <div class="process-inner">
      <h2 class="section-heading white">ADMISSION PROCESS</h2>
      <div class="steps">
        {#each steps as step, i}
          <div class="step" style="--si:{i}">
            <div class="step-num">{step.num}</div>
            <div class="step-card">
              <p class="step-label">{step.label}</p>
              {#if step.sub}<p class="step-sub">{step.sub}</p>{/if}
            </div>
          </div>
          {#if i < steps.length - 1}
            <div class="step-line"></div>
          {/if}
        {/each}
      </div>
    </div>
  </section>

  <section class="eligibility-section">
    <div class="eshape es-mid"></div>
    <div class="eshape es-top-outer"></div>
    <div class="eshape es-top-inner"></div>

    <div class="content-wrap">
      <h2 class="section-heading navy">ELIGIBILITY</h2>
      <div class="two-col">
        {#each eligibility as col}
          <div>
            <h3 class="col-heading">{col.grade}</h3>
            {#each col.items as group}
              <p class="group-label">{group.heading}</p>
              <ul class="bullet-list">
                {#each group.bullets as b}<li>{b}</li>{/each}
              </ul>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="docs-section">
    <div class="docs-bg"></div>
    <div class="dshape ds-tl"></div>
    <div class="dshape ds-br"></div>
    <div class="dshape ds-mid"></div>
    <div class="dshape ds-inner"></div>

    <div class="content-wrap">
      <h2 class="section-heading white">DOCUMENTARY REQUIREMENTS</h2>
      <div class="two-col">
        <div>
          <h3 class="col-heading white">APPLICANT</h3>
          <ul class="bullet-list white">
            {#each docApplicant as item}
              <li class:sub={item.sub}>{item.text}</li>
            {/each}
          </ul>
        </div>
        <div>
          <h3 class="col-heading white">FOR GRADE 11</h3>
          <ul class="bullet-list white">
            {#each docGrade11 as item}
              <li class:sub={item.sub}>{item.text}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Reminders -->
  <section class="reminders-section">
    <div class="rem-gold"></div>
    <div class="content-wrap">
      <h2 class="reminders-title">REMINDERS</h2>
      <ul class="bullet-list dark">
        {#each reminders as item}
          <li class:sub={item.sub}>{item.text}</li>
        {/each}
      </ul>
      <div class="appform">
        <h3 class="appform-title">APPLICATION FORM</h3>
        <div class="appform-btns">
          <a href="https://drive.google.com/file/d/1xHTT5iNEYznbFECOQMmA4-yM3ODXo0Mh/view" target="_blank" rel="noopener noreferrer" class="appbtn"><span>Incoming Grade 7</span></a>
          <a href="https://drive.google.com/file/d/1qLOlfFP79euxvjnwfERiQREFTDCGyB-V/view" target="_blank" rel="noopener noreferrer" class="appbtn"><span>Incoming Grade 11</span></a>
        </div>
      </div>
    </div>
  </section>

</div>

<style>
  :root {
    --navy:      #1a1f4e;
    --gold:      #e6b800;
    --font-head: 'Barlow Condensed', sans-serif;
    --font-body: 'Barlow', sans-serif;
  }

  .admission-page {
    min-height: 100vh;
    font-family: var(--font-body);
    background: #fff;
    zoom: 1.05;
  }

  .hero {
    position: relative;
    padding: 3rem 3rem 3.5rem;
    min-height: 220px;
    display: flex;
    align-items: flex-end;
  }
  .hero-bg {
    position: absolute; inset: 0;
    background: linear-gradient(110deg,
      #09295f 0%, #1a4a8a 28%, #2060a0 48%,
      #4a8878 65%, #7aab38 82%, #bfc020 100%);
  }
  .hero-img {
    position: absolute; inset: 0;
    background-size: cover;
    background-position: center;
    opacity: 0.18;
    mix-blend-mode: overlay;
  }
  .hero-bg::before {
    content: '';
    position: absolute; inset: 0;
    background-image: url('/assets/homepage.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.18;
    mix-blend-mode: luminosity;
  }
  .hero-bg::after {
    content: '';
    position: absolute; inset: 0;
    background-image: repeating-linear-gradient(
      -45deg, transparent 0, transparent 14px,
      rgba(255,255,255,0.03) 14px, rgba(255,255,255,0.03) 15px);
  }
  .hero-content { position: relative; z-index: 2; }
  .hero-title {
    font-family: var(--font-head);
    font-size: clamp(3rem, 8vw, 5.5rem);
    font-weight: 800;
    font-style: italic;
    color: #fff;
    line-height: 1;
    margin: 0;
    opacity: 0;
    transform: translateY(14px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .mounted .hero-title { opacity: 1; transform: none; }

  .content-wrap {
    position: relative;
    z-index: 2;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  .section-heading {
    font-family: var(--font-head);
    font-size: clamp(1.5rem, 3.5vw, 2.2rem);
    font-weight: 800;
    letter-spacing: 0.15em;
    text-align: center;
    margin: 0 0 2.5rem;
  }
  .section-heading.white { color: #fff; }
  .section-heading.navy  { color: var(--navy); }
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
  .col-heading {
    font-family: var(--font-head);
    font-size: 1.15rem; font-weight: 800;
    letter-spacing: 0.1em; color: var(--navy); margin: 0 0 0.8rem;
  }
  .col-heading.white { color: #fff; }
  .group-label { font-size: 0.88rem; font-weight: 600; color: #333; margin: 0.7rem 0 0.25rem; }
  .bullet-list { margin: 0 0 0 1.2rem; padding: 0; list-style: disc; }
  .bullet-list li { font-size: 0.85rem; line-height: 1.55; margin-bottom: 0.3rem; color: #444; }
  .bullet-list.white li { color: rgba(255,255,255,0.85); }
  .bullet-list.dark  li { color: #333; }
  .bullet-list li.sub { margin-left: 1.2rem; list-style: circle; color: #666; }
  .bullet-list.white li.sub { color: rgba(255,255,255,0.65); }

  .process-section {
    position: relative;
    padding: 3.5rem 2rem 4rem;
    overflow: hidden;
    background: linear-gradient(150deg, #1e1a5a 0%, #2a2480 35%, #332e90 60%, #2c3580 100%);
  }

  .shape { position: absolute; border-radius: 50%; pointer-events: none; }

  .s-left {
    width: 420px; height: 420px;
    background: radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 50%, transparent 75%);
    top: -240px; left: -80px;
  }
  .s-right {
    width: 280px; height: 280px;
    background: radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.18) 55%, transparent 80%);
    top: -155px; left: 10px;
  }
  .s-top-right {
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 50%, transparent 75%);
    bottom: -240px; right: -80px;
  }
  .s-bot-left {
    width: 260px; height: 260px;
    background: radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.18) 55%, transparent 80%);
    bottom: -155px; right: 10px;
  }

  .process-inner { position: relative; z-index: 2; max-width: 1000px; margin: 0 auto; }
  .steps { display: flex; align-items: flex-start; justify-content: center; gap: 1.2rem; }

  .step {
    display: flex; flex-direction: column; align-items: center;
    flex: 1; max-width: 220px;
    opacity: 0; transform: translateY(16px);
    transition:
      opacity 0.5s ease calc(var(--si) * 120ms + 0.1s),
      transform 0.5s ease calc(var(--si) * 120ms + 0.1s);
  }
  .mounted .step { opacity: 1; transform: none; }

  .step-num {
    width: 44px; height: 44px; border-radius: 50%;
    background: linear-gradient(135deg, #f5d040 0%, #e6a800 100%);
    color: #1a1f4e; font-family: var(--font-head);
    font-size: 1.4rem; font-weight: 800;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 0.8rem;
  }
  .step-card {
    background: linear-gradient(to bottom,
      rgba(15,10,70,0.75) 0%, rgba(20,14,85,0.55) 40%,
      rgba(20,14,85,0.20) 80%, transparent 100%);
    border-bottom: none;
    backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
    border-radius: 12px; padding: 1.2rem 1rem 1.8rem;
    width: 100%; min-height: 100px;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center;
    transition: background 0.25s, box-shadow 0.25s;
  }
  .step-card:hover {
    background: linear-gradient(to bottom,
      rgba(30,20,110,0.85) 0%, rgba(30,20,110,0.60) 50%,
      rgba(30,20,110,0.20) 85%, transparent 100%);
    box-shadow: 0 4px 24px rgba(0,0,0,0.25);
  }
  .step-label { font-size: 0.88rem; font-weight: 500; color: #fff; margin: 0; line-height: 1.4; }
  .step-sub   { font-size: 0.75rem; color: rgba(255,255,255,0.6); margin: 0.3rem 0 0; }
  .step-line  { display: none; }

  .eligibility-section {
    position: relative; padding: 3rem 2rem 3rem;
    background: #f4f4f8; overflow: hidden;
  }
  .eshape { position: absolute; border-radius: 50%; pointer-events: none; }
  .es-mid {
    width: 320px; height: 320px;
    background: radial-gradient(circle, rgba(230,184,0,0.08) 0%, transparent 70%);
    top: 50%; left: 50%; transform: translate(-50%, -50%);
  }
  .es-top-outer {
    width: 900px; height: 900px;
    background: radial-gradient(circle, rgba(255,255,255,0.65) 25%, rgba(156,156,156,0.42) 55%, transparent 72%);
    top: -420px; left: 50%; transform: translateX(-50%);
  }
  .es-top-inner {
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(255,255,255,0.65) 25%, rgba(156,156,156,0.42) 55%, transparent 74%);
    top: -310px; left: 50%; transform: translateX(-50%);
  }

  .docs-section { position: relative; padding: 4rem 2rem; overflow: hidden; }
  .docs-bg { position: absolute; inset: 0; background: #2f2b51; }

  .dshape { position: absolute; border-radius: 50%; pointer-events: none; }
  .ds-tl {
    width: 1600px; height: 1600px;
    background: radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.07) 45%, transparent 70%);
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
  .ds-br {
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.18) 55%, transparent 80%);
    bottom: -300px; left: 130px;
  }
  .ds-mid {
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 50%, transparent 75%);
    top: -240px; right: -80px;
  }
  .ds-inner {
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.18) 55%, transparent 80%);
    top: -155px; right: 10px;
  }

  .reminders-section {
    position: relative; background: #fff;
    padding: 4rem 2rem 5rem; overflow: hidden;
  }
  .rem-gold {
    position: absolute;
    width: 600px; height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle,
      rgba(255,210,0,0.22) 0%,
      rgba(230,170,0,0.10) 50%,
      transparent 72%);
    top: -200px; left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
  }
  .reminders-title {
    font-family: var(--font-head);
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800; font-style: italic;
    color: var(--navy); letter-spacing: 0.05em; margin: 0 0 1.2rem;
  }

  .appform { margin-top: 2.5rem; }
  .appform-title {
    font-family: var(--font-head);
    font-size: 1.05rem; font-weight: 800;
    letter-spacing: 0.08em; color: var(--navy); margin: 0 0 0.9rem;
  }
  .appform-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
  .appbtn {
    display: inline-block; text-decoration: none;
    background: #2f2b51;
    border-radius: 8px; padding: 0.75rem 2rem;
    position: relative; overflow: hidden;
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
    .steps { flex-wrap: wrap; justify-content: center; gap: 1rem; }
    .step-line { display: none; }
    .two-col { grid-template-columns: 1fr; gap: 2rem; }
    .hero { padding: 1rem 1.5rem; }
    .content-wrap { padding: 0 1.2rem; }
  }
</style>