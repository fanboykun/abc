<script>
	import { projects, educations, skills } from "$lib/data/data.js";
</script>

<div class="sm:px-8 mt-16 md:mt-16">
	<div class="mx-auto max-w-7xl lg:px-8">
		<div class="relative px-4 sm:px-8 lg:px-12">
			<div class="mx-auto max-w-2xl lg:max-w-5xl">
				<header class="max-w-2xl pb-8">
					<h1 class="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
						Projects
					</h1>
				</header>
				<div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">

					<div class="flex flex-col gap-16">
						{#each projects as project, index (project.id)}
						<article class="group relative flex flex-col items-start">
							<h2
								class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
							>
								<div
									class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
								/>
								{#if project.link != ""}
								<a href="{project.link}"
									><span
										class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
									/><span class="relative z-10"
										>{project.about}</span
									></a
								>
								{:else}
								<span
									class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
								/><span class="relative z-10"
									>{project.about}</span
								>
								{/if}
							</h2>
							<span class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
								<span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
									<span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" /></span>
									{project.type}
							</span>
							<p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
								{project.description}
							</p>
							<div
								aria-hidden="true"
								class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
							>
							{#if project.link != ''}
								
							View on github<svg
								viewBox="0 0 16 16"
								fill="none"
								aria-hidden="true"
								class="ml-1 h-4 w-4 stroke-current"
								><path
									d="M6.75 5.75 9.25 8l-2.5 2.25"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/></svg
							>
							{:else}
								Not available <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1 w-4 h-4">
									<path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
								</svg>				  
							{/if}
							</div>
						</article>
						{/each}
					</div>

					<div class="space-y-10 lg:pl-16 xl:pl-24">

						<div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
							<h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"
									class="h-6 w-6 flex-none"
									><path
										d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
										class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
									/><path
										d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
										class="stroke-zinc-400 dark:stroke-zinc-500"
									/></svg
								><span class="ml-3">Skils</span>
							</h2>
							<ol class="mt-6 space-y-4">
								{#each skills as skill, index (skill.id)}
									<li class="flex gap-4">
										<div
											class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
										>
											<!-- <img
												alt=""
												loading="lazy"
												width="32"
												height="32"
												decoding="async"
												data-nimg="1"
												class="h-7 w-7"
												src=""
												style="color: transparent;"
											/> -->
										</div>
										<dl class="flex flex-auto flex-wrap gap-x-2">
											<dt class="sr-only">Tech</dt>
											<dd
												class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"
											>
												{skill.name}
											</dd>
											<dt class="sr-only">Level</dt>
											<dd class="text-xs text-zinc-500 dark:text-zinc-400">{skill.level}</dd>
											<dt class="sr-only">Date</dt>
											<dd
												class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
												aria-label="2019 until Present"
											>
											 <span aria-hidden="true">Up to Date</span>
											</dd>
										</dl>
									</li>
								{/each}

							</ol>
							<a
								class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
								href="/#"
								>Download CV<svg
									viewBox="0 0 16 16"
									fill="none"
									aria-hidden="true"
									class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
									><path
										d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/></svg
								></a
							>
						</div>

						<div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
							<h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"
									class="h-6 w-6 flex-none"
									><path
										d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
										class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
									/><path
										d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
										class="stroke-zinc-400 dark:stroke-zinc-500"
									/></svg
								><span class="ml-3">Educations</span>
							</h2>
							<ol class="mt-6 space-y-4">
								{#each educations as education, index (education.id)}
									<li class="flex gap-4">
										<dl class="flex flex-auto flex-wrap gap-x-2">
											<dt class="sr-only">{education.name}</dt>
											<dd
												class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"
											>
											{education.place}
												<!-- STMIK Triguna Dharma -->
											</dd>
											<dt class="sr-only">Major</dt>
											<dd class="text-xs text-zinc-500 dark:text-zinc-400">{education.description}</dd>
											<dt class="sr-only">Date</dt>
											<dd
												class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
												aria-label="2019 until Present"
											>
												<time datetime="{education.start_date}">{education.start_date}</time> <span aria-hidden="true">—</span>
												<time datetime="{education.end_date}">{education.end_date}</time>
											</dd>
										</dl>
									</li>
								{/each}

								<!-- <li class="flex gap-4">
									<dl class="flex flex-auto flex-wrap gap-x-2">
										<dt class="sr-only">Senior Highschool</dt>
										<dd
											class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"
										>
											SMK Nur Azizi
										</dd>
										<dt class="sr-only">Major</dt>
										<dd class="text-xs text-zinc-500 dark:text-zinc-400">Vocational High School Accounting Department</dd>
										<dt class="sr-only">Date</dt>
										<dd
											class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
											aria-label="2014 until 2019"
										>
											<time datetime="2015">2015</time> <span aria-hidden="true">—</span>
											<time datetime="2018">2018</time>
										</dd>
									</dl>
								</li> -->
							</ol>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</div>