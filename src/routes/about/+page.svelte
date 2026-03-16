<script>
	const mission =
		"PCSHS' mission is to fully develop well-rounded, Science and Technology-oriented students, nurturing and gender-sensitive persons, and future leaders with a vision for excellence.";

	const vision =
		"PCSHS is envisioned to be a world-class institution that is globally and locally competitive and responsive to the ever-changing needs of the times, especially in the fields of Science and Technology.";
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap");

	:global(body) {
		margin: 0;
		font-family: "Gill Sans", "Gill Sans MT", Arial, sans-serif;
		background: #f5f5f5;
	}

	.section {
		padding: 80px 10%;
	}

	h1,
	h2,
	h3 {
		font-family: "Oswald", sans-serif;
		letter-spacing: 2px;
	}

	.hero {
		position: relative;
		height: 450px;
		background: url("/images/header.png") center/cover no-repeat;
		display: flex;
		align-items: center;
		padding-left: 10%;
		color: white;
		overflow: hidden;
	}

	.hero::after {
		content: "";
		position: absolute;
		inset: 0;
		background: linear-gradient(
			90deg,
			rgba(32, 49, 120, 0.8),
			rgba(32, 49, 120, 0.4),
			rgba(255, 200, 0, 0.3)
		);
	}

	.hero h1 {
		position: relative;
		font-size: 80px;
		font-weight: 700;
		z-index: 2;
	}

	
	.history {
		background: white;
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 60px;
		align-items: start;
	}

	.history h2 {
		font-size: 70px;
		color: #2c2c5a;
	}

	.history p {
		color: #444;
		line-height: 1.6;
	}

	.history img {
		width: 100%;
		border-radius: 10px;
		transition: transform 0.4s ease;
	}

	.history img:hover {
		transform: scale(1.05);
	}

	
	.indent-7 {
		text-indent: 2em;
	}

	.one-line-space {
		margin-bottom: 1em !important; 
		display: block;
	}

	
	.mv {
		background: #5a4fb1;
		color: white;
		display: grid;
		grid-template-columns: 1fr 1fr;
		text-align: center;
		gap: 40px;
	}

	.mv-card {
		padding: 40px;
		border-radius: 10px;
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.mv-card:hover {
		transform: translateY(-8px) scale(1.02);
		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
	}

	.mv h3 {
		font-size: 42px;
		margin-bottom: 20px;
	}

	
	.seal-section {
		background: #2d2b4d;
		color: white;
		text-align: center;
		padding: 100px 15%;
	}

	.seal-section img {
		width: 260px;
		margin: 30px auto;
		transition: transform 0.4s ease, filter 0.4s ease;
	}

	.seal-section img:hover {
		transform: scale(1.1) rotate(2deg);
		filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.5));
	}

	.seal-title {
		font-size: 48px;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.seal-text p {
		max-width: 900px;
		margin: 15px auto; 
		line-height: 1.6;
		color: #d6d6e3;
		text-align: center;
	}

	
	.hymn {
		background: linear-gradient(#f3d06b, #fff);
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: start;
		gap: 50px;
		padding: 80px 10%;
	}

	.hymn img {
		width: 100%;
		border-radius: 10px;
		transition: transform 0.4s;
	}

	.hymn img:hover {
		transform: scale(1.05);
	}

	.hymn h2 {
		font-size: 70px;
		color: #2c2c5a;
		margin-bottom: 20px;
	}

	.hymn-text {
		line-height: 1.7;
		text-indent: 2em; 
		margin-bottom: 1em;
	}


	.footer {
		background: #2d2b4d;
		color: white;
		padding: 50px 10%;
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		gap: 40px;
	}

	.footer img {
		width: 70px;
	}

	.footer h4 {
		margin-bottom: 15px;
	}

	.footer a {
		display: block;
		color: #c9c9e8;
		text-decoration: none;
		margin-bottom: 6px;
		transition: color 0.2s;
	}

	.footer a:hover {
		color: white;
	}
</style>


<section class="hero">
	<h1>About the School</h1>
</section>


<section class="section history">
	<div style= text-align:center>
		<h2>HISTORY</h2>
		<img src="/images/history.png" alt="school building" />
	</div>

	<div>
		<p class="indent-7 one-line-space">
			With the support and determination of former Mayor Soledad C. Eusebio, 
			Hon. Mayor Vicente P. Eusebio, and a member of the City Council, the 
			school was founded on October 7, 2004, by virtue of City Ordinance No. 28, 
			series 2004. It was named Pasig City Science High School.
		</p>

		<p class="indent-7 one-line-space">
			The school formally opened in School Year 2005–2006 using temporarily the 
			fifth, sixth, and seventh floors of the Pamantasan ng Lungsod ng Pasig building. 
			Mr. Noel A. Salalima became its first principal. Ms. Edna H. Negru and 
			Ms. Mila I. Jose were appointed as the Head Teachers together with the first 
			batch of faculty composed of nineteen (19) competent special science teachers. 
			Four (4) support staff aided the administrators.
		</p>

		<p class="indent-7 one-line-space">
			In January 2014, Chief Education Program Supervisor Mrs. Ligaya Inigne 
			took over the school as OIC-Principal, bringing with her the mandate from 
			the Office of the Mayor to hone future leaders and young scientists. 
			In June of 2014, the reign of Pasig City Science High School was under 
			the stewardship of Mr. Jay Mathias A. Arellano.
		</p>

		<p class="indent-7 one-line-space">
			Pasig City Science High School continued its legacy under the strong 
			leadership of Mr. Charlie O. Fababaer. Under his guidance, the school 
			returned to its glorious days when students started bagging different local 
			and international awards in various fields, especially in Science, Mathematics, 
			Journalism, Research, and more. Mr. Fababaer has been very supportive 
			of all the school’s endeavors as it fulfills its mission and vision — 
			to fully develop well-rounded, nurturing, and excellent students who are 
			globally competitive and responsive to the ever-changing needs of the time 
			in the field of Science and Technology.
		</p>

		<p class="indent-7 one-line-space">
			Currently, the school is under the new leadership of Mrs. Liza C. Caigoy, 
			a school principal appointed by SDO Pasig SDS, Mrs. Sheryl T. Gayola. 
			Her leadership upholds integrity, fosters a culture of respect, and ensures 
			a conducive learning environment. She shapes a positive atmosphere for 
			both students and employees, maintaining a healthy and productive school 
			environment. Mrs. Caigoy serves the school community by guiding and 
			mentoring students towards academic, social, and emotional growth.
		</p>
	</div>
</section>

<section class="section mv">
	<div class="mv-card">
		<h3>MISSION</h3>
		<p>{mission}</p>
	</div>

	<div class="mv-card">
		<h3>VISION</h3>
		<p>{vision}</p>
	</div>
</section>


<section class="seal-section">
	<img src="/images/logo.png" alt="School Seal" />

	<div class="seal-title">THE SCHOOL SEAL</div>

	<div class="seal-text">
		<p>
			The <b>round shape</b> of the official logo of <b>Pasig City Science High School</b> represents the school’s strong commitment to the complete and well-rounded development of its students. The school aims to touch the hearts, teach the minds, and train the hands of students who are interested in science, mathematics, and technology so they can become future leaders who will help improve their city and country.
		</p>
		<p>
			The <b>torch with a flame</b> at the center symbolizes the strong passion of the administrators, teachers, and students for knowledge and wisdom. It shows their dedication to lifelong learning and their effort to share new ideas and updated knowledge with future generations. The torch also represents the high quality of education the school provides.
		</p>
		<p>
			The <b>open book</b> represents the book of knowledge. It is open to show that knowledge should always be learned, reviewed, and shared by everyone who wants to grow and learn
		</p>
		<p>
			The <b>sun</b> on the left side of the book represents the school’s vision, mission, and highest goals. Its eight rays symbolize the different groups that work together to support the school, including the Department of Education, the Mayor’s Office, City Council, school administration, teachers, staff, the school governing council, and the Parents-Teachers Association. These groups cooperate to provide the best education for the students.
		</p>
		<p>
			The <b>star</b> on the right side of the book represents excellence. It symbolizes the high quality of the school’s curriculum, services, staff, and facilities. It also reflects the outstanding qualities of the school’s administrators, teachers, and staff who help develop students into capable leaders.
		</p>
	</div>
</section>


<section class="section hymn">
	<div>
		<img src="/images/schoolhymn.png" alt="school hymn" />
	</div>

	<div style="margin-top: 60px;">
		<h2>SCHOOL HYMN</h2>

		<p><b>Composer:</b> Mr. Noel A. Salalima</p>
		<p><b>Music by:</b> Mr. Eric Elvi R. Bagamasbad</p>

		<p class="hymn-text"style="margin-top: 20px;text-align: left; text-indent: 0;">
			Pasig City Science High School, Hail to you our dearest school.
			Our second home, our inspiration, We dearly love with devotion.
			Hail to you our dear alma mater, We praise and honor you.
			With voices loud and clear, We sing out your name. Going
			onwards, Moving forward, Great and Beloved, PCSHS.
		</p>
	</div>
</section>

