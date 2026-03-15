<script lang="ts">
  import PageHeader from '$lib/components/page-header.svelte';

  let openFaq: number | null = 0;

  const faqs = [
    {
      question: 'Is Pasig City Science High School a private or public school?',
      answer:
        'Pasig City Science High School is a public school. It is a specialized science high school located in Pasig City, Philippines.'
    },
    {
      question: 'Who may apply in Pasig City Science High School?',
      answer:
        'Current Grade 6 and Grade 10 students may apply for School Year 2026–2027 admission, provided that they meet the school’s academic requirements.'
    },
    {
      question: 'If I live nearby Pasig City, may I still apply?',
      answer:
        'No. Only residents of Pasig City are eligible to apply and must present proof of residency.'
    },
    {
      question: 'Does renting in Pasig City still make us eligible?',
      answer:
        'Yes. Applicants may still be eligible if they can provide proof of residency, such as a duly notarized rental agreement and the latest utility bill under the renter’s name.'
    },
    {
      question: 'Do we need to submit original and photocopy of the documents?',
      answer:
        'Yes. Applicants are required to submit both the original and a photocopy of the Birth Certificate and Previous Report Card. For the current school year’s report card, a photocopy may be submitted.'
    },
    {
      question:
        'Does the PCSHS admission process follow the Regional Memorandum on the Unified Admission for all Science High Schools in NCR?',
      answer:
        'Yes. The admission process follows the full guidelines stated in Regional Memorandum No. 051, s. 2026.'
    },
    {
      question: 'Do you accept transferees?',
      answer:
        'No. Pasig City Science High School only admits incoming Grade 7 and Grade 11 students and does not accept transferees.'
    }
  ];

  function toggleFaq(index: number) {
    openFaq = openFaq === index ? null : index;
  }
</script>

