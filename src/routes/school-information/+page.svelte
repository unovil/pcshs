<script>
	import { concentricBlueThree, concentricYellowFullFadeRight, concentricYellowSemiFadeLeft } from "$lib/assets/abstract";
	import { schoolTrees, schoolYellow } from "$lib/assets/images";
	import { pcshs } from "$lib/assets/logos";
	import PageHeader from "$lib/components/page-header.svelte";
</script>

<PageHeader title="About the School" />

<div class="p-20 flex flex-row align-top gap-20 w-full relative">
  <div class="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
    <img src={concentricYellowFullFadeRight} alt="Abstract Yellow" class="absolute bottom-0 left-0 -translate-y-1/5 translate-x-1/10">
    <img src={schoolTrees} alt="School" class="absolute bottom-0 left-0 w-140 -translate-x-11/60 translate-y-5/12">
  </div>
  <strong class="text-7xl font-heading text-school-blue font-bold uppercase flex-1/4">History</strong>
  <div class="font-body leading-relaxed text-justify flex flex-col gap-6 flex-3/4">
    <p>With the support and determination of former Mayor Soledad C. Eusebio, Hon. Mayor Vicente P. Eusebio, and a member of the City Council, the school was founded on October 7, 2004, by virtue of City Ordinance No. 28, series 2004. It was named Pasig City Science High School.</p>
    <p>The school formally opened in School Year 2005-2006 using temporarily the fifth, sixth, and seventh floors of the Pamantasan ng Lungsod ng Pasig building. Mr. Noel A. Salalima became its first principal. Ms. Edna H. Negru and Ms. Mila I. Jose were appointed as the Head Teachers together with the first batch of faculty composed of nineteen (19) competent special science teachers. Four (4) support staff aided the administrators.</p>
    <p>In January of 2014, Chief Education Program Supervisor Mrs. Ligaya Insigne took over the school as OIC-Principal, bringing with her the mandate from the Office of the Mayor to hone the future leaders and young scientists. In June of 2014, the reign of Pasig City Science High School was under the stewardship of Mr. Jay Mathias A. Arellano.</p>
    <p>Pasig City Science High School continued its legacy under the strong leadership of Mr. Charlie O. Fababaer. In his leadership, the school was brought back to its glorious days when students started bagging different local and international awards in different fields most especially in Science, Mathematics, Journalism, Research, and many more. Mr. Fababaer has been very supportive with all school's endeavors as it fulfills its mission and vision— to fully develop well-rounded, nurturing, and excellent students who are globally competitive and responsive to the ever-changing needs of the time in the field of Science and Technology.</p>
    <p>Currently, the school is under the new leadership of Mrs. Liza C. Caigoy, a school principal appointment by SDO Pasig SDS, Mrs. Sheryl T. Gayola. Her leadership upholds integrity, fosters a culture of respect, and ensures a conducive learning environment. Shaping a positive atmosphere for both students and employees, maintaining a healthy and productive school environment is on top of her priorities. Mrs. Caigoy serves the school community by guiding and mentoring students towards academic, social, and emotional growth.</p>
  </div>
</div>

<div class="p-20 bg-school-indigo grid grid-cols-2 gap-x-20 gap-y-3 items-center text-center text-white text-balanced">
  <h1 class="text-5xl font-bold font-heading">MISSION</h1>
  <h1 class="text-5xl font-bold font-heading">VISION</h1>
  <p class="font-body px-14">
    PCSHS' mission is to fully develop well-rounded, Science and Technology-oriented students, nurturing and gender-sensitive persons, and future leaders with a vision for excellence.
  </p>
  <p class="font-body px-14">
    PCSHS is envisioned to be a world-class institution that is globally and locally competitive and responsive to the ever-changing needs of the times, especially in the fields of Science and Technology.
  </p>
</div>

<div class="bg-school-blue flex flex-col items-center py-20 gap-10 overflow-hidden">
  <div class="flex flex-col gap-1 items-center text-center w-1/3">

    <div class="relative flex justify-center">
      <img src={concentricBlueThree} alt="Abstract Blue" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-118 max-w-none pointer-events-none select-none">  
      <img src={pcshs} alt="PCSHS Logo" class="relative w-90 pb-3">
    </div>

    <span class="relative text-2xl text-white font-body uppercase">The</span>
    <h1 class="relative text-6xl text-school-blue font-heading font-bold bg-white p-4 uppercase">School Seal</h1>
  </div>
  <div class="relative w-2/3 text-white text-lg font-body text-center gap-7 flex flex-col text-balance">
    <p>The <b>round shape</b> of the official logo of <b>Pasig City Science High School</b> represents the school's strong commitment to the complete and well-rounded development of its students. The school aims to touch the hearts, teach the minds, and train the hands of students who are interested in science, mathematics, and technology so they can become future leaders who will help improve their city and country.</p>
    <p>The torch with a flame at the center symbolizes the strong passion of the administrators, teachers, and students for knowledge and wisdom. It shows their dedication to lifelong learning and their effort to share new ideas and updated knowledge with future generations. The torch also represents the high quality of education the school provides.</p>
    <p>The open book represents the book of knowledge. It is open to show that knowledge should always be learned, reviewed, and shared by everyone who wants to grow and learn.</p>
    <p>The sun on the left side of the book represents the school's vision, mission, and highest goals. Its eight rays symbolize the different groups that work together to support the school, including the Department of Education, the Mayor's Office, City Council, school administration, teachers, staff, the school governing council, and the Parents-Teachers Association. These groups cooperate to provide the best education for the students.</p>
    <p>The star on the right side of the book represents excellence. It symbolizes the high quality of the school's curriculum, services, staff, and facilities. It also reflects the outstanding qualities of the school's administrators, teachers, and staff who help develop students into capable leaders.</p>
  </div>
</div>

<!-- <div class="bg-linear-to-r from-school-yellow/50 to-transparent to-40% flex flex-row items-center p-30 text-school-blue relative overflow-hidden"> -->
<div class="bg-white flex flex-row items-center p-30 text-school-blue relative overflow-hidden">
  <div class="absolute inset-0 z-0 pointer-events-none select-none">
    <img src={schoolYellow} alt="School" class="absolute h-full scale-110 -translate-x-1/5 mask-r-from-50%">
    <img
      src={concentricYellowSemiFadeLeft}
      alt="Abstract Yellow"
      class="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
  </div>

  <div class="relative z-10 w-2/3 flex flex-col items-end">
    <div>
      <h1 class="text-7xl font-bold font-heading uppercase mb-2">School Hymn</h1>
  
      <div class="text-lg/6 font-body">
        <p>Composer: Mr. Noel A. Salalima</p>
        <p>Music: Mr. Eric Elvi R. Bagamasbad</p>
      </div>
    </div>
  </div>

  <p class="w-1/3 text-end font-body">
    Pasig City Science High School, <br>
    Hail to you our dearest school. <br>
    Our second home, our inspiration, <br>
    We dearly love with devotion. <br>
    Hail to you our dear alma mater, <br>
    We praise and honor you. <br>
    With voices loud and clear, <br>
    We sing out your name. <br>
    Going onwards, Moving forward <br>
    Great and Beloved, PCSHS.
  </p>
</div>