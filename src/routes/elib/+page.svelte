<script lang="ts">
  import { onMount } from 'svelte';
  import PageHeader from '$lib/components/page-header.svelte';

  const driveLink = "https://drive.google.com/drive/folders/1kg9NDgnWVDhTuxaWKwlj5_PJbziWrNGH?usp=sharing";

  const categories = [
    { id: 'do',    label: 'DO MODULES',              href: driveLink },
    { id: 'co',    label: 'CO MODULES',              href: driveLink },
    { id: 'other', label: 'OTHER LEARNING MATERIALS', href: driveLink, wide: true },
  ];

  let mounted = false;
  onMount(() => setTimeout(() => mounted = true, 50));
</script>

<svelte:head>
  <title>E-Library | PCSHS</title>
</svelte:head>

<div class="min-h-screen font-body" style="background:#e8edf5;">

  <PageHeader title="E-library" img={null} />

  <!-- Cards -->
  <section class="bg-white py-12 px-8 pb-20">
    <div class="max-w-[820px] mx-auto flex flex-col gap-[1.1rem]">

      <!-- Top row: 2 cards -->
      <div class="grid grid-cols-2 gap-[1.1rem]">
        {#each categories.filter(c => !c.wide) as cat, i}
          <a
            href={cat.href}
            target="_blank"
            rel="noopener noreferrer"
            class="card-btn"
            style="--delay: {i * 100}ms"
            class:mounted
          >
            <span class="card-lbl">{cat.label}</span>
            <span class="card-line"></span>
          </a>
        {/each}
      </div>

      <!-- Bottom row: wide card -->
      <div>
        {#each categories.filter(c => c.wide) as cat}
          <a
            href={cat.href}
            target="_blank"
            rel="noopener noreferrer"
            class="card-btn card-wide"
            style="--delay: 200ms"
            class:mounted
          >
            <span class="card-lbl">{cat.label}</span>
            <span class="card-line"></span>
          </a>
        {/each}
      </div>

    </div>
  </section>

</div>

<style>
  .card-btn {
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
  .card-btn::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, #f5d020 0%, #d4a800 50%, #b08800 100%);
    border-radius: 18px;
    opacity: 0;
    transition: opacity 0.45s cubic-bezier(0.4,0,0.2,1);
    z-index: 0;
  }
  .card-btn:hover::before { opacity: 1; }
  .card-btn:hover { box-shadow: 0 10px 32px rgba(180,130,0,0.4); }
  .card-btn.mounted { opacity: 1; transform: none; }
  .card-wide { min-height: 140px; }

  .card-lbl {
    position: relative; z-index: 1;
    font-family: 'Barlow Condensed', 'Gill Sans MT', sans-serif;
    font-size: clamp(1.25rem, 3vw, 1.8rem);
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    line-height: 1;
  }
  .card-line {
    position: relative; z-index: 1;
    display: block;
    width: 52%;
    height: 2px;
    background: rgba(255,255,255,0.4);
    margin-top: 0.75rem;
    border-radius: 2px;
    transition: width 0.2s ease, background 0.2s ease;
  }
  .card-btn:hover .card-line {
    width: 62%;
    background: rgba(255,255,255,0.7);
  }

  @media (max-width: 580px) {
    .card-btn { min-height: 100px; padding: 1.8rem 1.5rem 1.4rem; }
  }
</style>