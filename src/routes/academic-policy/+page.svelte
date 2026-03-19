<script>
	import { concentricBlueSemiFadeRight, concentricWhiteSemiFadeUp, concentricYellowSemiFadeLeft } from "$lib/assets/abstract";
	import PageHeader from "$lib/components/page-header.svelte";
	import { juniorHighGradingSystem, seniorHighGradingSystem } from "./grading";

</script>

<PageHeader title="Academic Policy" />

<div class="p-15 flex flex-row gap-15 relative overflow-hidden">

	<img src={concentricYellowSemiFadeLeft} alt="Abstract Yellow" class="absolute bottom-0 right-0 pointer-events-none cursor-none translate-x-1/3 translate-y-5/12 scale-175">

	<div class="flex flex-col gap-3 w-1/3 text-justify">
		<h1 class="uppercase font-heading font-bold text-5xl mb-4 text-school-blue">Grading System</h1>
		<p>The school follows the Policy Guidelines on Classroom Assessment for the K to 12 Basic Education Program including the recent issuances in light of the Basic Education Learning Continuity Plan of DepEd (DO 12, s. 2020).</p>
		<p>There are four grading periods. The numerical system of grading is used and grades are expressed in multiples of one (I). The averaging system for secondary schools shall be used and the passing mark in any given subject is 75%. The lowest grade is 70 and the highest grade is 100. Promotion will be by subject only. The general final average will be used as a basis for promotion.</p>
		<p>Grades are based on the result of summative evaluation of performance, the result of the graded assessments which include written works such as quizzes, long tests, seatwork, assignments, and performance tasks.</p>
		<p>Here is the weight distribution of the summative assessment components per learning area for Grade 7 to Grade 10 and for Grade 11 to Grade 12:</p>
	</div>
	<div class="w-2/3 flex flex-col gap-3">
		<table class="w-full table-fixed border-separate border-spacing-y-3">
			<thead>
				<tr>
					<th rowspan="2" class="text-left border-b-2 border-t-2 border-gray-800">Subject</th>
					<th colspan="3" class="border-t-2 border-gray-800">Weights of Assessment Components</th>
				</tr>
				<tr>
					<th class="border-b-2 border-gray-800">Written Works</th>
					<th class="border-b-2 border-gray-800">Performance Tasks</th>
					<th class="border-b-2 border-gray-800">Quarterly Assessment</th>
				</tr>
			</thead>
			<tbody class="text-base/tight">
				{#each juniorHighGradingSystem as grading (grading.subject)}
					<tr>
						<td>{grading.subject}</td>
						<td class="text-center">{grading.weights.written}%</td>
						<td class="text-center">{grading.weights.performance}%</td>
						<td class="text-center">{grading.weights.assessment}%</td>
					</tr>
				{/each}
			</tbody>
			<tfoot>
				<tr>
					<td colspan="4" class="text-center italic text-xs text-gray-600 border-t-2 border-gray-800 pt-1">Weight Distribution of the Summative Assessment Components per Learning Area for Grade 7 to Grade 10</td>
				</tr>
			</tfoot>
		</table>

		<table class="w-full table-fixed border-separate border-spacing-y-3">
			<thead>
				<tr>
					<th rowspan="2" class="text-left border-b-2 border-t-2 border-gray-800">Subject</th>
					<th colspan="3" class="border-t-2 border-gray-800">Weights of Assessment Components</th>
				</tr>
				<tr>
					<th class="border-b-2 border-gray-800">Written Works</th>
					<th class="border-b-2 border-gray-800">Performance Tasks</th>
					<th class="border-b-2 border-gray-800">Quarterly Assessment</th>
				</tr>
			</thead>
			<tbody class="text-base/tight">
				{#each seniorHighGradingSystem as grading (grading.subject)}
					<tr>
						<td>{grading.subject}</td>
						<td class="text-center">{grading.weights.written}%</td>
						<td class="text-center">{grading.weights.performance}%</td>
						<td class="text-center">{grading.weights.assessment}%</td>
					</tr>
				{/each}
			</tbody>
			<tfoot>
				<tr>
					<td colspan="4" class="text-center italic text-xs text-gray-600 border-t-2 border-gray-800 pt-1">Weight Distribution of the Summative Assessment Components per Learning Area for Grade 11 to Grade 12</td>
				</tr>
			</tfoot>
		</table>
	</div>
</div>

<div class="bg-school-blue relative p-15 text-white flex flex-row gap-20 overflow-hidden">
	<img src={concentricWhiteSemiFadeUp} alt="Abstract White" class="absolute pointer-events-none cursor-none left-0 top-1/2 -translate-x-1/2 -translate-y-5/12">

	<div class="flex flex-col gap-3 text-justify flex-1/2">
		<h1 class="uppercase font-bold font-heading text-5xl">Student Retention Policy</h1>
		<p>As per Sangguniang Panlunsod, Ordinance No. 28, Series of 2004, Pasig City Science High School is mandated to provide a more intensive and advanced secondary education program with emphasis on Science, Mathematics and Communication Arts and in order to safeguard the quality of education and of the graduates of this school, a Student Retention Policy is implemented for strict compliance. Hence, a minimum final grade requirement is observed.</p>
	</div>
	
	<div class="flex flex-col gap-8 text-justify flex-1/2">
		<div>
			<h2 class="text-2xl uppercase">Minimum Grade Requirement</h2>
			<p>A <b>General Weighted Average of 85%</b> with no final grade below 80% in any subject, is the minimum grade requirement for students to be retained for the succeeding school year.</p>
		</div>
		<div>
			<h2 class="text-2xl uppercase">Regular Student</h2>
			<p>Any student who has satisfactorily met the minimum grade as stated above is considered a student of Regular Status and is automatically qualified for re-admission.</p>
		</div>
	</div>
</div>

<div class="flex flex-col gap-20 bg-school-indigo text-white relative overflow-hidden p-15">
	<div class="absolute inset-0 pointer-events-none cursor-none">
		<img src={concentricBlueSemiFadeRight} alt="Abstract Blue" class="absolute right-0 top-0 translate-x-1/3 -translate-y-1/2 rotate-215">
		<img src={concentricBlueSemiFadeRight} alt="Abstract Blue" class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3">
	</div>

	<div class="relative self-baseline w-2/3">
		<h1 class="uppercase text-5xl font-heading mb-2">Student on Probation</h1>
		<div class="flex flex-col gap-3 text-balance">
			<p>Any student who is not on probation and has no final grade below 80% but whose general weighted average is below 85% (rounded-off) will be enrolled on probation.</p>
			<p>Any student who is not on probation and whose general weighted average is at least 85% but with a grade below 80% in just only one subject will be enrolled on probation.</p>
			<p>A student who will be readmitted on probation in the next level for JHS and next semester for SHS will sign a Contract of Agreement together with their parents for a grade compliance requirement during card distribution.</p>
			<p>A student on probation must meet the grade requirement of a student on a Regular Status in all subject areas to regain his/her status as a regular student. Otherwise, he/she loses the qualification for readmission.</p>
			<p>A student on probation must attend the scheduled quarterly individual/group coaching sessions.</p>
		</div>
	</div>

	<div class="relative self-end text-end w-2/3">
		<h1 class="uppercase text-5xl font-heading mb-2">Student Not Qualified for Readmission</h1>
		<div class="flex flex-col gap-3 text-balance">
			<p>Any student who has received a final grade below 80% in at least two (2) subjects.</p>
			<p>Any student who has received a final failing grade in any subject.</p>
			<p>Any student who is enrolled on a probationary status and who is not able to regain his/her qualification for a regular student at the end of the school year.</p>
			<p class="italic">Note: Conditions mentioned above are applied per semester for SHS students.</p>
		</div>
	</div>
</div>

<div class="relative flex flex-row px-15 py-20 overflow-hidden">
	<img src={concentricBlueSemiFadeRight} alt="Abstract Blue" class="absolute pointer-events-none cursor-none rotate-215 h-[130%] left-0 top-1/2 -translate-x-1/3 -translate-y-1/2">
	<div class="relative ml-auto w-7/12 flex flex-col gap-5 text-justify">
		<h1 class="uppercase text-5xl font-heading font-bold mb-2 text-school-blue">Student Awards</h1>
		<p>The awards committee is created, and its membership is appointed by the Principal. The committee takes into consideration all aspects of the nominees/candidates for honors and other awards in accordance with existing criteria. Criteria may be revised, however, to consider the needs of the moment. Central to the award is the character of the awardees. Students with grades below 80 in any subject in any quarter are disqualified for honor and other awards for the entire school year where it is applicable. The decision of the awards committee is final.</p>
		<p class="italic">All candidates for honors must be of good moral character and have not been subjected to any disciplinary actions within the current School Year (Enclosure to DepEd Order No. 74, s. 2012).....the awards also aim to nurture the formation of the learners' values and attitudes anchored on the core values of the Department of Education (Enclosure to DepEd Order No. 36, s. 2016).</p>
		<ul class="list-disc list-inside">
			<li>For Graduating Students
				<ul class="list-[circle] list-inside ml-7">
					<li>Government and Non-Government Award</li>
					<li>Excellence Awards (Academic, Leadership & Service)</li>
					<li>Academic Special Awards (Major/Minor)</li>
				</ul>
			</li>
			<li>For Non-graduating Students
				<ul class="list-[circle] list-inside ml-7">
					<li>Academic Excellence Awards</li>
				</ul>
			</li>
		</ul>
	</div>
</div>