<svelte:head>
  <title>Contact & FAQs | PCSHS</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;1,700;1,800&family=Barlow:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="contact-page">
  <PageHeader title="Contact Information" img={null} />

  <section class="contact-info-section">
    <div class="content-wrap">
      <h2 class="section-heading">GENERAL CONTACT INFORMATION</h2>

      <div class="line"></div>

      <div class="map-card">
        <div class="map-card-inner">
          <span>Map</span>
        </div>
      </div>

      <div class="contact-row">
        <div class="contact-left">
          <p>F. Legaspi St., Rainforest Park, Maybunga, Pasig City, 1600</p>
          <p>628-2177</p>
        </div>

        <div class="contact-right">
          <a href="mailto:pasigcitysciencehs05@gmail.com">pasigcitysciencehs05@gmail.com</a>
          <a href="/">Facebook Page</a>
        </div>
      </div>

      <div class="line bottom-space"></div>
    </div>
  </section>

  <section class="admin-section">
    <div class="content-wrap">
      <h2 class="section-heading">SCHOOL ADMINISTRATION</h2>

      <div class="line"></div>

      <div class="admin-list">
        <div class="admin-item">
          <h3>Office of the Principal</h3>
          <p>628-2177</p>
        </div>

        <div class="admin-item">
          <h3>Office of the Registrar</h3>
          <p>pasigcitysciencehs05@gmail.com</p>
        </div>

        <div class="admin-item">
          <h3>School Service Providers</h3>
          <p>09000000000 | 09000000000</p>
        </div>
      </div>

      <div class="message-panel">
        <div class="message-header-row">
          <h2>Leave us a Message!</h2>
          <button type="button" class="submit-btn">Submit →</button>
        </div>

        <form class="message-form">
          <div class="top-fields">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>

          <textarea placeholder="Message"></textarea>
        </form>
      </div>
    </div>
  </section>

  <section class="faq-section">
    <div class="faq-shape faq-shape-left outer"></div>
    <div class="faq-shape faq-shape-left inner"></div>
    <div class="faq-shape faq-shape-right outer"></div>
    <div class="faq-shape faq-shape-right inner"></div>

    <div class="content-wrap faq-wrap">
      <h2 class="faq-title">FREQUENTLY ASKED QUESTIONS</h2>

      <ol class="faq-list">
        {#each faqs as item, index}
          <li class="faq-item">
            <button class="faq-trigger" type="button" on:click={() => toggleFaq(index)}>
              <span class="faq-question">{item.question}</span>
              <span class="faq-icon" class:open={openFaq === index}>▼</span>
            </button>

            {#if openFaq === index}
              <div class="faq-answer">
                <p>{item.answer}</p>
              </div>
            {/if}
          </li>
        {/each}
      </ol>
    </div>
  </section>
</div>

<style>
  :root {
    --navy: #2f2b51;
    --navy-2: #383063;
    --gold: #e1bb00;
    --light-bg: #f6f6f7;
    --text: #2c2c2c;
    --muted: #666;
    --line: #5b537d;
    --map-bg: #dcecf7;
    --font-head: 'Barlow Condensed', sans-serif;
    --font-body: 'Barlow', sans-serif;
  }

  :global(body) {
    margin: 0;
    background: var(--light-bg);
    font-family: var(--font-body);
  }

  :global(*) {
    box-sizing: border-box;
  }

  .contact-page {
    min-height: 100vh;
    background: var(--light-bg);
    color: var(--text);
    overflow-x: hidden;
  }

  .content-wrap {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 3.25rem;
  }

  .contact-info-section {
    padding: 2.25rem 0 2.5rem;
    background: var(--light-bg);
  }

  .admin-section {
    padding: 2.1rem 0 1rem;
    background: var(--light-bg);
  }

  .section-heading {
    margin: 0;
    font-family: var(--font-head);
    font-size: clamp(2rem, 2.7vw, 2.6rem);
    font-weight: 700;
    color: var(--navy);
    letter-spacing: 0.02em;
    line-height: 1;
  }

  .line {
    width: 100%;
    height: 2px;
    background: var(--line);
    opacity: 0.7;
    margin: 0.8rem 0 1rem;
  }

  .bottom-space {
    margin-top: 1.1rem;
  }

  .map-card {
    width: 100%;
    margin-bottom: 0.85rem;
  }

  .map-card-inner {
    height: 210px;
    background: var(--map-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .map-card-inner::before {
    content: '';
    position: absolute;
    left: 8%;
    bottom: -28px;
    width: 120px;
    height: 50px;
    border-radius: 50%;
    background: #91aa00;
    opacity: 0.9;
  }

  .map-card-inner::after {
    content: '';
    position: absolute;
    left: 18%;
    bottom: -20px;
    width: 180px;
    height: 34px;
    border-radius: 50%;
    background: #bdd36e;
    opacity: 0.8;
  }

  .map-card-inner span {
    font-family: var(--font-head);
    font-size: clamp(2.3rem, 3.6vw, 3.2rem);
    color: var(--navy);
    font-weight: 700;
    transform: translateY(-4px);
  }

  .contact-row {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: flex-start;
  }

  .contact-left,
  .contact-right {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .contact-left p,
  .contact-right a {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.45;
    color: #353535;
  }

  .contact-right {
    text-align: right;
    margin-left: auto;
  }

  .contact-right a {
    color: #3e385d;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .admin-list {
    padding-top: 0.2rem;
  }

  .admin-item + .admin-item {
    margin-top: 1.2rem;
  }

  .admin-item h3 {
    margin: 0 0 0.45rem;
    font-size: clamp(2rem, 2.6vw, 2.7rem);
    line-height: 1.05;
    font-weight: 700;
    color: #222;
  }

  .admin-item p {
    margin: 0;
    font-size: 1.1rem;
    color: #3f3f3f;
    line-height: 1.45;
  }

  .message-panel {
    margin-top: 2rem;
    background: var(--navy);
    border-radius: 16px;
    padding: 1.5rem 1.55rem 1.35rem;
    position: relative;
  }

  .message-header-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .message-header-row h2 {
    margin: 0;
    font-family: var(--font-head);
    font-size: clamp(2.4rem, 4vw, 3.25rem);
    line-height: 0.95;
    color: #fff;
    font-style: italic;
    font-weight: 700;
    letter-spacing: 0.01em;
  }

  .submit-btn {
    border: none;
    background: var(--gold);
    color: #1f1f1f;
    font-family: var(--font-body);
    font-weight: 700;
    font-size: 0.95rem;
    padding: 0.82rem 1.3rem;
    border-radius: 999px;
    cursor: pointer;
    transition: transform 0.2s ease, filter 0.2s ease;
    white-space: nowrap;
    align-self: flex-start;
  }

  .submit-btn:hover {
    transform: translateY(-1px);
    filter: brightness(1.03);
  }

  .message-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .top-fields {
    display: grid;
    grid-template-columns: 0.95fr 3.4fr;
    gap: 1rem;
  }

  .message-form input,
  .message-form textarea {
    width: 100%;
    border: none;
    outline: none;
    background: #fff;
    color: #222;
    font-family: var(--font-body);
    font-size: 0.96rem;
    border-radius: 0;
    padding: 1rem 1rem;
  }

  .message-form input::placeholder,
  .message-form textarea::placeholder {
    color: #a5a5a5;
  }

  .message-form textarea {
    min-height: 108px;
    resize: vertical;
  }

  .faq-section {
    position: relative;
    padding: 5.2rem 0 7rem;
    background: linear-gradient(to bottom, var(--light-bg) 0%, #eef4f7 60%, #edf2d8 100%);
    overflow: hidden;
  }

  .faq-wrap {
    position: relative;
    z-index: 2;
  }

  .faq-title {
    margin: 0 0 1.5rem;
    font-family: var(--font-head);
    font-size: clamp(4rem, 7vw, 6.4rem);
    line-height: 0.9;
    color: var(--navy);
    font-weight: 700;
    font-style: italic;
    letter-spacing: 0.01em;
    max-width: 760px;
  }

  .faq-list {
    max-width: 860px;
    margin: 0;
    padding-left: 1.8rem;
  }

  .faq-item {
    padding-left: 0.2rem;
  }

  .faq-item + .faq-item {
    margin-top: 0.7rem;
  }

  .faq-item::marker {
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 700;
    color: var(--navy);
  }

  .faq-trigger {
    width: 100%;
    background: transparent;
    border: none;
    padding: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.8rem;
    cursor: pointer;
    text-align: left;
  }

  .faq-question {
    font-family: var(--font-body);
    font-size: clamp(1.05rem, 1.4vw, 1.35rem);
    line-height: 1.28;
    color: var(--navy);
    font-weight: 500;
    letter-spacing: 0;
    max-width: 720px;
  }

  .faq-icon {
    width: 1.15rem;
    height: 1.15rem;
    min-width: 1.15rem;
    border-radius: 999px;
    background: var(--gold);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.55rem;
    flex-shrink: 0;
    margin-top: 0.18rem;
    transition: transform 0.2s ease;
  }

  .faq-icon.open {
    transform: rotate(180deg);
  }

  .faq-answer {
    padding: 0.45rem 0 0 0;
    max-width: 700px;
  }

  .faq-answer p {
    margin: 0;
    color: #3e3e3e;
    font-size: 0.98rem;
    line-height: 1.5;
  }

  .faq-shape {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  .faq-shape-left.outer {
    width: 360px;
    height: 360px;
    left: -160px;
    top: 1.2rem;
    background: radial-gradient(circle, rgba(178, 203, 235, 0.5) 0%, rgba(178, 203, 235, 0.18) 54%, transparent 68%);
  }

  .faq-shape-left.inner {
    width: 220px;
    height: 220px;
    left: -52px;
    top: 5rem;
    background: radial-gradient(circle, rgba(245, 250, 255, 0.95) 0%, rgba(235, 243, 250, 0.7) 58%, transparent 72%);
  }

  .faq-shape-right.outer {
    width: 360px;
    height: 360px;
    right: -150px;
    top: 1rem;
    background: radial-gradient(circle, rgba(236, 214, 109, 0.32) 0%, rgba(236, 214, 109, 0.12) 56%, transparent 70%);
  }

  .faq-shape-right.inner {
    width: 520px;
    height: 520px;
    right: -180px;
    bottom: -120px;
    background: radial-gradient(circle, rgba(186, 213, 235, 0.28) 0%, rgba(186, 213, 235, 0.08) 54%, transparent 72%);
  }

  @media (max-width: 900px) {
    .content-wrap {
      padding: 0 1.5rem;
    }

    .contact-row {
      flex-direction: column;
      gap: 1rem;
    }

    .contact-right {
      text-align: left;
      margin-left: 0;
    }

    .top-fields {
      grid-template-columns: 1fr;
    }

    .message-header-row {
      flex-direction: column;
      align-items: flex-start;
    }

    .faq-list {
      max-width: 100%;
      padding-left: 1.4rem;
    }

    .faq-question {
      max-width: 100%;
    }
  }

  @media (max-width: 640px) {
    .contact-info-section,
    .admin-section {
      padding-top: 1.5rem;
    }

    .map-card-inner {
      height: 150px;
    }

    .admin-item h3 {
      font-size: 1.7rem;
    }

    .faq-title {
      font-size: 2.9rem;
      line-height: 0.95;
    }

    .faq-list {
      padding-left: 1.2rem;
    }

    .faq-question {
      font-size: 1rem;
      line-height: 1.32;
    }

    .faq-answer p {
      font-size: 0.92rem;
    }

    .message-panel {
      padding: 1.2rem 1rem 1rem;
    }
  }
</style>