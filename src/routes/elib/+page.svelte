<script lang="ts">
	import { resolve } from '$app/paths';
  import { onMount } from 'svelte';

  const driveLink = "https://drive.google.com/drive/folders/1kg9NDgnWVDhTuxaWKwlj5_PJbziWrNGH?usp=sharing";

  const categories = [
    {
      id: 'do',
      label: 'DO MODULES',
      href: driveLink,
    },
    {
      id: 'co',
      label: 'CO MODULES',
      href: driveLink,
    },
    {
      id: 'other',
      label: 'OTHER LEARNING MATERIALS',
      href: driveLink,
      wide: true,
    }
  ];

  let mounted = false;
  onMount(() => {
    setTimeout(() => mounted = true, 50);
  });
</script>

<svelte:head>
  <title>E-Library | PCSHS</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;1,700;1,800&family=Barlow:wght@300;400&display=swap" rel="stylesheet" />
</svelte:head>

<div class="elib-page" class:mounted>

  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <h1 class="hero-title">E-library</h1>
    </div>
  </section>

  <section class="cards-section">
    <div class="cards-container">

      <div class="row-top">
        {#each categories.filter(c => !c.wide) as cat, i (i)}
          <a
            href={resolve(cat.href)}
            target="_blank"
            rel="noopener noreferrer"
            class="card"
            style="--delay: {i * 100}ms"
          >
            <span class="card-label">{cat.label}</span>
            <span class="card-underline"></span>
          </a>
        {/each}
      </div>

      <div class="row-bottom">
        {#each categories.filter(c => c.wide) as cat, index (index)}
          <a
            href={resolve(cat.href)}
            target="_blank"
            rel="noopener noreferrer"
            class="card card--wide"
            style="--delay: 200ms"
          >
            <span class="card-label">{cat.label}</span>
            <span class="card-underline"></span>
          </a>
        {/each}
      </div>

    </div>
  </section>

</div>

<style>
  :root {
    --accent-orange: #f75e00;
    --card-bg:       #2e5096;
    --font-head: 'Barlow Condensed', 'Gill Sans MT', sans-serif;
  }

  .elib-page {
    min-height: 100vh;
    background: #e8edf5;
  }

  .hero {
    position: relative;
    min-height: unset;
    padding: 1.2rem 3rem;
  }

  .hero-bg {
    position: absolute; inset: 0;
    background: linear-gradient(
      110deg,
      #09295f 0%,
      #1a4a8a 28%,
      #2060a0 48%,
      #4a8878 65%,
      #7aab38 82%,
      #bfc020 100%
    );
  }

  .hero-bg::after {
    content: '';
    position: absolute; inset: 0;
    background-image: repeating-linear-gradient(
      -45deg,
      transparent 0px,
      transparent 14px,
      rgba(255,255,255,0.03) 14px,
      rgba(255,255,255,0.03) 15px
    );
  }

  .hero-content {
    position: relative;
    z-index: 2;
    padding: 0;
  }

  .hero-title {
    font-family: var(--font-head);
    font-size: clamp(3rem, 8vw, 5.5rem);
    font-weight: 800;
    font-style: italic;
    color: #ffffff;
    letter-spacing: 0.01em;
    line-height: 1;
    margin: 0;
    opacity: 0;
    transform: translateY(14px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .mounted .hero-title { opacity: 1; transform: none; }

  .cards-section {
    background: #ffffff;
    padding: 3rem 2rem 5rem;
  }

  .cards-container {
    max-width: 820px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
  }

  .row-top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.1rem;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: linear-gradient(to bottom, #4a7cc9 0%, #2d5aa8 35%, #1a3d82 70%, #0f2560 100%);
    border-radius: 18px;
    padding: 2.6rem 2rem 2.1rem;
    min-height: 130px;
    cursor: pointer;
    overflow: hidden;
    opacity: 0;
    transform: translateY(18px);
    transition:
      opacity 0.5s ease var(--delay, 0ms),
      transform 0.5s ease var(--delay, 0ms),
      box-shadow 0.4s ease;
  }

  .card::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, #f5d020 0%, #d4a800 50%, #b08800 100%);
    border-radius: 18px;
    opacity: 0;
    transition: opacity 0.45s cubic-bezier(0.4,0,0.2,1);
    z-index: 0;
  }
  .card:hover::before { opacity: 1; }

  .mounted .card { opacity: 1; transform: none; }

  .card:hover {
    box-shadow: 0 10px 32px rgba(180,130,0,0.4);
  }

  .card-label, .card-underline { position: relative; z-index: 1; }

  .card--wide {
    min-height: 140px;
  }

  .card-label {
    font-family: var(--font-head);
    font-size: clamp(1.25rem, 3vw, 1.8rem);
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #ffffff;
    text-align: center;
    line-height: 1;
  }

  .card-underline {
    display: block;
    width: 52%;
    height: 2px;
    background: rgba(255,255,255,0.4);
    margin-top: 0.75rem;
    border-radius: 2px;
    transition: width 0.2s ease;
  }
  .card:hover .card-underline {
    width: 62%;
    background: rgba(255,255,255,0.7);
  }

  @media (max-width: 580px) {
    .row-top { grid-template-columns: 1fr; }
    .hero-content { padding: 1rem 1.5rem 2rem; }
    .cards-section { padding: 2rem 1rem 3rem; }
    .card { min-height: 100px; padding: 1.8rem 1.5rem 1.4rem; }
  }
</style>