<script>

let showArticle = false
let relatedIndex = 0

const news = [
{title:"FreshieCon 2025: New Beginnings at PCSHS",date:"March 6, 2026"},
{title:"FreshieCon 2025: New Beginnings at PCSHS",date:"March 6, 2026"},
{title:"FreshieCon 2025: New Beginnings at PCSHS",date:"March 6, 2026"},
{title:"FreshieCon 2025: New Beginnings at PCSHS",date:"March 6, 2026"}
]

const related = [
{title:"FreshieCon 2025: New Beginnings at PCSHS"},
{title:"FreshieCon 2025: New Beginnings at PCSHS"},
{title:"FreshieCon 2025: New Beginnings at PCSHS"},
{title:"FreshieCon 2025: New Beginnings at PCSHS"},
]

function next(){
relatedIndex=(relatedIndex+1)%related.length
}

function prev(){
relatedIndex=(relatedIndex-1+related.length)%related.length
}

</script>

<style>

body{
margin:0;
font-family:Arial;
background:#1d1360;
color:white;
}



.hero{
position:relative;
height:520px;
background:
linear-gradient(rgba(30,20,100,.75),rgba(30,20,100,.95)),
url("/images/ushat.png") center/cover;
display:flex;
align-items:flex-end;
padding:60px 10%;
}

.heroContent{
max-width:900px;
}

.hero h1{
font-size:48px;
margin:0 0 10px;
}

.hero p{
color:#ddd;
}

.readBtn{
margin-top:25px;
background:white;
border:none;
padding:12px 26px;
border-radius:25px;
cursor:pointer;
transition:.3s;
}

.readBtn:hover{
transform:scale(1.08);
}



.news{
padding:80px 10%;
}

.news h2{
text-align:center;
font-size:42px;
letter-spacing:3px;
margin-bottom:50px;
}

.newsGrid{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:35px;
}

.card{
display:flex;
gap:20px;
background:#2b2a74;
border-radius:20px;
padding:22px;
transition:.3s;
cursor:pointer;
}

.card:hover{
transform:translateY(-8px);
box-shadow:0 20px 35px rgba(0,0,0,.3);
}

.card img{
width:150px;
border-radius:10px;
}

.card small{
color:#bbb;
}

.loadMore{
display:block;
margin:60px auto 0;
background:#ffd200;
border:none;
padding:14px 40px;
border-radius:30px;
font-weight:bold;
cursor:pointer;
}



.articleSection{
background:#e8e8f2;
padding:120px 10%;
color:black;
}

.article{
background:white;
border-radius:22px;
padding:60px;
box-shadow:0 25px 50px rgba(0,0,0,.2);
}

.article h1{
font-size:36px;
margin-bottom:20px;
}

.meta{
display:flex;
justify-content:space-between;
border-bottom:2px solid #ccc;
padding-bottom:12px;
margin-bottom:25px;
}

.article img{
width:100%;
border-radius:12px;
margin:25px 0;
}

.article p{
line-height:1.8;
color:#444;
}



.recommend{
margin-top:70px;
background:#2b2a74;
border-radius:24px;
padding:50px;
color:white;
position:relative;
}

.recommend h2{
margin-bottom:25px;
}

.slider{
display:flex;
gap:25px;
overflow:hidden;
}

.recCard{
background:white;
color:black;
padding:16px;
border-radius:12px;
width:260px;
transition:.3s;
}

.recCard:hover{
transform:translateY(-6px);
}

.recCard img{
width:100%;
border-radius:8px;
}

.arrow{
position:absolute;
top:50%;
transform:translateY(-50%);
background:white;
color:black;
border:none;
width:40px;
height:40px;
border-radius:50%;
cursor:pointer;
}

.left{
left:-20px;
}

.right{
right:-20px;
}



.author{
margin-top:70px;
background:white;
border-radius:22px;
padding:40px;
display:flex;
gap:30px;
align-items:center;
}

.author img{
width:150px;
border-radius:10px;
}

.author h3{
margin:0 0 8px;
}

</style>



<section class="hero">

<div class="heroContent">

<h1>
FIRST-EVER UNIFIED SCIENCE HIGH SCHOOL ADMISSIONS TEST (USHAT)
CONDUCTED AT PCSHS
</h1>

<p>MARCH 9, 2026</p>

<p>
Pasig City Science High School successfully conducted the Unified
Science High School Admission Test (USHAT) on March 7, 2026.
</p>

<button class="readBtn" on:click={()=>showArticle=true}>
Read More
</button>

</div>

</section>



<section class="news">

<h2>NEWS & EVENTS</h2>

<div class="newsGrid">

{#each news as n}

<div class="card" on:click={()=>showArticle=true}>

<img src="/images/freshie.png">

<div>

<small>{n.date}</small>

<h3>{n.title}</h3>

<p>
FreshieCon 2025 was held at Pasig City Science High School to welcome
newly admitted Pascians.
</p>

</div>

</div>

{/each}

</div>

<button class="loadMore">Load More</button>

</section>




{#if showArticle}

<section class="articleSection">

<div class="article">

<h1>
INNOVATION STEPS INTO THE SPOTLIGHT AT CAPSTONE DEFENSE 2026
</h1>

<div class="meta">

<span>MARCH 12, 2026</span>

<span>WYNONA VENTURA | SCIRE</span>

</div>

<img src="/images/freshie.png">

<p>
Batch 16 of Pasig City Science High School showcased their exceptional
skills and inventions during the Capstone Defense held on March 4–5,
2026.
</p>

<p>
Students presented innovative research solutions addressing real-world
STEM problems.
</p>

<p>
Panelists evaluated the projects across different categories including
Physical Science, Data Science, Robotics, and Intelligent Machines.
</p>

</div>




<div class="recommend">

<h2>YOU MIGHT ALSO LIKE</h2>

<button class="arrow left" on:click={prev}>‹</button>

<div class="slider">

{#each related.slice(relatedIndex,relatedIndex+3) as r}

<div class="recCard">

<img src="/images/freshie.png">

<small>March 12, 2026</small>

<h4>{r.title}</h4>

<p>
FreshieCon 2025 was held at Pasig City Science High School gathering
newly admitted Pascians.
</p>

</div>

{/each}

</div>

<button class="arrow right" on:click={next}>›</button>

</div>




<div class="author">

<img src="/images/freshie.png">

<div>

<h3><b>WYNONA VENTURA</b></h3>

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat
mauris non consectetur auctor.
</p>

<a>More from Wynona Ventura</a>

</div>

</div>

</section>

{/if}