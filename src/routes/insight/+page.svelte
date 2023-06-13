<script>
	import aboutPicture from '$lib/assets/profile-3.jpg'
	import { educations } from '$lib/data/data'
</script>
<svelte:head>
	<title>Portofolio | About</title>
</svelte:head>
<div class="sm:px-8 mt-16 sm:mt-18">
	<div class="mx-auto max-w-7xl lg:px-8">
		<div class="relative px-4 sm:px-8 lg:px-12">
			<div class="mx-auto max-w-2xl lg:max-w-5xl">
				<div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
					<div class="lg:pl-20">
						<div class="max-w-xs px-2.5 lg:max-w-none">
							<img
								alt=""
								loading="lazy"
								width="800"
								height="800"
								decoding="async"
								data-nimg="1"
								class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
								sizes="(min-width: 1024px) 32rem, 20rem"
								src={aboutPicture}
								style="color: transparent;"
							/>
						</div>
					</div>
					<div class="lg:order-first lg:row-span-2">
						<h1
							class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
						>
							I’m Irfan Ramadhan. Enthusiast Backend Developer.
						</h1>
						<div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
							<p>
								With an extensive skill set in programming, I possess a diverse range of technical abilities that allow me to navigate through the intricacies of software development. From backend development, where I architect the core functionality of applications, to fullstack development, where I can seamlessly bridge the gap between the server and the user interface, I am well-versed in multiple layers of the development stack.
							</p>
							<p>
								What truly sets me apart is my unwavering passion for programming. It goes beyond the lines of code and extends into a genuine curiosity and excitement for the craft. I am constantly seeking out new challenges and opportunities to push the boundaries of what can be achieved through programming. The thrill of solving complex problems, optimizing performance, and creating elegant and efficient solutions is what drives me forward.
							</p>
							<p>
								I believe that programming is not just about writing code; it is about finding innovative ways to leverage technology to improve people's lives. It's about transforming ideas into tangible digital experiences that make a meaningful impact. Whether it's developing a user-friendly e-commerce platform, designing a robust database system, or implementing cutting-edge technologies like machine learning, my passion lies in crafting solutions that are both functional and delightful.
							</p>
							<p>
								To stay at the forefront of the ever-evolving programming landscape, I am committed to continuous learning and self-improvement. I actively explore new frameworks, programming languages, and tools, embracing them as opportunities to enhance my skills and expand my knowledge. This dedication to growth enables me to adapt quickly to emerging trends and deliver solutions that are not only current but also future-proof.
							</p>
							<p>
								In summary, I am a skilled and passionate programmer who thrives on the challenges of software development. With a deep-rooted curiosity and a commitment to continuous improvement, I strive to create exceptional digital experiences that leave a lasting impression on users and drive positive change in the world.
							</p>
							<p>
								In addition, it's worth mentioning that as a driven and ambitious individual, I am currently pursuing my college education, further honing my programming skills and knowledge in the field of information systems. Being a college student allows me to combine theoretical learning with practical application, ensuring that I stay up-to-date with the latest industry trends and best practices in programming.
							</p>
						</div>
					</div>
					<div class="lg:pl-20">
						<div class="rounded-2xl border border-zinc-100 dark:border-zinc-700/40 p-6 mt-8">
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
						
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- <div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
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
											<img
												alt=""
												loading="lazy"
												width="32"
												height="32"
												decoding="async"
												data-nimg="1"
												class="h-7 w-7"
												src=""
												style="color: transparent;"
											/>
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
						</div> -->

