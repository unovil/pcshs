<script lang="ts">
	import PageHeader from '$lib/components/page-header.svelte';
	import engPlaceholder from '$lib/assets/faculty/Eng.png';
	import {
	facultySections,
	nonTeachingMembers,
	englishMembers,
	filipinoMembers,
	espMembers,
	placeholderPhoto,
	placeholderBanner,
	statueImage
	} from './faculty-staff-data';

	let selectedTab: 'faculty' | 'non-teaching' = 'faculty';
</script>

<svelte:head>
  <title>Faculty &amp; Staff</title>
</svelte:head>

<div class="faculty-page">
  <PageHeader title="Faculty & Staff" img={null} centered />

  <section class="dir-bar">
    <div class="dir-inner">
      <span class="dir-label">STAFF DIRECTORY</span>

      <button
        class="dir-btn"
        class:active={selectedTab === 'faculty'}
        on:click={() => (selectedTab = 'faculty')}
      >
        Faculty
      </button>

      <button
        class="dir-btn"
        class:active={selectedTab === 'non-teaching'}
        on:click={() => (selectedTab = 'non-teaching')}
      >
        Non-Teaching Personnel
      </button>
    </div>
  </section>

  {#if selectedTab === 'faculty'}
    <div class="faculty-content">
      {#each facultySections as section, index}
        {#if section.layout === 'split-two'}
          <div class="divider divider-left">
            <div class="div-line long"></div>
            <div class="div-row">
              <div class="div-line short"></div>
              <span class="div-stars">★ ★ ★</span>
            </div>
          </div>
        {/if}

        <section
          class="dept-section"
          class:theme-dark={section.theme === 'blue-dark'}
          class:theme-science={section.name === 'SCIENCE DEPARTMENT'}
          class:theme-math={section.name === 'MATHEMATICS DEPARTMENT'}
        >
          {#if section.theme === 'blue-dark'}
            <div class="dark-bg"></div>
            <div class="dark-glow"></div>
          {/if}

          {#if section.name === 'SCIENCE DEPARTMENT'}
            <div class="sci-bubble sci-b1"></div>
            <div class="sci-bubble sci-b2"></div>
            <div class="sci-bubble sci-b3"></div>
            <div class="sci-bubble sci-b4"></div>
            <div class="sci-bubble sci-b5"></div>
            <div class="sci-fade-bottom"></div>
            <div class="sci-fade-right"></div>
            <div class="sci-lower-wash"></div>
          {/if}

          {#if section.layout === 'text-left-image-right'}
            <div class="banner-grid">
              <div class="banner-text">
                <div class="banner-accent"></div>
                <div>
                  <h2 class="banner-title">{section.name}</h2>
                  <p class="banner-desc">{section.description}</p>
                </div>
              </div>
              <div class="banner-img">
                <img src={section.bannerImage} alt={section.name} />
              </div>
            </div>

          {:else if section.layout === 'image-left-text-right'}
            <div class="banner-grid">
              <div class="banner-img">
                <img src={section.bannerImage} alt={section.name} />
              </div>
              <div class="banner-text">
                <div class="banner-accent"></div>
                <div>
                  <h2 class="banner-title">{section.name}</h2>
                  <p class="banner-desc">{section.description}</p>
                </div>
              </div>
            </div>

          {:else if section.layout === 'center-overlay'}
            <div class="banner-overlay">
              <img src={section.bannerImage} alt={section.name} />
              <div class="overlay-tint">
                <h2 class="banner-title">{section.name}</h2>
                <p class="banner-desc">{section.description}</p>
              </div>
            </div>

          {:else if section.layout === 'split-two'}
            <div class="split-header">
              <div class="split-left">
                <h2 class="split-title">ENGLISH DEPARTMENT</h2>
                <p class="split-desc">
					The English Department is dedicated to developing students’ communication, critical thinking, and creative expression through the study of language and literature. It helps learners strengthen their skills in reading, writing, speaking, and listening while exploring a wide range of literary works from different cultures and periods. Through discussions, writing activities, presentations, and literary analysis, the department encourages students to express ideas clearly, think critically about texts, and appreciate the power of language in shaping thoughts and society. By fostering strong communication skills and a love for literature, the English Department prepares students to become effective communicators and thoughtful readers in both academic and real-world contexts.
				</p>
              </div>
              <div class="split-img">
				  <img src={engPlaceholder} alt="English and Filipino Department" />
              </div>
              <div class="split-right">
                <h2 class="split-title right">FILIPINO DEPARTMENT</h2>
                <p class="split-desc right">
                  The Filipino Department is committed to nurturing students’ appreciation for the Filipino language, literature, and culture. It focuses on developing learners’ skills in reading, writing, speaking, and understanding Filipino while exploring various literary works such as poems, short stories, essays, and traditional texts. Through discussions, creative writing, and cultural activities, the department encourages students to express their ideas clearly and deepen their understanding of Filipino identity, values, and heritage. By promoting the proper use of the language and appreciation of Filipino literature, the department helps students strengthen their communication skills and develop pride in the nation’s culture and traditions.
                </p>
              </div>
            </div>
          {/if}

          {#if section.layout === 'split-two'}
            <div class="split-grid">
              <div class="split-col">
                <div class="member-grid">
                  {#each englishMembers as member}
                    <article class="member-card">
                      <div class="member-photo">
                        <img src={member.image ?? placeholderPhoto} alt={member.name} />
                      </div>
                      <h3 class="member-pos">{member.position}</h3>
                      <p class="member-name">{member.name}</p>
                    </article>
                  {/each}
                </div>
              </div>
              <div class="split-col border-left">
                <div class="member-grid">
                  {#each filipinoMembers as member}
                    <article class="member-card">
                      <div class="member-photo">
                        <img src={member.image ?? placeholderPhoto} alt={member.name} />
                      </div>
                      <h3 class="member-pos">{member.position}</h3>
                      <p class="member-name">{member.name}</p>
                    </article>
                  {/each}
                </div>
              </div>
            </div>

          {:else if section.name === 'SCIENCE DEPARTMENT'}
  <div class="sci-grid-wrap">
    <div class="sci-grid sci-grid-444432">
      <div class="sci-row sci-row-4">
        {#each section.members.slice(0, 4) as member}
          <article class="member-card sci-card">
            <div class="member-photo sci-photo">
              <img src={member.image ?? placeholderPhoto} alt={member.name} />
            </div>
            <h3 class="member-pos">{member.position}</h3>
            <p class="member-name">{member.name}</p>
          </article>
        {/each}
      </div>

      <div class="sci-row sci-row-4">
        {#each section.members.slice(4, 8) as member}
          <article class="member-card sci-card">
            <div class="member-photo sci-photo">
              <img src={member.image ?? placeholderPhoto} alt={member.name} />
            </div>
            <h3 class="member-pos">{member.position}</h3>
            <p class="member-name">{member.name}</p>
          </article>
        {/each}
      </div>

      <div class="sci-row sci-row-4">
        {#each section.members.slice(8, 12) as member}
          <article class="member-card sci-card">
            <div class="member-photo sci-photo">
              <img src={member.image ?? placeholderPhoto} alt={member.name} />
            </div>
            <h3 class="member-pos">{member.position}</h3>
            <p class="member-name">{member.name}</p>
          </article>
        {/each}
      </div>

      <div class="sci-row sci-row-4">
        {#each section.members.slice(12, 16) as member}
          <article class="member-card sci-card">
            <div class="member-photo sci-photo">
              <img src={member.image ?? placeholderPhoto} alt={member.name} />
            </div>
            <h3 class="member-pos">{member.position}</h3>
            <p class="member-name">{member.name}</p>
          </article>
        {/each}
      </div>

      <div class="sci-row sci-row-3">
        {#each section.members.slice(16, 19) as member}
          <article class="member-card sci-card">
            <div class="member-photo sci-photo">
              <img src={member.image ?? placeholderPhoto} alt={member.name} />
            </div>
            <h3 class="member-pos">{member.position}</h3>
            <p class="member-name">{member.name}</p>
          </article>
        {/each}
      </div>

      <div class="sci-row sci-row-2">
        {#each section.members.slice(19, 21) as member}
          <article class="member-card sci-card">
            <div class="member-photo sci-photo">
              <img src={member.image ?? placeholderPhoto} alt={member.name} />
            </div>
            <h3 class="member-pos">{member.position}</h3>
            <p class="member-name">{member.name}</p>
          </article>
        {/each}
      </div>
    </div>
  </div>

          {:else if section.name === 'ESP/VALUES DEPARTMENT'}
            <div class="esp-section">
              <div class="esp-statue">
                <img src={statueImage} alt="Statue" />
              </div>
              <div class="member-grid-2">
                {#each section.members as member}
                  <article class="member-card">
                    <div class="member-photo">
                      <img src={member.image ?? placeholderPhoto} alt={member.name} />
                    </div>
                    <h3 class="member-pos">{member.position}</h3>
                    <p class="member-name">{member.name}</p>
                  </article>
                {/each}
              </div>
            </div>

          {:else}
            <div class="member-grid-4" class:dark-members={section.theme === 'blue-dark'}>
              {#each section.members as member}
                <article class="member-card">
                  <div class="member-photo" class:white-photo={section.theme === 'blue-dark'}>
                    <img src={member.image ?? placeholderPhoto} alt={member.name} />
                  </div>
                  <h3 class="member-pos" class:text-white={section.theme === 'blue-dark'}>
                    {member.position}
                  </h3>
                  <p class="member-name" class:text-white={section.theme === 'blue-dark'}>
                    {member.name}
                  </p>
                </article>
              {/each}
            </div>
          {/if}
        </section>

        {#if section.layout === 'split-two'}
          <div class="divider divider-right">
            <div class="div-row">
              <span class="div-stars">★ ★ ★</span>
              <div class="div-line short"></div>
            </div>
            <div class="div-line long"></div>
          </div>
        {/if}

        {#if section.layout !== 'split-two' && index !== facultySections.length - 1}
          <div
            class="section-gap"
            class:no-gap-after-science={section.name === 'SCIENCE DEPARTMENT'}
            class:math-lead-gap={section.name === 'MATHEMATICS DEPARTMENT'}
          ></div>
        {/if}
      {/each}
    </div>
  {:else}
    <div class="nonteach-content">
      <div class="nonteach-header">
        <img src={placeholderBanner} alt="Non-Teaching Personnel" />
        <div class="nonteach-text">
          <h2 class="banner-title dark">NON-TEACHING PERSONNEL</h2>
          <p class="banner-desc dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat, mauris non consectetur auctor, nisl libero sollicitudin orci, et pharetra diam orci eu ligula.
          </p>
        </div>
      </div>
      <div class="member-grid-4">
        {#each nonTeachingMembers as member}
          <article class="member-card">
            <div class="member-photo">
              <img src={member.image ?? placeholderPhoto} alt={member.name} />
            </div>
            <h3 class="member-pos">{member.position}</h3>
            <p class="member-name">{member.name}</p>
          </article>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  :root {
    --navy: #2f2b51;
    --navy-deep: #2b3075;
    --gold: #f0cf1a;
    --font-head: 'GillSansCondensed', 'Gill Sans MT Condensed', Arial, sans-serif;
    --font-body: 'GillSans', 'Gill Sans', 'Gill Sans MT', Arial, sans-serif;
  }

  .faculty-page {
    min-height: 100vh;
    font-family: var(--font-body);
    background: #fff;
    color: var(--navy);
    isolation: isolate;
  }

  
  .dir-bar {
    background: #fff;
    border-bottom: 1px solid #d8d8d8;
    position: relative;
    z-index: 10;
  }

  .dir-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.95rem;
    flex-wrap: wrap;
  }

  .dir-label {
    color: #47406f;
    letter-spacing: 0.24rem;
    border-right: 1px solid #c7c7c7;
    padding-right: 1.5rem;
    margin-right: 0.7rem;
    font-size: 1.2rem;
    font-family: var(--font-head);
    text-transform: uppercase;
  }

  .dir-btn {
    border: 0;
    background: transparent;
    color: #47406f;
    padding: 0.45rem 0.9rem;
    cursor: pointer;
    font-size: 1rem;
    font-family: var(--font-body);
  }

  .dir-btn.active {
    font-weight: 700;
  }

  .faculty-content {
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 3.4rem;
    position: relative;
    z-index: 1;
  }

  .divider {
    padding: 0 0.7rem;
    margin: 1.9rem 0 2.15rem;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .divider-left {
    align-items: flex-start;
  }

  .divider-right {
    align-items: flex-end;
  }

  .div-line {
    height: 2px;
    border-radius: 999px;
    background: #31407f;
    display: block;
  }

  .divider-left .div-line.long {
    width: min(74vw, 960px);
  }

  .divider-left .div-line.short {
    width: min(26vw, 340px);
  }

  .divider-right .div-line.long {
    width: min(52vw, 660px);
  }

  .divider-right .div-line.short {
    width: min(19vw, 240px);
  }

  .div-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.62rem;
  }

  .div-stars {
    font-size: 0.66rem;
    letter-spacing: 0.14rem;
    color: #31407f;
    white-space: nowrap;
    line-height: 1;
    flex-shrink: 0;
  }

  .dept-section {
    position: relative;
    padding-top: 2.35rem;
    padding-bottom: 1rem;
    overflow: hidden;
    isolation: isolate;
    transform: translateZ(0);
  }

  .dept-section.theme-dark {
    color: #fff;
    padding: 2.15rem 0;
    isolation: isolate;
    transform: translateZ(0);
  }

  .dept-section.theme-science {
    padding-top: 1.55rem;
    padding-bottom: 1.15rem;
    margin-bottom: 0;
    overflow: hidden;
    isolation: isolate;
    transform: translateZ(0);
    background: #f4f3ef;
  }

  .dept-section.theme-math {
    padding-top: 0.7rem;
  }

  .dark-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    background:
      radial-gradient(circle at 18% 24%, rgba(116, 132, 236, 0.2) 0%, rgba(116, 132, 236, 0.09) 24%, transparent 47%),
      radial-gradient(circle at 58% 54%, rgba(54, 66, 152, 0.16) 0%, rgba(54, 66, 152, 0.07) 30%, transparent 56%),
      radial-gradient(circle at 88% 10%, rgba(118, 92, 84, 0.2) 0%, rgba(118, 92, 84, 0.08) 28%, transparent 50%),
      linear-gradient(90deg, #2b3075 0%, #364a9e 52%, #6a5a56 100%);
  }

  .dark-glow {
    position: absolute;
    z-index: 1;
    border-radius: 100% 0 0 0;
    pointer-events: none;
    inset: auto -4% -26% auto;
    width: 68%;
    height: 74%;
    background: radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0.08) 22%,
      rgba(255, 255, 255, 0.03) 44%,
      transparent 68%
    );
  }

  .sci-bubble {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
  }

  .sci-b1 {
    width: 300px;
    height: 300px;
    top: 315px;
    left: -80px;
    background: rgba(213, 226, 243, 0.42);
  }

  .sci-b2 {
    width: 430px;
    height: 430px;
    bottom: -40px;
    left: -110px;
    background: rgba(205, 221, 241, 0.48);
  }

  .sci-b3 {
    width: 250px;
    height: 250px;
    bottom: -8px;
    left: 180px;
    background: rgba(212, 225, 243, 0.34);
  }

  .sci-b4 {
    width: 290px;
    height: 290px;
    top: 298px;
    right: -105px;
    background: rgba(232, 203, 121, 0.2);
    border: 8px solid rgba(232, 203, 121, 0.22);
    box-sizing: border-box;
  }

  .sci-b5 {
    width: 230px;
    height: 230px;
    bottom: -35px;
    right: -40px;
    background: rgba(223, 234, 205, 0.26);
  }

  .sci-fade-bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 138px;
    z-index: 2;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(236, 240, 244, 0) 0%,
      rgba(219, 230, 242, 0.42) 54%,
      rgba(207, 221, 238, 0.78) 100%
    );
  }

  .sci-fade-right {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 44%;
    height: 165px;
    z-index: 2;
    pointer-events: none;
    background: linear-gradient(
      135deg,
      rgba(235, 240, 244, 0) 0%,
      rgba(230, 236, 222, 0.18) 42%,
      rgba(226, 219, 162, 0.38) 74%,
      rgba(220, 202, 128, 0.52) 100%
    );
  }

  .sci-lower-wash {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 108px;
    z-index: 1;
    pointer-events: none;
    background:
      radial-gradient(circle at 18% 36%, rgba(214, 226, 242, 0.54) 0 28%, transparent 29%),
      radial-gradient(circle at 84% 42%, rgba(226, 236, 213, 0.32) 0 19%, transparent 20%),
      linear-gradient(90deg, rgba(221, 231, 243, 0.72) 0%, rgba(217, 228, 241, 0.56) 58%, rgba(225, 223, 190, 0.46) 100%);
  }

  .banner-grid {
    position: relative;
    z-index: 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 230px;
  }

  .banner-text {
    display: flex;
    align-items: center;
    gap: 1.15rem;
    padding: 2.1rem 2.3rem;
    background: linear-gradient(90deg, #35306e 0%, #473f88 24%, #5d5aa1 50%, #8d97c1 76%, #d3dde9 100%);
    color: #fff;
    position: relative;
    z-index: 3;
  }

  .banner-accent {
    width: 4px;
    min-height: 92px;
    background: var(--gold);
    flex-shrink: 0;
  }

  .banner-title {
    margin: 0 0 0.55rem;
    font-family: var(--font-head);
    font-size: clamp(2rem, 3vw, 3rem);
    font-weight: 700;
    text-transform: uppercase;
    line-height: 0.94;
    letter-spacing: 0.4px;
    color: #fff;
  }

  .banner-title.dark {
    color: var(--navy);
  }

  .banner-desc {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.55;
    color: #fff;
  }

  .banner-desc.dark {
    color: var(--navy);
  }

  .banner-img {
    overflow: hidden;
    position: relative;
    z-index: 3;
  }

  .banner-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .banner-overlay {
    position: relative;
    z-index: 3;
    min-height: 250px;
  }

  .banner-overlay img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .overlay-tint {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1.6rem;
    background: linear-gradient(
      180deg,
      rgba(160, 120, 18, 0.55) 0%,
      rgba(138, 104, 8, 0.64) 52%,
      rgba(101, 74, 4, 0.7) 100%
    );
    color: #fff;
  }

  .split-header {
    position: relative;
    z-index: 3;
    display: grid;
    grid-template-columns: 1fr 210px 1fr;
    align-items: center;
    border: 1px solid rgba(203, 207, 220, 0.85);
    border-radius: 2px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.98);
    margin: 0 0.85rem 1.5rem;
    min-height: 112px;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.7) inset;
  }

  .split-left {
    padding: 1rem 1.4rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .split-right {
    padding: 1rem 1rem 1rem 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
  }

  .split-title {
    margin: 0 0 0.38rem;
    font-family: var(--font-head);
    font-size: clamp(1.55rem, 2vw, 2.15rem);
    font-weight: 700;
    text-transform: uppercase;
    color: #253170;
    line-height: 0.92;
    letter-spacing: 0.3px;
  }

  .split-title.right {
    text-align: right;
  }

  .split-desc {
    margin: 0;
    color: #2c345f;
    font-size: 0.66rem;
    line-height: 1.38;
  }

  .split-desc.right {
    text-align: right;
  }

  .split-img {
    display: flex;
    align-items: stretch;
    justify-content: center;
    min-height: 112px;
    background: #fff;
  }

  .split-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .split-grid {
    position: relative;
    z-index: 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 0.2rem;
  }

  .split-col {
    padding: 0 1.05rem;
  }

  .split-col.border-left {
    border-left: 1px solid rgba(203, 207, 220, 0.38);
  }

  .member-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(130px, 1fr));
    gap: 1.35rem 1.1rem;
    padding-top: 0.65rem;
    justify-items: center;
  }

  .member-grid-4 {
    display: grid;
    grid-template-columns: repeat(4, minmax(160px, 1fr));
    gap: 2.45rem 1.35rem;
    justify-items: center;
    padding: 2rem 1rem 0.3rem;
    position: relative;
    z-index: 3;
  }

  .member-grid-4.dark-members {
    color: #fff;
  }

  .esp-section {
    position: relative;
    z-index: 3;
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    align-items: center;
    gap: 1.25rem;
    padding: 2rem 1rem 0.9rem;
  }

  .esp-statue {
    overflow: hidden;
    border-radius: 4px;
  }

  .esp-statue img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .member-grid-2 {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 1fr));
    gap: 2.25rem 1.25rem;
    justify-items: center;
  }

  .sci-grid-wrap {
  position: relative;
  z-index: 10;
  padding: 2rem 1rem 0.2rem;
}

.sci-grid-444432 {
  max-width: 980px;
  margin: 0 auto;
}

.sci-row {
  display: grid;
  justify-content: center;
  gap: 2.15rem 1.35rem;
  margin-bottom: 2rem;
}

.sci-row-4 {
  grid-template-columns: repeat(4, 190px);
}

.sci-row-3 {
  grid-template-columns: repeat(3, 190px);
}

.sci-row-2 {
  grid-template-columns: repeat(2, 190px);
}

.sci-card {
  width: 190px;
}

  .member-card {
    width: 100%;
    max-width: 190px;
    text-align: center;
  }

  .member-photo {
    width: 108px;
    height: 108px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 0.8rem;
    background: #d9eff9;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }

  .member-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .sci-photo {
    background: #fff;
    box-shadow: 0 2px 10px rgba(115, 145, 189, 0.12), 0 1px 4px rgba(0, 0, 0, 0.05);
  }

  .white-photo {
    background: rgba(255, 255, 255, 0.15);
  }

  .member-pos {
    margin: 0;
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    line-height: 1.15;
  }

  .member-name {
    margin: 0.24rem 0 0;
    font-size: 0.72rem;
    color: #424242;
    line-height: 1.35;
  }

  .text-white {
    color: #fff !important;
  }

  .section-gap {
    height: 2.7rem;
  }

  .section-gap.no-gap-after-science {
    height: 14px;
    margin: 0;
    background: linear-gradient(
      180deg,
      rgba(215, 227, 241, 0.78) 0%,
      rgba(209, 223, 240, 0.62) 52%,
      rgba(203, 219, 238, 0.42) 100%
    );
  }

  .section-gap.math-lead-gap {
    height: 0;
  }

  .nonteach-content {
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 3.4rem;
  }

  .nonteach-header {
    display: grid;
    grid-template-columns: 260px 1fr;
    border: 1px solid #c7c7c7;
    border-radius: 0.5rem;
    overflow: hidden;
    background: #fff;
    margin: 2rem 1rem 0;
  }

  .nonteach-header img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .nonteach-text {
    padding: 1.5rem 1.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    .banner-grid {
      grid-template-columns: 1fr;
    }

    .split-header {
      grid-template-columns: 1fr;
    }

    .split-right {
      text-align: left;
    }

    .split-title.right,
    .split-desc.right {
      text-align: left;
    }

    .split-grid {
      grid-template-columns: 1fr;
    }

    .split-col.border-left {
      border-left: none;
      border-top: 1px solid rgba(203, 207, 220, 0.5);
      margin-top: 1rem;
      padding-top: 1rem;
    }

    .member-grid-4 {
      grid-template-columns: repeat(3, minmax(140px, 1fr));
    }

    .esp-section {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .member-grid-4 {
      grid-template-columns: repeat(2, minmax(130px, 1fr));
    }

    .member-grid-2 {
      grid-template-columns: repeat(2, minmax(130px, 1fr));
    }

    .dir-label {
      width: 100%;
      border-right: none;
      padding-right: 0;
      margin-right: 0;
    }

    .hero {
      padding: 1.5rem;
    }

    .divider {
      padding: 0 0.45rem;
    }

    .div-stars {
      font-size: 0.58rem;
      letter-spacing: 0.11rem;
    }

    .divider-right .div-line.short,
    .divider-left .div-line.short {
      width: 120px;
    }

    .section-gap.no-gap-after-science {
      height: 10px;
    }
  }
</style>