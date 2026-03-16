<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
	<title>PCSHS Academic Calendar 2026</title>
</svelte:head>

<style>
	:global(:root) {
		--primary-blue: #2f3675;
		--accent-gold: #ffc400;
		--light-gray: #eef1f6;
		--text-dark: #27306d;
	}

	.page {
		min-height: 100vh;
		background: radial-gradient(circle at 20% 80%, #b7c9e6 0%, transparent 40%), radial-gradient(circle at 80% 90%, #d6d3a8 0%, transparent 40%), var(--light-gray);
		padding-top: 120px;
	}

	.hero-banner {
		min-height: 200px;
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://www.ateneo.edu/sites/default/files/inline-images/Academic%20Calendar%202_5.png") center/cover no-repeat;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 60px 10% 24px;
	}

	.title {
		font-size: clamp(2rem, 6vw, 4rem);
		color: white;
		font-weight: 600;
		text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
		margin: 0;
		text-transform: uppercase;
	}

	.calendar {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 25px;
		padding: 30px 10%;
		max-width: 1200px;
		margin: 0 auto 30px;
	}

	.column { display: flex; flex-direction: column; gap: 20px; }
	.card {
		background: var(--primary-blue);
		color: white;
		padding: 20px;
		border-radius: 12px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	}
	.card:hover { transform: translateY(-8px); box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3); background-color: #3b448e; }
	.month { color: var(--accent-gold); font-size: 1.5rem; font-weight: 600; margin-bottom: 12px; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; }
	.card ul { list-style: none; padding: 0; margin: 0; }
	.card li { display: grid; grid-template-columns: 55px 1fr; gap: 12px; margin-bottom: 8px; font-size: 0.88rem; font-weight: 300; align-items: start; text-align: left; }
	.date { font-weight: 600; color: white; opacity: 0.8; border-right: 1px solid rgba(255,255,255,0.2); padding-right: 4.2px; display: inline-block; width: 50px; white-space: nowrap; vertical-align: top; text-align: right; margin-right: 5px; }
	.event-text { color: rgba(255,255,255,0.95); }
	.bold-white { font-weight: 700; color: white; }
	.card.other { background: transparent; color: var(--primary-blue); text-align: center; justify-content: center; min-height: 80px; display: flex; align-items: center; font-size: 1.2rem; font-weight: 700; border: none; box-shadow: 4px 8px 16px rgba(0,0,0,0.2); }
	.card.other:hover { transform: scale(1.05); background: transparent; }
	@media (max-width: 600px) { .calendar { padding: 15px; } .hero-banner { padding: 40px 8% 18px; } .title { font-size: 2.2rem; } }
</style>

<div class="page">
	<header class="hero-banner">
		<h1 class="title">Academic Calendar</h1>
	</header>

	<main class="calendar">
		<div class="column">
			<article class="card"><div class="month">January 2026</div><ul><li><span class="date">1</span><span class="event-text"><span class="bold-white">New Year's Day (Holiday)</span></span></li><li><span class="date">5</span><span class="event-text">Resumption of Classes</span></li><li><span class="date">19</span><span class="event-text">Start of Testing Window for NAT Grade 12</span></li><li><span class="date">22-23</span><span class="event-text">Academic Quarter 3 Examination</span></li><li><span class="date">23</span><span class="event-text">End of Academic Year 3</span></li><li><span class="date">26</span><span class="event-text">Start of Academic Year 4</span></li><li><span class="date">29</span><span class="event-text"><span class="bold-white">Start of SSLG Campaign Period 2026</span></span></li><li><span class="date">31</span><span class="event-text">Early Registration; Parent Teacher Conference and Distribution of Report Cards</span></li></ul></article>
			<article class="card"><div class="month">February 2026</div><ul><li><span class="date">2-6</span><span class="event-text">End of Testing Window for NAT Grade 12</span></li><li><span class="date">5</span><span class="event-text"><span class="bold-white">Miting de Avance 2026</span></span></li><li><span class="date">10</span><span class="event-text"><span class="bold-white">Release of SSLG Election Results 2026</span></span></li><li><span class="date">17</span><span class="event-text"><span class="bold-white">Chinese New Year (Regular Holiday)</span></span></li><li><span class="date">18</span><span class="event-text">Start of Testing Window for EoSY Assessments</span></li><li><span class="date">22</span><span class="event-text">Accreditation and Equivalency (A&E Test)</span></li></ul></article>
			<article class="card"><div class="month">March 2026</div><ul><li><span class="date">7</span><span class="event-text"><span class="bold-white">Unified Science High School Admission Test (USHAT)</span></span></li><li><span class="date">9-20</span><span class="event-text">Administration of EOSY CRLA, RMA, and Phil-IRI</span></li><li><span class="date">18</span><span class="event-text">End of Testing Window for EoSY Assessments</span></li><li><span class="date">19-20</span><span class="event-text">Academic Quarter 4 Examination</span></li><li><span class="date">23-27</span><span class="event-text">EOSY Deliberation of Honors</span></li><li><span class="date">30-31</span><span class="event-text">EOSY Rites</span></li></ul></article>
		</div>
		<div class="column">
			<article class="card"><div class="month">April 2026</div><ul><li><span class="date">1</span><span class="event-text">Parent-Teacher Conference and Distribution of Cards; <span class="bold-white">Start of 10-day Teacher's EOSY Break</span></span></li><li><span class="date">2</span><span class="event-text"><span class="bold-white">Maundy Thursday (Regular Holiday)</span></span></li><li><span class="date">3</span><span class="event-text"><span class="bold-white">Good Friday (Regular Holiday)</span></span></li><li><span class="date">9</span><span class="event-text"><span class="bold-white">The Day of Valor (Regular Holiday)</span></span></li><li><span class="date">27-30</span><span class="event-text">NSPC and NFOT</span></li></ul></article>
			<article class="card"><div class="month">May 2026</div><ul><li><span class="date">1</span><span class="event-text"><span class="bold-white">End of NSPC and NFOT: End of 10-day Teacher's EOSY Break; Labor Day (Holiday)</span></span></li><li><span class="date">4</span><span class="event-text">Start of EOSY Intervention Program</span></li><li><span class="date">4-8</span><span class="event-text">Palarong Pambansa</span></li></ul></article>
			<article class="card"><div class="month">June 2026</div><ul><li><span class="date">1-5</span><span class="event-text">Brigada Eskwela, Enrollment Period</span></li><li><span class="date">1-12</span><span class="event-text">Oplan Balik Eskwela</span></li><li><span class="date">8</span><span class="event-text">Indicative Opening of S.Y. 2026-2027</span></li><li><span class="date">-</span><span class="event-text">Eid al-Adha</span></li></ul></article>
			<div class="card other">OTHER DATES TO FOLLOW</div>
		</div>
	</main>
</div>
